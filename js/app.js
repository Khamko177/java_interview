/**
 * Quiz Application Logic for 50 Java Interview Questions
 * Enhanced with 5 Independent Assessment Sections
 * Trilingual Support (Vietnamese, English, Thai)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    currentPart: 'OOP', // 'OOP' | 'Logic' | 'Programming' | 'Java' | 'HARD' | 'ALL'
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 2,
    currentLang: localStorage.getItem('quiz_lang') || 'vi',
    userAnswers: {}, // { [questionId]: 'A' | 'B' | 'C' | 'D' }
    startTime: Date.now(),
    timerInterval: null,
    isSubmitted: false
  };

  // Helper to translate string with optional parameter replacement
  function t(key, params = {}) {
    const dict = i18n[state.currentLang] || i18n.vi;
    let text = dict[key] || (i18n.vi[key] || (i18n.en[key] || key));
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    }
    return text;
  }

  // Helper to get questions for current selected part
  function getQuestionsForCurrentPart() {
    if (state.currentPart === 'ALL') {
      return quizData;
    }
    if (state.currentPart === 'HARD') {
      return quizData.filter(q => q.isHard);
    }
    return quizData.filter(q => q.category === state.currentPart);
  }

  // Helper to get localized full name of current part
  function getPartName(partKey = state.currentPart) {
    const map = {
      OOP: t('partTitleOOP'),
      Logic: t('partTitleLogic'),
      Programming: t('partTitleProgramming'),
      Java: t('partTitleJava'),
      HARD: t('partTitleHard'),
      ALL: t('partTitleAll')
    };
    return map[partKey] || partKey;
  }

  // Helper to get question content for current language
  function getQContent(q) {
    if (q.translations) {
      return q.translations[state.currentLang] || q.translations.vi || q.translations.en;
    }
    return {
      categoryName: q.categoryName || q.category,
      question: q.question,
      questionAfter: q.questionAfter || '',
      options: q.options,
      explanation: q.explanation
    };
  }

  // DOM Elements
  const questionsContainer = document.getElementById('questionsContainer');
  const paletteGrid = document.getElementById('paletteGrid');
  const paletteTitleText = document.getElementById('paletteTitleText');
  const pageIndicator = document.getElementById('pageIndicator');
  const btnPrevPage = document.getElementById('btnPrevPage');
  const btnNextPage = document.getElementById('btnNextPage');
  const answeredCounter = document.getElementById('answeredCounter');
  const progressBar = document.getElementById('progressBar');
  const timerDisplay = document.getElementById('timerDisplay');
  const btnSubmitTest = document.getElementById('btnSubmitTest');
  const langSelect = document.getElementById('langSelect');
  
  // Part Selector Elements
  const partSelectorLabel = document.getElementById('partSelectorLabel');
  const currentPartBadge = document.getElementById('currentPartBadge');

  // Modal Elements
  const confirmModal = document.getElementById('confirmModal');
  const modalMessage = document.getElementById('modalMessage');
  const btnCancelSubmit = document.getElementById('btnCancelSubmit');
  const btnConfirmSubmit = document.getElementById('btnConfirmSubmit');

  // Results Screen Elements
  const quizScreen = document.getElementById('quizScreen');
  const resultsScreen = document.getElementById('resultsScreen');
  const resultCandidateName = document.getElementById('resultCandidateName');
  const resultPartText = document.getElementById('resultPartText');
  const resultCandidateEmail = document.getElementById('resultCandidateEmail');
  const resultTimeTaken = document.getElementById('resultTimeTaken');
  const scoreRatioDisplay = document.getElementById('scoreRatioDisplay');
  const scorePercentDisplay = document.getElementById('scorePercentDisplay');
  const scoreRankDisplay = document.getElementById('scoreRankDisplay');
  const breakdownTitle = document.getElementById('breakdownTitle');
  const breakdownGrid = document.getElementById('breakdownGrid');
  const reviewTitle = document.getElementById('reviewTitle');
  const reviewContainer = document.getElementById('reviewContainer');
  const btnRetakeTest = document.getElementById('btnRetakeTest');
  const btnChooseOtherPart = document.getElementById('btnChooseOtherPart');

  const candidateNameInput = document.getElementById('candidateName');
  const candidateEmailInput = document.getElementById('candidateEmail');

  // Initialize Application
  initApp();

  function initApp() {
    updateUILanguage();
    startTimer();
    renderPalette();
    renderPage(1);
    bindEvents();
  }

  // Language update for all static UI elements
  function updateUILanguage() {
    document.documentElement.lang = state.currentLang;
    
    // Header
    const brandBadge = document.getElementById('brandBadge');
    if (brandBadge) brandBadge.textContent = t('brandBadge');
    
    const brandTitle = document.getElementById('brandTitle');
    if (brandTitle) brandTitle.textContent = t('brandTitle');
    
    const timerPrefix = document.getElementById('timerPrefix');
    if (timerPrefix) timerPrefix.textContent = t('timerPrefix');
    
    // Candidate Card
    const lblCandidateName = document.getElementById('lblCandidateName');
    if (lblCandidateName) lblCandidateName.textContent = t('candidateNameLabel');
    if (candidateNameInput) candidateNameInput.placeholder = t('candidateNamePlaceholder');
    
    const lblCandidateEmail = document.getElementById('lblCandidateEmail');
    if (lblCandidateEmail) lblCandidateEmail.textContent = t('candidateEmailLabel');
    if (candidateEmailInput) candidateEmailInput.placeholder = t('candidateEmailPlaceholder');

    // Part Selector Header & Badges
    if (partSelectorLabel) partSelectorLabel.textContent = t('partSelectorLabel');
    if (currentPartBadge) currentPartBadge.textContent = `${t('currentPartPrefix')} ${getPartName()}`;

    // Part Tabs
    const tabNumOOP = document.getElementById('tabNumOOP');
    const tabTitleOOP = document.getElementById('tabTitleOOP');
    if (tabNumOOP) tabNumOOP.textContent = t('partTabNumOOP');
    if (tabTitleOOP) tabTitleOOP.textContent = t('partTabTitleOOP');

    const tabNumLogic = document.getElementById('tabNumLogic');
    const tabTitleLogic = document.getElementById('tabTitleLogic');
    if (tabNumLogic) tabNumLogic.textContent = t('partTabNumLogic');
    if (tabTitleLogic) tabTitleLogic.textContent = t('partTabTitleLogic');

    const tabNumProgramming = document.getElementById('tabNumProgramming');
    const tabTitleProgramming = document.getElementById('tabTitleProgramming');
    if (tabNumProgramming) tabNumProgramming.textContent = t('partTabNumProgramming');
    if (tabTitleProgramming) tabTitleProgramming.textContent = t('partTabTitleProgramming');

    const tabNumJava = document.getElementById('tabNumJava');
    const tabTitleJava = document.getElementById('tabTitleJava');
    if (tabNumJava) tabNumJava.textContent = t('partTabNumJava');
    if (tabTitleJava) tabTitleJava.textContent = t('partTabTitleJava');

    const tabNumHard = document.getElementById('tabNumHard');
    const tabTitleHard = document.getElementById('tabTitleHard');
    if (tabNumHard) tabNumHard.textContent = t('partTabNumHard');
    if (tabTitleHard) tabTitleHard.textContent = t('partTabTitleHard');

    const tabNumAll = document.getElementById('tabNumAll');
    const tabTitleAll = document.getElementById('tabTitleAll');
    if (tabNumAll) tabNumAll.textContent = t('partTabNumAll');
    if (tabTitleAll) tabTitleAll.textContent = t('partTabTitleAll');

    // Pagination buttons
    const btnPrevText = document.getElementById('btnPrevText');
    if (btnPrevText) btnPrevText.textContent = t('btnPrev');
    const btnNextText = document.getElementById('btnNextText');
    if (btnNextText) btnNextText.textContent = t('btnNext');

    // Palette
    const currentQuestions = getQuestionsForCurrentPart();
    if (paletteTitleText) paletteTitleText.textContent = t('paletteTitle', { count: currentQuestions.length });
    const legendAnsweredText = document.getElementById('legendAnsweredText');
    if (legendAnsweredText) legendAnsweredText.textContent = t('legendAnswered');
    const legendUnansweredText = document.getElementById('legendUnansweredText');
    if (legendUnansweredText) legendUnansweredText.textContent = t('legendUnanswered');
    const legendCurrentText = document.getElementById('legendCurrentText');
    if (legendCurrentText) legendCurrentText.textContent = t('legendCurrent');
    const btnSubmitText = document.getElementById('btnSubmitText');
    if (btnSubmitText) btnSubmitText.textContent = t('btnSubmit');

    // Modal
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) modalTitle.textContent = t('modalTitle');
    if (btnCancelSubmit) btnCancelSubmit.textContent = t('btnCancel');
    if (btnConfirmSubmit) btnConfirmSubmit.textContent = t('btnConfirm');

    // Results screen
    if (resultPartText) resultPartText.textContent = getPartName();
    const btnRetakeText = document.getElementById('btnRetakeText');
    if (btnRetakeText) btnRetakeText.textContent = t('btnRetake');
    const btnChooseOtherPartText = document.getElementById('btnChooseOtherPartText');
    if (btnChooseOtherPartText) btnChooseOtherPartText.textContent = t('btnChooseOtherPart');

    // Language Select dropdown value
    if (langSelect && langSelect.value !== state.currentLang) {
      langSelect.value = state.currentLang;
    }
  }

  // Switch Language
  function setLanguage(lang) {
    if (!i18n[lang]) return;
    state.currentLang = lang;
    localStorage.setItem('quiz_lang', lang);
    updateUILanguage();

    if (state.isSubmitted) {
      handleSubmit(true); // refresh result text with new language
    } else {
      renderPalette();
      renderPage(state.currentPage);
    }
  }

  // Timer
  function startTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
    }
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
    let safe = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
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

  // Switch Active Part
  function switchPart(partKey) {
    if (partKey === state.currentPart && !state.isSubmitted) return;

    state.currentPart = partKey;

    // Update active tab styles
    document.querySelectorAll('.part-tab').forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-part') === partKey);
    });

    // Update Header Badge
    if (currentPartBadge) {
      currentPartBadge.textContent = `${t('currentPartPrefix')} ${getPartName()}`;
    }

    // If currently viewing results, reset view back to quiz
    if (state.isSubmitted) {
      state.isSubmitted = false;
      resultsScreen.style.display = 'none';
      quizScreen.style.display = 'grid';
    }

    startTimer();
    renderPalette();
    renderPage(1);
  }

  // Render Palette in Sidebar strictly for current part
  function renderPalette() {
    paletteGrid.innerHTML = '';
    const questions = getQuestionsForCurrentPart();

    questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'palette-btn';
      btn.id = `palette-btn-${q.id}`;
      btn.textContent = idx + 1;
      btn.title = `Câu ${idx + 1} [${q.code}] (Đề gốc #${q.id})`;

      btn.addEventListener('click', () => {
        const targetPage = Math.floor(idx / state.itemsPerPage) + 1;
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

  // Update Palette styling based on answer state & current page
  function updatePaletteStatus() {
    const list = getQuestionsForCurrentPart();
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = Math.min(startIndex + state.itemsPerPage, list.length);
    const currentVisibleIds = new Set(list.slice(startIndex, endIndex).map(q => q.id));

    let answeredInPart = 0;

    list.forEach(q => {
      const btn = document.getElementById(`palette-btn-${q.id}`);
      const isAnswered = state.userAnswers[q.id] !== undefined;
      if (isAnswered) answeredInPart++;

      if (btn) {
        const isCurrent = currentVisibleIds.has(q.id);
        btn.classList.toggle('answered', isAnswered);
        btn.classList.toggle('current-page', isCurrent);
      }
    });

    if (paletteTitleText) {
      paletteTitleText.textContent = t('paletteTitle', { count: list.length });
    }
    answeredCounter.textContent = `${answeredInPart} / ${list.length}`;
    
    // Progress strip for current part
    const percent = list.length ? (answeredInPart / list.length) * 100 : 0;
    progressBar.style.width = `${percent}%`;
  }

  // Render Specific Page of Questions for current part
  function renderPage(pageNumber) {
    const list = getQuestionsForCurrentPart();
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
          <p style="color: var(--text-muted); font-size: 1.1rem;">${t('noQuestions')}</p>
        </div>
      `;
    }

    questionsToShow.forEach((q, idx) => {
      const qContent = getQContent(q);
      const card = document.createElement('div');
      card.className = 'question-card';
      card.id = `q-card-${q.id}`;

      // Order within current part
      const partQuestionNumber = startIndex + idx + 1;

      // Category Tag class
      let catClass = 'tag-logic';
      if (q.category === 'OOP') catClass = 'tag-oop';
      else if (q.category === 'Programming') catClass = 'tag-programming';
      else if (q.category === 'Java') catClass = 'tag-java';

      const hardBadge = q.isHard 
        ? `<span class="badge-hard">${t('badgeHard')}</span>` 
        : '';

      const origIdBadge = (state.currentPart !== 'ALL')
        ? `<span class="badge-orig-id" title="Số thứ tự trong đề 50 câu gốc">${t('badgeOriginalId')}${q.id}</span>`
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
      if (qContent.questionAfter) {
        afterTextHtml = `<div class="question-body" style="margin-top: 10px;">${formatMarkdownText(qContent.questionAfter)}</div>`;
      }

      // Options
      let optionsHtml = '<div class="options-grid">';
      qContent.options.forEach(opt => {
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
            <span>${t('badgeQuestion')} ${partQuestionNumber}.</span>
            <span class="badge-tag ${catClass}">[${q.code}] ${qContent.categoryName}</span>
            ${origIdBadge}
          </div>
          <div>${hardBadge}</div>
        </div>
        <div class="question-body">${formatMarkdownText(qContent.question)}</div>
        ${codeHtml}
        ${afterTextHtml}
        ${optionsHtml}
      `;

      questionsContainer.appendChild(card);
    });

    // Option Click Handlers
    document.querySelectorAll('.option-item').forEach(item => {
      item.addEventListener('click', () => {
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
    
    pageIndicator.textContent = t('pageIndicator', {
      current: state.currentPage,
      total: state.totalPages,
      partName: getPartName(),
      count: list.length,
      start: startNum,
      end: endNum
    });

    btnPrevPage.disabled = (state.currentPage <= 1);
    btnNextPage.disabled = (state.currentPage >= state.totalPages);

    updatePaletteStatus();
  }

  // Navigation and UI events
  function bindEvents() {
    // Language Dropdown Change
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
      });
    }

    // Part Selection Tabs Click
    document.querySelectorAll('.part-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const partKey = tab.getAttribute('data-part');
        switchPart(partKey);
      });
    });

    // Pagination Previous
    btnPrevPage.addEventListener('click', () => {
      if (state.currentPage > 1) {
        renderPage(state.currentPage - 1);
      }
    });

    // Pagination Next
    btnNextPage.addEventListener('click', () => {
      if (state.currentPage < state.totalPages) {
        renderPage(state.currentPage + 1);
      }
    });

    // Open Submit Confirmation Modal
    btnSubmitTest.addEventListener('click', () => {
      const list = getQuestionsForCurrentPart();
      const answeredCount = list.filter(q => state.userAnswers[q.id] !== undefined).length;
      const unanswered = list.length - answeredCount;

      if (unanswered > 0) {
        modalMessage.textContent = t('modalMsgUnanswered', {
          answered: answeredCount,
          total: list.length,
          unanswered: unanswered,
          partName: getPartName()
        });
      } else {
        modalMessage.textContent = t('modalMsgAllAnswered', {
          total: list.length,
          partName: getPartName()
        });
      }

      confirmModal.classList.add('active');
    });

    // Cancel Submit
    btnCancelSubmit.addEventListener('click', () => {
      confirmModal.classList.remove('active');
    });

    // Confirm Submit
    btnConfirmSubmit.addEventListener('click', () => {
      confirmModal.classList.remove('active');
      handleSubmit(false);
    });

    // Retake Current Part
    btnRetakeTest.addEventListener('click', () => {
      if (confirm(t('confirmRetake', { partName: getPartName() }))) {
        const list = getQuestionsForCurrentPart();
        list.forEach(q => {
          delete state.userAnswers[q.id];
        });
        state.isSubmitted = false;
        resultsScreen.style.display = 'none';
        quizScreen.style.display = 'grid';
        startTimer();
        renderPalette();
        renderPage(1);
      }
    });

    // Choose Another Part from Results Screen
    if (btnChooseOtherPart) {
      btnChooseOtherPart.addEventListener('click', () => {
        state.isSubmitted = false;
        resultsScreen.style.display = 'none';
        quizScreen.style.display = 'grid';
        renderPalette();
        renderPage(1);
        const partBar = document.getElementById('partBar');
        if (partBar) {
          partBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }

  // Handle Submit & Score Calculation strictly for the active part
  function handleSubmit(isLangSwitchOnly = false) {
    state.isSubmitted = true;
    if (!isLangSwitchOnly) {
      clearInterval(state.timerInterval);
    }

    const currentQuestions = getQuestionsForCurrentPart();
    let correctInPart = 0;
    let wrongInPart = 0;
    let unansweredInPart = 0;

    currentQuestions.forEach(q => {
      const userChoice = state.userAnswers[q.id];
      if (userChoice === undefined) {
        unansweredInPart++;
      } else if (userChoice === q.correctAnswer) {
        correctInPart++;
      } else {
        wrongInPart++;
      }
    });

    const totalQuestions = currentQuestions.length;
    const percent = totalQuestions ? ((correctInPart / totalQuestions) * 100).toFixed(2) : '0.00';

    // Rank evaluation
    let rank = t('rankAverage');
    const pctNum = parseFloat(percent);
    if (pctNum >= 85) rank = t('rankExcellent');
    else if (pctNum >= 75) rank = t('rankVeryGood');
    else if (pctNum >= 65) rank = t('rankGood');
    else if (pctNum >= 55) rank = t('rankAboveAverage');

    // Update Hero UI
    const cName = candidateNameInput.value.trim() || (state.currentLang === 'vi' ? 'Ứng viên' : (state.currentLang === 'th' ? 'ผู้สมัคร' : 'Candidate'));
    const cEmail = candidateEmailInput.value.trim() || (state.currentLang === 'vi' ? 'Chưa cung cấp email' : (state.currentLang === 'th' ? 'ไม่ได้ระบุอีเมล' : 'No email provided'));
    
    resultCandidateName.textContent = `${t('resultTitle')} ${cName}`;
    if (resultPartText) {
      resultPartText.textContent = getPartName();
    }
    resultCandidateEmail.textContent = `${t('resultEmail')} ${cEmail}`;
    resultTimeTaken.textContent = `${t('resultTime')} ${timerDisplay.textContent}`;

    scoreRatioDisplay.textContent = `${correctInPart} / ${totalQuestions}`;
    scorePercentDisplay.textContent = `${percent}%`;
    scoreRankDisplay.textContent = `${t('resultRankPrefix')} ${rank}`;

    // Render Breakdown Cards
    breakdownGrid.innerHTML = '';

    if (state.currentPart === 'ALL') {
      breakdownTitle.textContent = t('breakdownTitleAll');
      const categoryStats = {
        OOP: { key: 'OOP', total: 15, correct: 0 },
        Logic: { key: 'Logic', total: 15, correct: 0 },
        Programming: { key: 'Programming', total: 10, correct: 0 },
        Java: { key: 'Java', total: 10, correct: 0 },
        Hard: { key: 'Hard', total: 6, correct: 0 }
      };

      quizData.forEach(q => {
        if (state.userAnswers[q.id] === q.correctAnswer) {
          if (categoryStats[q.category]) categoryStats[q.category].correct++;
          if (q.isHard) categoryStats.Hard.correct++;
        }
      });

      const catKeys = ['OOP', 'Logic', 'Programming', 'Java', 'Hard'];
      const catNamesMap = {
        OOP: t('partTitleOOP'),
        Logic: t('partTitleLogic'),
        Programming: t('partTitleProgramming'),
        Java: t('partTitleJava'),
        Hard: t('partTitleHard')
      };

      catKeys.forEach(k => {
        const item = categoryStats[k];
        const catPct = ((item.correct / item.total) * 100).toFixed(1);
        const displayName = catNamesMap[k] || k;
        const countLabel = state.currentLang === 'vi' ? 'câu' : (state.currentLang === 'th' ? 'ข้อ' : 'Qs');

        const card = document.createElement('div');
        card.className = 'category-stat-card';
        card.innerHTML = `
          <div class="cat-header">
            <span class="cat-name">${displayName}</span>
            <span style="font-weight: 700; font-size: 0.9rem; color: var(--primary);">${catPct}%</span>
          </div>
          <div class="cat-score">${item.correct} / ${item.total} ${countLabel}</div>
          <div class="cat-bar-bg">
            <div class="cat-bar-fill" style="width: ${catPct}%;"></div>
          </div>
        `;
        breakdownGrid.appendChild(card);
      });
    } else {
      breakdownTitle.textContent = t('breakdownTitleSingle', { partName: getPartName() });

      // Focused Breakdown Cards for this single part
      const countLabel = state.currentLang === 'vi' ? 'câu' : (state.currentLang === 'th' ? 'ข้อ' : 'questions');

      const statItems = [
        {
          label: t('statTotalScore'),
          val: `${correctInPart} / ${totalQuestions} ${countLabel}`,
          pct: `${percent}%`,
          color: 'var(--primary)'
        },
        {
          label: t('statCorrectCount'),
          val: `${correctInPart} ${countLabel}`,
          pct: `${percent}%`,
          color: '#059669'
        },
        {
          label: t('statWrongCount'),
          val: `${wrongInPart} ${countLabel}`,
          pct: `${((wrongInPart / totalQuestions) * 100).toFixed(1)}%`,
          color: '#dc2626'
        },
        {
          label: t('statUnansweredCount'),
          val: `${unansweredInPart} ${countLabel}`,
          pct: `${((unansweredInPart / totalQuestions) * 100).toFixed(1)}%`,
          color: '#d97706'
        }
      ];

      statItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'category-stat-card';
        card.innerHTML = `
          <div class="cat-header">
            <span class="cat-name">${item.label}</span>
            <span style="font-weight: 700; font-size: 0.95rem; color: ${item.color};">${item.pct}</span>
          </div>
          <div class="cat-score" style="color: ${item.color}; font-size: 1.15rem; font-weight: 800;">${item.val}</div>
          <div class="cat-bar-bg">
            <div class="cat-bar-fill" style="width: ${item.pct}; background: ${item.color};"></div>
          </div>
        `;
        breakdownGrid.appendChild(card);
      });
    }

    // Render Review Section strictly for current part
    renderReviewSection();

    // Switch view
    quizScreen.style.display = 'none';
    resultsScreen.style.display = 'block';
    if (!isLangSwitchOnly) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Render Detailed Review strictly for questions of the selected part
  function renderReviewSection() {
    reviewContainer.innerHTML = '';
    const questions = getQuestionsForCurrentPart();

    if (reviewTitle) {
      reviewTitle.textContent = t('reviewTitlePart', {
        partName: getPartName(),
        count: questions.length
      });
    }

    questions.forEach((q, idx) => {
      const qContent = getQContent(q);
      const userChoice = state.userAnswers[q.id];
      const isCorrect = (userChoice === q.correctAnswer);
      const isUnanswered = (userChoice === undefined);

      const item = document.createElement('div');
      item.className = `review-item ${isCorrect ? 'is-correct' : 'is-wrong'}`;

      let statusBadge = '';
      if (isCorrect) {
        statusBadge = `<span class="status-tag status-correct">${t('statusCorrect')}</span>`;
      } else if (isUnanswered) {
        statusBadge = `<span class="status-tag status-wrong">${t('statusUnanswered')}</span>`;
      } else {
        statusBadge = `<span class="status-tag status-wrong">${t('statusWrong', { choice: userChoice })}</span>`;
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

      let afterHtml = qContent.questionAfter 
        ? `<div class="question-body" style="margin-top: 10px;">${formatMarkdownText(qContent.questionAfter)}</div>` 
        : '';

      // Options with correct/wrong highlights
      let optionsHtml = '<div class="review-options">';
      qContent.options.forEach(opt => {
        let optClass = 'review-opt';
        let marker = '';

        if (opt.key === q.correctAnswer) {
          optClass += ' correct-answer-highlight';
          marker = ` <strong style="color: #059669; margin-left: auto;">${t('markerCorrect')}</strong>`;
        } else if (opt.key === userChoice && !isCorrect) {
          optClass += ' user-chosen-wrong';
          marker = ` <strong style="color: #dc2626; margin-left: auto;">${t('markerYourChoice')}</strong>`;
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

      const partNum = idx + 1;
      const origIdBadge = (state.currentPart !== 'ALL')
        ? `<span class="badge-orig-id" style="margin-left: 8px;">${t('badgeOriginalId')}${q.id}</span>`
        : '';

      item.innerHTML = `
        <div class="review-status-bar">
          <div class="question-number">
            <span>${t('badgeQuestion')} ${partNum}. [${q.code}] ${qContent.categoryName}</span>
            ${origIdBadge}
          </div>
          <div>${statusBadge}</div>
        </div>
        <div class="question-body">${formatMarkdownText(qContent.question)}</div>
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
            ${t('explanationTitle')}
          </div>
          <div>${formatMarkdownText(qContent.explanation)}</div>
        </div>
      `;

      reviewContainer.appendChild(item);
    });
  }
});
