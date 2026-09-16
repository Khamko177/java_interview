/**
 * 50 Interview Questions Data
 */
const quizData = [
  {
    "id": 1,
    "code": "O06",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "A company has `Employee` as a general type, with `Developer` and `Designer` as specialized types. Which design best represents this relationship?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Quan hệ \"Is-A\" (Kế thừa - Inheritance): `Employee` là lớp cha (tổng quát), `Developer` và `Designer` là các lớp con chuyên biệt kế thừa các thuộc tính và hành vi chung từ `Employee`."
  },
  {
    "id": 2,
    "code": "L14",
    "isHard": true,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "You have 1,000 bottles and exactly one bottle is contaminated. You have test strips that turn positive if exposed to the contaminated bottle. All tests can be performed simultaneously in one round. What is the minimum number of strips required to identify the contaminated bottle?",
    "codeSnippet": null,
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
    "correctAnswer": "C",
    "explanation": "Đây là bài toán tìm nhị phân bằng que thử trong 1 lần thử. Mỗi chai từ 1 đến 1000 được đánh mã nhị phân 10 bit ($2^{10} = 1024 \\ge 1000$). Ta nhỏ mẫu của chai vào que thứ $k$ nếu bit thứ $k$ của mã chai đó là 1. Sau khi thử, kết quả đổi màu của 10 que thử ghép lại thành đúng chuỗi nhị phân xác định vị trí chai có độc. Với 9 que thì $2^9 = 512 < 1000$ (không đủ). Do đó cần tối thiểu 10 que."
  },
  {
    "id": 3,
    "code": "J02",
    "isHard": false,
    "category": "Java",
    "categoryName": "Java Core",
    "question": "Consider:\n``",
    "codeSnippet": "Person p1 = new Person(); \nPerson p2 = p1; \np2.name = \"Alice\";",
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
    "correctAnswer": "B",
    "explanation": "Biến đối tượng trong Java lưu trữ địa chỉ tham chiếu vùng nhớ trên Heap. Câu lệnh `Person p2 = p1;` gán địa chỉ của cùng một đối tượng từ `p1` sang `p2`. Khi thay đổi `p2.name`, đối tượng thực tế bị thay đổi, do đó `p1.name` cũng mang giá trị `\"Alice\"`."
  },
  {
    "id": 4,
    "code": "O13",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "A system defines a `Notification` abstraction with `send()`. `EmailNotification` and `SmsNotification` provide their own implementations. What is the main purpose of the abstraction?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Mục đích cốt lõi của tính trừu tượng (Abstraction) là công khai giao diện chung (`send()`), giúp các module bên ngoài tương tác thông qua hợp đồng chung mà không cần quan tâm đến cách thức gửi chi tiết của Email hay SMS."
  },
  {
    "id": 5,
    "code": "P06",
    "isHard": false,
    "category": "Programming",
    "categoryName": "Kỹ năng Lập trình",
    "question": "Let $f(x) = x + 2$ and $g(x) = 3x$. What is $g(f(4))$?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Tính toán hàm lồng nhau từ trong ra ngoài:\n  1. $f(4) = 4 + 2 = 6$.\n  2. $g(f(4)) = g(6) = 3 \\times 6 = 18$."
  },
  {
    "id": 6,
    "code": "L06",
    "isHard": false,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "Four people A, B, C, D are suspects. Exactly one person is guilty. Each makes one statement.",
    "codeSnippet": null,
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
    "correctAnswer": "A",
    "explanation": "Xét từng trường hợp:\n  - Nếu **A có tội**: A nói thật (1), B nói dối (0), C nói dối (0), D nói thật (1). Có đúng 2 phát biểu thật $\\Rightarrow$ **Thỏa mãn**.\n  - Nếu B có tội: A nói dối (0), B nói thật (1), C nói thật (1), D nói thật (1) $\\Rightarrow$ 3 phát biểu thật (loại).\n  - Nếu C hoặc D có tội: chỉ có B nói thật $\\Rightarrow$ 1 phát biểu thật (loại)."
  },
  {
    "id": 7,
    "code": "P05",
    "isHard": false,
    "category": "Programming",
    "categoryName": "Kỹ năng Lập trình",
    "question": "How many times is X printed?\n``",
    "codeSnippet": "for (int i = 1; i <= 4; i++) { \n    for (int j = i; j <= 4; j++) { \n        print(\"X\"); \n    } \n}",
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
    "correctAnswer": "C",
    "explanation": "- $i = 1$: $j$ chạy từ 1 đến 4 $\\rightarrow$ 4 lần.\n  - $i = 2$: $j$ chạy từ 2 đến 4 $\\rightarrow$ 3 lần.\n  - $i = 3$: $j$ chạy từ 3 đến 4 $\\rightarrow$ 2 lần.\n  - $i = 4$: $j$ chạy từ 4 đến 4 $\\rightarrow$ 1 lần.  \n  Tổng cộng: $4 + 3 + 2 + 1 = 10$ lần."
  },
  {
    "id": 8,
    "code": "J06",
    "isHard": false,
    "category": "Java",
    "categoryName": "Java Core",
    "question": "Consider:\n``",
    "codeSnippet": "class Counter { \n    static int count = 0; \n} \nCounter a = new Counter(); \nCounter b = new Counter(); \na.count++; \nb.count++;",
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
    "correctAnswer": "C",
    "explanation": "Biến có từ khóa `static` thuộc về lớp (class variable) và được chia sẻ chung cho toàn bộ các thể hiện của lớp đó. Cả `a.count++` và `b.count++` đều cùng tác động tăng giá trị của biến dùng chung này, từ 0 lên 2."
  },
  {
    "id": 9,
    "code": "L05",
    "isHard": false,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "A system has the following rules:",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Dựa vào luật phản đảo (Modus Tollens):\n  - Vì $\\neg R$ (người dùng không nhận cảnh báo) $\\Rightarrow \\neg Q$ (thời gian phản hồi không tăng).\n  - Vì $\\neg Q$ $\\Rightarrow \\neg P$ (máy chủ không bị quá tải)."
  },
  {
    "id": 10,
    "code": "O03",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "What happens after this code?\n``",
    "codeSnippet": "Person p1 = new Person(); \nPerson p2 = new Person(); \np2 = p1;",
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
    "correctAnswer": "A",
    "explanation": "Gán `p2 = p1;` làm cho biến tham chiếu `p2` trỏ đến cùng đối tượng mà `p1` đang trỏ. Đối tượng ban đầu được tạo cho `p2` trở thành đối tượng mồ côi (không còn tham chiếu) và sẽ được Garbage Collector thu hồi sau đó."
  },
  {
    "id": 11,
    "code": "L10",
    "isHard": false,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "Two machines operate for 40 minutes. Machine 1 produces one item every 12 minutes and Machine 2 produces one item every 8 minutes. If both start at the same time and only complete items are counted, how many items are produced in total?",
    "codeSnippet": null,
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
    "correctAnswer": "A",
    "explanation": "- Máy 1 hoàn thành 1 sản phẩm mỗi 12 phút $\\rightarrow \\lfloor 40 / 12 \\rfloor = 3$ sản phẩm (vào phút 12, 24, 36).\n  - Máy 2 hoàn thành 1 sản phẩm mỗi 8 phút $\\rightarrow \\lfloor 40 / 8 \\rfloor = 5$ sản phẩm (vào phút 8, 16, 24, 32, 40).\n  - Tổng số sản phẩm hoàn chỉnh = $3 + 5 = 8$."
  },
  {
    "id": 12,
    "code": "O11",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "Consider:\n``",
    "codeSnippet": "Animal[] animals = { new Dog(), new Cat(), new Dog() };",
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
    "correctAnswer": "C",
    "explanation": "Đây là tính Đa hình (Polymorphism) và cơ chế Dynamic Binding lúc runtime. Dù mảng có kiểu khai báo là `Animal[]`, khi gọi phương thức bị ghi đè, JVM sẽ gọi hàm tương ứng với kiểu đối tượng thực tế (`Dog` hoặc `Cat`)."
  },
  {
    "id": 13,
    "code": "P03",
    "isHard": false,
    "category": "Programming",
    "categoryName": "Kỹ năng Lập trình",
    "question": "What is printed?\n``",
    "codeSnippet": "int x = 1; \nwhile (x < 20) { \n    x = x * 2 + 1; \n} \nprint(x);",
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
    "correctAnswer": "C",
    "explanation": "Diễn tiến giá trị qua từng vòng lặp:\n  - Khởi tạo: $x = 1$.\n  - Vòng 1: $1 < 20 \\rightarrow x = 1 \\times 2 + 1 = 3$.\n  - Vòng 2: $3 < 20 \\rightarrow x = 3 \\times 2 + 1 = 7$.\n  - Vòng 3: $7 < 20 \\rightarrow x = 7 \\times 2 + 1 = 15$.\n  - Vòng 4: $15 < 20 \\rightarrow x = 15 \\times 2 + 1 = 31$.\n  - Vòng 5: $31 < 20$ (Sai $\\rightarrow$ dừng lặp). In ra: 31."
  },
  {
    "id": 14,
    "code": "O14",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "Why can programming against a `Payment` interface make a system easier to extend?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Tuân thủ nguyên lý Dependency Inversion và Open/Closed Principle (SOLID). Mã nguồn chỉ giao tiếp qua `Payment` interface, cho phép cắm thêm các cổng thanh toán mới mà không cần chỉnh sửa code lõi."
  },
  {
    "id": 15,
    "code": "J10",
    "isHard": false,
    "category": "Java",
    "categoryName": "Java Core",
    "question": "Consider the following Java code. Assume each `Counter` object has its own instance variable `value`, initialized to 0, and `increment()` increases that object's value by 1.\n``",
    "codeSnippet": "Counter a = new Counter(); \nCounter b = a; \na.increment(); \nb.increment();",
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
    "correctAnswer": "C",
    "explanation": "Cả hai biến tham chiếu `a` và `b` cùng trỏ tới một đối tượng `Counter` duy nhất. Gọi `a.increment()` rồi `b.increment()` làm tăng thuộc tính `value` của đối tượng đó 2 lần $\\rightarrow$ giá trị bằng 2."
  },
  {
    "id": 16,
    "code": "O08",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "A subclass provides its own implementation of a method that already exists in its superclass. What is this called?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Ghi đè phương thức (Method Overriding) là việc lớp con cung cấp cài đặt riêng cho phương thức đã có ở lớp cha với cùng tên, cùng danh sách tham số."
  },
  {
    "id": 17,
    "code": "O04",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "An `Account` class keeps `balance` private and provides `deposit()` and `withdraw()` methods that validate transactions. Which OOP principle is primarily being applied?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Tính đóng gói (Encapsulation) bảo vệ dữ liệu nội bộ bằng cách đặt thuộc tính là `private` và chỉ cho phép truy cập, biến đổi có kiểm soát thông qua các phương thức `public`."
  },
  {
    "id": 18,
    "code": "L07",
    "isHard": false,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "There are 40 students. 24 know Java, 18 know Python, and 10 know both. How many know neither Java nor Python?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Công thức tập hợp:\n  - Số người biết ít nhất 1 ngôn ngữ: $|J \\cup P| = 24 + 18 - 10 = 32$.\n  - Số người không biết ngôn ngữ nào: $40 - 32 = 8$."
  },
  {
    "id": 19,
    "code": "L03",
    "isHard": true,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "A machine has three lights: A, B, and C. Initially, all three lights are OFF.\nEach operation must toggle exactly two lights:",
    "codeSnippet": null,
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
    "correctAnswer": "A",
    "explanation": "Mỗi thao tác luôn đảo trạng thái của đúng 2 bóng đèn. Do đó, tính chẵn/lẻ (parity) của tổng số bóng đèn đang BẬT luôn không đổi (bắt đầu là 0 đèn bật = số chẵn). Vì vậy không bao giờ có thể đạt tới trạng thái có 1 đèn hoặc 3 đèn bật (số lẻ). *(Lưu ý: các đáp án B, C, D là số trong đề gốc, đáp án duy nhất mô tả trạng thái đèn là A).*"
  },
  {
    "id": 20,
    "code": "O07",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "Which relationship is the strongest example of inheritance?",
    "codeSnippet": null,
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
    "correctAnswer": "A",
    "explanation": "Quan hệ kế thừa là quan hệ \"Is-A\" (Manager là một Employee). B và C là quan hệ Has-A (Composition/Aggregation), D là quan hệ Use-A (Dependency)."
  },
  {
    "id": 21,
    "code": "L02",
    "isHard": false,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "What is the next number in the sequence: 2, 5, 11, 23, 47, ?",
    "codeSnippet": null,
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
    "correctAnswer": "C",
    "explanation": "Quy luật dãy số: $\\text{Số sau} = \\text{Số trước} \\times 2 + 1$:\n  - $2 \\times 2 + 1 = 5$\n  - $5 \\times 2 + 1 = 11$\n  - $11 \\times 2 + 1 = 23$\n  - $23 \\times 2 + 1 = 47$\n  - $47 \\times 2 + 1 = 95$."
  },
  {
    "id": 22,
    "code": "L15",
    "isHard": false,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "Start with 1. To generate each next term, multiply the previous term by 2, then add the position of the new term. What is term 6?",
    "codeSnippet": null,
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
    "correctAnswer": "C",
    "explanation": "Tính lần lượt theo từng vị trí:\n  - Vị trí 1: $1$\n  - Vị trí 2: $1 \\times 2 + 2 = 4$\n  - Vị trí 3: $4 \\times 2 + 3 = 11$\n  - Vị trí 4: $11 \\times 2 + 4 = 26$\n  - Vị trí 5: $26 \\times 2 + 5 = 57$\n  - Vị trí 6: $57 \\times 2 + 6 = 120$."
  },
  {
    "id": 23,
    "code": "P01",
    "isHard": false,
    "category": "Programming",
    "categoryName": "Kỹ năng Lập trình",
    "question": "When is the expression `(A && B) || C` false?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Phép toán `OR` ($||$) chỉ cho kết quả `false` khi cả hai vế đều `false`:\n  - Vế phải `C` phải là `false`.\n  - Vế trái `(A && B)` phải là `false`, tức là ít nhất một trong hai biến $A$ hoặc $B$ mang giá trị `false`."
  },
  {
    "id": 24,
    "code": "L09",
    "isHard": false,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "A prize is hidden in exactly one of four boxes: A, B, C, or D. Each box has one statement. Exactly two statements are true.",
    "codeSnippet": null,
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
    "correctAnswer": "A",
    "explanation": "- Nếu phần thưởng ở hộp **A**: Phát biểu A (Đúng), B (Sai), C (Sai), D (Đúng) $\\rightarrow$ Đúng 2 phát biểu đúng $\\Rightarrow$ **Thỏa mãn**.\n  - Nếu ở hộp B: B (Đúng), C (Đúng), D (Đúng) $\\rightarrow$ 3 phát biểu đúng (loại).\n  - Nếu ở hộp C hoặc D: chỉ có B là đúng $\\rightarrow$ 1 phát biểu đúng (loại)."
  },
  {
    "id": 25,
    "code": "L12",
    "isHard": true,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "There are three switches outside a room and three bulbs inside. Each switch controls exactly one bulb. You may enter the room only once. Which strategy lets you identify all three switch-bulb pairs?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Bật công tắc 1 một lúc để bóng đèn nóng lên, sau đó tắt đi và bật công tắc 2 rồi bước vào phòng:\n  - Bóng đèn đang sáng $\\rightarrow$ Công tắc 2.\n  - Bóng đèn tắt nhưng chạm vào thấy nóng $\\rightarrow$ Công tắc 1.\n  - Bóng đèn tắt và nguội $\\rightarrow$ Công tắc 3."
  },
  {
    "id": 26,
    "code": "P02",
    "isHard": false,
    "category": "Programming",
    "categoryName": "Kỹ năng Lập trình",
    "question": "What does this code print?\n``",
    "codeSnippet": "int x = 10; \nif (x >= 10 && x < 20) print(\"A\"); \nelse if (x == 20) print(\"B\"); \nelse print(\"C\");",
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
    "correctAnswer": "A",
    "explanation": "Với $x = 10$, điều kiện `x >= 10 && x < 20` thỏa mãn (`true && true = true`), nhánh `if` đầu tiên được thực thi và in ra `\"A\"`."
  },
  {
    "id": 27,
    "code": "J07",
    "isHard": false,
    "category": "Java",
    "categoryName": "Java Core",
    "question": "What happens if code declares `final int x = 10;` and later tries `x = 20;`?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Trong Java, từ khóa `final` áp dụng cho biến khiến giá trị của biến đó không thể thay đổi sau khi khởi tạo (hằng số). Việc gán lại giá trị sẽ gây lỗi biên dịch (Compilation Error)."
  },
  {
    "id": 28,
    "code": "P10",
    "isHard": false,
    "category": "Programming",
    "categoryName": "Kỹ năng Lập trình",
    "question": "What is printed?\n``",
    "codeSnippet": "int x = 25; \nint count = 0; \nwhile (x > 1) { \n    x = x / 2; \n    count++; \n} \nprint(count);",
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
    "correctAnswer": "B",
    "explanation": "- Lần 1: $x = 25 / 2 = 12$, $count = 1$.\n  - Lần 2: $x = 12 / 2 = 6$, $count = 2$.\n  - Lần 3: $x = 6 / 2 = 3$, $count = 3$.\n  - Lần 4: $x = 3 / 2 = 1$, $count = 4$.\n  - Kiểm tra điều kiện $x > 1$ ($1 > 1$ là sai $\\rightarrow$ dừng lặp). In ra: 4."
  },
  {
    "id": 29,
    "code": "O01",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "Which statement best describes a class and an object?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Lớp (Class) là bản vẽ thiết kế quy định trạng thái và hành vi; đối tượng (Object) là một thực thể cụ thể (instance) được cấp phát bộ nhớ dựa trên bản vẽ đó."
  },
  {
    "id": 30,
    "code": "J04",
    "isHard": false,
    "category": "Java",
    "categoryName": "Java Core",
    "question": "Given `int[] numbers = {10, 20, 30, 40};` which expression accesses the last element?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Mảng trong Java có chỉ mục từ `0` đến `length - 1`. Mảng có 4 phần tử thì phần tử cuối cùng ở vị trí chỉ mục 3."
  },
  {
    "id": 31,
    "code": "L08",
    "isHard": false,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "A three-digit number has three different digits. The first digit is twice the second digit. The third digit is greater than the first digit. The sum of the three digits is 17. What is the number?",
    "codeSnippet": null,
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
    "correctAnswer": "A",
    "explanation": "- Số 638 có 3 chữ số phân biệt: 6, 3, 8.\n  - Chữ số đầu gấp đôi chữ số thứ hai: $6 = 3 \\times 2$.\n  - Chữ số thứ ba lớn hơn chữ số đầu: $8 > 6$.\n  - Tổng ba chữ số: $6 + 3 + 8 = 17$."
  },
  {
    "id": 32,
    "code": "P07",
    "isHard": false,
    "category": "Programming",
    "categoryName": "Kỹ năng Lập trình",
    "question": "What is printed?\n``",
    "codeSnippet": "int x = 10; \nvoid change(int value) { \n    value += 5; \n} \nchange(x); \nprint(x);",
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
    "correctAnswer": "A",
    "explanation": "Java truyền tham số hoàn toàn theo cơ chế truyền giá trị (Pass-by-value). Giá trị 10 được sao chép vào biến cục bộ `value`. Mọi thay đổi trên `value` không làm thay đổi biến `x` ở phạm vi bên ngoài."
  },
  {
    "id": 33,
    "code": "L11",
    "isHard": true,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "There are 9 identical-looking coins, and exactly one is heavier than the others. Using a balance scale, what is the minimum number of weighings needed to guarantee finding the heavier coin?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Chia 9 đồng thành 3 nhóm (3-3-3):\n  - Lần cân 1: Đặt nhóm 1 và nhóm 2 lên cân. Nếu một bên lệch thì đồng nặng ở bên đó; nếu thăng bằng thì đồng nặng ở nhóm 3.\n  - Lần cân 2: Lấy 3 đồng của nhóm nặng, đặt mỗi đồng lên 1 đĩa cân, giữ lại 1 đồng. Ta tìm ra ngay đồng nặng nhất. Tối thiểu cần 2 lần cân ($3^2 = 9$)."
  },
  {
    "id": 34,
    "code": "P09",
    "isHard": false,
    "category": "Programming",
    "categoryName": "Kỹ năng Lập trình",
    "question": "What is printed?\n``",
    "codeSnippet": "int result = 1; \nfor (int i = 1; i <= 4; i++) { \n    result *= i; \n} \nprint(result);",
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
    "correctAnswer": "C",
    "explanation": "Vòng lặp tính giai thừa của 4: $1 \\times 2 \\times 3 \\times 4 = 24$."
  },
  {
    "id": 35,
    "code": "L04",
    "isHard": true,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "Five people A, B, C, D, E stand in a line.",
    "codeSnippet": null,
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
    "correctAnswer": "C",
    "explanation": "- A đứng trước C: Đúng (vị trí 1 và 5).\n  - B đứng ngay sau D: Đúng (D vị trí 3, B vị trí 4 $\\rightarrow$ cặp \"DB\").\n  - E không đứng ở 2 đầu: Đúng (E ở vị trí 2).\n  - C không đứng cạnh E: Đúng (E ở vị trí 2, C ở vị trí 5)."
  },
  {
    "id": 36,
    "code": "J09",
    "isHard": false,
    "category": "Java",
    "categoryName": "Java Core",
    "question": "What is printed?\n``",
    "codeSnippet": "try { \n    int x = 10 / 0; \n    System.out.println(\"A\"); \n} catch (ArithmeticException e) { \n    System.out.println(\"B\"); \n} \nSystem.out.println(\"C\");",
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
    "correctAnswer": "B",
    "explanation": "Câu lệnh `10 / 0` ném ra ngoại lệ `ArithmeticException`, dòng in \"A\" bị bỏ qua, luồng nhảy vào khối `catch` và in ra \"B\". Sau đó chương trình chạy tiếp câu lệnh kế tiếp ngoài khối try-catch và in ra \"C\"."
  },
  {
    "id": 37,
    "code": "O10",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "Consider:\n``",
    "codeSnippet": "Animal animal = new Dog();",
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
    "correctAnswer": "B",
    "explanation": "Trong thời gian biên dịch (Compile-time), trình biên dịch kiểm tra tính hợp lệ dựa trên kiểu tham chiếu (`Animal`). Vì `Animal` không có phương thức `bark()`, nên gọi trực tiếp `animal.bark()` sẽ gặp lỗi biên dịch (trừ khi ép kiểu sang `Dog`)."
  },
  {
    "id": 38,
    "code": "L13",
    "isHard": true,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "There are 12 identical-looking balls. Exactly one ball is abnormal, but it may be either heavier or lighter than the others. Using a balance scale, what is the minimum number of weighings needed to always identify the abnormal ball and determine whether it is heavier or lighter?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Bài toán cân 12 quả bóng kinh điển. Có 12 quả và 2 trạng thái (nặng hơn/nhẹ hơn) $\\rightarrow$ 24 trường hợp. Mỗi lần cân có 3 kết quả (trái, phải, bằng nhau). Với 3 lần cân, số trường hợp phân biệt tối đa là $3^3 = 27 \\ge 24$. Bằng chiến thuật chia 4-4-4 ở lần cân đầu tiên, ta luôn tìm ra quả bóng lỗi sau đúng 3 lần cân."
  },
  {
    "id": 39,
    "code": "O09",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "Consider:\n``",
    "codeSnippet": "Animal a = new Dog(); \na.sound();",
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
    "correctAnswer": "B",
    "explanation": "Tính đa hình động (Dynamic Method Dispatch): Khi phương thức đã được ghi đè, tại thời điểm chạy (runtime), JVM sẽ gọi phiên bản cài đặt của đối tượng thực tế (`Dog`)."
  },
  {
    "id": 40,
    "code": "P04",
    "isHard": false,
    "category": "Programming",
    "categoryName": "Kỹ năng Lập trình",
    "question": "What is the sum of all integers from 1 to 10 for which `i % 3 != 0`?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Các số từ 1 đến 10 không chia hết cho 3 gồm: 1, 2, 4, 5, 7, 8, 10.  \n  Tổng: $1 + 2 + 4 + 5 + 7 + 8 + 10 = 37$."
  },
  {
    "id": 41,
    "code": "J01",
    "isHard": false,
    "category": "Java",
    "categoryName": "Java Core",
    "question": "Which pair contains one primitive type and one reference type in Java?",
    "codeSnippet": null,
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
    "correctAnswer": "A",
    "explanation": "`int` là kiểu dữ liệu nguyên thủy (primitive), còn `String` là kiểu đối tượng tham chiếu (reference type). (B, C là 2 kiểu reference; D là 2 kiểu primitive)."
  },
  {
    "id": 42,
    "code": "J05",
    "isHard": false,
    "category": "Java",
    "categoryName": "Java Core",
    "question": "Which statement about Java `List` is correct?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Giao diện `List` trong Java Collection Framework lưu trữ các phần tử có thứ tự chèn (insertion order) và cho phép các phần tử có giá trị trùng lặp (duplicates)."
  },
  {
    "id": 43,
    "code": "L01",
    "isHard": false,
    "category": "Logic",
    "categoryName": "Tư duy Logic",
    "question": "What is the next number in the sequence: 4, 7, 13, 22, 34, ?",
    "codeSnippet": null,
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
    "correctAnswer": "C",
    "explanation": "Hiệu giữa các số liên tiếp tăng dần theo bội số của 3:\n  - $7 - 4 = +3$\n  - $13 - 7 = +6$\n  - $22 - 13 = +9$\n  - $34 - 22 = +12$  \n  $\\rightarrow$ Số tiếp theo: $34 + 15 = 49$."
  },
  {
    "id": 44,
    "code": "O12",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "A method `processPayment(Payment payment)` calls `payment.pay()`. `CreditCardPayment` and `BankTransferPayment` both implement `Payment`. No `instanceof` checks are used. What OOP concept makes this design possible?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Tính đa hình (Polymorphism) cho phép hàm nhận tham chiếu giao diện cha `Payment` và tự động điều hướng cuộc gọi `payment.pay()` đến hành vi cụ thể tương ứng của từng lớp con mà không cần kiểm tra kiểu dữ liệu bằng `instanceof`."
  },
  {
    "id": 45,
    "code": "P08",
    "isHard": false,
    "category": "Programming",
    "categoryName": "Kỹ năng Lập trình",
    "question": "What is printed?\n``",
    "codeSnippet": "int a = 3; \nint b = 5; \na = a + b; \nb = a - b; \na = a - b; \nprint(a + \" \" + b);",
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
    "correctAnswer": "B",
    "explanation": "Đây là kỹ thuật hoán đổi 2 số không dùng biến phụ:\n  - $a = 3 + 5 = 8$\n  - $b = 8 - 5 = 3$\n  - $a = 8 - 3 = 5$  \n  In ra: `\"5 3\"`."
  },
  {
    "id": 46,
    "code": "J03",
    "isHard": false,
    "category": "Java",
    "categoryName": "Java Core",
    "question": "Consider:\n``",
    "codeSnippet": "String a = new String(\"Java\"); \nString b = new String(\"Java\");",
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
    "correctAnswer": "C",
    "explanation": "- Toán tử `==` so sánh địa chỉ vùng nhớ tham chiếu. Vì sử dụng từ khóa `new`, hai đối tượng nằm ở hai địa chỉ bộ nhớ riêng biệt trên Heap $\\rightarrow$ `false`.\n  - Phương thức `equals()` trong lớp `String` so sánh nội dung ký tự của chuỗi $\\rightarrow$ đều là `\"Java\"` nên trả về `true`."
  },
  {
    "id": 47,
    "code": "O05",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "Why is it generally better to keep an `Account`'s balance private instead of allowing any code to modify it directly?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Giữ thuộc tính `private` giúp đóng gói dữ liệu, buộc các thay đổi phải thông qua các phương thức nghiệp vụ để đảm bảo các ràng buộc (ví dụ: số dư không âm, số tiền giao dịch hợp lệ)."
  },
  {
    "id": 48,
    "code": "O15",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "A `Car` creates and manages an `Engine` as part of its own lifecycle. The `Engine` is conceptually a component of the `Car` rather than an independently managed entity. Which relationship is best represented?",
    "codeSnippet": null,
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
    "correctAnswer": "C",
    "explanation": "Quan hệ Hợp thành (Composition): `Engine` là một phần gắn liền với vòng đời của `Car`. Nếu `Car` bị tiêu hủy thì `Engine` bên trong nó cũng không tồn tại độc lập."
  },
  {
    "id": 49,
    "code": "J08",
    "isHard": false,
    "category": "Java",
    "categoryName": "Java Core",
    "question": "Which Java access modifier provides the most restricted direct access to a class member?",
    "codeSnippet": null,
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
    "correctAnswer": "C",
    "explanation": "Mức độ hạn chế tăng dần: `public` < `protected` < `default` (package-private) < `private`. Modifier `private` chỉ cho phép truy cập từ bên trong chính class đó."
  },
  {
    "id": 50,
    "code": "O02",
    "isHard": false,
    "category": "OOP",
    "categoryName": "Lập trình hướng đối tượng",
    "question": "Two objects `a` and `b` are created from the same `Account` class. Each has its own `balance` field. If `a.balance` changes, what normally happens to `b.balance`?",
    "codeSnippet": null,
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
    "correctAnswer": "B",
    "explanation": "Mỗi thể hiện đối tượng (instance) sở hữu vùng nhớ riêng biệt cho các biến thể hiện (instance variables). Do đó, sự thay đổi thuộc tính trên đối tượng `a` hoàn toàn độc lập và không ảnh hưởng đến đối tượng `b`."
  }
];
