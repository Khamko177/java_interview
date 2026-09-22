# -*- coding: utf-8 -*-
"""
Generate trilingual dataset (English, Vietnamese, Thai) for 50 Java Interview Questions
"""
import json

questions_data = [
  # 1. [O06]
  {
    "id": 1, "code": "O06", "category": "OOP", "isHard": False, "codeSnippet": None, "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "A company has `Employee` as a general type, with `Developer` and `Designer` as specialized types. Which design best represents this relationship?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "Employee inherits Developer and Designer"},
          {"key": "B", "text": "Developer and Designer inherit Employee"},
          {"key": "C", "text": "Employee and Developer must be unrelated"},
          {"key": "D", "text": "Developer contains Employee"}
        ],
        "explanation": "Developer and Designer are specialized types of Employee. The \"Is-A\" inheritance relationship means Developer and Designer inherit from the general Employee class."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Một công ty có `Employee` là kiểu tổng quát, với `Developer` và `Designer` là các kiểu chuyên biệt. Thiết kế nào thể hiện tốt nhất mối quan hệ này?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "Employee kế thừa Developer và Designer"},
          {"key": "B", "text": "Developer và Designer kế thừa Employee"},
          {"key": "C", "text": "Employee và Developer không liên quan đến nhau"},
          {"key": "D", "text": "Developer chứa Employee"}
        ],
        "explanation": "Quan hệ \"Is-A\" (Kế thừa - Inheritance): Employee là lớp cha (tổng quát), Developer và Designer là các lớp con chuyên biệt kế thừa các thuộc tính và hành vi chung từ Employee."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "บริษัทแห่งหนึ่งมี `Employee` เป็นประเภททั่วไป โดยมี `Developer` และ `Designer` เป็นประเภทเฉพาะ การออกแบบใดแสดงความสัมพันธ์นี้ได้ดีที่สุด?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "Employee สืบทอดคุณสมบัติจาก Developer และ Designer"},
          {"key": "B", "text": "Developer และ Designer สืบทอดคุณสมบัติจาก Employee"},
          {"key": "C", "text": "Employee และ Developer ต้องไม่เกี่ยวข้องกัน"},
          {"key": "D", "text": "Developer ประกอบด้วย Employee"},
        ],
        "explanation": "Developer และ Designer เป็นประเภทเฉพาะของ Employee ความสัมพันธ์แบบ \"Is-A\" หมายถึง Developer และ Designer สืบทอดคุณสมบัติมาจากคลาส Employee ทั่วไป"
      }
    }
  },

  # 2. [L14]
  {
    "id": 2, "code": "L14", "category": "Logic", "isHard": True, "codeSnippet": None, "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "You have 1,000 bottles and exactly one bottle is contaminated. You have test strips that turn positive if exposed to the contaminated bottle. All tests can be performed simultaneously in one round. What is the minimum number of strips required to identify the contaminated bottle?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "8"},
          {"key": "B", "text": "9"},
          {"key": "C", "text": "10"},
          {"key": "D", "text": "11"}
        ],
        "explanation": "Binary encoding problem: With n strips in 1 simultaneous round, we can represent 2^n unique states. Since 2^9 = 512 < 1000 and 2^10 = 1024 >= 1000, exactly 10 strips are required."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Bạn có 1.000 chai nước và có đúng một chai bị nhiễm độc. Bạn có các que thử sẽ chuyển màu dương tính nếu tiếp xúc với chai có độc. Tất cả các xét nghiệm đều có thể thực hiện đồng thời trong 1 lần thử. Số lượng que thử tối thiểu cần thiết để xác định chính xác chai bị nhiễm độc là bao nhiêu?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "8"},
          {"key": "B", "text": "9"},
          {"key": "C", "text": "10"},
          {"key": "D", "text": "11"}
        ],
        "explanation": "Bài toán mã hóa nhị phân: Với n que thử trong 1 lần thử đồng thời, ta biểu diễn được 2^n trạng thái. Vì 2^9 = 512 < 1000 và 2^10 = 1024 >= 1000, do đó cần tối thiểu 10 que thử."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "คุณมีขวดน้ำ 1,000 ขวด และมีขวดเดียวที่มีสารปนเปื้อน คุณมีแถบตรวจที่จะแสดงผลบวกหากสัมผัสกับขวดที่มีสารปนเปื้อน การทดสอบทั้งหมดสามารถทำพร้อมกันได้ในรอบเดียว จำนวนแถบตรวจขั้นต่ำที่ต้องใช้เพื่อระบุขวดที่มีสารปนเปื้อนคือเท่าใด?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "8"},
          {"key": "B", "text": "9"},
          {"key": "C", "text": "10"},
          {"key": "D", "text": "11"}
        ],
        "explanation": "การเข้ารหัสแบบเลขฐานสอง: แถบตรวจ n แถบ สามารถแทนสถานะได้ 2^n สถานะ เนื่องจาก 2^9 = 512 < 1000 และ 2^10 = 1024 >= 1000 จึงจำเป็นต้องใช้แถบตรวจอย่างน้อย 10 แถบ"
      }
    }
  },

  # 3. [J02]
  {
    "id": 3, "code": "J02", "category": "Java", "isHard": False,
    "codeSnippet": "Person p1 = new Person(); \nPerson p2 = p1; \np2.name = \"Alice\";",
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Java Core",
        "question": "Consider:",
        "questionAfter": "What is the value of `p1.name`?",
        "options": [
          {"key": "A", "text": "null"},
          {"key": "B", "text": "Alice"},
          {"key": "C", "text": "Compilation error"},
          {"key": "D", "text": "An unpredictable value"}
        ],
        "explanation": "`Person p2 = p1;` copies the object reference on the Heap. Both variables point to the exact same object, so modifying `p2.name` also reflects on `p1.name`."
      },
      "vi": {
        "categoryName": "Java Core",
        "question": "Xét đoạn mã sau:",
        "questionAfter": "Giá trị của `p1.name` là gì?",
        "options": [
          {"key": "A", "text": "null"},
          {"key": "B", "text": "Alice"},
          {"key": "C", "text": "Lỗi biên dịch (Compilation error)"},
          {"key": "D", "text": "Một giá trị không thể dự đoán"}
        ],
        "explanation": "Biến đối tượng trong Java lưu địa chỉ tham chiếu vùng nhớ trên Heap. Câu lệnh `p2 = p1;` sao chép địa chỉ tham chiếu, cả hai cùng trỏ vào 1 đối tượng, nên `p1.name` cũng là \"Alice\"."
      },
      "th": {
        "categoryName": "Java Core",
        "question": "พิจารณาโค้ดต่อไปนี้:",
        "questionAfter": "ค่าของ `p1.name` คืออะไร?",
        "options": [
          {"key": "A", "text": "null"},
          {"key": "B", "text": "Alice"},
          {"key": "C", "text": "ข้อผิดพลาดในการคอมไพล์ (Compilation error)"},
          {"key": "D", "text": "ค่าที่คาดเดาไม่ได้"}
        ],
        "explanation": "คำสั่ง `Person p2 = p1;` คัดลอกการอ้างอิงออบเจกต์บน Heap ตัวแปรทั้งสองชี้ไปยังออบเจกต์เดียวกัน ดังนั้นเมื่อเปลี่ยน `p2.name` จึงทำให้ `p1.name` มีค่าเป็น \"Alice\" เช่นกัน"
      }
    }
  },

  # 4. [O13]
  {
    "id": 4, "code": "O13", "category": "OOP", "isHard": False, "codeSnippet": None, "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "A system defines a `Notification` abstraction with `send()`. `EmailNotification` and `SmsNotification` provide their own implementations. What is the main purpose of the abstraction?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "To force all notifications to use identical internal code"},
          {"key": "B", "text": "To expose a common contract while hiding implementation details"},
          {"key": "C", "text": "To prevent creating notification objects"},
          {"key": "D", "text": "To eliminate methods"}
        ],
        "explanation": "Abstraction defines a common contract (via methods like `send()`) while encapsulating and hiding the underlying implementation details."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Một hệ thống định nghĩa tính trừu tượng `Notification` với phương thức `send()`. `EmailNotification` và `SmsNotification` cung cấp các cài đặt riêng của chúng. Mục đích chính của tính trừu tượng ở đây là gì?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "Bắt buộc tất cả các thông báo phải dùng mã nội bộ giống hệt nhau"},
          {"key": "B", "text": "Công khai một giao ước chung đồng thời ẩn đi các chi tiết cài đặt"},
          {"key": "C", "text": "Ngăn chặn việc tạo các đối tượng thông báo"},
          {"key": "D", "text": "Loại bỏ các phương thức"}
        ],
        "explanation": "Tính trừu tượng (Abstraction) giúp công khai một giao ước chung (`send()`), giúp các module bên ngoài tương tác mà không cần bận tâm đến chi tiết cài đặt bên trong."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "ระบบหนึ่งกำหนด Abstraction ชื่อ `Notification` พร้อมเมธอด `send()` โดย `EmailNotification` และ `SmsNotification` มีการทำงานของตนเอง วัตถุประสงค์หลักของ Abstraction นี้คืออะไร?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "เพื่อบังคับให้การแจ้งเตือนทั้งหมดใช้โค้ดภายในที่เหมือนกัน"},
          {"key": "B", "text": "เพื่อเปิดเผยข้อตกลงร่วมกัน (contract) ในขณะที่ซ่อนรายละเอียดการทำงาน"},
          {"key": "C", "text": "เพื่อป้องกันไม่ให้สร้างออบเจกต์การแจ้งเตือน"},
          {"key": "D", "text": "เพื่อกำจัดเมธอดทิ้ง"}
        ],
        "explanation": "Abstraction กำหนดข้อตกลงร่วมกัน (สัญญา) ผ่านเมธอด เช่น `send()` ในขณะที่ซ่อนรายละเอียดการทำงานเฉพาะของแต่ละคลาสไว้"
      }
    }
  },

  # 5. [P06]
  {
    "id": 5, "code": "P06", "category": "Programming", "isHard": False, "codeSnippet": None, "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Programming Skills",
        "question": "Let $f(x) = x + 2$ and $g(x) = 3x$. What is $g(f(4))$?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "14"},
          {"key": "B", "text": "18"},
          {"key": "C", "text": "20"},
          {"key": "D", "text": "24"}
        ],
        "explanation": "Evaluate inside-out: f(4) = 4 + 2 = 6, then g(f(4)) = g(6) = 3 * 6 = 18."
      },
      "vi": {
        "categoryName": "Kỹ năng Lập trình",
        "question": "Cho $f(x) = x + 2$ và $g(x) = 3x$. Giá trị của $g(f(4))$ là bao nhiêu?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "14"},
          {"key": "B", "text": "18"},
          {"key": "C", "text": "20"},
          {"key": "D", "text": "24"}
        ],
        "explanation": "Tính toán từ trong ra ngoài: f(4) = 4 + 2 = 6, sau đó g(6) = 3 * 6 = 18."
      },
      "th": {
        "categoryName": "ทักษะการเขียนโปรแกรม",
        "question": "กำหนดให้ $f(x) = x + 2$ และ $g(x) = 3x$ ค่าของ $g(f(4))$ คือเท่าใด?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "14"},
          {"key": "B", "text": "18"},
          {"key": "C", "text": "20"},
          {"key": "D", "text": "24"}
        ],
        "explanation": "คำนวณจากฟังก์ชันด้านในก่อน: f(4) = 4 + 2 = 6 จากนั้น g(6) = 3 * 6 = 18"
      }
    }
  },

  # 6. [L06]
  {
    "id": 6, "code": "L06", "category": "Logic", "isHard": False, "codeSnippet": None, "correctAnswer": "A",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "Four people A, B, C, D are suspects. Exactly one person is guilty. Each makes one statement.\n- A: \"A is guilty.\"\n- B: \"A is not guilty.\"\n- C: \"B is guilty.\"\n- D: \"The guilty person is either A or B.\"\nExactly two statements are true. Who is guilty?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "A"},
          {"key": "B", "text": "B"},
          {"key": "C", "text": "C"},
          {"key": "D", "text": "D"}
        ],
        "explanation": "If A is guilty: statement A is true, B is false, C is false, D is true. Exactly two statements are true (A and D), satisfying the problem conditions."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Bốn người A, B, C, D là các nghi phạm. Có đúng một người có tội. Mỗi người đưa ra một lời khai.\n- A: \"A có tội.\"\n- B: \"A không có tội.\"\n- C: \"B có tội.\"\n- D: \"Người có tội là A hoặc B.\"\nBiết có đúng hai lời khai là sự thật. Ai là người có tội?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "A"},
          {"key": "B", "text": "B"},
          {"key": "C", "text": "C"},
          {"key": "D", "text": "D"}
        ],
        "explanation": "Nếu A có tội: A nói đúng, B nói sai, C nói sai, D nói đúng. Có đúng 2 phát biểu là sự thật (A và D), hoàn toàn thỏa mãn đề bài."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "มีผู้ต้องสงสัย 4 คน ได้แก่ A, B, C, D มีคนผิดเพียงคนเดียว แต่ละคนให้การดังนี้:\n- A: \"A เป็นคนผิด\"\n- B: \"A ไม่ได้ทำผิด\"\n- C: \"B เป็นคนผิด\"\n- D: \"คนผิดคือ A หรือไม่ก็ B\"\nหากมีข้อความที่เป็นจริงตรงกับความจริง 2 ข้อความ ใครคือคนผิด?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "A"},
          {"key": "B", "text": "B"},
          {"key": "C", "text": "C"},
          {"key": "D", "text": "D"}
        ],
        "explanation": "ถ้า A เป็นคนผิด: คำให้การของ A เป็นจริง, B เป็นเท็จ, C เป็นเท็จ, D เป็นจริง มีข้อความจริง 2 ข้อความ (A และ D) ซึ่งตรงตามเงื่อนไขพอดี"
      }
    }
  },

  # 7. [P05]
  {
    "id": 7, "code": "P05", "category": "Programming", "isHard": False,
    "codeSnippet": "for (int i = 1; i <= 4; i++) { \n    for (int j = i; j <= 4; j++) { \n        print(\"X\"); \n    } \n}",
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Programming Skills",
        "question": "How many times is X printed?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "8"},
          {"key": "B", "text": "9"},
          {"key": "C", "text": "10"},
          {"key": "D", "text": "12"}
        ],
        "explanation": "When i=1: 4 times. i=2: 3 times. i=3: 2 times. i=4: 1 time. Total = 4 + 3 + 2 + 1 = 10 times."
      },
      "vi": {
        "categoryName": "Kỹ năng Lập trình",
        "question": "Chữ \"X\" được in ra bao nhiêu lần?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "8"},
          {"key": "B", "text": "9"},
          {"key": "C", "text": "10"},
          {"key": "D", "text": "12"}
        ],
        "explanation": "Khi i=1: in 4 lần. i=2: in 3 lần. i=3: in 2 lần. i=4: in 1 lần. Tổng cộng = 4 + 3 + 2 + 1 = 10 lần."
      },
      "th": {
        "categoryName": "ทักษะการเขียนโปรแกรม",
        "question": "ข้อความ \"X\" จะถูกพิมพ์ออกมากี่ครั้ง?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "8"},
          {"key": "B", "text": "9"},
          {"key": "C", "text": "10"},
          {"key": "D", "text": "12"}
        ],
        "explanation": "เมื่อ i=1: พิมพ์ 4 ครั้ง, i=2: พิมพ์ 3 ครั้ง, i=3: พิมพ์ 2 ครั้ง, i=4: พิมพ์ 1 ครั้ง รวมทั้งหมด = 4 + 3 + 2 + 1 = 10 ครั้ง"
      }
    }
  },

  # 8. [J06]
  {
    "id": 8, "code": "J06", "category": "Java", "isHard": False,
    "codeSnippet": "class Counter { \n    static int count = 0; \n} \nCounter a = new Counter(); \nCounter b = new Counter(); \na.count++; \nb.count++;",
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Java Core",
        "question": "Consider the following code:",
        "questionAfter": "What is `Counter.count`?",
        "options": [
          {"key": "A", "text": "0"},
          {"key": "B", "text": "1"},
          {"key": "C", "text": "2"},
          {"key": "D", "text": "Compilation error"}
        ],
        "explanation": "The `static` modifier means `count` is a class variable shared across all instances. Incrementing via `a.count++` and `b.count++` modifies the same shared variable, resulting in 2."
      },
      "vi": {
        "categoryName": "Java Core",
        "question": "Xét đoạn mã sau:",
        "questionAfter": "Giá trị của `Counter.count` là bao nhiêu?",
        "options": [
          {"key": "A", "text": "0"},
          {"key": "B", "text": "1"},
          {"key": "C", "text": "2"},
          {"key": "D", "text": "Lỗi biên dịch (Compilation error)"}
        ],
        "explanation": "Từ khóa `static` chỉ biến thuộc về lớp và chia sẻ chung cho mọi instance. Cả `a.count++` và `b.count++` cùng tăng biến chung này, giá trị tăng từ 0 lên 2."
      },
      "th": {
        "categoryName": "Java Core",
        "question": "พิจารณาโค้ดต่อไปนี้:",
        "questionAfter": "ค่าของ `Counter.count` คืออะไร?",
        "options": [
          {"key": "A", "text": "0"},
          {"key": "B", "text": "1"},
          {"key": "C", "text": "2"},
          {"key": "D", "text": "ข้อผิดพลาดในการคอมไพล์ (Compilation error)"}
        ],
        "explanation": "ตัวแปร `static` เป็นตัวแปรระดับคลาสที่แชร์ร่วมกันในทุกอินสแตนซ์ การเพิ่มค่าผ่าน `a.count++` และ `b.count++` ส่งผลต่อตัวแปรตัวเดียวกัน ทำให้มีค่าเท่ากับ 2"
      }
    }
  },

  # 9. [L05]
  {
    "id": 9, "code": "L05", "category": "Logic", "isHard": False, "codeSnippet": None, "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "A system has the following rules:\n- If the server is overloaded, the response time increases. (P -> Q)\n- If the response time increases, users receive a warning. (Q -> R)\n- Today users did not receive a warning. (~R)\nWhat can we conclude?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "The server is overloaded"},
          {"key": "B", "text": "The server is not overloaded"},
          {"key": "C", "text": "The response time increased"},
          {"key": "D", "text": "We cannot determine whether the server is overloaded"}
        ],
        "explanation": "By Modus Tollens (contrapositive law): ~R implies ~Q (response time did not increase), and ~Q implies ~P (the server is not overloaded)."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Một hệ thống có các quy tắc sau:\n- Nếu máy chủ quá tải, thời gian phản hồi sẽ tăng. (P -> Q)\n- Nếu thời gian phản hồi tăng, người dùng sẽ nhận cảnh báo. (Q -> R)\n- Hôm nay người dùng không nhận được cảnh báo. (~R)\nChúng ta có thể kết luận điều gì?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "Máy chủ đang bị quá tải"},
          {"key": "B", "text": "Máy chủ không bị quá tải"},
          {"key": "C", "text": "Thời gian phản hồi đã tăng"},
          {"key": "D", "text": "Không thể xác định được máy chủ có bị quá tải hay không"}
        ],
        "explanation": "Dựa trên quy tắc phản đảo (Modus Tollens): Không có cảnh báo (~R) suy ra thời gian phản hồi không tăng (~Q). Thời gian phản hồi không tăng suy ra máy chủ không bị quá tải (~P)."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "ระบบหนึ่งมีกฎเกณฑ์ดังนี้:\n- หากเซิร์ฟเวอร์โหลดเกิน เวลาตอบสนองจะเพิ่มขึ้น (P -> Q)\n- หากเวลาตอบสนองเพิ่มขึ้น ผู้ใช้จะได้รับคำเตือน (Q -> R)\n- วันนี้ผู้ใช้ไม่ได้รับคำเตือน (~R)\nเราสามารถสรุปได้อย่างไร?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "เซิร์ฟเวอร์ทำงานหนักเกินไป"},
          {"key": "B", "text": "เซิร์ฟเวอร์ไม่ได้ทำงานหนักเกินไป"},
          {"key": "C", "text": "เวลาตอบสนองเพิ่มขึ้น"},
          {"key": "D", "text": "ไม่สามารถระบุได้ว่าเซิร์ฟเวอร์ทำงานหนักเกินไปหรือไม่"}
        ],
        "explanation": "ตามหลักตรรกศาสตร์ Modus Tollens: เมื่อผู้ใช้ไม่ได้รับคำเตือน (~R) แสดงว่าเวลาตอบสนองไม่ได้เพิ่มขึ้น (~Q) และสรุปได้ว่าเซิร์ฟเวอร์ไม่ได้โหลดเกิน (~P)"
      }
    }
  },

  # 10. [O03]
  {
    "id": 10, "code": "O03", "category": "OOP", "isHard": False,
    "codeSnippet": "Person p1 = new Person(); \nPerson p2 = new Person(); \np2 = p1;",
    "correctAnswer": "A",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "What happens after this code?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "p1 and p2 refer to the same object"},
          {"key": "B", "text": "p1 and p2 are always two different objects"},
          {"key": "C", "text": "p1 is deleted immediately"},
          {"key": "D", "text": "p2 becomes null"}
        ],
        "explanation": "The reference assignment `p2 = p1;` makes `p2` point to the object referenced by `p1`. The original object initially created for `p2` becomes eligible for garbage collection."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Điều gì xảy ra sau khi thực thi đoạn mã trên?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "p1 và p2 cùng tham chiếu đến cùng một đối tượng"},
          {"key": "B", "text": "p1 và p2 luôn là hai đối tượng khác nhau"},
          {"key": "C", "text": "p1 bị xóa ngay lập tức"},
          {"key": "D", "text": "p2 trở thành null"}
        ],
        "explanation": "Lệnh gán `p2 = p1;` khiến biến `p2` trỏ tới cùng đối tượng mà `p1` đang tham chiếu. Đối tượng ban đầu của `p2` mất tham chiếu và sẽ được dọn rác (Garbage Collector) thu hồi."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "เกิดอะไรขึ้นหลังจากรันโค้ดนี้?",
        "questionAfter": "",
        "options": [
          {"key": "A", "text": "p1 และ p2 อ้างอิงไปยังออบเจกต์เดียวกัน"},
          {"key": "B", "text": "p1 และ p2 ยังคงเป็นสองออบเจกต์ที่แตกต่างกันเสมอ"},
          {"key": "C", "text": "p1 ถูกลบทันที"},
          {"key": "D", "text": "p2 กลายเป็น null"}
        ],
        "explanation": "การกำหนดค่า `p2 = p1;` ทำให้ตัวแปร `p2` ชี้ไปยังออบเจกต์เดียวกันกับที่ `p1` กำลังอ้างอิงอยู่"
      }
    }
  }
]

print(f"Loaded template batch 1: {len(questions_data)} questions.")
