/**
 * Internationalization (i18n) Dictionary for Quiz Application
 * Supported languages: Vietnamese (vi), English (en), Thai (th)
 * Enhanced with 5 Independent Assessment Sections
 */

const i18n = {
  vi: {
    brandBadge: "BÀI TEST",
    brandTitle: "TESTING",
    candidateInfoTitle: "Thông tin ứng viên",
    candidateNameLabel: "Họ và tên ứng viên:",
    candidateNamePlaceholder: "Nhập họ và tên...",
    candidateEmailLabel: "Email:",
    candidateEmailPlaceholder: "Nhập địa chỉ email...",
    timerPrefix: "Thời gian:",
    
    // Part Selector Header & Badges
    partSelectorLabel: "Chọn phần thi trắc nghiệm:",
    currentPartPrefix: "Đang làm:",
    
    // 5 Independent Parts Tabs
    partTabNumOOP: "Phần 1",
    partTabTitleOOP: "OOP (15 câu)",
    partTabNumLogic: "Phần 2",
    partTabTitleLogic: "Logic (15 câu)",
    partTabNumProgramming: "Phần 3",
    partTabTitleProgramming: "Lập trình (10 câu)",
    partTabNumJava: "Phần 4",
    partTabTitleJava: "Java Core (10 câu)",
    partTabNumHard: "Phần 5",
    partTabTitleHard: "⭐ Câu hỏi khó (6 câu)",
    partTabNumAll: "Toàn bộ",
    partTabTitleAll: "Tất cả (50 câu)",
    
    // Full Part Display Titles
    partTitleOOP: "Phần 1: Lập trình hướng đối tượng (OOP)",
    partTitleLogic: "Phần 2: Tư duy Logic (Logic & Reasoning)",
    partTitleProgramming: "Phần 3: Kỹ năng Lập trình (Programming Skills)",
    partTitleJava: "Phần 4: Java Core",
    partTitleHard: "Phần 5: Những câu hỏi khó (Difficult Questions)",
    partTitleAll: "Toàn bộ bài kiểm tra 50 câu",
    
    // Pagination & Navigation
    btnPrev: "Trang trước",
    btnNext: "Trang sau",
    pageIndicator: "Trang {current} / {total} • {partName} ({count} câu - Hiển thị {start} đến {end})",
    
    // Palette
    paletteTitle: "Bảng câu hỏi ({count} câu)",
    legendAnswered: "Đã chọn đáp án",
    legendUnanswered: "Chưa trả lời",
    legendCurrent: "Đang hiển thị trên trang này",
    btnSubmit: "Nộp bài kiểm tra",
    
    // Modal
    modalTitle: "Xác nhận nộp bài",
    modalMsgUnanswered: "Bạn đã làm {answered} / {total} câu của {partName}. Hiện còn {unanswered} câu chưa được chọn đáp án. Bạn có chắc chắn muốn nộp bài phần này ngay bây giờ?",
    modalMsgAllAnswered: "Bạn đã hoàn thành đủ cả {total} / {total} câu của {partName}. Bạn có chắc chắn muốn nộp bài để xem bảng điểm và phân tích kết quả?",
    btnCancel: "Làm tiếp",
    btnConfirm: "Xác nhận nộp bài",
    
    // Results
    resultTitle: "Kết quả của:",
    resultPartLabel: "Phần kiểm tra:",
    resultEmail: "Email:",
    resultTime: "Thời gian làm bài:",
    resultRankPrefix: "Xếp loại:",
    btnRetake: "Làm lại phần này",
    btnChooseOtherPart: "Chọn phần thi khác",
    confirmRetake: "Bạn có chắc chắn muốn làm lại {partName}? Tất cả các câu trả lời của phần này sẽ được đặt lại để làm từ đầu.",
    breakdownTitleSingle: "Đánh giá chi tiết kết quả: {partName}",
    breakdownTitleAll: "Phân tích năng lực theo 4 chuyên đề & câu hỏi khó",
    reviewTitlePart: "Xem lại chi tiết từng câu hỏi & lời giải thích: {partName} ({count} câu)",
    
    // Score stats
    statTotalScore: "Điểm số đạt được",
    statAccuracy: "Tỷ lệ chính xác",
    statCorrectCount: "Số câu trả lời đúng",
    statWrongCount: "Số câu trả lời sai",
    statUnansweredCount: "Số câu chưa trả lời",
    
    // Ranks
    rankExcellent: "Xuất sắc",
    rankVeryGood: "Khá giỏi",
    rankGood: "Khá",
    rankAboveAverage: "Trung bình khá",
    rankAverage: "Trung bình",
    
    // Review Items
    badgeQuestion: "Câu",
    badgeOriginalId: "Đề gốc #",
    badgeHard: "⭐ Câu khó",
    statusCorrect: "✓ Chính xác (+1)",
    statusWrong: "✕ Sai (Bạn chọn: {choice})",
    statusUnanswered: "⚠ Chưa trả lời",
    markerCorrect: "[Đáp án đúng]",
    markerYourChoice: "[Lựa chọn của bạn]",
    explanationTitle: "Giải thích chi tiết:",
    
    // Empty state
    noQuestions: "Không có câu hỏi nào trong phần này."
  },

  en: {
    brandBadge: "TEST",
    brandTitle: "JAVA TESTING",
    candidateInfoTitle: "Candidate Information",
    candidateNameLabel: "Candidate Full Name:",
    candidateNamePlaceholder: "Enter full name...",
    candidateEmailLabel: "Email Address:",
    candidateEmailPlaceholder: "Enter email address...",
    timerPrefix: "Time:",
    
    // Part Selector Header & Badges
    partSelectorLabel: "Select Assessment Section:",
    currentPartPrefix: "Active:",
    
    // 5 Independent Parts Tabs
    partTabNumOOP: "Part 1",
    partTabTitleOOP: "OOP (15 Qs)",
    partTabNumLogic: "Part 2",
    partTabTitleLogic: "Logic (15 Qs)",
    partTabNumProgramming: "Part 3",
    partTabTitleProgramming: "Programming (10 Qs)",
    partTabNumJava: "Part 4",
    partTabTitleJava: "Java Core (10 Qs)",
    partTabNumHard: "Part 5",
    partTabTitleHard: "⭐ Difficult (6 Qs)",
    partTabNumAll: "All",
    partTabTitleAll: "Full Test (50 Qs)",
    
    // Full Part Display Titles
    partTitleOOP: "Part 1: Object-Oriented Programming (OOP)",
    partTitleLogic: "Part 2: Logic & Reasoning",
    partTitleProgramming: "Part 3: Programming Skills",
    partTitleJava: "Part 4: Java Core",
    partTitleHard: "Part 5: Difficult Questions",
    partTitleAll: "Full Assessment (All 50 Questions)",
    
    // Pagination & Navigation
    btnPrev: "Previous",
    btnNext: "Next",
    pageIndicator: "Page {current} / {total} • {partName} ({count} questions - Showing {start} to {end})",
    
    // Palette
    paletteTitle: "Question Palette ({count} Qs)",
    legendAnswered: "Answered",
    legendUnanswered: "Unanswered",
    legendCurrent: "Active on this page",
    btnSubmit: "Submit Test",
    
    // Modal
    modalTitle: "Confirm Submission",
    modalMsgUnanswered: "You have answered {answered} / {total} questions in {partName}. There are still {unanswered} unanswered questions. Are you sure you want to submit this section now?",
    modalMsgAllAnswered: "You have answered all {total} / {total} questions in {partName}. Are you sure you want to submit and view your score report?",
    btnCancel: "Continue Testing",
    btnConfirm: "Confirm & Submit",
    
    // Results
    resultTitle: "Test Results for:",
    resultPartLabel: "Section:",
    resultEmail: "Email:",
    resultTime: "Time Taken:",
    resultRankPrefix: "Rank:",
    btnRetake: "Retake This Section",
    btnChooseOtherPart: "Choose Another Section",
    confirmRetake: "Are you sure you want to restart {partName}? All current answers for this section will be reset.",
    breakdownTitleSingle: "Detailed Performance Report: {partName}",
    breakdownTitleAll: "Performance Breakdown by Section & Difficult Questions",
    reviewTitlePart: "Detailed Question Review & Explanations: {partName} ({count} Qs)",
    
    // Score stats
    statTotalScore: "Final Score",
    statAccuracy: "Accuracy Rate",
    statCorrectCount: "Correct Answers",
    statWrongCount: "Incorrect Answers",
    statUnansweredCount: "Unanswered",
    
    // Ranks
    rankExcellent: "Excellent",
    rankVeryGood: "Very Good",
    rankGood: "Good",
    rankAboveAverage: "Above Average",
    rankAverage: "Average",
    
    // Review Items
    badgeQuestion: "Question",
    badgeOriginalId: "Original #",
    badgeHard: "⭐ Hard Question",
    statusCorrect: "✓ Correct (+1)",
    statusWrong: "✕ Incorrect (Your choice: {choice})",
    statusUnanswered: "⚠ Unanswered",
    markerCorrect: "[Correct Answer]",
    markerYourChoice: "[Your Choice]",
    explanationTitle: "Detailed Explanation:",
    
    // Empty state
    noQuestions: "No questions found in this section."
  },

  th: {
    brandBadge: "แบบทดสอบ",
    brandTitle: "JAVA TESTING",
    candidateInfoTitle: "ข้อมูลผู้สมัคร",
    candidateNameLabel: "ชื่อ-นามสกุล ผู้สมัคร:",
    candidateNamePlaceholder: "กรอกชื่อ-นามสกุล...",
    candidateEmailLabel: "อีเมล:",
    candidateEmailPlaceholder: "กรอกอีเมล...",
    timerPrefix: "เวลา:",
    
    // Part Selector Header & Badges
    partSelectorLabel: "เลือกส่วนของแบบทดสอบ:",
    currentPartPrefix: "กำลังทำ:",
    
    // 5 Independent Parts Tabs
    partTabNumOOP: "ส่วนที่ 1",
    partTabTitleOOP: "OOP (15 ข้อ)",
    partTabNumLogic: "ส่วนที่ 2",
    partTabTitleLogic: "การคิดเชิงตรรกะ (15 ข้อ)",
    partTabNumProgramming: "ส่วนที่ 3",
    partTabTitleProgramming: "ทักษะเขียนโปรแกรม (10 ข้อ)",
    partTabNumJava: "ส่วนที่ 4",
    partTabTitleJava: "Java Core (10 ข้อ)",
    partTabNumHard: "ส่วนที่ 5",
    partTabTitleHard: "⭐ คำถามระดับยาก (6 ข้อ)",
    partTabNumAll: "ทั้งหมด",
    partTabTitleAll: "ข้อสอบทั้งหมด (50 ข้อ)",
    
    // Full Part Display Titles
    partTitleOOP: "ส่วนที่ 1: การเขียนโปรแกรมเชิงวัตถุ (OOP)",
    partTitleLogic: "ส่วนที่ 2: การคิดเชิงตรรกะ (Logic)",
    partTitleProgramming: "ส่วนที่ 3: ทักษะการเขียนโปรแกรม (Programming)",
    partTitleJava: "ส่วนที่ 4: Java Core",
    partTitleHard: "ส่วนที่ 5: คำถามระดับยาก (Difficult Questions)",
    partTitleAll: "แบบทดสอบทั้งหมด 50 ข้อ",
    
    // Pagination & Navigation
    btnPrev: "หน้าก่อนหน้า",
    btnNext: "หน้าถัดไป",
    pageIndicator: "หน้า {current} / {total} • {partName} ({count} ข้อ - แสดงข้อ {start} ถึง {end})",
    
    // Palette
    paletteTitle: "กระดานคำถาม ({count} ข้อ)",
    legendAnswered: "ตอบแล้ว",
    legendUnanswered: "ยังไม่ได้ตอบ",
    legendCurrent: "กำลังแสดงในหน้านี้",
    btnSubmit: "ส่งแบบทดสอบ",
    
    // Modal
    modalTitle: "ยืนยันการส่งแบบทดสอบ",
    modalMsgUnanswered: "คุณทำไปแล้ว {answered} / {total} ข้อใน{partName} ยังมีอีก {unanswered} ข้อที่ยังไม่ได้ตอบ คุณแน่ใจหรือไม่ว่าต้องการส่งแบบทดสอบส่วนนี้ตอนนี้?",
    modalMsgAllAnswered: "คุณตอบคำถามครบทั้ง {total} / {total} ข้อใน{partName} แล้ว คุณแน่ใจหรือไม่ว่าต้องการส่งแบบทดสอบเพื่อดูคะแนนและบทวิเคราะห์?",
    btnCancel: "ทำแบบทดสอบต่อ",
    btnConfirm: "ยืนยันการส่ง",
    
    // Results
    resultTitle: "ผลการทดสอบของ:",
    resultPartLabel: "ส่วนที่ทดสอบ:",
    resultEmail: "อีเมล:",
    resultTime: "เวลาที่ใช้:",
    resultRankPrefix: "ระดับผลการประเมิน:",
    btnRetake: "ทำส่วนนี้ใหม่อีกครั้ง",
    btnChooseOtherPart: "เลือกทำส่วนอื่น",
    confirmRetake: "คุณแน่ใจหรือไม่ว่าต้องการเริ่มทำ{partName} ใหม่อีกครั้ง? คำตอบทั้งหมดของส่วนนี้จะถูกรีเซ็ต",
    breakdownTitleSingle: "การวิเคราะห์ผลการประเมินโดยละเอียด: {partName}",
    breakdownTitleAll: "การวิเคราะห์ศักยภาพตาม 4 หมวดหมู่และคำถามระดับยาก",
    reviewTitlePart: "ตรวจสอบคำตอบและคำอธิบายโดยละเอียด: {partName} ({count} ข้อ)",
    
    // Score stats
    statTotalScore: "คะแนนที่ได้",
    statAccuracy: "อัตราความถูกต้อง",
    statCorrectCount: "จำนวนข้อที่ถูกต้อง",
    statWrongCount: "จำนวนข้อที่ไม่ถูกต้อง",
    statUnansweredCount: "จำนวนข้อที่ยังไม่ตอบ",
    
    // Ranks
    rankExcellent: "ยอดเยี่ยม (Excellent)",
    rankVeryGood: "ดีมาก (Very Good)",
    rankGood: "ดี (Good)",
    rankAboveAverage: "ปานกลางค่อนข้างดี (Above Average)",
    rankAverage: "ปานกลาง (Average)",
    
    // Review Items
    badgeQuestion: "ข้อที่",
    badgeOriginalId: "รหัสข้อเดิม #",
    badgeHard: "⭐ คำถามยาก",
    statusCorrect: "✓ ถูกต้อง (+1)",
    statusWrong: "✕ ไม่ถูกต้อง (คุณเลือก: {choice})",
    statusUnanswered: "⚠ ยังไม่ได้ตอบ",
    markerCorrect: "[คำตอบที่ถูกต้อง]",
    markerYourChoice: "[คำตอบของคุณ]",
    explanationTitle: "คำอธิบายอย่างละเอียด:",
    
    // Empty state
    noQuestions: "ไม่พบคำถามในส่วนนี้"
  }
};
