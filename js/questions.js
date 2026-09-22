/**
 * Trilingual Dataset (English, Vietnamese, Thai) for 50 Java Interview Questions
 */
const quizData = [
  {
    "id": 1,
    "code": "O06",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "A company has `Employee` as a general type, with `Developer` and `Designer` as specialized types. Which design best represents this relationship?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "`Employee` inherits `Developer` and `Designer`"
          },
          {
            "key": "B",
            "text": "`Developer` and `Designer` inherit `Employee`"
          },
          {
            "key": "C",
            "text": "`Employee` and `Developer` must be unrelated"
          },
          {
            "key": "D",
            "text": "`Developer` contains `Employee`"
          }
        ],
        "explanation": "Developer and Designer are specialized types of Employee. The \"Is-A\" inheritance relationship means Developer and Designer inherit from the general Employee class."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Một công ty có `Employee` là kiểu tổng quát, với `Developer` và `Designer` là các kiểu chuyên biệt. Thiết kế nào thể hiện tốt nhất mối quan hệ này?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Employee kế thừa Developer và Designer"
          },
          {
            "key": "B",
            "text": "Developer và Designer kế thừa Employee"
          },
          {
            "key": "C",
            "text": "Employee và Developer không liên quan đến nhau"
          },
          {
            "key": "D",
            "text": "Developer chứa Employee"
          }
        ],
        "explanation": "Quan hệ \"Is-A\" (Kế thừa - Inheritance): `Employee` là lớp cha (tổng quát), `Developer` và `Designer` là các lớp con chuyên biệt kế thừa các thuộc tính và hành vi chung từ `Employee`."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "บริษัทแห่งหนึ่งมี `Employee` เป็นประเภททั่วไป โดยมี `Developer` และ `Designer` เป็นประเภทเฉพาะ การออกแบบใดแสดงความสัมพันธ์นี้ได้ดีที่สุด?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Employee สืบทอดคุณสมบัติจาก Developer และ Designer"
          },
          {
            "key": "B",
            "text": "Developer และ Designer สืบทอดคุณสมบัติจาก Employee"
          },
          {
            "key": "C",
            "text": "Employee และ Developer ต้องไม่เกี่ยวข้องกัน"
          },
          {
            "key": "D",
            "text": "Developer ประกอบด้วย Employee"
          }
        ],
        "explanation": "Developer และ Designer เป็นประเภทเฉพาะของ Employee ความสัมพันธ์แบบ \"Is-A\" หมายถึง Developer และ Designer สืบทอดคุณสมบัติมาจากคลาส Employee ทั่วไป"
      }
    }
  },
  {
    "id": 2,
    "code": "L14",
    "category": "Logic",
    "isHard": true,
    "codeSnippet": null,
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "You have 1,000 bottles and exactly one bottle is contaminated. You have test strips that turn positive if exposed to the contaminated bottle. All tests can be performed simultaneously in one round. What is the minimum number of strips required to identify the contaminated bottle?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "8"
          },
          {
            "key": "B",
            "text": "9"
          },
          {
            "key": "C",
            "text": "10"
          },
          {
            "key": "D",
            "text": "11"
          }
        ],
        "explanation": "Binary encoding problem: With n strips in 1 simultaneous round, we can represent 2^n unique states. Since 2^9 = 512 < 1000 and 2^10 = 1024 >= 1000, exactly 10 strips are required."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Bạn có 1.000 chai nước và có đúng một chai bị nhiễm độc. Bạn có các que thử sẽ chuyển màu dương tính nếu tiếp xúc với chai có độc. Tất cả các xét nghiệm đều có thể thực hiện đồng thời trong 1 lần thử. Số lượng que thử tối thiểu cần thiết để xác định chính xác chai bị nhiễm độc là bao nhiêu?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "8"
          },
          {
            "key": "B",
            "text": "9"
          },
          {
            "key": "C",
            "text": "10"
          },
          {
            "key": "D",
            "text": "11"
          }
        ],
        "explanation": "Đây là bài toán tìm nhị phân bằng que thử trong 1 lần thử. Mỗi chai từ 1 đến 1000 được đánh mã nhị phân 10 bit ($2^{10} = 1024 \\ge 1000$). Ta nhỏ mẫu của chai vào que thứ $k$ nếu bit thứ $k$ của mã chai đó là 1. Sau khi thử, kết quả đổi màu của 10 que thử ghép lại thành đúng chuỗi nhị phân xác định vị trí chai có độc. Với 9 que thì $2^9 = 512 < 1000$ (không đủ). Do đó cần tối thiểu 10 que."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "คุณมีขวดน้ำ 1,000 ขวด และมีขวดเดียวที่มีสารปนเปื้อน คุณมีแถบตรวจที่จะแสดงผลบวกหากสัมผัสกับขวดที่มีสารปนเปื้อน การทดสอบทั้งหมดสามารถทำพร้อมกันได้ในรอบเดียว จำนวนแถบตรวจขั้นต่ำที่ต้องใช้เพื่อระบุขวดที่มีสารปนเปื้อนคือเท่าใด?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "8"
          },
          {
            "key": "B",
            "text": "9"
          },
          {
            "key": "C",
            "text": "10"
          },
          {
            "key": "D",
            "text": "11"
          }
        ],
        "explanation": "การเข้ารหัสแบบเลขฐานสอง: แถบตรวจ n แถบ สามารถแทนสถานะได้ 2^n สถานะ เนื่องจาก 2^9 = 512 < 1000 และ 2^10 = 1024 >= 1000 จึงจำเป็นต้องใช้แถบตรวจอย่างน้อย 10 แถบ"
      }
    }
  },
  {
    "id": 3,
    "code": "J02",
    "category": "Java",
    "isHard": false,
    "codeSnippet": "Person p1 = new Person(); \nPerson p2 = p1; \np2.name = \"Alice\";",
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Java Core",
        "question": "Consider:\n``",
        "questionAfter": "``\nWhat is the value of `p1.name`?",
        "options": [
          {
            "key": "A",
            "text": "`null`"
          },
          {
            "key": "B",
            "text": "`Alice`"
          },
          {
            "key": "C",
            "text": "Compilation error"
          },
          {
            "key": "D",
            "text": "An unpredictable value"
          }
        ],
        "explanation": "`Person p2 = p1;` copies the object reference on the Heap. Both variables point to the exact same object, so modifying `p2.name` also reflects on `p1.name`."
      },
      "vi": {
        "categoryName": "Java Core",
        "question": "Xét đoạn mã sau:",
        "questionAfter": "Giá trị của `p1.name` là gì?",
        "options": [
          {
            "key": "A",
            "text": "null"
          },
          {
            "key": "B",
            "text": "Alice"
          },
          {
            "key": "C",
            "text": "Lỗi biên dịch (Compilation error)"
          },
          {
            "key": "D",
            "text": "Một giá trị không thể dự đoán"
          }
        ],
        "explanation": "Biến đối tượng trong Java lưu trữ địa chỉ tham chiếu vùng nhớ trên Heap. Câu lệnh `Person p2 = p1;` gán địa chỉ của cùng một đối tượng từ `p1` sang `p2`. Khi thay đổi `p2.name`, đối tượng thực tế bị thay đổi, do đó `p1.name` cũng mang giá trị `\"Alice\"`."
      },
      "th": {
        "categoryName": "Java Core",
        "question": "พิจารณาโค้ดต่อไปนี้:",
        "questionAfter": "ค่าของ `p1.name` คืออะไร?",
        "options": [
          {
            "key": "A",
            "text": "null"
          },
          {
            "key": "B",
            "text": "Alice"
          },
          {
            "key": "C",
            "text": "ข้อผิดพลาดในการคอมไพล์ (Compilation error)"
          },
          {
            "key": "D",
            "text": "ค่าที่คาดเดาไม่ได้"
          }
        ],
        "explanation": "คำสั่ง `Person p2 = p1;` คัดลอกการอ้างอิงออบเจกต์บน Heap ตัวแปรทั้งสองชี้ไปยังออบเจกต์เดียวกัน ดังนั้นเมื่อเปลี่ยน `p2.name` จึงทำให้ `p1.name` มีค่าเป็น \"Alice\" เช่นกัน"
      }
    }
  },
  {
    "id": 4,
    "code": "O13",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "A system defines a `Notification` abstraction with `send()`. `EmailNotification` and `SmsNotification` provide their own implementations. What is the main purpose of the abstraction?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "To force all notifications to use identical internal code"
          },
          {
            "key": "B",
            "text": "To expose a common contract while hiding implementation details"
          },
          {
            "key": "C",
            "text": "To prevent creating notification objects"
          },
          {
            "key": "D",
            "text": "To eliminate methods"
          }
        ],
        "explanation": "Abstraction defines a common contract (via methods like `send()`) while encapsulating and hiding the underlying implementation details."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Một hệ thống định nghĩa tính trừu tượng `Notification` với phương thức `send()`. `EmailNotification` và `SmsNotification` cung cấp các cài đặt riêng của chúng. Mục đích chính của tính trừu tượng ở đây là gì?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Bắt buộc tất cả các thông báo phải dùng mã nội bộ giống hệt nhau"
          },
          {
            "key": "B",
            "text": "Công khai một giao ước chung đồng thời ẩn đi các chi tiết cài đặt"
          },
          {
            "key": "C",
            "text": "Ngăn chặn việc tạo các đối tượng thông báo"
          },
          {
            "key": "D",
            "text": "Loại bỏ các phương thức"
          }
        ],
        "explanation": "Mục đích cốt lõi của tính trừu tượng (Abstraction) là công khai giao diện chung (`send()`), giúp các module bên ngoài tương tác thông qua hợp đồng chung mà không cần quan tâm đến cách thức gửi chi tiết của Email hay SMS."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "ระบบหนึ่งกำหนด Abstraction ชื่อ `Notification` พร้อมเมธอด `send()` โดย `EmailNotification` และ `SmsNotification` มีการทำงานของตนเอง วัตถุประสงค์หลักของ Abstraction นี้คืออะไร?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "เพื่อบังคับให้การแจ้งเตือนทั้งหมดใช้โค้ดภายในที่เหมือนกัน"
          },
          {
            "key": "B",
            "text": "เพื่อเปิดเผยข้อตกลงร่วมกัน (contract) ในขณะที่ซ่อนรายละเอียดการทำงาน"
          },
          {
            "key": "C",
            "text": "เพื่อป้องกันไม่ให้สร้างออบเจกต์การแจ้งเตือน"
          },
          {
            "key": "D",
            "text": "เพื่อกำจัดเมธอดทิ้ง"
          }
        ],
        "explanation": "Abstraction กำหนดข้อตกลงร่วมกัน (สัญญา) ผ่านเมธอด เช่น `send()` ในขณะที่ซ่อนรายละเอียดการทำงานเฉพาะของแต่ละคลาสไว้"
      }
    }
  },
  {
    "id": 5,
    "code": "P06",
    "category": "Programming",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Programming Skills",
        "question": "Let $f(x) = x + 2$ and $g(x) = 3x$. What is $g(f(4))$?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "14"
          },
          {
            "key": "B",
            "text": "18"
          },
          {
            "key": "C",
            "text": "20"
          },
          {
            "key": "D",
            "text": "24"
          }
        ],
        "explanation": "Evaluate inside-out: f(4) = 4 + 2 = 6, then g(f(4)) = g(6) = 3 * 6 = 18."
      },
      "vi": {
        "categoryName": "Kỹ năng Lập trình",
        "question": "Cho $f(x) = x + 2$ và $g(x) = 3x$. Giá trị của $g(f(4))$ là bao nhiêu?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "14"
          },
          {
            "key": "B",
            "text": "18"
          },
          {
            "key": "C",
            "text": "20"
          },
          {
            "key": "D",
            "text": "24"
          }
        ],
        "explanation": "Tính toán hàm lồng nhau từ trong ra ngoài:\n  1. $f(4) = 4 + 2 = 6$.\n  2. $g(f(4)) = g(6) = 3 \\times 6 = 18$."
      },
      "th": {
        "categoryName": "ทักษะการเขียนโปรแกรม",
        "question": "กำหนดให้ $f(x) = x + 2$ และ $g(x) = 3x$ ค่าของ $g(f(4))$ คือเท่าใด?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "14"
          },
          {
            "key": "B",
            "text": "18"
          },
          {
            "key": "C",
            "text": "20"
          },
          {
            "key": "D",
            "text": "24"
          }
        ],
        "explanation": "คำนวณจากฟังก์ชันด้านในก่อน: f(4) = 4 + 2 = 6 จากนั้น g(6) = 3 * 6 = 18"
      }
    }
  },
  {
    "id": 6,
    "code": "L06",
    "category": "Logic",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "A",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "Four people A, B, C, D are suspects. Exactly one person is guilty. Each makes one statement.",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A"
          },
          {
            "key": "B",
            "text": "B"
          },
          {
            "key": "C",
            "text": "C"
          },
          {
            "key": "D",
            "text": "D"
          }
        ],
        "explanation": "If A is guilty: statement A is true, B is false, C is false, D is true. Exactly two statements are true (A and D), satisfying the problem conditions."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Bốn người A, B, C, D là các nghi phạm. Có đúng một người có tội. Mỗi người đưa ra một lời khai:\n- A: \"A có tội.\"\n- B: \"A không có tội.\"\n- C: \"B có tội.\"\n- D: \"Người có tội là A hoặc B.\"\nBiết có đúng hai lời khai là sự thật. Ai là người có tội?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A"
          },
          {
            "key": "B",
            "text": "B"
          },
          {
            "key": "C",
            "text": "C"
          },
          {
            "key": "D",
            "text": "D"
          }
        ],
        "explanation": "Xét từng trường hợp:\n  - Nếu **A có tội**: A nói thật (1), B nói dối (0), C nói dối (0), D nói thật (1). Có đúng 2 phát biểu thật $\\Rightarrow$ **Thỏa mãn**.\n  - Nếu B có tội: A nói dối (0), B nói thật (1), C nói thật (1), D nói thật (1) $\\Rightarrow$ 3 phát biểu thật (loại).\n  - Nếu C hoặc D có tội: chỉ có B nói thật $\\Rightarrow$ 1 phát biểu thật (loại)."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "มีผู้ต้องสงสัย 4 คน ได้แก่ A, B, C, D มีคนผิดเพียงคนเดียว แต่ละคนให้การดังนี้:\n- A: \"A เป็นคนผิด\"\n- B: \"A ไม่ได้ทำผิด\"\n- C: \"B เป็นคนผิด\"\n- D: \"คนผิดคือ A หรือไม่ก็ B\"\nหากมีข้อความที่เป็นจริงตรงกับความจริง 2 ข้อความ ใครคือคนผิด?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A"
          },
          {
            "key": "B",
            "text": "B"
          },
          {
            "key": "C",
            "text": "C"
          },
          {
            "key": "D",
            "text": "D"
          }
        ],
        "explanation": "ถ้า A เป็นคนผิด: คำให้การของ A เป็นจริง, B เป็นเท็จ, C เป็นเท็จ, D เป็นจริง มีข้อความจริง 2 ข้อความ (A และ D) ซึ่งตรงตามเงื่อนไขพอดี"
      }
    }
  },
  {
    "id": 7,
    "code": "P05",
    "category": "Programming",
    "isHard": false,
    "codeSnippet": "for (int i = 1; i <= 4; i++) { \n    for (int j = i; j <= 4; j++) { \n        print(\"X\"); \n    } \n}",
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Programming Skills",
        "question": "How many times is X printed?\n``",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "8"
          },
          {
            "key": "B",
            "text": "9"
          },
          {
            "key": "C",
            "text": "10"
          },
          {
            "key": "D",
            "text": "12"
          }
        ],
        "explanation": "When i=1: 4 times. i=2: 3 times. i=3: 2 times. i=4: 1 time. Total = 4 + 3 + 2 + 1 = 10 times."
      },
      "vi": {
        "categoryName": "Kỹ năng Lập trình",
        "question": "Chữ \"X\" được in ra bao nhiêu lần?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "8"
          },
          {
            "key": "B",
            "text": "9"
          },
          {
            "key": "C",
            "text": "10"
          },
          {
            "key": "D",
            "text": "12"
          }
        ],
        "explanation": "- $i = 1$: $j$ chạy từ 1 đến 4 $\\rightarrow$ 4 lần.\n  - $i = 2$: $j$ chạy từ 2 đến 4 $\\rightarrow$ 3 lần.\n  - $i = 3$: $j$ chạy từ 3 đến 4 $\\rightarrow$ 2 lần.\n  - $i = 4$: $j$ chạy từ 4 đến 4 $\\rightarrow$ 1 lần.  \n  Tổng cộng: $4 + 3 + 2 + 1 = 10$ lần."
      },
      "th": {
        "categoryName": "ทักษะการเขียนโปรแกรม",
        "question": "ข้อความ \"X\" จะถูกพิมพ์ออกมากี่ครั้ง?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "8"
          },
          {
            "key": "B",
            "text": "9"
          },
          {
            "key": "C",
            "text": "10"
          },
          {
            "key": "D",
            "text": "12"
          }
        ],
        "explanation": "เมื่อ i=1: พิมพ์ 4 ครั้ง, i=2: พิมพ์ 3 ครั้ง, i=3: พิมพ์ 2 ครั้ง, i=4: พิมพ์ 1 ครั้ง รวมทั้งหมด = 4 + 3 + 2 + 1 = 10 ครั้ง"
      }
    }
  },
  {
    "id": 8,
    "code": "J06",
    "category": "Java",
    "isHard": false,
    "codeSnippet": "class Counter { \n    static int count = 0; \n} \nCounter a = new Counter(); \nCounter b = new Counter(); \na.count++; \nb.count++;",
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Java Core",
        "question": "Consider:\n``",
        "questionAfter": "``\nWhat is `Counter.count`?",
        "options": [
          {
            "key": "A",
            "text": "0"
          },
          {
            "key": "B",
            "text": "1"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "Compilation error"
          }
        ],
        "explanation": "The `static` modifier means `count` is a class variable shared across all instances. Incrementing via `a.count++` and `b.count++` modifies the same shared variable, resulting in 2."
      },
      "vi": {
        "categoryName": "Java Core",
        "question": "Xét đoạn mã sau:",
        "questionAfter": "Giá trị của `Counter.count` là bao nhiêu?",
        "options": [
          {
            "key": "A",
            "text": "0"
          },
          {
            "key": "B",
            "text": "1"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "Lỗi biên dịch (Compilation error)"
          }
        ],
        "explanation": "Biến có từ khóa `static` thuộc về lớp (class variable) và được chia sẻ chung cho toàn bộ các thể hiện của lớp đó. Cả `a.count++` và `b.count++` đều cùng tác động tăng giá trị của biến dùng chung này, từ 0 lên 2."
      },
      "th": {
        "categoryName": "Java Core",
        "question": "พิจารณาโค้ดต่อไปนี้:",
        "questionAfter": "ค่าของ `Counter.count` คืออะไร?",
        "options": [
          {
            "key": "A",
            "text": "0"
          },
          {
            "key": "B",
            "text": "1"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "ข้อผิดพลาดในการคอมไพล์ (Compilation error)"
          }
        ],
        "explanation": "ตัวแปร `static` เป็นตัวแปรระดับคลาสที่แชร์ร่วมกันในทุกอินสแตนซ์ การเพิ่มค่าผ่าน `a.count++` และ `b.count++` ส่งผลต่อตัวแปรตัวเดียวกัน ทำให้มีค่าเท่ากับ 2"
      }
    }
  },
  {
    "id": 9,
    "code": "L05",
    "category": "Logic",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "A system has the following rules:",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "The server is overloaded"
          },
          {
            "key": "B",
            "text": "The server is not overloaded"
          },
          {
            "key": "C",
            "text": "The response time increased"
          },
          {
            "key": "D",
            "text": "We cannot determine whether the server is overloaded"
          }
        ],
        "explanation": "By Modus Tollens (contrapositive law): ~R implies ~Q (response time did not increase), and ~Q implies ~P (the server is not overloaded)."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Một hệ thống có các quy tắc sau:\n- Nếu máy chủ quá tải, thời gian phản hồi sẽ tăng.\n- Nếu thời gian phản hồi tăng, người dùng sẽ nhận cảnh báo.\n- Hôm nay người dùng không nhận được cảnh báo.\nChúng ta có thể kết luận điều gì?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Máy chủ đang bị quá tải"
          },
          {
            "key": "B",
            "text": "Máy chủ không bị quá tải"
          },
          {
            "key": "C",
            "text": "Thời gian phản hồi đã tăng"
          },
          {
            "key": "D",
            "text": "Không thể xác định được máy chủ có bị quá tải hay không"
          }
        ],
        "explanation": "Dựa vào luật phản đảo (Modus Tollens):\n  - Vì $\\neg R$ (người dùng không nhận cảnh báo) $\\Rightarrow \\neg Q$ (thời gian phản hồi không tăng).\n  - Vì $\\neg Q$ $\\Rightarrow \\neg P$ (máy chủ không bị quá tải)."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "ระบบหนึ่งมีกฎเกณฑ์ดังนี้:\n- หากเซิร์ฟเวอร์โหลดเกิน เวลาตอบสนองจะเพิ่มขึ้น (P -> Q)\n- หากเวลาตอบสนองเพิ่มขึ้น ผู้ใช้จะได้รับคำเตือน (Q -> R)\n- วันนี้ผู้ใช้ไม่ได้รับคำเตือน (~R)\nเราสามารถสรุปได้อย่างไร?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "เซิร์ฟเวอร์ทำงานหนักเกินไป"
          },
          {
            "key": "B",
            "text": "เซิร์ฟเวอร์ไม่ได้ทำงานหนักเกินไป"
          },
          {
            "key": "C",
            "text": "เวลาตอบสนองเพิ่มขึ้น"
          },
          {
            "key": "D",
            "text": "ไม่สามารถระบุได้ว่าเซิร์ฟเวอร์ทำงานหนักเกินไปหรือไม่"
          }
        ],
        "explanation": "ตามหลักตรรกศาสตร์ Modus Tollens: เมื่อผู้ใช้ไม่ได้รับคำเตือน (~R) แสดงว่าเวลาตอบสนองไม่ได้เพิ่มขึ้น (~Q) และสรุปได้ว่าเซิร์ฟเวอร์ไม่ได้โหลดเกิน (~P)"
      }
    }
  },
  {
    "id": 10,
    "code": "O03",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": "Person p1 = new Person(); \nPerson p2 = new Person(); \np2 = p1;",
    "correctAnswer": "A",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "What happens after this code?\n``",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "p1 and p2 refer to the same object"
          },
          {
            "key": "B",
            "text": "p1 and p2 are always two different objects"
          },
          {
            "key": "C",
            "text": "p1 is deleted immediately"
          },
          {
            "key": "D",
            "text": "p2 becomes null"
          }
        ],
        "explanation": "The reference assignment `p2 = p1;` makes `p2` point to the object referenced by `p1`. The original object initially created for `p2` becomes eligible for garbage collection."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Điều gì xảy ra sau khi thực thi đoạn mã trên?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "p1 và p2 cùng tham chiếu đến cùng một đối tượng"
          },
          {
            "key": "B",
            "text": "p1 và p2 luôn là hai đối tượng khác nhau"
          },
          {
            "key": "C",
            "text": "p1 bị xóa ngay lập tức"
          },
          {
            "key": "D",
            "text": "p2 trở thành null"
          }
        ],
        "explanation": "Gán `p2 = p1;` làm cho biến tham chiếu `p2` trỏ đến cùng đối tượng mà `p1` đang trỏ. Đối tượng ban đầu được tạo cho `p2` trở thành đối tượng mồ côi (không còn tham chiếu) và sẽ được Garbage Collector thu hồi sau đó."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "เกิดอะไรขึ้นหลังจากรันโค้ดนี้?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "p1 และ p2 อ้างอิงไปยังออบเจกต์เดียวกัน"
          },
          {
            "key": "B",
            "text": "p1 และ p2 ยังคงเป็นสองออบเจกต์ที่แตกต่างกันเสมอ"
          },
          {
            "key": "C",
            "text": "p1 ถูกลบทันที"
          },
          {
            "key": "D",
            "text": "p2 กลายเป็น null"
          }
        ],
        "explanation": "การกำหนดค่า `p2 = p1;` ทำให้ตัวแปร `p2` ชี้ไปยังออบเจกต์เดียวกันกับที่ `p1` กำลังอ้างอิงอยู่"
      }
    }
  },
  {
    "id": 11,
    "code": "L10",
    "category": "Logic",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "A",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "Two machines operate for 40 minutes. Machine 1 produces one item every 12 minutes and Machine 2 produces one item every 8 minutes. If both start at the same time and only complete items are counted, how many items are produced in total?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "8"
          },
          {
            "key": "B",
            "text": "10"
          },
          {
            "key": "C",
            "text": "12"
          },
          {
            "key": "D",
            "text": "13"
          }
        ],
        "explanation": "Machine 1 produces 40 // 12 = 3 items (at min 12, 24, 36). Machine 2 produces 40 // 8 = 5 items (at min 8, 16, 24, 32, 40). Total completed = 3 + 5 = 8 items."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Hai máy hoạt động trong 40 phút. Máy 1 sản xuất được một sản phẩm sau mỗi 12 phút và Máy 2 sản xuất được một sản phẩm sau mỗi 8 phút. Nếu cả hai máy cùng bắt đầu hoạt động và chỉ tính các sản phẩm đã hoàn thành, tổng cộng có bao nhiêu sản phẩm được tạo ra?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "8"
          },
          {
            "key": "B",
            "text": "10"
          },
          {
            "key": "C",
            "text": "12"
          },
          {
            "key": "D",
            "text": "13"
          }
        ],
        "explanation": "- Máy 1 hoàn thành 1 sản phẩm mỗi 12 phút $\\rightarrow \\lfloor 40 / 12 \\rfloor = 3$ sản phẩm (vào phút 12, 24, 36).\n  - Máy 2 hoàn thành 1 sản phẩm mỗi 8 phút $\\rightarrow \\lfloor 40 / 8 \\rfloor = 5$ sản phẩm (vào phút 8, 16, 24, 32, 40).\n  - Tổng số sản phẩm hoàn chỉnh = $3 + 5 = 8$."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "เครื่องจักรสองเครื่องทำงานเป็นเวลา 40 นาที เครื่องที่ 1 ผลิตสินค้าได้ 1 ชิ้นทุกๆ 12 นาที และเครื่องที่ 2 ผลิตสินค้าได้ 1 ชิ้นทุกๆ 8 นาที หากทั้งสองเครื่องเริ่มทำงานพร้อมกันและนับเฉพาะสินค้าที่ผลิตเสร็จสมบูรณ์ จะผลิตสินค้าได้ทั้งหมดกี่ชิ้น?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "8"
          },
          {
            "key": "B",
            "text": "10"
          },
          {
            "key": "C",
            "text": "12"
          },
          {
            "key": "D",
            "text": "13"
          }
        ],
        "explanation": "เครื่องที่ 1 ผลิตได้ 40 // 12 = 3 ชิ้น (นาทีที่ 12, 24, 36) เครื่องที่ 2 ผลิตได้ 40 // 8 = 5 ชิ้น (นาทีที่ 8, 16, 24, 32, 40) รวมทั้งหมด 3 + 5 = 8 ชิ้น"
      }
    }
  },
  {
    "id": 12,
    "code": "O11",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": "Animal[] animals = { new Dog(), new Cat(), new Dog() };",
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "Consider:\n``",
        "questionAfter": "``\nEach subclass overrides `sound()`. What happens when a loop calls `animals[i].sound()`?",
        "options": [
          {
            "key": "A",
            "text": "The Animal implementation is always called"
          },
          {
            "key": "B",
            "text": "The program chooses the method based only on the array type"
          },
          {
            "key": "C",
            "text": "The Dog/Cat implementation corresponding to each actual object is called"
          },
          {
            "key": "D",
            "text": "The program throws an error because the array contains different subclasses"
          }
        ],
        "explanation": "Polymorphism and runtime dynamic method dispatch execute the overridden method of the actual object instance (Dog or Cat) regardless of the reference array type."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Xét mảng sau:\nMỗi lớp con ghi đè phương thức `sound()`. Điều gì xảy ra khi một vòng lặp gọi `animals[i].sound()`?",
        "questionAfter": "``\nEach subclass overrides `sound()`. What happens when a loop calls `animals[i].sound()`?",
        "options": [
          {
            "key": "A",
            "text": "Cài đặt của lớp Animal luôn luôn được gọi"
          },
          {
            "key": "B",
            "text": "Chương trình chọn phương thức chỉ dựa trên kiểu của mảng"
          },
          {
            "key": "C",
            "text": "Cài đặt tương ứng của Dog/Cat đối với từng đối tượng thực tế sẽ được gọi"
          },
          {
            "key": "D",
            "text": "Chương trình báo lỗi vì mảng chứa các lớp con khác nhau"
          }
        ],
        "explanation": "Đây là tính Đa hình (Polymorphism) và cơ chế Dynamic Binding lúc runtime. Dù mảng có kiểu khai báo là `Animal[]`, khi gọi phương thức bị ghi đè, JVM sẽ gọi hàm tương ứng với kiểu đối tượng thực tế (`Dog` hoặc `Cat`)."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "พิจารณาอาร์เรย์ต่อไปนี้:\nคลาสย่อยแต่ละคลาสทำการ Override เมธอด `sound()` จะเกิดอะไรขึ้นเมื่อลูปเรียก `animals[i].sound()`?",
        "questionAfter": "``\nEach subclass overrides `sound()`. What happens when a loop calls `animals[i].sound()`?",
        "options": [
          {
            "key": "A",
            "text": "เมธอดของคลาส Animal จะถูกเรียกเสมอ"
          },
          {
            "key": "B",
            "text": "โปรแกรมเลือกเมธอดตามประเภทของอาร์เรย์เท่านั้น"
          },
          {
            "key": "C",
            "text": "เมธอดของ Dog/Cat ที่ตรงกับออบเจกต์จริง ณ ขณะนั้นจะถูกเรียกทำงาน"
          },
          {
            "key": "D",
            "text": "โปรแกรมแจ้งข้อผิดพลาดเนื่องจากอาร์เรย์มีคลาสย่อยต่างชนิดกัน"
          }
        ],
        "explanation": "คุณสมบัติความหลากหลาย (Polymorphism) และ Dynamic Binding ในขณะรันไทม์จะเรียกใช้เมธอดของออบเจกต์จริง (Dog หรือ Cat) ที่ถูกสร้างขึ้น"
      }
    }
  },
  {
    "id": 13,
    "code": "P03",
    "category": "Programming",
    "isHard": false,
    "codeSnippet": "int x = 1; \nwhile (x < 20) { \n    x = x * 2 + 1; \n} \nprint(x);",
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Programming Skills",
        "question": "What is printed?\n``",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "15"
          },
          {
            "key": "B",
            "text": "20"
          },
          {
            "key": "C",
            "text": "31"
          },
          {
            "key": "D",
            "text": "63"
          }
        ],
        "explanation": "Loop values: x starts at 1 -> 3 -> 7 -> 15 -> 31. At x = 31, condition x < 20 is false, loop terminates and prints 31."
      },
      "vi": {
        "categoryName": "Kỹ năng Lập trình",
        "question": "Kết quả in ra màn hình là gì?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "15"
          },
          {
            "key": "B",
            "text": "20"
          },
          {
            "key": "C",
            "text": "31"
          },
          {
            "key": "D",
            "text": "63"
          }
        ],
        "explanation": "Diễn tiến giá trị qua từng vòng lặp:\n  - Khởi tạo: $x = 1$.\n  - Vòng 1: $1 < 20 \\rightarrow x = 1 \\times 2 + 1 = 3$.\n  - Vòng 2: $3 < 20 \\rightarrow x = 3 \\times 2 + 1 = 7$.\n  - Vòng 3: $7 < 20 \\rightarrow x = 7 \\times 2 + 1 = 15$.\n  - Vòng 4: $15 < 20 \\rightarrow x = 15 \\times 2 + 1 = 31$.\n  - Vòng 5: $31 < 20$ (Sai $\\rightarrow$ dừng lặp). In ra: 31."
      },
      "th": {
        "categoryName": "ทักษะการเขียนโปรแกรม",
        "question": "ค่าที่ถูกพิมพ์ออกมาคืออะไร?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "15"
          },
          {
            "key": "B",
            "text": "20"
          },
          {
            "key": "C",
            "text": "31"
          },
          {
            "key": "D",
            "text": "63"
          }
        ],
        "explanation": "การวนลูป: x เริ่มที่ 1 -> 3 -> 7 -> 15 -> 31 เมื่อ x = 31 เงื่อนไข x < 20 เป็นเท็จ ลูปหยุดและพิมพ์ 31"
      }
    }
  },
  {
    "id": 14,
    "code": "O14",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "Why can programming against a `Payment` interface make a system easier to extend?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Code using Payment depends on one specific payment implementation"
          },
          {
            "key": "B",
            "text": "Code can work with different implementations that satisfy the same contract"
          },
          {
            "key": "C",
            "text": "Interfaces automatically make code faster"
          },
          {
            "key": "D",
            "text": "Interfaces remove the need for testing"
          }
        ],
        "explanation": "Programming against interfaces adheres to Open/Closed and Dependency Inversion principles, allowing new payment types to be integrated without modifying existing business logic."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Vì sao việc lập trình dựa trên giao diện (`Payment` interface) giúp hệ thống dễ dàng mở rộng hơn?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Mã sử dụng Payment phụ thuộc vào một cài đặt thanh toán cụ thể"
          },
          {
            "key": "B",
            "text": "Mã có thể hoạt động với các cài đặt khác nhau miễn là thỏa mãn cùng một giao ước"
          },
          {
            "key": "C",
            "text": "Interface tự động làm cho mã nguồn chạy nhanh hơn"
          },
          {
            "key": "D",
            "text": "Interface giúp loại bỏ sự cần thiết của việc viết kiểm thử"
          }
        ],
        "explanation": "Tuân thủ nguyên lý Dependency Inversion và Open/Closed Principle (SOLID). Mã nguồn chỉ giao tiếp qua `Payment` interface, cho phép cắm thêm các cổng thanh toán mới mà không cần chỉnh sửa code lõi."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "เหตุใดการเขียนโปรแกรมโดยอิงกับ `Payment` interface จึงทำให้ระบบขยายขีดความสามารถได้ง่ายขึ้น?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "โค้ดที่ใช้ Payment ขึ้นอยู่กับการทำงานของระบบการชำระเงินแบบใดแบบหนึ่งโดยเฉพาะ"
          },
          {
            "key": "B",
            "text": "โค้ดสามารถทำงานร่วมกับการติดตั้งใช้งานที่หลากหลายซึ่งตอบสนองข้อตกลงเดียวกันได้"
          },
          {
            "key": "C",
            "text": "Interface ทำให้โค้ดทำงานเร็วขึ้นโดยอัตโนมัติ"
          },
          {
            "key": "D",
            "text": "Interface ทำให้ไม่จำเป็นต้องทำการทดสอบ"
          }
        ],
        "explanation": "การเขียนโปรแกรมอิงตาม Interface เป็นไปตามหลักการ Open/Closed และ Dependency Inversion ทำให้สามารถเพิ่มช่องทางการชำระเงินใหม่ๆ ได้โดยไม่ต้องแก้ไขโค้ดเดิม"
      }
    }
  },
  {
    "id": 15,
    "code": "J10",
    "category": "Java",
    "isHard": false,
    "codeSnippet": "Counter a = new Counter(); \nCounter b = a; \na.increment(); \nb.increment();",
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Java Core",
        "question": "Consider the following Java code. Assume each `Counter` object has its own instance variable `value`, initialized to 0, and `increment()` increases that object's value by 1.\n``",
        "questionAfter": "``\nWhat is the value of `a.value` after these statements?",
        "options": [
          {
            "key": "A",
            "text": "0"
          },
          {
            "key": "B",
            "text": "1"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "Compilation error"
          }
        ],
        "explanation": "Both `a` and `b` reference the same Counter object. Incrementing twice increases the single object's instance variable to 2."
      },
      "vi": {
        "categoryName": "Java Core",
        "question": "Xét đoạn mã Java sau. Giả định mỗi đối tượng `Counter` có biến thể hiện `value` riêng, khởi tạo bằng 0, và `increment()` tăng `value` của đối tượng đó thêm 1.",
        "questionAfter": "Giá trị của `a.value` sau các câu lệnh này là gì?",
        "options": [
          {
            "key": "A",
            "text": "0"
          },
          {
            "key": "B",
            "text": "1"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "Lỗi biên dịch (Compilation error)"
          }
        ],
        "explanation": "Cả hai biến tham chiếu `a` và `b` cùng trỏ tới một đối tượng `Counter` duy nhất. Gọi `a.increment()` rồi `b.increment()` làm tăng thuộc tính `value` của đối tượng đó 2 lần $\\rightarrow$ giá trị bằng 2."
      },
      "th": {
        "categoryName": "Java Core",
        "question": "พิจารณาโค้ด Java ต่อไปนี้ สมมติว่าออบเจกต์ `Counter` แต่ละตัวมีตัวแปรอินสแตนซ์ `value` ของตนเองที่เริ่มต้นด้วย 0 และ `increment()` จะเพิ่มค่าของออบเจกต์นั้นทีละ 1",
        "questionAfter": "ค่าของ `a.value` หลังจากคำสั่งเหล่านี้คืออะไร?",
        "options": [
          {
            "key": "A",
            "text": "0"
          },
          {
            "key": "B",
            "text": "1"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "ข้อผิดพลาดในการคอมไพล์ (Compilation error)"
          }
        ],
        "explanation": "ทั้ง `a` และ `b` อ้างอิงไปยังออบเจกต์ Counter ตัวเดียวกัน การเรียก increment() สองครั้งทำให้ค่า value เพิ่มเป็น 2"
      }
    }
  },
  {
    "id": 16,
    "code": "O08",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "A subclass provides its own implementation of a method that already exists in its superclass. What is this called?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Overloading"
          },
          {
            "key": "B",
            "text": "Overriding"
          },
          {
            "key": "C",
            "text": "Encapsulation"
          },
          {
            "key": "D",
            "text": "Composition"
          }
        ],
        "explanation": "Method Overriding is when a subclass provides a specific implementation for a method already declared in its superclass with the same signature."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Một lớp con cung cấp cài đặt riêng cho một phương thức đã tồn tại ở lớp cha của nó. Điều này được gọi là gì?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Nạp chồng (Overloading)"
          },
          {
            "key": "B",
            "text": "Ghi đè (Overriding)"
          },
          {
            "key": "C",
            "text": "Đóng gói (Encapsulation)"
          },
          {
            "key": "D",
            "text": "Hợp thành (Composition)"
          }
        ],
        "explanation": "Ghi đè phương thức (Method Overriding) là việc lớp con cung cấp cài đặt riêng cho phương thức đã có ở lớp cha với cùng tên, cùng danh sách tham số."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "การที่คลาสย่อยสร้างการทำงานขึ้นมาใหม่สำหรับเมธอดที่มีอยู่แล้วในคลาสแม่ เรียกว่าอะไร?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Overloading"
          },
          {
            "key": "B",
            "text": "Overriding"
          },
          {
            "key": "C",
            "text": "Encapsulation"
          },
          {
            "key": "D",
            "text": "Composition"
          }
        ],
        "explanation": "Method Overriding คือการที่คลาสลูกให้นิยามการทำงานใหม่ให้กับเมธอดที่มีชื่อและพารามิเตอร์เดียวกันกับในคลาสแม่"
      }
    }
  },
  {
    "id": 17,
    "code": "O04",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "An `Account` class keeps `balance` private and provides `deposit()` and `withdraw()` methods that validate transactions. Which OOP principle is primarily being applied?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Inheritance"
          },
          {
            "key": "B",
            "text": "Encapsulation"
          },
          {
            "key": "C",
            "text": "Polymorphism"
          },
          {
            "key": "D",
            "text": "Abstraction"
          }
        ],
        "explanation": "Encapsulation protects internal object state by declaring fields private and exposing validated public methods."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Lớp `Account` giữ thuộc tính `balance` ở mức private và cung cấp các phương thức `deposit()`, `withdraw()` để xác thực giao dịch. Nguyên lý OOP nào đang được áp dụng chủ yếu?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Kế thừa (Inheritance)"
          },
          {
            "key": "B",
            "text": "Đóng gói (Encapsulation)"
          },
          {
            "key": "C",
            "text": "Đa hình (Polymorphism)"
          },
          {
            "key": "D",
            "text": "Trừu tượng (Abstraction)"
          }
        ],
        "explanation": "Tính đóng gói (Encapsulation) bảo vệ dữ liệu nội bộ bằng cách đặt thuộc tính là `private` và chỉ cho phép truy cập, biến đổi có kiểm soát thông qua các phương thức `public`."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "คลาส `Account` กำหนดให้ `balance` เป็น private และจัดเตรียมเมธอด `deposit()` และ `withdraw()` เพื่อตรวจสอบความถูกต้องของธุรกรรม หลักการ OOP ใดถูกนำมาใช้เป็นหลัก?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "การสืบทอด (Inheritance)"
          },
          {
            "key": "B",
            "text": "การห่อหุ้ม (Encapsulation)"
          },
          {
            "key": "C",
            "text": "ความหลากหลาย (Polymorphism)"
          },
          {
            "key": "D",
            "text": "ความเป็นนามธรรม (Abstraction)"
          }
        ],
        "explanation": "การห่อหุ้ม (Encapsulation) ซ่อนตัวแปรภายในและควบคุมการเข้าถึงผ่านเมธอด public ที่มีเงื่อนไขตรวจสอบ"
      }
    }
  },
  {
    "id": 18,
    "code": "L07",
    "category": "Logic",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "There are 40 students. 24 know Java, 18 know Python, and 10 know both. How many know neither Java nor Python?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "6"
          },
          {
            "key": "B",
            "text": "8"
          },
          {
            "key": "C",
            "text": "10"
          },
          {
            "key": "D",
            "text": "12"
          }
        ],
        "explanation": "Students knowing at least one: |J U P| = 24 + 18 - 10 = 32. Neither = 40 - 32 = 8."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Có 40 học sinh. 24 bạn biết Java, 18 bạn biết Python, và 10 bạn biết cả hai. Có bao nhiêu bạn không biết cả Java lẫn Python?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "6"
          },
          {
            "key": "B",
            "text": "8"
          },
          {
            "key": "C",
            "text": "10"
          },
          {
            "key": "D",
            "text": "12"
          }
        ],
        "explanation": "Công thức tập hợp:\n  - Số người biết ít nhất 1 ngôn ngữ: $|J \\cup P| = 24 + 18 - 10 = 32$.\n  - Số người không biết ngôn ngữ nào: $40 - 32 = 8$."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "มีนักเรียน 40 คน โดย 24 คนรู้ภาษา Java, 18 คนรู้ภาษา Python และ 10 คนรู้ทั้งสองภาษา มีนักเรียนกี่คนที่ไม่รู้ทั้ง Java และ Python?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "6"
          },
          {
            "key": "B",
            "text": "8"
          },
          {
            "key": "C",
            "text": "10"
          },
          {
            "key": "D",
            "text": "12"
          }
        ],
        "explanation": "จำนวนคนที่รู้ภาษาใดภาษาหนึ่ง = 24 + 18 - 10 = 32 คน ดังนั้นคนที่ไม่รู้ทั้งสองภาษา = 40 - 32 = 8 คน"
      }
    }
  },
  {
    "id": 19,
    "code": "L03",
    "category": "Logic",
    "isHard": true,
    "codeSnippet": null,
    "correctAnswer": "A",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "A machine has three lights: A, B, and C. Initially, all three lights are OFF.\nEach operation must toggle exactly two lights:",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A = ON, B = ON, C = OFF** *(Hoặc bất kỳ trạng thái có số đèn bật là lẻ)*"
          },
          {
            "key": "B",
            "text": "42"
          },
          {
            "key": "C",
            "text": "44"
          },
          {
            "key": "D",
            "text": "46"
          }
        ],
        "explanation": "Each operation toggles exactly two lights, so the parity of lights turned ON remains invariant (always even). Therefore, an odd count of lights ON is impossible to reach."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Một cỗ máy có 3 bóng đèn: A, B, và C. Ban đầu cả 3 bóng đèn đều TẮT (OFF).\nMỗi thao tác phải đảo trạng thái của đúng 2 bóng đèn:\n- Thao tác 1: đảo A và B\n- Thao tác 2: đảo B và C\n- Thao tác 3: đảo A và C\nBạn có thể thực hiện các thao tác này tùy ý lần và theo thứ tự bất kỳ. Trạng thái nào sau đây KHÔNG THỂ đạt được?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A = ON, B = ON, C = OFF"
          },
          {
            "key": "B",
            "text": "42"
          },
          {
            "key": "C",
            "text": "44"
          },
          {
            "key": "D",
            "text": "46"
          }
        ],
        "explanation": "Mỗi thao tác luôn đảo trạng thái của đúng 2 bóng đèn. Do đó, tính chẵn/lẻ (parity) của tổng số bóng đèn đang BẬT luôn không đổi (bắt đầu là 0 đèn bật = số chẵn). Vì vậy không bao giờ có thể đạt tới trạng thái có 1 đèn hoặc 3 đèn bật (số lẻ). *(Lưu ý: các đáp án B, C, D là số trong đề gốc, đáp án duy nhất mô tả trạng thái đèn là A).*"
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "เครื่องจักรเครื่องหนึ่งมีไฟ 3 ดวง: A, B และ C ในตอนเริ่มต้นไฟทั้งสามดวง ปิด (OFF) อยู่\nการดำเนินการแต่ละครั้งจะต้องสลับสถานะของไฟ 2 ดวงพอดี:\n- คำสั่ง 1: สลับ A และ B\n- คำสั่ง 2: สลับ B และ C\n- คำสั่ง 3: สลับ A และ C\nคุณสามารถดำเนินการเหล่านี้กี่ครั้งก็ได้ในลำดับใดก็ได้ สถานะใดต่อไปนี้ที่เป็นไปไม่ได้ที่จะเกิดขึ้น?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A = ON, B = ON, C = OFF"
          },
          {
            "key": "B",
            "text": "42"
          },
          {
            "key": "C",
            "text": "44"
          },
          {
            "key": "D",
            "text": "46"
          }
        ],
        "explanation": "เนื่องจากแต่ละคำสั่งจะเปลี่ยนสถานะไฟ 2 ดวงเสมอ ทำให้จำนวนไฟที่เปิดจะรักษาภาวะคู่เสมอ (parity) จึงไม่สามารถมีไฟเปิดเป็นจำนวนคี่ (1 หรือ 3 ดวง) ได้"
      }
    }
  },
  {
    "id": 20,
    "code": "O07",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "A",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "Which relationship is the strongest example of inheritance?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Manager is an Employee"
          },
          {
            "key": "B",
            "text": "Car has an Engine"
          },
          {
            "key": "C",
            "text": "Library has Books"
          },
          {
            "key": "D",
            "text": "Computer uses a Keyboard"
          }
        ],
        "explanation": "Inheritance represents an \"Is-A\" relationship (Manager is an Employee). The others represent Has-A or Uses-A relationships."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Mối quan hệ nào sau đây là ví dụ điển hình nhất của tính kế thừa (Inheritance)?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Manager là một Employee (Manager is an Employee)"
          },
          {
            "key": "B",
            "text": "Car có một Engine (Car has an Engine)"
          },
          {
            "key": "C",
            "text": "Library có Books (Library has Books)"
          },
          {
            "key": "D",
            "text": "Computer dùng Keyboard (Computer uses a Keyboard)"
          }
        ],
        "explanation": "Quan hệ kế thừa là quan hệ \"Is-A\" (Manager là một Employee). B và C là quan hệ Has-A (Composition/Aggregation), D là quan hệ Use-A (Dependency)."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "ความสัมพันธ์ใดเป็นตัวอย่างที่ชัดเจนที่สุดของการสืบทอดคุณสมบัติ (Inheritance)?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Manager เป็น Employee คนหนึ่ง (Manager is an Employee)"
          },
          {
            "key": "B",
            "text": "Car มี Engine หนึ่งตัว (Car has an Engine)"
          },
          {
            "key": "C",
            "text": "Library มี Books (Library has Books)"
          },
          {
            "key": "D",
            "text": "Computer ใช้งาน Keyboard (Computer uses a Keyboard)"
          }
        ],
        "explanation": "การสืบทอดคุณสมบัติคือความสัมพันธ์แบบ \"Is-A\" (ผู้จัดการคือพนักงานคนหนึ่ง)"
      }
    }
  },
  {
    "id": 21,
    "code": "L02",
    "category": "Logic",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "What is the next number in the sequence: 2, 5, 11, 23, 47, ?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "91"
          },
          {
            "key": "B",
            "text": "94"
          },
          {
            "key": "C",
            "text": "95"
          },
          {
            "key": "D",
            "text": "97"
          }
        ],
        "explanation": "Sequence rule: Next = Previous * 2 + 1. Thus: 47 * 2 + 1 = 95."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Số tiếp theo trong dãy số sau là bao nhiêu: 2, 5, 11, 23, 47, ?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "91"
          },
          {
            "key": "B",
            "text": "94"
          },
          {
            "key": "C",
            "text": "95"
          },
          {
            "key": "D",
            "text": "97"
          }
        ],
        "explanation": "Quy luật dãy số: $\\text{Số sau} = \\text{Số trước} \\times 2 + 1$:\n  - $2 \\times 2 + 1 = 5$\n  - $5 \\times 2 + 1 = 11$\n  - $11 \\times 2 + 1 = 23$\n  - $23 \\times 2 + 1 = 47$\n  - $47 \\times 2 + 1 = 95$."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "ตัวเลขถัดไปในลำดับคืออะไร: 2, 5, 11, 23, 47, ?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "91"
          },
          {
            "key": "B",
            "text": "94"
          },
          {
            "key": "C",
            "text": "95"
          },
          {
            "key": "D",
            "text": "97"
          }
        ],
        "explanation": "กฎของลำดับคือ: ตัวถัดไป = (ตัวก่อนหน้า * 2) + 1 ดังนั้น 47 * 2 + 1 = 95"
      }
    }
  },
  {
    "id": 22,
    "code": "L15",
    "category": "Logic",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "Start with 1. To generate each next term, multiply the previous term by 2, then add the position of the new term. What is term 6?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "112"
          },
          {
            "key": "B",
            "text": "118"
          },
          {
            "key": "C",
            "text": "120"
          },
          {
            "key": "D",
            "text": "121"
          }
        ],
        "explanation": "Term 1 = 1. Term 2 = 4. Term 3 = 11. Term 4 = 26. Term 5 = 57. Term 6 = 57 * 2 + 6 = 120."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Bắt đầu với số 1. Để tạo số tiếp theo, nhân số trước đó với 2 rồi cộng thêm số thứ tự vị trí của số mới. Ví dụ số thứ 2 = 1 × 2 + 2 = 4. Số thứ 6 là bao nhiêu?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "112"
          },
          {
            "key": "B",
            "text": "118"
          },
          {
            "key": "C",
            "text": "120"
          },
          {
            "key": "D",
            "text": "121"
          }
        ],
        "explanation": "Tính lần lượt theo từng vị trí:\n  - Vị trí 1: $1$\n  - Vị trí 2: $1 \\times 2 + 2 = 4$\n  - Vị trí 3: $4 \\times 2 + 3 = 11$\n  - Vị trí 4: $11 \\times 2 + 4 = 26$\n  - Vị trí 5: $26 \\times 2 + 5 = 57$\n  - Vị trí 6: $57 \\times 2 + 6 = 120$."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "เริ่มต้นด้วย 1 ในการสร้างเทอมถัดไป ให้คูณเทอมก่อนหน้าด้วย 2 แล้วบวกด้วยตำแหน่งของเทอมใหม่ เช่น เทอมที่ 2 = 1×2+2 = 4 เทอมที่ 6 คือเท่าใด?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "112"
          },
          {
            "key": "B",
            "text": "118"
          },
          {
            "key": "C",
            "text": "120"
          },
          {
            "key": "D",
            "text": "121"
          }
        ],
        "explanation": "เทอมที่ 1=1, เทอมที่ 2=4, เทอมที่ 3=11, เทอมที่ 4=26, เทอมที่ 5=57, เทอมที่ 6=57*2 + 6 = 120"
      }
    }
  },
  {
    "id": 23,
    "code": "P01",
    "category": "Programming",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Programming Skills",
        "question": "When is the expression `(A && B) || C` false?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A: A and B are both false"
          },
          {
            "key": "B",
            "text": "B: C is false and at least one of A or B is false"
          },
          {
            "key": "C",
            "text": "C: C is true and A is false"
          },
          {
            "key": "D",
            "text": "D: A and B are both true"
          }
        ],
        "explanation": "OR expression (A && B) || C is false if and only if both sides are false: C is false AND (A && B) is false."
      },
      "vi": {
        "categoryName": "Kỹ năng Lập trình",
        "question": "Biểu thức `(A && B) || C` mang giá trị false khi nào?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A: A và B đều mang giá trị false"
          },
          {
            "key": "B",
            "text": "B: C là false và ít nhất một trong hai biến A hoặc B là false"
          },
          {
            "key": "C",
            "text": "C: C là true và A là false"
          },
          {
            "key": "D",
            "text": "D: A và B đều mang giá trị true"
          }
        ],
        "explanation": "Phép toán `OR` ($||$) chỉ cho kết quả `false` khi cả hai vế đều `false`:\n  - Vế phải `C` phải là `false`.\n  - Vế trái `(A && B)` phải là `false`, tức là ít nhất một trong hai biến $A$ hoặc $B$ mang giá trị `false`."
      },
      "th": {
        "categoryName": "ทักษะการเขียนโปรแกรม",
        "question": "นิพจน์ `(A && B) || C` จะมีค่าเป็น false เมื่อใด?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A: A และ B เป็น false ทั้งคู่"
          },
          {
            "key": "B",
            "text": "B: C เป็น false และอย่างน้อยตัวใดตัวหนึ่งของ A หรือ B เป็น false"
          },
          {
            "key": "C",
            "text": "C: C เป็น true และ A เป็น false"
          },
          {
            "key": "D",
            "text": "D: A และ B เป็น true ทั้งคู่"
          }
        ],
        "explanation": "ตัวดำเนินการ OR (||) จะเป็น false ได้ก็ต่อเมื่อทั้งสองฝั่งเป็น false: C ต้องเป็น false และ (A && B) ต้องเป็น false"
      }
    }
  },
  {
    "id": 24,
    "code": "L09",
    "category": "Logic",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "A",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "A prize is hidden in exactly one of four boxes: A, B, C, or D. Each box has one statement. Exactly two statements are true.",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A"
          },
          {
            "key": "B",
            "text": "B"
          },
          {
            "key": "C",
            "text": "C"
          },
          {
            "key": "D",
            "text": "D"
          }
        ],
        "explanation": "If prize is in A: statement A is true, B is false, C is false, D is true. Exactly two statements are true (A and D)."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Một phần thưởng được giấu trong đúng một trong 4 chiếc hộp: A, B, C hoặc D. Mỗi hộp có 1 câu khẳng định:\n- A: \"Phần thưởng ở trong hộp A.\"\n- B: \"Phần thưởng không ở trong hộp A.\"\n- C: \"Phần thưởng ở trong hộp B.\"\n- D: \"Phần thưởng ở trong hộp A hoặc B.\"\nBiết rằng có đúng hai câu khẳng định là đúng. Phần thưởng ở đâu?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A"
          },
          {
            "key": "B",
            "text": "B"
          },
          {
            "key": "C",
            "text": "C"
          },
          {
            "key": "D",
            "text": "D"
          }
        ],
        "explanation": "- Nếu phần thưởng ở hộp **A**: Phát biểu A (Đúng), B (Sai), C (Sai), D (Đúng) $\\rightarrow$ Đúng 2 phát biểu đúng $\\Rightarrow$ **Thỏa mãn**.\n  - Nếu ở hộp B: B (Đúng), C (Đúng), D (Đúng) $\\rightarrow$ 3 phát biểu đúng (loại).\n  - Nếu ở hộp C hoặc D: chỉ có B là đúng $\\rightarrow$ 1 phát biểu đúng (loại)."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "รางวัลถูกซ่อนอยู่ในกล่อง 1 ใบจาก 4 ใบ: A, B, C หรือ D กล่องแต่ละใบมีข้อความ 1 ประโยค:\n- A: \"รางวัลอยู่ในกล่อง A\"\n- B: \"รางวัลไม่ได้อยู่ในกล่อง A\"\n- C: \"รางวัลอยู่ในกล่อง B\"\n- D: \"รางวัลอยู่ในกล่อง A หรือ B\"\nหากมีข้อความที่เป็นจริง 2 ข้อความพอดี รางวัลอยู่ที่ไหน?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A"
          },
          {
            "key": "B",
            "text": "B"
          },
          {
            "key": "C",
            "text": "C"
          },
          {
            "key": "D",
            "text": "D"
          }
        ],
        "explanation": "ถ้ารางวัลอยู่ใน A: ข้อความ A เป็นจริง, B เป็นเท็จ, C เป็นเท็จ, D เป็นจริง มีข้อความจริง 2 ข้อความพอดี"
      }
    }
  },
  {
    "id": 25,
    "code": "L12",
    "category": "Logic",
    "isHard": true,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "There are three switches outside a room and three bulbs inside. Each switch controls exactly one bulb. You may enter the room only once. Which strategy lets you identify all three switch-bulb pairs?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Turn on one switch and immediately enter"
          },
          {
            "key": "B",
            "text": "Turn on one switch for several minutes, turn it off, turn on a second switch, then enter and use light and temperature"
          },
          {
            "key": "C",
            "text": "Turn on two switches and enter"
          },
          {
            "key": "D",
            "text": "Enter first, then return to the switches"
          }
        ],
        "explanation": "Turn on switch 1 for several minutes so the bulb heats up, turn it off, turn on switch 2 and enter: Lit bulb = Switch 2, Warm dark bulb = Switch 1, Cold dark bulb = Switch 3."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Có 3 công tắc ở bên ngoài phòng và 3 bóng đèn ở bên trong phòng. Mỗi công tắc điều khiển đúng một bóng đèn. Bạn chỉ được bước vào phòng đúng 1 lần duy nhất. Chiến lược nào giúp bạn xác định chính xác cặp công tắc - bóng đèn tương ứng?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Bật một công tắc và lập tức bước vào phòng ngay"
          },
          {
            "key": "B",
            "text": "Bật công tắc 1 trong vài phút, tắt đi, bật công tắc 2, sau đó vào phòng dùng độ sáng và nhiệt độ để kiểm tra"
          },
          {
            "key": "C",
            "text": "Bật cả hai công tắc rồi bước vào phòng"
          },
          {
            "key": "D",
            "text": "Vào phòng trước, sau đó quay lại bật công tắc"
          }
        ],
        "explanation": "Bật công tắc 1 một lúc để bóng đèn nóng lên, sau đó tắt đi và bật công tắc 2 rồi bước vào phòng:\n  - Bóng đèn đang sáng $\\rightarrow$ Công tắc 2.\n  - Bóng đèn tắt nhưng chạm vào thấy nóng $\\rightarrow$ Công tắc 1.\n  - Bóng đèn tắt và nguội $\\rightarrow$ Công tắc 3."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "มีสวิตช์ 3 ตัวอยู่นอกห้อง และมีหลอดไฟ 3 ดวงอยู่ด้านในห้อง สวิตช์แต่ละตัวควบคุมหลอดไฟ 1 ดวงพอดี คุณสามารถเข้าไปในห้องได้เพียงครั้งเดียว กลยุทธ์ใดช่วยให้คุณระบุคู่สวิตช์กับหลอดไฟได้ถูกต้องทั้งหมด?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "เปิดสวิตช์ตัวหนึ่งแล้วเดินเข้าไปในห้องทันที"
          },
          {
            "key": "B",
            "text": "เปิดสวิตช์ที่ 1 ทิ้งไว้สักสองสามนาที ปิดลง แล้วเปิดสวิตช์ที่ 2 จากนั้นเดินเข้าห้องเพื่อตรวจสอบด้วยแสงสว่างและความร้อน"
          },
          {
            "key": "C",
            "text": "เปิดสวิตช์สองตัวพร้อมกันแล้วเดินเข้าห้อง"
          },
          {
            "key": "D",
            "text": "เดินเข้าห้องก่อนแล้วค่อยกลับมาเปิดสวิตช์"
          }
        ],
        "explanation": "หลอดที่สว่างคือสวิตช์ที่ 2, หลอดที่ดับแต่อุ่น/ร้อนคือสวิตช์ที่ 1, หลอดที่ดับและเย็นคือสวิตช์ที่ 3"
      }
    }
  },
  {
    "id": 26,
    "code": "P02",
    "category": "Programming",
    "isHard": false,
    "codeSnippet": "int x = 10; \nif (x >= 10 && x < 20) print(\"A\"); \nelse if (x == 20) print(\"B\"); \nelse print(\"C\");",
    "correctAnswer": "A",
    "translations": {
      "en": {
        "categoryName": "Programming Skills",
        "question": "What does this code print?\n``",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "A"
          },
          {
            "key": "B",
            "text": "B"
          },
          {
            "key": "C",
            "text": "C"
          },
          {
            "key": "D",
            "text": "Nothing"
          }
        ],
        "explanation": "With x = 10, condition x >= 10 && x < 20 evaluates to true, executing the first if-branch and printing \"A\"."
      },
      "vi": {
        "categoryName": "Kỹ năng Lập trình",
        "question": "Đoạn mã sau sẽ in ra kết quả gì?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "A"
          },
          {
            "key": "B",
            "text": "B"
          },
          {
            "key": "C",
            "text": "C"
          },
          {
            "key": "D",
            "text": "Không in ra gì cả"
          }
        ],
        "explanation": "Với $x = 10$, điều kiện `x >= 10 && x < 20` thỏa mãn (`true && true = true`), nhánh `if` đầu tiên được thực thi và in ra `\"A\"`."
      },
      "th": {
        "categoryName": "ทักษะการเขียนโปรแกรม",
        "question": "โค้ดต่อไปนี้จะพิมพ์อะไรออกมา?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "A"
          },
          {
            "key": "B",
            "text": "B"
          },
          {
            "key": "C",
            "text": "C"
          },
          {
            "key": "D",
            "text": "ไม่พิมพ์อะไรเลย"
          }
        ],
        "explanation": "เนื่องจาก x = 10 เงื่อนไข x >= 10 && x < 20 เป็นจริง บล็อก if แรกจึงทำงานและพิมพ์ \"A\""
      }
    }
  },
  {
    "id": 27,
    "code": "J07",
    "category": "Java",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Java Core",
        "question": "What happens if code declares `final int x = 10;` and later tries `x = 20;`?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "x becomes 20"
          },
          {
            "key": "B",
            "text": "x cannot be reassigned"
          },
          {
            "key": "C",
            "text": "The program creates a second x"
          },
          {
            "key": "D",
            "text": "x becomes null"
          }
        ],
        "explanation": "The `final` keyword renders a variable a constant. Reassigning a final variable causes a compilation error."
      },
      "vi": {
        "categoryName": "Java Core",
        "question": "Điều gì xảy ra nếu mã khai báo `final int x = 10;` và sau đó cố gắng thực hiện `x = 20;`?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "x nhận giá trị 20"
          },
          {
            "key": "B",
            "text": "x không thể gán lại giá trị (Lỗi biên dịch)"
          },
          {
            "key": "C",
            "text": "Chương trình tạo ra một biến x thứ hai"
          },
          {
            "key": "D",
            "text": "x trở thành null"
          }
        ],
        "explanation": "Trong Java, từ khóa `final` áp dụng cho biến khiến giá trị của biến đó không thể thay đổi sau khi khởi tạo (hằng số). Việc gán lại giá trị sẽ gây lỗi biên dịch (Compilation Error)."
      },
      "th": {
        "categoryName": "Java Core",
        "question": "จะเกิดอะไรขึ้นหากโค้ดประกาศ `final int x = 10;` แล้วในภายหลังพยายามสั่ง `x = 20;`?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "x กลายเป็น 20"
          },
          {
            "key": "B",
            "text": "x ไม่สามารถกำหนดค่าใหม่ได้ (ข้อผิดพลาดในการคอมไพล์)"
          },
          {
            "key": "C",
            "text": "โปรแกรมจะสร้างตัวแปร x ตัวที่สองขึ้นมา"
          },
          {
            "key": "D",
            "text": "x กลายเป็น null"
          }
        ],
        "explanation": "คีย์เวิร์ด `final` ทำให้ตัวแปรกลายเป็นค่าคงที่ ไม่สามารถเปลี่ยนแปลงค่าได้ การกำหนดค่าใหม่จะทำให้คอมไพล์ไม่ผ่าน"
      }
    }
  },
  {
    "id": 28,
    "code": "P10",
    "category": "Programming",
    "isHard": false,
    "codeSnippet": "int x = 25; \nint count = 0; \nwhile (x > 1) { \n    x = x / 2; \n    count++; \n} \nprint(count);",
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Programming Skills",
        "question": "What is printed?\n``",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "3"
          },
          {
            "key": "B",
            "text": "4"
          },
          {
            "key": "C",
            "text": "5"
          },
          {
            "key": "D",
            "text": "6"
          }
        ],
        "explanation": "Iterations: x=12 (c=1), x=6 (c=2), x=3 (c=3), x=1 (c=4). Condition 1 > 1 is false, prints 4."
      },
      "vi": {
        "categoryName": "Kỹ năng Lập trình",
        "question": "Đoạn mã sau in ra giá trị gì?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "3"
          },
          {
            "key": "B",
            "text": "4"
          },
          {
            "key": "C",
            "text": "5"
          },
          {
            "key": "D",
            "text": "6"
          }
        ],
        "explanation": "- Lần 1: $x = 25 / 2 = 12$, $count = 1$.\n  - Lần 2: $x = 12 / 2 = 6$, $count = 2$.\n  - Lần 3: $x = 6 / 2 = 3$, $count = 3$.\n  - Lần 4: $x = 3 / 2 = 1$, $count = 4$.\n  - Kiểm tra điều kiện $x > 1$ ($1 > 1$ là sai $\\rightarrow$ dừng lặp). In ra: 4."
      },
      "th": {
        "categoryName": "ทักษะการเขียนโปรแกรม",
        "question": "โค้ดต่อไปนี้พิมพ์อะไรออกมา?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "3"
          },
          {
            "key": "B",
            "text": "4"
          },
          {
            "key": "C",
            "text": "5"
          },
          {
            "key": "D",
            "text": "6"
          }
        ],
        "explanation": "รอบที่ 1: x=12, count=1; รอบที่ 2: x=6, count=2; รอบที่ 3: x=3, count=3; รอบที่ 4: x=1, count=4 จากนั้น 1 > 1 เป็นเท็จ ลูปหยุดและพิมพ์ 4"
      }
    }
  },
  {
    "id": 29,
    "code": "O01",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "Which statement best describes a class and an object?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A class is a running program, while an object is source code"
          },
          {
            "key": "B",
            "text": "A class defines state and behavior; an object is an instance of that class"
          },
          {
            "key": "C",
            "text": "A class can contain only data; an object can contain only methods"
          },
          {
            "key": "D",
            "text": "A class and an object are exactly the same thing"
          }
        ],
        "explanation": "A class is a blueprint defining state and behavior; an object is an instantiated entity created from that blueprint."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Phát biểu nào mô tả đúng nhất về Lớp (Class) và Đối tượng (Object)?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Lớp là chương trình đang chạy, còn đối tượng là mã nguồn"
          },
          {
            "key": "B",
            "text": "Lớp định nghĩa trạng thái và hành vi; đối tượng là một thể hiện cụ thể của lớp đó"
          },
          {
            "key": "C",
            "text": "Lớp chỉ có thể chứa dữ liệu; đối tượng chỉ có thể chứa phương thức"
          },
          {
            "key": "D",
            "text": "Lớp và đối tượng hoàn toàn giống hệt nhau"
          }
        ],
        "explanation": "Lớp (Class) là bản vẽ thiết kế quy định trạng thái và hành vi; đối tượng (Object) là một thực thể cụ thể (instance) được cấp phát bộ nhớ dựa trên bản vẽ đó."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "ข้อความใดอธิบายเกี่ยวกับ คลาส (Class) และ ออบเจกต์ (Object) ได้ดีที่สุด?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "คลาสคือโปรแกรมที่กำลังรัน ในขณะที่ออบเจกต์คือซอร์สโค้ด"
          },
          {
            "key": "B",
            "text": "คลาสกำหนดสถานะและพฤติกรรม ส่วนออบเจกต์คืออินสแตนซ์ของคลาสนั้น"
          },
          {
            "key": "C",
            "text": "คลาสสามารถเก็บได้เฉพาะข้อมูล ส่วนออบเจกต์สามารถเก็บได้เฉพาะเมธอด"
          },
          {
            "key": "D",
            "text": "คลาสและออบเจกต์คือสิ่งเดียวกันอย่างแท้จริง"
          }
        ],
        "explanation": "คลาสคือพิมพ์เขียว (Blueprint) ส่วนออบเจกต์คือสิ่งที่ถูกสร้างขึ้นจริงตามพิมพ์เขียวนั้น"
      }
    }
  },
  {
    "id": 30,
    "code": "J04",
    "category": "Java",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Java Core",
        "question": "Given `int[] numbers = {10, 20, 30, 40};` which expression accesses the last element?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "`numbers[4]`"
          },
          {
            "key": "B",
            "text": "`numbers[3]`"
          },
          {
            "key": "C",
            "text": "`numbers[last]`"
          },
          {
            "key": "D",
            "text": "`numbers[-1]`"
          }
        ],
        "explanation": "Java arrays are 0-indexed. An array of length 4 has indices 0 to 3. The last element is `numbers[3]`."
      },
      "vi": {
        "categoryName": "Java Core",
        "question": "Cho mảng `int[] numbers = {10, 20, 30, 40};` biểu thức nào dùng để truy cập phần tử cuối cùng?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "numbers[4]"
          },
          {
            "key": "B",
            "text": "numbers[3]"
          },
          {
            "key": "C",
            "text": "numbers[last]"
          },
          {
            "key": "D",
            "text": "numbers[-1]"
          }
        ],
        "explanation": "Mảng trong Java có chỉ mục từ `0` đến `length - 1`. Mảng có 4 phần tử thì phần tử cuối cùng ở vị trí chỉ mục 3."
      },
      "th": {
        "categoryName": "Java Core",
        "question": "กำหนดให้ `int[] numbers = {10, 20, 30, 40};` นิพจน์ใดใช้สำหรับเข้าถึงสมาชิกตัวสุดท้าย?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "numbers[4]"
          },
          {
            "key": "B",
            "text": "numbers[3]"
          },
          {
            "key": "C",
            "text": "numbers[last]"
          },
          {
            "key": "D",
            "text": "numbers[-1]"
          }
        ],
        "explanation": "ดัชนีของอาร์เรย์ใน Java เริ่มต้นที่ 0 อาร์เรย์ขนาด 4 สมาชิกตัวสุดท้ายจะอยู่ที่ดัชนี 3 (numbers[3])"
      }
    }
  },
  {
    "id": 31,
    "code": "L08",
    "category": "Logic",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "A",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "A three-digit number has three different digits. The first digit is twice the second digit. The third digit is greater than the first digit. The sum of the three digits is 17. What is the number?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "638"
          },
          {
            "key": "B",
            "text": "628"
          },
          {
            "key": "C",
            "text": "836"
          },
          {
            "key": "D",
            "text": "646"
          }
        ],
        "explanation": "In 638: first digit (6) is twice second (3), third digit (8) is greater than first (6), and 6 + 3 + 8 = 17."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Một số có 3 chữ số phân biệt. Chữ số đầu tiên gấp đôi chữ số thứ hai. Chữ số thứ ba lớn hơn chữ số đầu tiên. Tổng 3 chữ số bằng 17. Số đó là số nào?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "638"
          },
          {
            "key": "B",
            "text": "628"
          },
          {
            "key": "C",
            "text": "836"
          },
          {
            "key": "D",
            "text": "646"
          }
        ],
        "explanation": "- Số 638 có 3 chữ số phân biệt: 6, 3, 8.\n  - Chữ số đầu gấp đôi chữ số thứ hai: $6 = 3 \\times 2$.\n  - Chữ số thứ ba lớn hơn chữ số đầu: $8 > 6$.\n  - Tổng ba chữ số: $6 + 3 + 8 = 17$."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "เลขสามหลักที่มีตัวเลขแต่ละหลักไม่ซ้ำกัน หลักแรกเป็นสองเท่าของหลักที่สอง หลักที่สามมีค่ามากกว่าหลักแรก ผลรวมของเลขทั้งสามหลักคือ 17 เลขนั้นคือเลขอะไร?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "638"
          },
          {
            "key": "B",
            "text": "628"
          },
          {
            "key": "C",
            "text": "836"
          },
          {
            "key": "D",
            "text": "646"
          }
        ],
        "explanation": "เลข 638: หลักแรก (6) เป็นสองเท่าของหลักสอง (3), หลักสาม (8) มากกว่าหลักแรก (6), ผลรวม 6 + 3 + 8 = 17"
      }
    }
  },
  {
    "id": 32,
    "code": "P07",
    "category": "Programming",
    "isHard": false,
    "codeSnippet": "int x = 10; \nvoid change(int value) { \n    value += 5; \n} \nchange(x); \nprint(x);",
    "correctAnswer": "A",
    "translations": {
      "en": {
        "categoryName": "Programming Skills",
        "question": "What is printed?\n``",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "10"
          },
          {
            "key": "B",
            "text": "15"
          },
          {
            "key": "C",
            "text": "5"
          },
          {
            "key": "D",
            "text": "Compilation error"
          }
        ],
        "explanation": "Java is strictly pass-by-value. Modifying parameter `value` inside `change()` does not affect the original variable `x` outside."
      },
      "vi": {
        "categoryName": "Kỹ năng Lập trình",
        "question": "Đoạn mã sau in ra kết quả gì?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "10"
          },
          {
            "key": "B",
            "text": "15"
          },
          {
            "key": "C",
            "text": "5"
          },
          {
            "key": "D",
            "text": "Lỗi biên dịch (Compilation error)"
          }
        ],
        "explanation": "Java truyền tham số hoàn toàn theo cơ chế truyền giá trị (Pass-by-value). Giá trị 10 được sao chép vào biến cục bộ `value`. Mọi thay đổi trên `value` không làm thay đổi biến `x` ở phạm vi bên ngoài."
      },
      "th": {
        "categoryName": "ทักษะการเขียนโปรแกรม",
        "question": "โค้ดต่อไปนี้พิมพ์อะไรออกมา?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "10"
          },
          {
            "key": "B",
            "text": "15"
          },
          {
            "key": "C",
            "text": "5"
          },
          {
            "key": "D",
            "text": "ข้อผิดพลาดในการคอมไพล์ (Compilation error)"
          }
        ],
        "explanation": "Java ใช้การส่งพารามิเตอร์แบบ Pass-by-value การเปลี่ยนแปลงค่าตัวแปรภายในเมธอด change() ไม่ส่งผลต่อตัวแปร x ภายนอก"
      }
    }
  },
  {
    "id": 33,
    "code": "L11",
    "category": "Logic",
    "isHard": true,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "There are 9 identical-looking coins, and exactly one is heavier than the others. Using a balance scale, what is the minimum number of weighings needed to guarantee finding the heavier coin?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "explanation": "Divide into 3 groups of 3 (3-3-3): Weighing 1 isolates the heavy group of 3. Weighing 2 balances 1 vs 1 to find the heavy coin. Minimum = 2."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Có 9 đồng xu có vẻ ngoài y hệt nhau, và có đúng một đồng xu nặng hơn các đồng còn lại. Sử dụng cân thăng bằng hai đĩa, số lần cân tối thiểu cần thiết để chắc chắn tìm ra đồng xu nặng hơn là bao nhiêu?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "explanation": "Chia 9 đồng thành 3 nhóm (3-3-3):\n  - Lần cân 1: Đặt nhóm 1 và nhóm 2 lên cân. Nếu một bên lệch thì đồng nặng ở bên đó; nếu thăng bằng thì đồng nặng ở nhóm 3.\n  - Lần cân 2: Lấy 3 đồng của nhóm nặng, đặt mỗi đồng lên 1 đĩa cân, giữ lại 1 đồng. Ta tìm ra ngay đồng nặng nhất. Tối thiểu cần 2 lần cân ($3^2 = 9$)."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "มีเหรียญ 9 เหรียญที่มีลักษณะภายนอกเหมือนกันทุกประการ และมีเพียงเหรียญเดียวที่หนักกว่าเหรียญอื่น การใช้ตาชั่งสองแขนเพื่อรับประกันว่าจะพบเหรียญที่หนักกว่า ต้องชั่งอย่างน้อยกี่ครั้ง?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "explanation": "แบ่งเหรียญออกเป็น 3 กลุ่ม (3-3-3): ชั่งครั้งที่ 1 ระบุกลุ่มที่หนักกว่า ชั่งครั้งที่ 2 ชั่งเหรียญในกลุ่มนั้น จะพบเหรียญที่หนักกว่าทันที รวม 2 ครั้ง"
      }
    }
  },
  {
    "id": 34,
    "code": "P09",
    "category": "Programming",
    "isHard": false,
    "codeSnippet": "int result = 1; \nfor (int i = 1; i <= 4; i++) { \n    result *= i; \n} \nprint(result);",
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Programming Skills",
        "question": "What is printed?\n``",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "10"
          },
          {
            "key": "B",
            "text": "16"
          },
          {
            "key": "C",
            "text": "24"
          },
          {
            "key": "D",
            "text": "25"
          }
        ],
        "explanation": "Computes 4! = 1 * 2 * 3 * 4 = 24."
      },
      "vi": {
        "categoryName": "Kỹ năng Lập trình",
        "question": "Đoạn mã sau in ra kết quả gì?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "10"
          },
          {
            "key": "B",
            "text": "16"
          },
          {
            "key": "C",
            "text": "24"
          },
          {
            "key": "D",
            "text": "25"
          }
        ],
        "explanation": "Vòng lặp tính giai thừa của 4: $1 \\times 2 \\times 3 \\times 4 = 24$."
      },
      "th": {
        "categoryName": "ทักษะการเขียนโปรแกรม",
        "question": "โค้ดต่อไปนี้พิมพ์อะไรออกมา?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "10"
          },
          {
            "key": "B",
            "text": "16"
          },
          {
            "key": "C",
            "text": "24"
          },
          {
            "key": "D",
            "text": "25"
          }
        ],
        "explanation": "คำนวณค่าแฟกทอเรียล 4! = 1 * 2 * 3 * 4 = 24"
      }
    }
  },
  {
    "id": 35,
    "code": "L04",
    "category": "Logic",
    "isHard": true,
    "codeSnippet": null,
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "Five people A, B, C, D, E stand in a line.",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A D B E C"
          },
          {
            "key": "B",
            "text": "D B A E C"
          },
          {
            "key": "C",
            "text": "A E D B C"
          },
          {
            "key": "D",
            "text": "E A D B C"
          }
        ],
        "explanation": "A E D B C satisfies: A before C, B immediately after D, E not at ends, and C not adjacent to E."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Năm người A, B, C, D, E xếp thành một hàng dọc:\n- A phải đứng trước C.\n- B phải đứng ngay sau D.\n- E không được đứng ở hai đầu hàng.\n- C không được đứng cạnh E.\nCách sắp xếp nào sau đây là hợp lệ?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A D B E C"
          },
          {
            "key": "B",
            "text": "D B A E C"
          },
          {
            "key": "C",
            "text": "A E D B C"
          },
          {
            "key": "D",
            "text": "E A D B C"
          }
        ],
        "explanation": "- A đứng trước C: Đúng (vị trí 1 và 5).\n  - B đứng ngay sau D: Đúng (D vị trí 3, B vị trí 4 $\\rightarrow$ cặp \"DB\").\n  - E không đứng ở 2 đầu: Đúng (E ở vị trí 2).\n  - C không đứng cạnh E: Đúng (E ở vị trí 2, C ở vị trí 5)."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "มีคน 5 คน A, B, C, D, E ยืนเรียงแถว:\n- A ต้องอยู่หน้า C\n- B ต้องยืนต่อท้าย D ทันที\n- E ต้องไม่อยู่หัวหรือท้ายแถว\n- C ต้องไม่ยืนติดกับ E\nการจัดเรียงใดต่อไปนี้ถูกต้อง?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A D B E C"
          },
          {
            "key": "B",
            "text": "D B A E C"
          },
          {
            "key": "C",
            "text": "A E D B C"
          },
          {
            "key": "D",
            "text": "E A D B C"
          }
        ],
        "explanation": "A E D B C: A อยู่หน้า C, B อยู่ติดหลัง D (DB), E อยู่ตำแหน่งที่ 2 (ไม่ใช่หัว/ท้าย), C อยู่ตำแหน่งที่ 5 (ไม่ติดกับ E)"
      }
    }
  },
  {
    "id": 36,
    "code": "J09",
    "category": "Java",
    "isHard": false,
    "codeSnippet": "try { \n    int x = 10 / 0; \n    System.out.println(\"A\"); \n} catch (ArithmeticException e) { \n    System.out.println(\"B\"); \n} \nSystem.out.println(\"C\");",
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Java Core",
        "question": "What is printed?\n``",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "A then C"
          },
          {
            "key": "B",
            "text": "B then C"
          },
          {
            "key": "C",
            "text": "C only"
          },
          {
            "key": "D",
            "text": "The program stops without output"
          }
        ],
        "explanation": "Division 10 / 0 throws ArithmeticException, bypassing \"A\", caught by catch block which prints \"B\", then continues execution printing \"C\"."
      },
      "vi": {
        "categoryName": "Java Core",
        "question": "Đoạn mã sau in ra kết quả gì?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "A sau đó C"
          },
          {
            "key": "B",
            "text": "B sau đó C"
          },
          {
            "key": "C",
            "text": "Chỉ in C"
          },
          {
            "key": "D",
            "text": "Chương trình dừng lại mà không in gì"
          }
        ],
        "explanation": "Câu lệnh `10 / 0` ném ra ngoại lệ `ArithmeticException`, dòng in \"A\" bị bỏ qua, luồng nhảy vào khối `catch` và in ra \"B\". Sau đó chương trình chạy tiếp câu lệnh kế tiếp ngoài khối try-catch và in ra \"C\"."
      },
      "th": {
        "categoryName": "Java Core",
        "question": "โค้ดต่อไปนี้พิมพ์อะไรออกมา?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "A แล้วตามด้วย C"
          },
          {
            "key": "B",
            "text": "B แล้วตามด้วย C"
          },
          {
            "key": "C",
            "text": "C เท่านั้น"
          },
          {
            "key": "D",
            "text": "โปรแกรมหยุดทำงานโดยไม่พิมพ์อะไร"
          }
        ],
        "explanation": "การหาร 10 / 0 เกิด ArithmeticException ทำให้ข้ามการพิมพ์ \"A\" ไปเข้า catch พิมพ์ \"B\" จากนั้นทำงานต่อพิมพ์ \"C\""
      }
    }
  },
  {
    "id": 37,
    "code": "O10",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": "Animal animal = new Dog();",
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "Consider:\n``",
        "questionAfter": "``\nIf `Dog` has a method `bark()` that `Animal` does not define, which statement is correct?",
        "options": [
          {
            "key": "A",
            "text": "`animal.bark()` always works because the object is a Dog"
          },
          {
            "key": "B",
            "text": "The reference type Animal determines which methods can be called directly"
          },
          {
            "key": "C",
            "text": "Dog methods can never be called"
          },
          {
            "key": "D",
            "text": "Animal and Dog must have identical methods"
          }
        ],
        "explanation": "At compile time, accessible methods are determined by the reference type `Animal`, which does not declare `bark()`."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Xét khai báo: `Animal animal = new Dog();`\nNếu lớp `Dog` có phương thức `bark()` mà lớp `Animal` không định nghĩa, phát biểu nào sau đây là đúng?",
        "questionAfter": "``\nIf `Dog` has a method `bark()` that `Animal` does not define, which statement is correct?",
        "options": [
          {
            "key": "A",
            "text": "animal.bark() luôn hoạt động vì đối tượng thực tế là một Dog"
          },
          {
            "key": "B",
            "text": "Kiểu tham chiếu Animal quyết định các phương thức nào có thể được gọi trực tiếp"
          },
          {
            "key": "C",
            "text": "Các phương thức của Dog không bao giờ có thể gọi được"
          },
          {
            "key": "D",
            "text": "Animal và Dog bắt buộc phải có các phương thức giống hệt nhau"
          }
        ],
        "explanation": "Trong thời gian biên dịch (Compile-time), trình biên dịch kiểm tra tính hợp lệ dựa trên kiểu tham chiếu (`Animal`). Vì `Animal` không có phương thức `bark()`, nên gọi trực tiếp `animal.bark()` sẽ gặp lỗi biên dịch (trừ khi ép kiểu sang `Dog`)."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "พิจารณาโค้ด: `Animal animal = new Dog();`\nหากคลาส `Dog` มีเมธอด `bark()` ที่คลาส `Animal` ไม่ได้กำหนดไว้ ข้อความใดถูกต้อง?",
        "questionAfter": "``\nIf `Dog` has a method `bark()` that `Animal` does not define, which statement is correct?",
        "options": [
          {
            "key": "A",
            "text": "animal.bark() ใช้งานได้เสมอเพราะออบเจกต์เป็น Dog"
          },
          {
            "key": "B",
            "text": "ประเภทการอ้างอิง Animal เป็นตัวกำหนดเมธอดที่สามารถเรียกใช้งานได้โดยตรง"
          },
          {
            "key": "C",
            "text": "เมธอดของ Dog ไม่สามารถเรียกใช้งานได้เลย"
          },
          {
            "key": "D",
            "text": "Animal และ Dog ต้องมีเมธอดที่เหมือนกันทุกประการ"
          }
        ],
        "explanation": "ในขั้นตอนคอมไพล์ คอมไพเลอร์จะตรวจสอบตามประเภทการอ้างอิง (Animal) จึงไม่สามารถเรียก bark() ตรงๆ ได้โดยไม่ทำการแปลงชนิดข้อมูล (Type Casting)"
      }
    }
  },
  {
    "id": 38,
    "code": "L13",
    "category": "Logic",
    "isHard": true,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "There are 12 identical-looking balls. Exactly one ball is abnormal, but it may be either heavier or lighter than the others. Using a balance scale, what is the minimum number of weighings needed to always identify the abnormal ball and determine whether it is heavier or lighter?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "2"
          },
          {
            "key": "B",
            "text": "3"
          },
          {
            "key": "C",
            "text": "4"
          },
          {
            "key": "D",
            "text": "5"
          }
        ],
        "explanation": "Classic 12 balls balance puzzle: with 24 possible outcomes (12 balls * 2 states), 3 weighings yield 3^3 = 27 states, which is mathematically sufficient to identify the ball."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Có 12 quả bóng có vẻ ngoài giống hệt nhau. Có đúng một quả bóng dị biệt (có thể nặng hơn hoặc nhẹ hơn các quả khác). Sử dụng cân thăng bằng, số lần cân tối thiểu để luôn tìm ra quả bóng dị biệt và xác định nó nặng hơn hay nhẹ hơn là bao nhiêu?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "2"
          },
          {
            "key": "B",
            "text": "3"
          },
          {
            "key": "C",
            "text": "4"
          },
          {
            "key": "D",
            "text": "5"
          }
        ],
        "explanation": "Bài toán cân 12 quả bóng kinh điển. Có 12 quả và 2 trạng thái (nặng hơn/nhẹ hơn) $\\rightarrow$ 24 trường hợp. Mỗi lần cân có 3 kết quả (trái, phải, bằng nhau). Với 3 lần cân, số trường hợp phân biệt tối đa là $3^3 = 27 \\ge 24$. Bằng chiến thuật chia 4-4-4 ở lần cân đầu tiên, ta luôn tìm ra quả bóng lỗi sau đúng 3 lần cân."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "มีลูกบอล 12 ลูกที่ดูเหมือนกันทุกประการ มีลูกหนึ่งที่มีน้ำหนักผิดปกติ (อาจจะหนักกว่าหรือเบากว่าลูกอื่น) การใช้ตาชั่งสองแขนเพื่อระบุลูกที่ผิดปกติและบอกได้ว่าหนักกว่าหรือเบากว่า ต้องชั่งอย่างน้อยกี่ครั้ง?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "2"
          },
          {
            "key": "B",
            "text": "3"
          },
          {
            "key": "C",
            "text": "4"
          },
          {
            "key": "D",
            "text": "5"
          }
        ],
        "explanation": "โจทย์การชั่งลูกบอล 12 ลูกคลาสสิก: ด้วยผลลัพธ์ที่เป็นไปได้ 24 กรณี (12 ลูก * 2 สภาวะ) ตาชั่ง 3 ครั้งให้ผลลัพธ์ได้ 3^3 = 27 กรณี ซึ่งเพียงพอที่จะระบุได้อย่างแน่นอนด้วยการชั่ง 3 ครั้ง"
      }
    }
  },
  {
    "id": 39,
    "code": "O09",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": "Animal a = new Dog(); \na.sound();",
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "Consider:\n``",
        "questionAfter": "``\nIf `Dog` overrides `sound()`, which implementation is called?",
        "options": [
          {
            "key": "A",
            "text": "`Animal.sound()`"
          },
          {
            "key": "B",
            "text": "`Dog.sound()`"
          },
          {
            "key": "C",
            "text": "Both methods are called"
          },
          {
            "key": "D",
            "text": "The code cannot compile"
          }
        ],
        "explanation": "Dynamic method dispatch executes the overridden method of the runtime object instance (`Dog.sound()`)."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Xét đoạn mã:\n`Animal a = new Dog(); a.sound();`\nNếu lớp `Dog` ghi đè phương thức `sound()`, cài đặt của lớp nào sẽ được gọi?",
        "questionAfter": "``\nIf `Dog` overrides `sound()`, which implementation is called?",
        "options": [
          {
            "key": "A",
            "text": "Animal.sound()"
          },
          {
            "key": "B",
            "text": "Dog.sound()"
          },
          {
            "key": "C",
            "text": "Cả hai phương thức đều được gọi"
          },
          {
            "key": "D",
            "text": "Mã nguồn không thể biên dịch"
          }
        ],
        "explanation": "Tính đa hình động (Dynamic Method Dispatch): Khi phương thức đã được ghi đè, tại thời điểm chạy (runtime), JVM sẽ gọi phiên bản cài đặt của đối tượng thực tế (`Dog`)."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "พิจารณาโค้ด:\n`Animal a = new Dog(); a.sound();`\nหากคลาส `Dog` ทำการ Override เมธอด `sound()` เมธอดของคลาสใดจะถูกเรียกทำงาน?",
        "questionAfter": "``\nIf `Dog` overrides `sound()`, which implementation is called?",
        "options": [
          {
            "key": "A",
            "text": "Animal.sound()"
          },
          {
            "key": "B",
            "text": "Dog.sound()"
          },
          {
            "key": "C",
            "text": "ทั้งสองเมธอดจะถูกเรียก"
          },
          {
            "key": "D",
            "text": "โค้ดไม่สามารถคอมไพล์ได้"
          }
        ],
        "explanation": "การเรียกเมธอดแบบ Dynamic Dispatch ในขณะรันไทม์จะเลือกใช้เมธอดของออบเจกต์จริง ซึ่งก็คือ Dog.sound()"
      }
    }
  },
  {
    "id": 40,
    "code": "P04",
    "category": "Programming",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Programming Skills",
        "question": "What is the sum of all integers from 1 to 10 for which `i % 3 != 0`?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "36"
          },
          {
            "key": "B",
            "text": "37"
          },
          {
            "key": "C",
            "text": "38"
          },
          {
            "key": "D",
            "text": "39"
          }
        ],
        "explanation": "Numbers not divisible by 3 from 1 to 10 are: 1, 2, 4, 5, 7, 8, 10. Sum = 37."
      },
      "vi": {
        "categoryName": "Kỹ năng Lập trình",
        "question": "Tổng của tất cả các số nguyên từ 1 đến 10 thỏa mãn điều kiện `i % 3 != 0` là bao nhiêu?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "36"
          },
          {
            "key": "B",
            "text": "37"
          },
          {
            "key": "C",
            "text": "38"
          },
          {
            "key": "D",
            "text": "39"
          }
        ],
        "explanation": "Các số từ 1 đến 10 không chia hết cho 3 gồm: 1, 2, 4, 5, 7, 8, 10.  \n  Tổng: $1 + 2 + 4 + 5 + 7 + 8 + 10 = 37$."
      },
      "th": {
        "categoryName": "ทักษะการเขียนโปรแกรม",
        "question": "ผลรวมของจำนวนเต็มทั้งหมดตั้งแต่ 1 ถึง 10 ที่สอดคล้องกับเงื่อนไข `i % 3 != 0` คือเท่าใด?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "36"
          },
          {
            "key": "B",
            "text": "37"
          },
          {
            "key": "C",
            "text": "38"
          },
          {
            "key": "D",
            "text": "39"
          }
        ],
        "explanation": "ตัวเลขที่ไม่หารด้วย 3 ลงตัวได้แก่ 1, 2, 4, 5, 7, 8, 10 ผลรวม = 1 + 2 + 4 + 5 + 7 + 8 + 10 = 37"
      }
    }
  },
  {
    "id": 41,
    "code": "J01",
    "category": "Java",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "A",
    "translations": {
      "en": {
        "categoryName": "Java Core",
        "question": "Which pair contains one primitive type and one reference type in Java?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "`int` and `String`"
          },
          {
            "key": "B",
            "text": "`Integer` and `String`"
          },
          {
            "key": "C",
            "text": "`String` and `Object`"
          },
          {
            "key": "D",
            "text": "`int` and `boolean`"
          }
        ],
        "explanation": "`int` is a primitive type; `String` is an object reference type."
      },
      "vi": {
        "categoryName": "Java Core",
        "question": "Cặp nào sau đây chứa một kiểu dữ liệu nguyên thủy (primitive) và một kiểu dữ liệu tham chiếu (reference) trong Java?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "int và String"
          },
          {
            "key": "B",
            "text": "Integer và String"
          },
          {
            "key": "C",
            "text": "String và Object"
          },
          {
            "key": "D",
            "text": "int và boolean"
          }
        ],
        "explanation": "`int` là kiểu dữ liệu nguyên thủy (primitive), còn `String` là kiểu đối tượng tham chiếu (reference type). (B, C là 2 kiểu reference; D là 2 kiểu primitive)."
      },
      "th": {
        "categoryName": "Java Core",
        "question": "คู่ใดต่อไปนี้ประกอบด้วยประเภทข้อมูลดั้งเดิม (primitive type) 1 ตัว และประเภทข้อมูลอ้างอิง (reference type) 1 ตัวในภาษา Java?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "int และ String"
          },
          {
            "key": "B",
            "text": "Integer และ String"
          },
          {
            "key": "C",
            "text": "String และ Object"
          },
          {
            "key": "D",
            "text": "int และ boolean"
          }
        ],
        "explanation": "`int` เป็น primitive type ส่วน `String` เป็น reference type (ออบเจกต์)"
      }
    }
  },
  {
    "id": 42,
    "code": "J05",
    "category": "Java",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Java Core",
        "question": "Which statement about Java `List` is correct?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "A List cannot contain duplicates"
          },
          {
            "key": "B",
            "text": "A List maintains element order and can contain duplicates"
          },
          {
            "key": "C",
            "text": "A List can contain only primitive types"
          },
          {
            "key": "D",
            "text": "A List automatically sorts elements"
          }
        ],
        "explanation": "The Java `List` interface preserves insertion order and allows duplicate elements."
      },
      "vi": {
        "categoryName": "Java Core",
        "question": "Phát biểu nào sau đây về `List` trong Java là chính xác?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Một List không thể chứa các phần tử trùng lặp"
          },
          {
            "key": "B",
            "text": "Một List duy trì thứ tự phần tử chèn vào và có thể chứa các phần tử trùng lặp"
          },
          {
            "key": "C",
            "text": "Một List chỉ có thể chứa các kiểu dữ liệu nguyên thủy"
          },
          {
            "key": "D",
            "text": "Một List tự động sắp xếp các phần tử"
          }
        ],
        "explanation": "Giao diện `List` trong Java Collection Framework lưu trữ các phần tử có thứ tự chèn (insertion order) và cho phép các phần tử có giá trị trùng lặp (duplicates)."
      },
      "th": {
        "categoryName": "Java Core",
        "question": "ข้อความใดเกี่ยวกับ `List` ใน Java ถูกต้อง?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "List ไม่สามารถเก็บสมาชิกที่ซ้ำกันได้"
          },
          {
            "key": "B",
            "text": "List รักษาลำดับการใส่ข้อมูลและสามารถเก็บสมาชิกที่ซ้ำกันได้"
          },
          {
            "key": "C",
            "text": "List สามารถเก็บได้เฉพาะ primitive types เท่านั้น"
          },
          {
            "key": "D",
            "text": "List จะเรียงลำดับสมาชิกโดยอัตโนมัติ"
          }
        ],
        "explanation": "อินเตอร์เฟซ List ใน Java Collection Framework จะรักษาลำดับที่เพิ่มข้อมูลเข้าไปและอนุญาตให้มีข้อมูลซ้ำได้"
      }
    }
  },
  {
    "id": 43,
    "code": "L01",
    "category": "Logic",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Logic & Reasoning",
        "question": "What is the next number in the sequence: 4, 7, 13, 22, 34, ?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "47"
          },
          {
            "key": "B",
            "text": "48"
          },
          {
            "key": "C",
            "text": "49"
          },
          {
            "key": "D",
            "text": "51"
          }
        ],
        "explanation": "Differences increase by multiples of 3: +3, +6, +9, +12, +15. Next term = 34 + 15 = 49."
      },
      "vi": {
        "categoryName": "Tư duy Logic",
        "question": "Số tiếp theo trong dãy số sau là bao nhiêu: 4, 7, 13, 22, 34, ?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "47"
          },
          {
            "key": "B",
            "text": "48"
          },
          {
            "key": "C",
            "text": "49"
          },
          {
            "key": "D",
            "text": "51"
          }
        ],
        "explanation": "Hiệu giữa các số liên tiếp tăng dần theo bội số của 3:\n  - $7 - 4 = +3$\n  - $13 - 7 = +6$\n  - $22 - 13 = +9$\n  - $34 - 22 = +12$  \n  $\\rightarrow$ Số tiếp theo: $34 + 15 = 49$."
      },
      "th": {
        "categoryName": "การคิดเชิงตรรกะ",
        "question": "ตัวเลขถัดไปในลำดับคืออะไร: 4, 7, 13, 22, 34, ?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "47"
          },
          {
            "key": "B",
            "text": "48"
          },
          {
            "key": "C",
            "text": "49"
          },
          {
            "key": "D",
            "text": "51"
          }
        ],
        "explanation": "ผลต่างเพิ่มขึ้นทีละพหุคูณของ 3: +3, +6, +9, +12 ตัวถัดไปจะเพิ่มขึ้น 15 -> 34 + 15 = 49"
      }
    }
  },
  {
    "id": 44,
    "code": "O12",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "A method `processPayment(Payment payment)` calls `payment.pay()`. `CreditCardPayment` and `BankTransferPayment` both implement `Payment`. No `instanceof` checks are used. What OOP concept makes this design possible?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Encapsulation"
          },
          {
            "key": "B",
            "text": "Polymorphism"
          },
          {
            "key": "C",
            "text": "Inheritance only"
          },
          {
            "key": "D",
            "text": "Composition"
          }
        ],
        "explanation": "Polymorphism enables polymorphic dispatch where the implementation of `pay()` is determined by the runtime object without checking `instanceof`."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Một phương thức `processPayment(Payment payment)` gọi `payment.pay()`. Cả `CreditCardPayment` và `BankTransferPayment` đều cài đặt interface `Payment`. Không có lệnh kiểm tra `instanceof` nào được sử dụng. Khái niệm OOP nào tạo nên thiết kế linh hoạt này?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Đóng gói (Encapsulation)"
          },
          {
            "key": "B",
            "text": "Đa hình (Polymorphism)"
          },
          {
            "key": "C",
            "text": "Chỉ tính kế thừa (Inheritance only)"
          },
          {
            "key": "D",
            "text": "Hợp thành (Composition)"
          }
        ],
        "explanation": "Tính đa hình (Polymorphism) cho phép hàm nhận tham chiếu giao diện cha `Payment` và tự động điều hướng cuộc gọi `payment.pay()` đến hành vi cụ thể tương ứng của từng lớp con mà không cần kiểm tra kiểu dữ liệu bằng `instanceof`."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "เมธอด `processPayment(Payment payment)` เรียก `payment.pay()` โดยที่ `CreditCardPayment` และ `BankTransferPayment` ต่างก็ Implement อินเตอร์เฟซ `Payment` โดยไม่มีการใช้คำสั่ง `instanceof` เลย แนวคิด OOP ใดทำให้เกิดการออกแบบนี้?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "การห่อหุ้ม (Encapsulation)"
          },
          {
            "key": "B",
            "text": "ความหลากหลาย (Polymorphism)"
          },
          {
            "key": "C",
            "text": "การสืบทอดอย่างเดียว (Inheritance only)"
          },
          {
            "key": "D",
            "text": "การประกอบ (Composition)"
          }
        ],
        "explanation": "Polymorphism ทำให้สามารถเรียกเมธอดผ่าน Interface กลางได้ และโปรแกรมจะตัดสินใจเลือกการทำงานที่ถูกต้องตามคลาสจริงโดยไม่ต้องเขียนเงื่อนไขตรวจสอบชนิดข้อมูล"
      }
    }
  },
  {
    "id": 45,
    "code": "P08",
    "category": "Programming",
    "isHard": false,
    "codeSnippet": "int a = 3; \nint b = 5; \na = a + b; \nb = a - b; \na = a - b; \nprint(a + \" \" + b);",
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Programming Skills",
        "question": "What is printed?\n``",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "3 5"
          },
          {
            "key": "B",
            "text": "5 3"
          },
          {
            "key": "C",
            "text": "8 5"
          },
          {
            "key": "D",
            "text": "5 8"
          }
        ],
        "explanation": "Variable swap algorithm without temporary variable results in a = 5 and b = 3, printing \"5 3\"."
      },
      "vi": {
        "categoryName": "Kỹ năng Lập trình",
        "question": "Đoạn mã sau in ra kết quả gì?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "3 5"
          },
          {
            "key": "B",
            "text": "5 3"
          },
          {
            "key": "C",
            "text": "8 5"
          },
          {
            "key": "D",
            "text": "5 8"
          }
        ],
        "explanation": "Đây là kỹ thuật hoán đổi 2 số không dùng biến phụ:\n  - $a = 3 + 5 = 8$\n  - $b = 8 - 5 = 3$\n  - $a = 8 - 3 = 5$  \n  In ra: `\"5 3\"`."
      },
      "th": {
        "categoryName": "ทักษะการเขียนโปรแกรม",
        "question": "โค้ดต่อไปนี้พิมพ์อะไรออกมา?",
        "questionAfter": "``",
        "options": [
          {
            "key": "A",
            "text": "3 5"
          },
          {
            "key": "B",
            "text": "5 3"
          },
          {
            "key": "C",
            "text": "8 5"
          },
          {
            "key": "D",
            "text": "5 8"
          }
        ],
        "explanation": "นี่คือขั้นตอนวิธีสลับค่าตัวแปรสองตัวโดยไม่ใช้ตัวแปรชั่วคราว: a=8, b=3, a=5 ค่าที่พิมพ์ออกมาคือ \"5 3\""
      }
    }
  },
  {
    "id": 46,
    "code": "J03",
    "category": "Java",
    "isHard": false,
    "codeSnippet": "String a = new String(\"Java\"); \nString b = new String(\"Java\");",
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Java Core",
        "question": "Consider:\n``",
        "questionAfter": "``\nWhat are the results of `a == b` and `a.equals(b)`?",
        "options": [
          {
            "key": "A",
            "text": "`true`, `true`"
          },
          {
            "key": "B",
            "text": "`false`, `false`"
          },
          {
            "key": "C",
            "text": "`false`, `true`"
          },
          {
            "key": "D",
            "text": "`true`, `false`"
          }
        ],
        "explanation": "`==` compares heap memory references (two distinct objects = false), whereas `.equals()` compares string content (\"Java\" = true)."
      },
      "vi": {
        "categoryName": "Java Core",
        "question": "Xét đoạn mã sau:",
        "questionAfter": "Kết quả của `a == b` và `a.equals(b)` lần lượt là gì?",
        "options": [
          {
            "key": "A",
            "text": "true, true"
          },
          {
            "key": "B",
            "text": "false, false"
          },
          {
            "key": "C",
            "text": "false, true"
          },
          {
            "key": "D",
            "text": "true, false"
          }
        ],
        "explanation": "- Toán tử `==` so sánh địa chỉ vùng nhớ tham chiếu. Vì sử dụng từ khóa `new`, hai đối tượng nằm ở hai địa chỉ bộ nhớ riêng biệt trên Heap $\\rightarrow$ `false`.\n  - Phương thức `equals()` trong lớp `String` so sánh nội dung ký tự của chuỗi $\\rightarrow$ đều là `\"Java\"` nên trả về `true`."
      },
      "th": {
        "categoryName": "Java Core",
        "question": "พิจารณาโค้ดต่อไปนี้:",
        "questionAfter": "ผลลัพธ์ของ `a == b` และ `a.equals(b)` ตามลำดับคืออะไร?",
        "options": [
          {
            "key": "A",
            "text": "true, true"
          },
          {
            "key": "B",
            "text": "false, false"
          },
          {
            "key": "C",
            "text": "false, true"
          },
          {
            "key": "D",
            "text": "true, false"
          }
        ],
        "explanation": "`==` เปรียบเทียบตำแหน่งหน่วยความจำ (อ้างอิงคนละออบเจกต์จึงได้ false) ส่วน `.equals()` เปรียบเทียบเนื้อหาของสตริง (ข้อความ \"Java\" เหมือนกันจึงได้ true)"
      }
    }
  },
  {
    "id": 47,
    "code": "O05",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "Why is it generally better to keep an `Account`'s balance private instead of allowing any code to modify it directly?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "It makes the program run faster"
          },
          {
            "key": "B",
            "text": "It allows the class to enforce rules when the state changes"
          },
          {
            "key": "C",
            "text": "It prevents objects from being created"
          },
          {
            "key": "D",
            "text": "It automatically creates inheritance"
          }
        ],
        "explanation": "Encapsulation allows the class to enforce invariants and business validation rules (e.g. non-negative balance) whenever state changes."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Vì sao việc giữ thuộc tính `balance` của lớp `Account` ở mức private lại tốt hơn việc cho phép bất kỳ mã nào sửa đổi trực tiếp?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Nó giúp chương trình chạy nhanh hơn"
          },
          {
            "key": "B",
            "text": "Nó cho phép lớp áp dụng các quy tắc kiểm soát khi trạng thái thay đổi"
          },
          {
            "key": "C",
            "text": "Nó ngăn chặn việc tạo đối tượng"
          },
          {
            "key": "D",
            "text": "Nó tự động tạo ra tính kế thừa"
          }
        ],
        "explanation": "Giữ thuộc tính `private` giúp đóng gói dữ liệu, buộc các thay đổi phải thông qua các phương thức nghiệp vụ để đảm bảo các ràng buộc (ví dụ: số dư không âm, số tiền giao dịch hợp lệ)."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "เหตุใดการกำหนดให้ `balance` ของคลาส `Account` เป็น private จึงดีกว่าการอนุญาตให้โค้ดภายนอกแก้ไขได้โดยตรง?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "ทำให้โปรแกรมทำงานได้เร็วขึ้น"
          },
          {
            "key": "B",
            "text": "ช่วยให้คลาสสามารถบังคับใช้กฎเกณฑ์และเงื่อนไขเมื่อสถานะของข้อมูลเปลี่ยนแปลง"
          },
          {
            "key": "C",
            "text": "ป้องกันไม่ให้ออบเจกต์ถูกสร้างขึ้น"
          },
          {
            "key": "D",
            "text": "สร้างการสืบทอดคุณสมบัติโดยอัตโนมัติ"
          }
        ],
        "explanation": "การรักษาความปลอดภัยของข้อมูล (Encapsulation) ช่วยให้สามารถตรวจสอบเงื่อนไข เช่น ยอดเงินต้องไม่ติดลบ ก่อนที่จะอนุญาตให้เปลี่ยนแปลงค่าได้"
      }
    }
  },
  {
    "id": 48,
    "code": "O15",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "A `Car` creates and manages an `Engine` as part of its own lifecycle. The `Engine` is conceptually a component of the `Car` rather than an independently managed entity. Which relationship is best represented?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Inheritance"
          },
          {
            "key": "B",
            "text": "Aggregation"
          },
          {
            "key": "C",
            "text": "Composition"
          },
          {
            "key": "D",
            "text": "Polymorphism"
          }
        ],
        "explanation": "Composition represents a strong Has-A relationship where the component (Engine) shares the lifecycle of the container (Car)."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Một chiếc xe hơi `Car` tạo ra và quản lý một động cơ `Engine` như một phần gắn liền trong vòng đời của chính nó. `Engine` về mặt khái niệm là một thành phần của `Car` chứ không phải một thực thể quản lý độc lập. Mối quan hệ nào được thể hiện tốt nhất?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "Kế thừa (Inheritance)"
          },
          {
            "key": "B",
            "text": "Thu nạp (Aggregation)"
          },
          {
            "key": "C",
            "text": "Hợp thành (Composition)"
          },
          {
            "key": "D",
            "text": "Đa hình (Polymorphism)"
          }
        ],
        "explanation": "Quan hệ Hợp thành (Composition): `Engine` là một phần gắn liền với vòng đời của `Car`. Nếu `Car` bị tiêu hủy thì `Engine` bên trong nó cũng không tồn tại độc lập."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "รถยนต์ `Car` สร้างและจัดการเครื่องยนต์ `Engine` ซึ่งเป็นส่วนหนึ่งของวงจรชีวิตของตัวมันเอง โดย `Engine` มีลักษณะเป็นองค์ประกอบภายในของ `Car` มากกว่าจะเป็นสิ่งที่แยกอยู่อย่างอิสระ ความสัมพันธ์นี้แสดงถึงอะไรได้ดีที่สุด?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "การสืบทอด (Inheritance)"
          },
          {
            "key": "B",
            "text": "การรวบรวม (Aggregation)"
          },
          {
            "key": "C",
            "text": "การประกอบ (Composition)"
          },
          {
            "key": "D",
            "text": "ความหลากหลาย (Polymorphism)"
          }
        ],
        "explanation": "Composition คือความสัมพันธ์แบบ Has-A ที่แนบแน่น โดยออบเจกต์ส่วนประกอบ (Engine) จะขึ้นอยู่กับวงจรชีวิตของออบเจกต์หลัก (Car)"
      }
    }
  },
  {
    "id": 49,
    "code": "J08",
    "category": "Java",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "C",
    "translations": {
      "en": {
        "categoryName": "Java Core",
        "question": "Which Java access modifier provides the most restricted direct access to a class member?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "`public`"
          },
          {
            "key": "B",
            "text": "`protected`"
          },
          {
            "key": "C",
            "text": "`private`"
          },
          {
            "key": "D",
            "text": "`default`"
          }
        ],
        "explanation": "`private` restricts accessibility strictly to within the declaring class, offering the highest level of restriction."
      },
      "vi": {
        "categoryName": "Java Core",
        "question": "Từ khóa phạm vi truy cập (Access Modifier) nào trong Java cung cấp mức độ hạn chế truy cập trực tiếp cao nhất đối với một thành viên của lớp?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "public"
          },
          {
            "key": "B",
            "text": "protected"
          },
          {
            "key": "C",
            "text": "private"
          },
          {
            "key": "D",
            "text": "default (package-private)"
          }
        ],
        "explanation": "Mức độ hạn chế tăng dần: `public` < `protected` < `default` (package-private) < `private`. Modifier `private` chỉ cho phép truy cập từ bên trong chính class đó."
      },
      "th": {
        "categoryName": "Java Core",
        "question": "Access Modifier ตัวใดในภาษา Java ที่จำกัดสิทธิ์การเข้าถึงสมาชิกของคลาสอย่างเข้มงวดที่สุด?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "public"
          },
          {
            "key": "B",
            "text": "protected"
          },
          {
            "key": "C",
            "text": "private"
          },
          {
            "key": "D",
            "text": "default (package-private)"
          }
        ],
        "explanation": "คีย์เวิร์ด `private` อนุญาตให้เข้าถึงได้จากภายในคลาสเดียวกันเท่านั้น จึงเป็นระดับที่เข้มงวดที่สุด"
      }
    }
  },
  {
    "id": 50,
    "code": "O02",
    "category": "OOP",
    "isHard": false,
    "codeSnippet": null,
    "correctAnswer": "B",
    "translations": {
      "en": {
        "categoryName": "Object-Oriented Programming",
        "question": "Two objects `a` and `b` are created from the same `Account` class. Each has its own `balance` field. If `a.balance` changes, what normally happens to `b.balance`?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "`b.balance` also changes"
          },
          {
            "key": "B",
            "text": "`b.balance` remains unchanged"
          },
          {
            "key": "C",
            "text": "The program cannot have two Account objects"
          },
          {
            "key": "D",
            "text": "`b.balance` becomes zero"
          }
        ],
        "explanation": "Each object instance holds its own separate memory copy of instance fields. Mutating `a.balance` has no effect on `b.balance`."
      },
      "vi": {
        "categoryName": "Lập trình hướng đối tượng",
        "question": "Hai đối tượng `a` và `b` được tạo từ cùng một lớp `Account`. Mỗi đối tượng có trường `balance` riêng. Nếu `a.balance` thay đổi, điều gì thường xảy ra với `b.balance`?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "b.balance cũng thay đổi theo"
          },
          {
            "key": "B",
            "text": "b.balance vẫn giữ nguyên không thay đổi"
          },
          {
            "key": "C",
            "text": "Chương trình không thể tồn tại hai đối tượng Account"
          },
          {
            "key": "D",
            "text": "b.balance trở về giá trị 0"
          }
        ],
        "explanation": "Mỗi thể hiện đối tượng (instance) sở hữu vùng nhớ riêng biệt cho các biến thể hiện (instance variables). Do đó, sự thay đổi thuộc tính trên đối tượng `a` hoàn toàn độc lập và không ảnh hưởng đến đối tượng `b`."
      },
      "th": {
        "categoryName": "การเขียนโปรแกรมเชิงวัตถุ",
        "question": "ออบเจกต์สองตัว `a` และ `b` ถูกสร้างขึ้นจากคลาส `Account` เดียวกัน โดยแต่ละตัวมีฟิลด์ `balance` ของตนเอง หาก `a.balance` มีการเปลี่ยนแปลง โดยปกติจะเกิดอะไรขึ้นกับ `b.balance`?",
        "questionAfter": "",
        "options": [
          {
            "key": "A",
            "text": "b.balance จะเปลี่ยนตามไปด้วย"
          },
          {
            "key": "B",
            "text": "b.balance จะยังคงไม่เปลี่ยนแปลง"
          },
          {
            "key": "C",
            "text": "โปรแกรมไม่สามารถมีออบเจกต์ Account สองตัวได้"
          },
          {
            "key": "D",
            "text": "b.balance จะกลายเป็นศูนย์"
          }
        ],
        "explanation": "ตัวแปรอินสแตนซ์จะแยกพื้นที่หน่วยความจำสำหรับแต่ละออบเจกต์อย่างอิสระ การแก้ไขข้อมูลของ `a` จึงไม่ส่งผลต่อ `b`"
      }
    }
  }
];
