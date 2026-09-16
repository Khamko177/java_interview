/**
 * Quiz Application Logic for 50 Java Interview Questions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 5,
    currentFilter: 'ALL',
    userAnswers: {}, // { [questionId]: 'A' | 'B' | 'C' | 'D' }
    startTime: Date.now(),
    timerInterval: null,
    isSubmitted: false
  };

  // Helper to get filtered question list
  function getFilteredQuestions() {
    if (state.currentFilter === 'ALL') return quizData;
    if (state.currentFilter === 'HARD') return quizData.filter(q => q.isHard);
    return quizData.filter(q => q.category === state.currentFilter);
  }

  // DOM Elements
  const questionsContainer = document.getElementById('questionsContainer');
  const paletteGrid = document.getElementById('paletteGrid');
  const pageIndicator = document.getElementById('pageIndicator');
  const btnPrevPage = document.getElementById('btnPrevPage');
  const btnNextPage = document.getElementById('btnNextPage');
  const answeredCounter = document.getElementById('answeredCounter');
  const progressBar = document.getElementById('progressBar');
  const timerDisplay = document.getElementById('timerDisplay');
  const btnSubmitTest = document.getElementById('btnSubmitTest');
  
  // Modal Elements
  const confirmModal = document.getElementById('confirmModal');
  const modalMessage = document.getElementById('modalMessage');
  const btnCancelSubmit = document.getElementById('btnCancelSubmit');
  const btnConfirmSubmit = document.getElementById('btnConfirmSubmit');

  // Results Screen Elements
  const quizScreen = document.getElementById('quizScreen');
  const resultsScreen = document.getElementById('resultsScreen');
  const resultCandidateName = document.getElementById('resultCandidateName');
  const resultCandidateEmail = document.getElementById('resultCandidateEmail');
  const resultTimeTaken = document.getElementById('resultTimeTaken');
  const scoreRatioDisplay = document.getElementById('scoreRatioDisplay');
  const scorePercentDisplay = document.getElementById('scorePercentDisplay');
  const scoreRankDisplay = document.getElementById('scoreRankDisplay');
  const breakdownGrid = document.getElementById('breakdownGrid');
  const reviewContainer = document.getElementById('reviewContainer');
  const btnRetakeTest = document.getElementById('btnRetakeTest');

  const candidateNameInput = document.getElementById('candidateName');
  const candidateEmailInput = document.getElementById('candidateEmail');

  // Initialize
  initApp();

  function initApp() {
    startTimer();
    renderPalette();
    renderPage(1);
    bindEvents();
  }

  // Timer
  function startTimer() {
    state.startTime = Date.now();
    state.timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
      const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
      const seconds = String(elapsed % 60).padStart(2, '0');
      timerDisplay.textContent = `${minutes}:${seconds}`;
    }, 1000);
  }

  // Format inline backticks helper
  function formatMarkdownText(text) {
    if (!text) return '';
    // Escape HTML
    let safe = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    // Convert `code` to <span class="inline-code">code</span>
    safe = safe.replace(/`([^`]+)`/g, '<span class="inline-code">$1</span>');
    return safe;
  }

  // Escape raw HTML helper
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Render Palette in Sidebar
  function renderPalette() {
    paletteGrid.innerHTML = '';
    quizData.forEach(q => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'palette-btn';
      btn.id = `palette-btn-${q.id}`;
      btn.textContent = q.id;
      
      btn.addEventListener('click', () => {
        let list = getFilteredQuestions();
        let qIndex = list.findIndex(item => item.id === q.id);
        
        // Nếu câu hỏi không nằm trong bộ lọc hiện tại, tự động chuyển về ALL
        if (qIndex === -1) {
          state.currentFilter = 'ALL';
          document.querySelectorAll('.filter-pill').forEach(p => {
            p.classList.toggle('active', p.getAttribute('data-filter') === 'ALL');
          });
          list = getFilteredQuestions();
          qIndex = list.findIndex(item => item.id === q.id);
        }

        const targetPage = Math.floor(qIndex / state.itemsPerPage) + 1;
        if (state.currentPage !== targetPage) {
          renderPage(targetPage);
        }
        setTimeout(() => {
          const el = document.getElementById(`q-card-${q.id}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.style.outline = '2px solid var(--primary)';
            setTimeout(() => { el.style.outline = 'none'; }, 1500);
          }
        }, 100);
      });

      paletteGrid.appendChild(btn);
    });
    updatePaletteStatus();
  }

  // Update Palette styling based on answer state & current page & filter
  function updatePaletteStatus() {
    const list = getFilteredQuestions();
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = Math.min(startIndex + state.itemsPerPage, list.length);
    const currentVisibleIds = new Set(list.slice(startIndex, endIndex).map(q => q.id));
    const filteredIds = new Set(list.map(q => q.id));

    quizData.forEach(q => {
      const btn = document.getElementById(`palette-btn-${q.id}`);
      if (!btn) return;

      const isAnswered = state.userAnswers[q.id] !== undefined;
      const isCurrent = currentVisibleIds.has(q.id);
      const isInFilter = filteredIds.has(q.id);

      btn.classList.toggle('answered', isAnswered);
      btn.classList.toggle('current-page', isCurrent);
      btn.classList.toggle('dimmed', !isInFilter);
    });

    const answeredTotal = Object.keys(state.userAnswers).length;
    answeredCounter.textContent = `${answeredTotal} / ${quizData.length}`;
    
    // Progress strip
    const percent = (answeredTotal / quizData.length) * 100;
    progressBar.style.width = `${percent}%`;
  }

  // Render Specific Page of Questions according to active filter
  function renderPage(pageNumber) {
    const list = getFilteredQuestions();
    state.totalPages = Math.max(1, Math.ceil(list.length / state.itemsPerPage));
    state.currentPage = Math.min(pageNumber, state.totalPages);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = Math.min(startIndex + state.itemsPerPage, list.length);
    const questionsToShow = list.slice(startIndex, endIndex);

    questionsContainer.innerHTML = '';

    if (questionsToShow.length === 0) {
      questionsContainer.innerHTML = `
        <div class="question-card" style="text-align: center; padding: 40px;">
          <p style="color: var(--text-muted); font-size: 1.1rem;">Không có câu hỏi nào trong danh mục này.</p>
        </div>
      `;
    }

    questionsToShow.forEach(q => {
      const card = document.createElement('div');
      card.className = 'question-card';
      card.id = `q-card-${q.id}`;

      // Category Tag class
      let catClass = 'tag-logic';
      if (q.category === 'OOP') catClass = 'tag-oop';
      else if (q.category === 'Programming') catClass = 'tag-programming';
      else if (q.category === 'Java') catClass = 'tag-java';

      const hardBadge = q.isHard 
        ? `<span class="badge-hard">⭐ Câu khó</span>` 
        : '';

      // Code Block HTML
      let codeHtml = '';
      if (q.codeSnippet) {
        codeHtml = `
          <div class="code-block">
            <code>${escapeHtml(q.codeSnippet)}</code>
          </div>
        `;
      }

      // After Code Text
      let afterTextHtml = '';
      if (q.questionAfter) {
        afterTextHtml = `<div class="question-body" style="margin-top: 10px;">${formatMarkdownText(q.questionAfter)}</div>`;
      }

      // Options
      let optionsHtml = '<div class="options-grid">';
      q.options.forEach(opt => {
        const isSelected = state.userAnswers[q.id] === opt.key;
        optionsHtml += `
          <label class="option-item ${isSelected ? 'selected' : ''}" data-qid="${q.id}" data-key="${opt.key}">
            <input type="radio" name="question_${q.id}" value="${opt.key}" ${isSelected ? 'checked' : ''}>
            <span class="option-key">${opt.key}</span>
            <span class="option-text">${formatMarkdownText(opt.text)}</span>
          </label>
        `;
      });
      optionsHtml += '</div>';

      card.innerHTML = `
        <div class="question-header">
          <div class="question-number">
            <span>Câu ${q.id}.</span>
            <span class="badge-tag ${catClass}">[${q.code}] ${q.categoryName}</span>
          </div>
          <div>${hardBadge}</div>
        </div>
        <div class="question-body">${formatMarkdownText(q.question)}</div>
        ${codeHtml}
        ${afterTextHtml}
        ${optionsHtml}
      `;

      questionsContainer.appendChild(card);
    });

    // Option Click Handlers
    document.querySelectorAll('.option-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const qid = parseInt(item.getAttribute('data-qid'), 10);
        const key = item.getAttribute('data-key');
        
        state.userAnswers[qid] = key;

        // Visual update on page
        const parentCard = item.closest('.question-card');
        parentCard.querySelectorAll('.option-item').forEach(optEl => {
          optEl.classList.remove('selected');
        });
        item.classList.add('selected');

        // Update radio input
        const radio = item.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;

        updatePaletteStatus();
      });
    });

    // Update Pagination bar
    const startNum = list.length === 0 ? 0 : startIndex + 1;
    const endNum = endIndex;
    
    const filterLabels = {
      ALL: '',
      OOP: ' [OOP - Hướng đối tượng]',
      Logic: ' [Tư duy Logic]',
      Programming: ' [Kỹ năng Lập trình]',
      Java: ' [Java Core]',
      HARD: ' [⭐ Câu hỏi khó]'
    };
    const catLabel = filterLabels[state.currentFilter] || '';
    pageIndicator.textContent = `Trang ${state.currentPage} / ${state.totalPages}${catLabel} (${list.length} câu - Hiển thị ${startNum} đến ${endNum})`;
    btnPrevPage.disabled = (state.currentPage <= 1);
    btnNextPage.disabled = (state.currentPage >= state.totalPages);

    updatePaletteStatus();
  }

  // Navigation events
  function bindEvents() {
    // Category Filter Pills Click
    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.currentFilter = pill.getAttribute('data-filter');
        renderPage(1);
      });
    });

    btnPrevPage.addEventListener('click', () => {
      if (state.currentPage > 1) {
        renderPage(state.currentPage - 1);
      }
    });

    btnNextPage.addEventListener('click', () => {
      if (state.currentPage < state.totalPages) {
        renderPage(state.currentPage + 1);
      }
    });

    btnSubmitTest.addEventListener('click', () => {
      const answeredCount = Object.keys(state.userAnswers).length;
      const unanswered = quizData.length - answeredCount;

      if (unanswered > 0) {
        modalMessage.textContent = `Bạn đã làm ${answeredCount} / 50 câu. Hiện còn ${unanswered} câu chưa được chọn đáp án. Bạn có chắc chắn muốn nộp bài ngay bây giờ?`;
      } else {
        modalMessage.textContent = `Bạn đã hoàn thành đủ cả 50 / 50 câu hỏi. Bạn có chắc chắn muốn nộp bài để xem bảng điểm và phân tích năng lực chi tiết?`;
      }

      confirmModal.classList.add('active');
    });

    btnCancelSubmit.addEventListener('click', () => {
      confirmModal.classList.remove('active');
    });

    btnConfirmSubmit.addEventListener('click', () => {
      confirmModal.classList.remove('active');
      handleSubmit();
    });

    btnRetakeTest.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn làm lại bài thi từ đầu? Tất cả các câu trả lời sẽ được đặt lại.')) {
        state.userAnswers = {};
        state.isSubmitted = false;
        resultsScreen.style.display = 'none';
        quizScreen.style.display = 'grid';
        startTimer();
        renderPage(1);
      }
    });
  }

  // Handle Submit & Score Calculation
  function handleSubmit() {
    state.isSubmitted = true;
    clearInterval(state.timerInterval);

    // Calculate score details
    let totalCorrect = 0;
    const categoryStats = {
      Logic: { name: 'Tư duy Logic', total: 15, correct: 0 },
      Programming: { name: 'Kỹ năng Lập trình', total: 10, correct: 0 },
      OOP: { name: 'Lập trình Hướng đối tượng', total: 15, correct: 0 },
      Java: { name: 'Java Core', total: 10, correct: 0 },
      Hard: { name: 'Những câu hỏi khó', total: 6, correct: 0 }
    };

    quizData.forEach(q => {
      const userChoice = state.userAnswers[q.id];
      const isCorrect = (userChoice === q.correctAnswer);

      if (isCorrect) {
        totalCorrect++;
        if (categoryStats[q.category]) {
          categoryStats[q.category].correct++;
        }
        if (q.isHard) {
          categoryStats.Hard.correct++;
        }
      }
    });

    const percent = ((totalCorrect / quizData.length) * 100).toFixed(2);

    // Rank evaluation
    let rank = 'Trung bình';
    if (percent >= 85) rank = 'Xuất sắc';
    else if (percent >= 75) rank = 'Khá giỏi';
    else if (percent >= 65) rank = 'Khá';
    else if (percent >= 55) rank = 'Trung bình khá';

    // Update Hero UI
    const cName = candidateNameInput.value.trim() || 'Ứng viên chưa nhập tên';
    const cEmail = candidateEmailInput.value.trim() || 'Chưa cung cấp email';
    resultCandidateName.textContent = `Kết quả của: ${cName}`;
    resultCandidateEmail.textContent = `Email: ${cEmail}`;
    resultTimeTaken.textContent = `Thời gian làm bài: ${timerDisplay.textContent}`;

    scoreRatioDisplay.textContent = `${totalCorrect} / 50`;
    scorePercentDisplay.textContent = `${percent}%`;
    scoreRankDisplay.textContent = `Xếp loại: ${rank}`;

    // Render Category Breakdown Cards
    breakdownGrid.innerHTML = '';
    const catKeys = ['Logic', 'Programming', 'OOP', 'Java', 'Hard'];
    catKeys.forEach(k => {
      const item = categoryStats[k];
      const catPct = ((item.correct / item.total) * 100).toFixed(1);

      const card = document.createElement('div');
      card.className = 'category-stat-card';
      card.innerHTML = `
        <div class="cat-header">
          <span class="cat-name">${item.name}</span>
          <span style="font-weight: 700; font-size: 0.9rem; color: var(--primary);">${catPct}%</span>
        </div>
        <div class="cat-score">${item.correct} / ${item.total} câu</div>
        <div class="cat-bar-bg">
          <div class="cat-bar-fill" style="width: ${catPct}%;"></div>
        </div>
      `;
      breakdownGrid.appendChild(card);
    });

    // Render Review Section (all 50 questions)
    renderReviewSection();

    // Switch view
    quizScreen.style.display = 'none';
    resultsScreen.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Render Detailed Review of All 50 Questions
  function renderReviewSection() {
    reviewContainer.innerHTML = '';

    quizData.forEach(q => {
      const userChoice = state.userAnswers[q.id];
      const isCorrect = (userChoice === q.correctAnswer);
      const isUnanswered = (userChoice === undefined);

      const item = document.createElement('div');
      item.className = `review-item ${isCorrect ? 'is-correct' : 'is-wrong'}`;

      let statusBadge = '';
      if (isCorrect) {
        statusBadge = `<span class="status-tag status-correct">✓ Chính xác (+1)</span>`;
      } else if (isUnanswered) {
        statusBadge = `<span class="status-tag status-wrong">⚠ Chưa trả lời</span>`;
      } else {
        statusBadge = `<span class="status-tag status-wrong">✕ Sai (Bạn chọn: ${userChoice})</span>`;
      }

      // Code Block
      let codeHtml = '';
      if (q.codeSnippet) {
        codeHtml = `
          <div class="code-block">
            <code>${escapeHtml(q.codeSnippet)}</code>
          </div>
        `;
      }

      let afterHtml = q.questionAfter 
        ? `<div class="question-body" style="margin-top: 10px;">${formatMarkdownText(q.questionAfter)}</div>` 
        : '';

      // Options with correct/wrong highlights
      let optionsHtml = '<div class="review-options">';
      q.options.forEach(opt => {
        let optClass = 'review-opt';
        let marker = '';

        if (opt.key === q.correctAnswer) {
          optClass += ' correct-answer-highlight';
          marker = ' <strong style="color: #059669; margin-left: auto;">[Đáp án đúng]</strong>';
        } else if (opt.key === userChoice && !isCorrect) {
          optClass += ' user-chosen-wrong';
          marker = ' <strong style="color: #dc2626; margin-left: auto;">[Lựa chọn của bạn]</strong>';
        }

        optionsHtml += `
          <div class="${optClass}">
            <span class="option-key">${opt.key}</span>
            <span>${formatMarkdownText(opt.text)}</span>
            ${marker}
          </div>
        `;
      });
      optionsHtml += '</div>';

      item.innerHTML = `
        <div class="review-status-bar">
          <div class="question-number">
            <span>Câu ${q.id}. [${q.code}] ${q.categoryName}</span>
          </div>
          <div>${statusBadge}</div>
        </div>
        <div class="question-body">${formatMarkdownText(q.question)}</div>
        ${codeHtml}
        ${afterHtml}
        ${optionsHtml}
        <div class="explanation-box">
          <div class="explanation-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            Giải thích chi tiết:
          </div>
          <div>${formatMarkdownText(q.explanation)}</div>
        </div>
      `;

      reviewContainer.appendChild(item);
    });
  }
});
