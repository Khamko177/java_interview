# -*- coding: utf-8 -*-
"""
Full trilingual builder for all 50 Java Interview questions (en, vi, th)
"""
import json, re

# Category names across 3 languages
CATEGORY_NAMES = {
    "OOP": {
        "en": "Object-Oriented Programming",
        "vi": "Lập trình hướng đối tượng",
        "th": "การเขียนโปรแกรมเชิงวัตถุ"
    },
    "Logic": {
        "en": "Logic & Reasoning",
        "vi": "Tư duy Logic",
        "th": "การคิดเชิงตรรกะ"
    },
    "Programming": {
        "en": "Programming Skills",
        "vi": "Kỹ năng Lập trình",
        "th": "ทักษะการเขียนโปรแกรม"
    },
    "Java": {
        "en": "Java Core",
        "vi": "Java Core",
        "th": "Java Core"
    }
}

# Vietnamese questions and options translations
VI_TRANSLATIONS = {
    1: {
        "question": "Một công ty có `Employee` là kiểu tổng quát, với `Developer` và `Designer` là các kiểu chuyên biệt. Thiết kế nào thể hiện tốt nhất mối quan hệ này?",
        "options": [
            "Employee kế thừa Developer và Designer",
            "Developer và Designer kế thừa Employee",
            "Employee và Developer không liên quan đến nhau",
            "Developer chứa Employee"
        ]
    },
    2: {
        "question": "Bạn có 1.000 chai nước và có đúng một chai bị nhiễm độc. Bạn có các que thử sẽ chuyển màu dương tính nếu tiếp xúc với chai có độc. Tất cả các xét nghiệm đều có thể thực hiện đồng thời trong 1 lần thử. Số lượng que thử tối thiểu cần thiết để xác định chính xác chai bị nhiễm độc là bao nhiêu?",
        "options": ["8", "9", "10", "11"]
    },
    3: {
        "question": "Xét đoạn mã sau:",
        "questionAfter": "Giá trị của `p1.name` là gì?",
        "options": ["null", "Alice", "Lỗi biên dịch (Compilation error)", "Một giá trị không thể dự đoán"]
    },
    4: {
        "question": "Một hệ thống định nghĩa tính trừu tượng `Notification` với phương thức `send()`. `EmailNotification` và `SmsNotification` cung cấp các cài đặt riêng của chúng. Mục đích chính của tính trừu tượng ở đây là gì?",
        "options": [
            "Bắt buộc tất cả các thông báo phải dùng mã nội bộ giống hệt nhau",
            "Công khai một giao ước chung đồng thời ẩn đi các chi tiết cài đặt",
            "Ngăn chặn việc tạo các đối tượng thông báo",
            "Loại bỏ các phương thức"
        ]
    },
    5: {
        "question": "Cho $f(x) = x + 2$ và $g(x) = 3x$. Giá trị của $g(f(4))$ là bao nhiêu?",
        "options": ["14", "18", "20", "24"]
    },
    6: {
        "question": "Bốn người A, B, C, D là các nghi phạm. Có đúng một người có tội. Mỗi người đưa ra một lời khai:\n- A: \"A có tội.\"\n- B: \"A không có tội.\"\n- C: \"B có tội.\"\n- D: \"Người có tội là A hoặc B.\"\nBiết có đúng hai lời khai là sự thật. Ai là người có tội?",
        "options": ["A", "B", "C", "D"]
    },
    7: {
        "question": "Chữ \"X\" được in ra bao nhiêu lần?",
        "options": ["8", "9", "10", "12"]
    },
    8: {
        "question": "Xét đoạn mã sau:",
        "questionAfter": "Giá trị của `Counter.count` là bao nhiêu?",
        "options": ["0", "1", "2", "Lỗi biên dịch (Compilation error)"]
    },
    9: {
        "question": "Một hệ thống có các quy tắc sau:\n- Nếu máy chủ quá tải, thời gian phản hồi sẽ tăng.\n- Nếu thời gian phản hồi tăng, người dùng sẽ nhận cảnh báo.\n- Hôm nay người dùng không nhận được cảnh báo.\nChúng ta có thể kết luận điều gì?",
        "options": [
            "Máy chủ đang bị quá tải",
            "Máy chủ không bị quá tải",
            "Thời gian phản hồi đã tăng",
            "Không thể xác định được máy chủ có bị quá tải hay không"
        ]
    },
    10: {
        "question": "Điều gì xảy ra sau khi thực thi đoạn mã trên?",
        "options": [
            "p1 và p2 cùng tham chiếu đến cùng một đối tượng",
            "p1 và p2 luôn là hai đối tượng khác nhau",
            "p1 bị xóa ngay lập tức",
            "p2 trở thành null"
        ]
    },
    11: {
        "question": "Hai máy hoạt động trong 40 phút. Máy 1 sản xuất được một sản phẩm sau mỗi 12 phút và Máy 2 sản xuất được một sản phẩm sau mỗi 8 phút. Nếu cả hai máy cùng bắt đầu hoạt động và chỉ tính các sản phẩm đã hoàn thành, tổng cộng có bao nhiêu sản phẩm được tạo ra?",
        "options": ["8", "10", "12", "13"]
    },
    12: {
        "question": "Xét mảng sau:\nMỗi lớp con ghi đè phương thức `sound()`. Điều gì xảy ra khi một vòng lặp gọi `animals[i].sound()`?",
        "options": [
            "Cài đặt của lớp Animal luôn luôn được gọi",
            "Chương trình chọn phương thức chỉ dựa trên kiểu của mảng",
            "Cài đặt tương ứng của Dog/Cat đối với từng đối tượng thực tế sẽ được gọi",
            "Chương trình báo lỗi vì mảng chứa các lớp con khác nhau"
        ]
    },
    13: {
        "question": "Kết quả in ra màn hình là gì?",
        "options": ["15", "20", "31", "63"]
    },
    14: {
        "question": "Vì sao việc lập trình dựa trên giao diện (`Payment` interface) giúp hệ thống dễ dàng mở rộng hơn?",
        "options": [
            "Mã sử dụng Payment phụ thuộc vào một cài đặt thanh toán cụ thể",
            "Mã có thể hoạt động với các cài đặt khác nhau miễn là thỏa mãn cùng một giao ước",
            "Interface tự động làm cho mã nguồn chạy nhanh hơn",
            "Interface giúp loại bỏ sự cần thiết của việc viết kiểm thử"
        ]
    },
    15: {
        "question": "Xét đoạn mã Java sau. Giả định mỗi đối tượng `Counter` có biến thể hiện `value` riêng, khởi tạo bằng 0, và `increment()` tăng `value` của đối tượng đó thêm 1.",
        "questionAfter": "Giá trị của `a.value` sau các câu lệnh này là gì?",
        "options": ["0", "1", "2", "Lỗi biên dịch (Compilation error)"]
    },
    16: {
        "question": "Một lớp con cung cấp cài đặt riêng cho một phương thức đã tồn tại ở lớp cha của nó. Điều này được gọi là gì?",
        "options": ["Nạp chồng (Overloading)", "Ghi đè (Overriding)", "Đóng gói (Encapsulation)", "Hợp thành (Composition)"]
    },
    17: {
        "question": "Lớp `Account` giữ thuộc tính `balance` ở mức private và cung cấp các phương thức `deposit()`, `withdraw()` để xác thực giao dịch. Nguyên lý OOP nào đang được áp dụng chủ yếu?",
        "options": ["Kế thừa (Inheritance)", "Đóng gói (Encapsulation)", "Đa hình (Polymorphism)", "Trừu tượng (Abstraction)"]
    },
    18: {
        "question": "Có 40 học sinh. 24 bạn biết Java, 18 bạn biết Python, và 10 bạn biết cả hai. Có bao nhiêu bạn không biết cả Java lẫn Python?",
        "options": ["6", "8", "10", "12"]
    },
    19: {
        "question": "Một cỗ máy có 3 bóng đèn: A, B, và C. Ban đầu cả 3 bóng đèn đều TẮT (OFF).\nMỗi thao tác phải đảo trạng thái của đúng 2 bóng đèn:\n- Thao tác 1: đảo A và B\n- Thao tác 2: đảo B và C\n- Thao tác 3: đảo A và C\nBạn có thể thực hiện các thao tác này tùy ý lần và theo thứ tự bất kỳ. Trạng thái nào sau đây KHÔNG THỂ đạt được?",
        "options": ["A = ON, B = ON, C = OFF", "42", "44", "46"]
    },
    20: {
        "question": "Mối quan hệ nào sau đây là ví dụ điển hình nhất của tính kế thừa (Inheritance)?",
        "options": [
            "Manager là một Employee (Manager is an Employee)",
            "Car có một Engine (Car has an Engine)",
            "Library có Books (Library has Books)",
            "Computer dùng Keyboard (Computer uses a Keyboard)"
        ]
    },
    21: {
        "question": "Số tiếp theo trong dãy số sau là bao nhiêu: 2, 5, 11, 23, 47, ?",
        "options": ["91", "94", "95", "97"]
    },
    22: {
        "question": "Bắt đầu với số 1. Để tạo số tiếp theo, nhân số trước đó với 2 rồi cộng thêm số thứ tự vị trí của số mới. Ví dụ số thứ 2 = 1 × 2 + 2 = 4. Số thứ 6 là bao nhiêu?",
        "options": ["112", "118", "120", "121"]
    },
    23: {
        "question": "Biểu thức `(A && B) || C` mang giá trị false khi nào?",
        "options": [
            "A: A và B đều mang giá trị false",
            "B: C là false và ít nhất một trong hai biến A hoặc B là false",
            "C: C là true và A là false",
            "D: A và B đều mang giá trị true"
        ]
    },
    24: {
        "question": "Một phần thưởng được giấu trong đúng một trong 4 chiếc hộp: A, B, C hoặc D. Mỗi hộp có 1 câu khẳng định:\n- A: \"Phần thưởng ở trong hộp A.\"\n- B: \"Phần thưởng không ở trong hộp A.\"\n- C: \"Phần thưởng ở trong hộp B.\"\n- D: \"Phần thưởng ở trong hộp A hoặc B.\"\nBiết rằng có đúng hai câu khẳng định là đúng. Phần thưởng ở đâu?",
        "options": ["A", "B", "C", "D"]
    },
    25: {
        "question": "Có 3 công tắc ở bên ngoài phòng và 3 bóng đèn ở bên trong phòng. Mỗi công tắc điều khiển đúng một bóng đèn. Bạn chỉ được bước vào phòng đúng 1 lần duy nhất. Chiến lược nào giúp bạn xác định chính xác cặp công tắc - bóng đèn tương ứng?",
        "options": [
            "Bật một công tắc và lập tức bước vào phòng ngay",
            "Bật công tắc 1 trong vài phút, tắt đi, bật công tắc 2, sau đó vào phòng dùng độ sáng và nhiệt độ để kiểm tra",
            "Bật cả hai công tắc rồi bước vào phòng",
            "Vào phòng trước, sau đó quay lại bật công tắc"
        ]
    },
    26: {
        "question": "Đoạn mã sau sẽ in ra kết quả gì?",
        "options": ["A", "B", "C", "Không in ra gì cả"]
    },
    27: {
        "question": "Điều gì xảy ra nếu mã khai báo `final int x = 10;` và sau đó cố gắng thực hiện `x = 20;`?",
        "options": [
            "x nhận giá trị 20",
            "x không thể gán lại giá trị (Lỗi biên dịch)",
            "Chương trình tạo ra một biến x thứ hai",
            "x trở thành null"
        ]
    },
    28: {
        "question": "Đoạn mã sau in ra giá trị gì?",
        "options": ["3", "4", "5", "6"]
    },
    29: {
        "question": "Phát biểu nào mô tả đúng nhất về Lớp (Class) và Đối tượng (Object)?",
        "options": [
            "Lớp là chương trình đang chạy, còn đối tượng là mã nguồn",
            "Lớp định nghĩa trạng thái và hành vi; đối tượng là một thể hiện cụ thể của lớp đó",
            "Lớp chỉ có thể chứa dữ liệu; đối tượng chỉ có thể chứa phương thức",
            "Lớp và đối tượng hoàn toàn giống hệt nhau"
        ]
    },
    30: {
        "question": "Cho mảng `int[] numbers = {10, 20, 30, 40};` biểu thức nào dùng để truy cập phần tử cuối cùng?",
        "options": ["numbers[4]", "numbers[3]", "numbers[last]", "numbers[-1]"]
    },
    31: {
        "question": "Một số có 3 chữ số phân biệt. Chữ số đầu tiên gấp đôi chữ số thứ hai. Chữ số thứ ba lớn hơn chữ số đầu tiên. Tổng 3 chữ số bằng 17. Số đó là số nào?",
        "options": ["638", "628", "836", "646"]
    },
    32: {
        "question": "Đoạn mã sau in ra kết quả gì?",
        "options": ["10", "15", "5", "Lỗi biên dịch (Compilation error)"]
    },
    33: {
        "question": "Có 9 đồng xu có vẻ ngoài y hệt nhau, và có đúng một đồng xu nặng hơn các đồng còn lại. Sử dụng cân thăng bằng hai đĩa, số lần cân tối thiểu cần thiết để chắc chắn tìm ra đồng xu nặng hơn là bao nhiêu?",
        "options": ["1", "2", "3", "4"]
    },
    34: {
        "question": "Đoạn mã sau in ra kết quả gì?",
        "options": ["10", "16", "24", "25"]
    },
    35: {
        "question": "Năm người A, B, C, D, E xếp thành một hàng dọc:\n- A phải đứng trước C.\n- B phải đứng ngay sau D.\n- E không được đứng ở hai đầu hàng.\n- C không được đứng cạnh E.\nCách sắp xếp nào sau đây là hợp lệ?",
        "options": ["A D B E C", "D B A E C", "A E D B C", "E A D B C"]
    },
    36: {
        "question": "Đoạn mã sau in ra kết quả gì?",
        "options": ["A sau đó C", "B sau đó C", "Chỉ in C", "Chương trình dừng lại mà không in gì"]
    },
    37: {
        "question": "Xét khai báo: `Animal animal = new Dog();`\nNếu lớp `Dog` có phương thức `bark()` mà lớp `Animal` không định nghĩa, phát biểu nào sau đây là đúng?",
        "options": [
            "animal.bark() luôn hoạt động vì đối tượng thực tế là một Dog",
            "Kiểu tham chiếu Animal quyết định các phương thức nào có thể được gọi trực tiếp",
            "Các phương thức của Dog không bao giờ có thể gọi được",
            "Animal và Dog bắt buộc phải có các phương thức giống hệt nhau"
        ]
    },
    38: {
        "question": "Có 12 quả bóng có vẻ ngoài giống hệt nhau. Có đúng một quả bóng dị biệt (có thể nặng hơn hoặc nhẹ hơn các quả khác). Sử dụng cân thăng bằng, số lần cân tối thiểu để luôn tìm ra quả bóng dị biệt và xác định nó nặng hơn hay nhẹ hơn là bao nhiêu?",
        "options": ["2", "3", "4", "5"]
    },
    39: {
        "question": "Xét đoạn mã:\n`Animal a = new Dog(); a.sound();`\nNếu lớp `Dog` ghi đè phương thức `sound()`, cài đặt của lớp nào sẽ được gọi?",
        "options": ["Animal.sound()", "Dog.sound()", "Cả hai phương thức đều được gọi", "Mã nguồn không thể biên dịch"]
    },
    40: {
        "question": "Tổng của tất cả các số nguyên từ 1 đến 10 thỏa mãn điều kiện `i % 3 != 0` là bao nhiêu?",
        "options": ["36", "37", "38", "39"]
    },
    41: {
        "question": "Cặp nào sau đây chứa một kiểu dữ liệu nguyên thủy (primitive) và một kiểu dữ liệu tham chiếu (reference) trong Java?",
        "options": ["int và String", "Integer và String", "String và Object", "int và boolean"]
    },
    42: {
        "question": "Phát biểu nào sau đây về `List` trong Java là chính xác?",
        "options": [
            "Một List không thể chứa các phần tử trùng lặp",
            "Một List duy trì thứ tự phần tử chèn vào và có thể chứa các phần tử trùng lặp",
            "Một List chỉ có thể chứa các kiểu dữ liệu nguyên thủy",
            "Một List tự động sắp xếp các phần tử"
        ]
    },
    43: {
        "question": "Số tiếp theo trong dãy số sau là bao nhiêu: 4, 7, 13, 22, 34, ?",
        "options": ["47", "48", "49", "51"]
    },
    44: {
        "question": "Một phương thức `processPayment(Payment payment)` gọi `payment.pay()`. Cả `CreditCardPayment` và `BankTransferPayment` đều cài đặt interface `Payment`. Không có lệnh kiểm tra `instanceof` nào được sử dụng. Khái niệm OOP nào tạo nên thiết kế linh hoạt này?",
        "options": ["Đóng gói (Encapsulation)", "Đa hình (Polymorphism)", "Chỉ tính kế thừa (Inheritance only)", "Hợp thành (Composition)"]
    },
    45: {
        "question": "Đoạn mã sau in ra kết quả gì?",
        "options": ["3 5", "5 3", "8 5", "5 8"]
    },
    46: {
        "question": "Xét đoạn mã sau:",
        "questionAfter": "Kết quả của `a == b` và `a.equals(b)` lần lượt là gì?",
        "options": ["true, true", "false, false", "false, true", "true, false"]
    },
    47: {
        "question": "Vì sao việc giữ thuộc tính `balance` của lớp `Account` ở mức private lại tốt hơn việc cho phép bất kỳ mã nào sửa đổi trực tiếp?",
        "options": [
            "Nó giúp chương trình chạy nhanh hơn",
            "Nó cho phép lớp áp dụng các quy tắc kiểm soát khi trạng thái thay đổi",
            "Nó ngăn chặn việc tạo đối tượng",
            "Nó tự động tạo ra tính kế thừa"
        ]
    },
    48: {
        "question": "Một chiếc xe hơi `Car` tạo ra và quản lý một động cơ `Engine` như một phần gắn liền trong vòng đời của chính nó. `Engine` về mặt khái niệm là một thành phần của `Car` chứ không phải một thực thể quản lý độc lập. Mối quan hệ nào được thể hiện tốt nhất?",
        "options": ["Kế thừa (Inheritance)", "Thu nạp (Aggregation)", "Hợp thành (Composition)", "Đa hình (Polymorphism)"]
    },
    49: {
        "question": "Từ khóa phạm vi truy cập (Access Modifier) nào trong Java cung cấp mức độ hạn chế truy cập trực tiếp cao nhất đối với một thành viên của lớp?",
        "options": ["public", "protected", "private", "default (package-private)"]
    },
    50: {
        "question": "Hai đối tượng `a` và `b` được tạo từ cùng một lớp `Account`. Mỗi đối tượng có trường `balance` riêng. Nếu `a.balance` thay đổi, điều gì thường xảy ra với `b.balance`?",
        "options": [
            "b.balance cũng thay đổi theo",
            "b.balance vẫn giữ nguyên không thay đổi",
            "Chương trình không thể tồn tại hai đối tượng Account",
            "b.balance trở về giá trị 0"
        ]
    }
}

# Thai translations for questions and options
TH_TRANSLATIONS = {
    1: {
        "question": "บริษัทแห่งหนึ่งมี `Employee` เป็นประเภททั่วไป โดยมี `Developer` และ `Designer` เป็นประเภทเฉพาะ การออกแบบใดแสดงความสัมพันธ์นี้ได้ดีที่สุด?",
        "options": [
            "Employee สืบทอดคุณสมบัติจาก Developer และ Designer",
            "Developer และ Designer สืบทอดคุณสมบัติจาก Employee",
            "Employee และ Developer ต้องไม่เกี่ยวข้องกัน",
            "Developer ประกอบด้วย Employee"
        ],
        "explanation": "Developer และ Designer เป็นประเภทเฉพาะของ Employee ความสัมพันธ์แบบ \"Is-A\" หมายถึง Developer และ Designer สืบทอดคุณสมบัติมาจากคลาส Employee ทั่วไป"
    },
    2: {
        "question": "คุณมีขวดน้ำ 1,000 ขวด และมีขวดเดียวที่มีสารปนเปื้อน คุณมีแถบตรวจที่จะแสดงผลบวกหากสัมผัสกับขวดที่มีสารปนเปื้อน การทดสอบทั้งหมดสามารถทำพร้อมกันได้ในรอบเดียว จำนวนแถบตรวจขั้นต่ำที่ต้องใช้เพื่อระบุขวดที่มีสารปนเปื้อนคือเท่าใด?",
        "options": ["8", "9", "10", "11"],
        "explanation": "การเข้ารหัสแบบเลขฐานสอง: แถบตรวจ n แถบ สามารถแทนสถานะได้ 2^n สถานะ เนื่องจาก 2^9 = 512 < 1000 และ 2^10 = 1024 >= 1000 จึงจำเป็นต้องใช้แถบตรวจอย่างน้อย 10 แถบ"
    },
    3: {
        "question": "พิจารณาโค้ดต่อไปนี้:",
        "questionAfter": "ค่าของ `p1.name` คืออะไร?",
        "options": ["null", "Alice", "ข้อผิดพลาดในการคอมไพล์ (Compilation error)", "ค่าที่คาดเดาไม่ได้"],
        "explanation": "คำสั่ง `Person p2 = p1;` คัดลอกการอ้างอิงออบเจกต์บน Heap ตัวแปรทั้งสองชี้ไปยังออบเจกต์เดียวกัน ดังนั้นเมื่อเปลี่ยน `p2.name` จึงทำให้ `p1.name` มีค่าเป็น \"Alice\" เช่นกัน"
    },
    4: {
        "question": "ระบบหนึ่งกำหนด Abstraction ชื่อ `Notification` พร้อมเมธอด `send()` โดย `EmailNotification` และ `SmsNotification` มีการทำงานของตนเอง วัตถุประสงค์หลักของ Abstraction นี้คืออะไร?",
        "options": [
            "เพื่อบังคับให้การแจ้งเตือนทั้งหมดใช้โค้ดภายในที่เหมือนกัน",
            "เพื่อเปิดเผยข้อตกลงร่วมกัน (contract) ในขณะที่ซ่อนรายละเอียดการทำงาน",
            "เพื่อป้องกันไม่ให้สร้างออบเจกต์การแจ้งเตือน",
            "เพื่อกำจัดเมธอดทิ้ง"
        ],
        "explanation": "Abstraction กำหนดข้อตกลงร่วมกัน (สัญญา) ผ่านเมธอด เช่น `send()` ในขณะที่ซ่อนรายละเอียดการทำงานเฉพาะของแต่ละคลาสไว้"
    },
    5: {
        "question": "กำหนดให้ $f(x) = x + 2$ และ $g(x) = 3x$ ค่าของ $g(f(4))$ คือเท่าใด?",
        "options": ["14", "18", "20", "24"],
        "explanation": "คำนวณจากฟังก์ชันด้านในก่อน: f(4) = 4 + 2 = 6 จากนั้น g(6) = 3 * 6 = 18"
    },
    6: {
        "question": "มีผู้ต้องสงสัย 4 คน ได้แก่ A, B, C, D มีคนผิดเพียงคนเดียว แต่ละคนให้การดังนี้:\n- A: \"A เป็นคนผิด\"\n- B: \"A ไม่ได้ทำผิด\"\n- C: \"B เป็นคนผิด\"\n- D: \"คนผิดคือ A หรือไม่ก็ B\"\nหากมีข้อความที่เป็นจริงตรงกับความจริง 2 ข้อความ ใครคือคนผิด?",
        "options": ["A", "B", "C", "D"],
        "explanation": "ถ้า A เป็นคนผิด: คำให้การของ A เป็นจริง, B เป็นเท็จ, C เป็นเท็จ, D เป็นจริง มีข้อความจริง 2 ข้อความ (A และ D) ซึ่งตรงตามเงื่อนไขพอดี"
    },
    7: {
        "question": "ข้อความ \"X\" จะถูกพิมพ์ออกมากี่ครั้ง?",
        "options": ["8", "9", "10", "12"],
        "explanation": "เมื่อ i=1: พิมพ์ 4 ครั้ง, i=2: พิมพ์ 3 ครั้ง, i=3: พิมพ์ 2 ครั้ง, i=4: พิมพ์ 1 ครั้ง รวมทั้งหมด = 4 + 3 + 2 + 1 = 10 ครั้ง"
    },
    8: {
        "question": "พิจารณาโค้ดต่อไปนี้:",
        "questionAfter": "ค่าของ `Counter.count` คืออะไร?",
        "options": ["0", "1", "2", "ข้อผิดพลาดในการคอมไพล์ (Compilation error)"],
        "explanation": "ตัวแปร `static` เป็นตัวแปรระดับคลาสที่แชร์ร่วมกันในทุกอินสแตนซ์ การเพิ่มค่าผ่าน `a.count++` และ `b.count++` ส่งผลต่อตัวแปรตัวเดียวกัน ทำให้มีค่าเท่ากับ 2"
    },
    9: {
        "question": "ระบบหนึ่งมีกฎเกณฑ์ดังนี้:\n- หากเซิร์ฟเวอร์โหลดเกิน เวลาตอบสนองจะเพิ่มขึ้น (P -> Q)\n- หากเวลาตอบสนองเพิ่มขึ้น ผู้ใช้จะได้รับคำเตือน (Q -> R)\n- วันนี้ผู้ใช้ไม่ได้รับคำเตือน (~R)\nเราสามารถสรุปได้อย่างไร?",
        "options": [
            "เซิร์ฟเวอร์ทำงานหนักเกินไป",
            "เซิร์ฟเวอร์ไม่ได้ทำงานหนักเกินไป",
            "เวลาตอบสนองเพิ่มขึ้น",
            "ไม่สามารถระบุได้ว่าเซิร์ฟเวอร์ทำงานหนักเกินไปหรือไม่"
        ],
        "explanation": "ตามหลักตรรกศาสตร์ Modus Tollens: เมื่อผู้ใช้ไม่ได้รับคำเตือน (~R) แสดงว่าเวลาตอบสนองไม่ได้เพิ่มขึ้น (~Q) และสรุปได้ว่าเซิร์ฟเวอร์ไม่ได้โหลดเกิน (~P)"
    },
    10: {
        "question": "เกิดอะไรขึ้นหลังจากรันโค้ดนี้?",
        "options": [
            "p1 และ p2 อ้างอิงไปยังออบเจกต์เดียวกัน",
            "p1 และ p2 ยังคงเป็นสองออบเจกต์ที่แตกต่างกันเสมอ",
            "p1 ถูกลบทันที",
            "p2 กลายเป็น null"
        ],
        "explanation": "การกำหนดค่า `p2 = p1;` ทำให้ตัวแปร `p2` ชี้ไปยังออบเจกต์เดียวกันกับที่ `p1` กำลังอ้างอิงอยู่"
    },
    11: {
        "question": "เครื่องจักรสองเครื่องทำงานเป็นเวลา 40 นาที เครื่องที่ 1 ผลิตสินค้าได้ 1 ชิ้นทุกๆ 12 นาที และเครื่องที่ 2 ผลิตสินค้าได้ 1 ชิ้นทุกๆ 8 นาที หากทั้งสองเครื่องเริ่มทำงานพร้อมกันและนับเฉพาะสินค้าที่ผลิตเสร็จสมบูรณ์ จะผลิตสินค้าได้ทั้งหมดกี่ชิ้น?",
        "options": ["8", "10", "12", "13"],
        "explanation": "เครื่องที่ 1 ผลิตได้ 40 // 12 = 3 ชิ้น (นาทีที่ 12, 24, 36) เครื่องที่ 2 ผลิตได้ 40 // 8 = 5 ชิ้น (นาทีที่ 8, 16, 24, 32, 40) รวมทั้งหมด 3 + 5 = 8 ชิ้น"
    },
    12: {
        "question": "พิจารณาอาร์เรย์ต่อไปนี้:\nคลาสย่อยแต่ละคลาสทำการ Override เมธอด `sound()` จะเกิดอะไรขึ้นเมื่อลูปเรียก `animals[i].sound()`?",
        "options": [
            "เมธอดของคลาส Animal จะถูกเรียกเสมอ",
            "โปรแกรมเลือกเมธอดตามประเภทของอาร์เรย์เท่านั้น",
            "เมธอดของ Dog/Cat ที่ตรงกับออบเจกต์จริง ณ ขณะนั้นจะถูกเรียกทำงาน",
            "โปรแกรมแจ้งข้อผิดพลาดเนื่องจากอาร์เรย์มีคลาสย่อยต่างชนิดกัน"
        ],
        "explanation": "คุณสมบัติความหลากหลาย (Polymorphism) และ Dynamic Binding ในขณะรันไทม์จะเรียกใช้เมธอดของออบเจกต์จริง (Dog หรือ Cat) ที่ถูกสร้างขึ้น"
    },
    13: {
        "question": "ค่าที่ถูกพิมพ์ออกมาคืออะไร?",
        "options": ["15", "20", "31", "63"],
        "explanation": "การวนลูป: x เริ่มที่ 1 -> 3 -> 7 -> 15 -> 31 เมื่อ x = 31 เงื่อนไข x < 20 เป็นเท็จ ลูปหยุดและพิมพ์ 31"
    },
    14: {
        "question": "เหตุใดการเขียนโปรแกรมโดยอิงกับ `Payment` interface จึงทำให้ระบบขยายขีดความสามารถได้ง่ายขึ้น?",
        "options": [
            "โค้ดที่ใช้ Payment ขึ้นอยู่กับการทำงานของระบบการชำระเงินแบบใดแบบหนึ่งโดยเฉพาะ",
            "โค้ดสามารถทำงานร่วมกับการติดตั้งใช้งานที่หลากหลายซึ่งตอบสนองข้อตกลงเดียวกันได้",
            "Interface ทำให้โค้ดทำงานเร็วขึ้นโดยอัตโนมัติ",
            "Interface ทำให้ไม่จำเป็นต้องทำการทดสอบ"
        ],
        "explanation": "การเขียนโปรแกรมอิงตาม Interface เป็นไปตามหลักการ Open/Closed และ Dependency Inversion ทำให้สามารถเพิ่มช่องทางการชำระเงินใหม่ๆ ได้โดยไม่ต้องแก้ไขโค้ดเดิม"
    },
    15: {
        "question": "พิจารณาโค้ด Java ต่อไปนี้ สมมติว่าออบเจกต์ `Counter` แต่ละตัวมีตัวแปรอินสแตนซ์ `value` ของตนเองที่เริ่มต้นด้วย 0 และ `increment()` จะเพิ่มค่าของออบเจกต์นั้นทีละ 1",
        "questionAfter": "ค่าของ `a.value` หลังจากคำสั่งเหล่านี้คืออะไร?",
        "options": ["0", "1", "2", "ข้อผิดพลาดในการคอมไพล์ (Compilation error)"],
        "explanation": "ทั้ง `a` และ `b` อ้างอิงไปยังออบเจกต์ Counter ตัวเดียวกัน การเรียก increment() สองครั้งทำให้ค่า value เพิ่มเป็น 2"
    },
    16: {
        "question": "การที่คลาสย่อยสร้างการทำงานขึ้นมาใหม่สำหรับเมธอดที่มีอยู่แล้วในคลาสแม่ เรียกว่าอะไร?",
        "options": ["Overloading", "Overriding", "Encapsulation", "Composition"],
        "explanation": "Method Overriding คือการที่คลาสลูกให้นิยามการทำงานใหม่ให้กับเมธอดที่มีชื่อและพารามิเตอร์เดียวกันกับในคลาสแม่"
    },
    17: {
        "question": "คลาส `Account` กำหนดให้ `balance` เป็น private และจัดเตรียมเมธอด `deposit()` และ `withdraw()` เพื่อตรวจสอบความถูกต้องของธุรกรรม หลักการ OOP ใดถูกนำมาใช้เป็นหลัก?",
        "options": ["การสืบทอด (Inheritance)", "การห่อหุ้ม (Encapsulation)", "ความหลากหลาย (Polymorphism)", "ความเป็นนามธรรม (Abstraction)"],
        "explanation": "การห่อหุ้ม (Encapsulation) ซ่อนตัวแปรภายในและควบคุมการเข้าถึงผ่านเมธอด public ที่มีเงื่อนไขตรวจสอบ"
    },
    18: {
        "question": "มีนักเรียน 40 คน โดย 24 คนรู้ภาษา Java, 18 คนรู้ภาษา Python และ 10 คนรู้ทั้งสองภาษา มีนักเรียนกี่คนที่ไม่รู้ทั้ง Java และ Python?",
        "options": ["6", "8", "10", "12"],
        "explanation": "จำนวนคนที่รู้ภาษาใดภาษาหนึ่ง = 24 + 18 - 10 = 32 คน ดังนั้นคนที่ไม่รู้ทั้งสองภาษา = 40 - 32 = 8 คน"
    },
    19: {
        "question": "เครื่องจักรเครื่องหนึ่งมีไฟ 3 ดวง: A, B และ C ในตอนเริ่มต้นไฟทั้งสามดวง ปิด (OFF) อยู่\nการดำเนินการแต่ละครั้งจะต้องสลับสถานะของไฟ 2 ดวงพอดี:\n- คำสั่ง 1: สลับ A และ B\n- คำสั่ง 2: สลับ B และ C\n- คำสั่ง 3: สลับ A และ C\nคุณสามารถดำเนินการเหล่านี้กี่ครั้งก็ได้ในลำดับใดก็ได้ สถานะใดต่อไปนี้ที่เป็นไปไม่ได้ที่จะเกิดขึ้น?",
        "options": ["A = ON, B = ON, C = OFF", "42", "44", "46"],
        "explanation": "เนื่องจากแต่ละคำสั่งจะเปลี่ยนสถานะไฟ 2 ดวงเสมอ ทำให้จำนวนไฟที่เปิดจะรักษาภาวะคู่เสมอ (parity) จึงไม่สามารถมีไฟเปิดเป็นจำนวนคี่ (1 หรือ 3 ดวง) ได้"
    },
    20: {
        "question": "ความสัมพันธ์ใดเป็นตัวอย่างที่ชัดเจนที่สุดของการสืบทอดคุณสมบัติ (Inheritance)?",
        "options": [
            "Manager เป็น Employee คนหนึ่ง (Manager is an Employee)",
            "Car มี Engine หนึ่งตัว (Car has an Engine)",
            "Library มี Books (Library has Books)",
            "Computer ใช้งาน Keyboard (Computer uses a Keyboard)"
        ],
        "explanation": "การสืบทอดคุณสมบัติคือความสัมพันธ์แบบ \"Is-A\" (ผู้จัดการคือพนักงานคนหนึ่ง)"
    },
    21: {
        "question": "ตัวเลขถัดไปในลำดับคืออะไร: 2, 5, 11, 23, 47, ?",
        "options": ["91", "94", "95", "97"],
        "explanation": "กฎของลำดับคือ: ตัวถัดไป = (ตัวก่อนหน้า * 2) + 1 ดังนั้น 47 * 2 + 1 = 95"
    },
    22: {
        "question": "เริ่มต้นด้วย 1 ในการสร้างเทอมถัดไป ให้คูณเทอมก่อนหน้าด้วย 2 แล้วบวกด้วยตำแหน่งของเทอมใหม่ เช่น เทอมที่ 2 = 1×2+2 = 4 เทอมที่ 6 คือเท่าใด?",
        "options": ["112", "118", "120", "121"],
        "explanation": "เทอมที่ 1=1, เทอมที่ 2=4, เทอมที่ 3=11, เทอมที่ 4=26, เทอมที่ 5=57, เทอมที่ 6=57*2 + 6 = 120"
    },
    23: {
        "question": "นิพจน์ `(A && B) || C` จะมีค่าเป็น false เมื่อใด?",
        "options": [
            "A: A และ B เป็น false ทั้งคู่",
            "B: C เป็น false และอย่างน้อยตัวใดตัวหนึ่งของ A หรือ B เป็น false",
            "C: C เป็น true และ A เป็น false",
            "D: A และ B เป็น true ทั้งคู่"
        ],
        "explanation": "ตัวดำเนินการ OR (||) จะเป็น false ได้ก็ต่อเมื่อทั้งสองฝั่งเป็น false: C ต้องเป็น false และ (A && B) ต้องเป็น false"
    },
    24: {
        "question": "รางวัลถูกซ่อนอยู่ในกล่อง 1 ใบจาก 4 ใบ: A, B, C หรือ D กล่องแต่ละใบมีข้อความ 1 ประโยค:\n- A: \"รางวัลอยู่ในกล่อง A\"\n- B: \"รางวัลไม่ได้อยู่ในกล่อง A\"\n- C: \"รางวัลอยู่ในกล่อง B\"\n- D: \"รางวัลอยู่ในกล่อง A หรือ B\"\nหากมีข้อความที่เป็นจริง 2 ข้อความพอดี รางวัลอยู่ที่ไหน?",
        "options": ["A", "B", "C", "D"],
        "explanation": "ถ้ารางวัลอยู่ใน A: ข้อความ A เป็นจริง, B เป็นเท็จ, C เป็นเท็จ, D เป็นจริง มีข้อความจริง 2 ข้อความพอดี"
    },
    25: {
        "question": "มีสวิตช์ 3 ตัวอยู่นอกห้อง และมีหลอดไฟ 3 ดวงอยู่ด้านในห้อง สวิตช์แต่ละตัวควบคุมหลอดไฟ 1 ดวงพอดี คุณสามารถเข้าไปในห้องได้เพียงครั้งเดียว กลยุทธ์ใดช่วยให้คุณระบุคู่สวิตช์กับหลอดไฟได้ถูกต้องทั้งหมด?",
        "options": [
            "เปิดสวิตช์ตัวหนึ่งแล้วเดินเข้าไปในห้องทันที",
            "เปิดสวิตช์ที่ 1 ทิ้งไว้สักสองสามนาที ปิดลง แล้วเปิดสวิตช์ที่ 2 จากนั้นเดินเข้าห้องเพื่อตรวจสอบด้วยแสงสว่างและความร้อน",
            "เปิดสวิตช์สองตัวพร้อมกันแล้วเดินเข้าห้อง",
            "เดินเข้าห้องก่อนแล้วค่อยกลับมาเปิดสวิตช์"
        ],
        "explanation": "หลอดที่สว่างคือสวิตช์ที่ 2, หลอดที่ดับแต่อุ่น/ร้อนคือสวิตช์ที่ 1, หลอดที่ดับและเย็นคือสวิตช์ที่ 3"
    },
    26: {
        "question": "โค้ดต่อไปนี้จะพิมพ์อะไรออกมา?",
        "options": ["A", "B", "C", "ไม่พิมพ์อะไรเลย"],
        "explanation": "เนื่องจาก x = 10 เงื่อนไข x >= 10 && x < 20 เป็นจริง บล็อก if แรกจึงทำงานและพิมพ์ \"A\""
    },
    27: {
        "question": "จะเกิดอะไรขึ้นหากโค้ดประกาศ `final int x = 10;` แล้วในภายหลังพยายามสั่ง `x = 20;`?",
        "options": [
            "x กลายเป็น 20",
            "x ไม่สามารถกำหนดค่าใหม่ได้ (ข้อผิดพลาดในการคอมไพล์)",
            "โปรแกรมจะสร้างตัวแปร x ตัวที่สองขึ้นมา",
            "x กลายเป็น null"
        ],
        "explanation": "คีย์เวิร์ด `final` ทำให้ตัวแปรกลายเป็นค่าคงที่ ไม่สามารถเปลี่ยนแปลงค่าได้ การกำหนดค่าใหม่จะทำให้คอมไพล์ไม่ผ่าน"
    },
    28: {
        "question": "โค้ดต่อไปนี้พิมพ์อะไรออกมา?",
        "options": ["3", "4", "5", "6"],
        "explanation": "รอบที่ 1: x=12, count=1; รอบที่ 2: x=6, count=2; รอบที่ 3: x=3, count=3; รอบที่ 4: x=1, count=4 จากนั้น 1 > 1 เป็นเท็จ ลูปหยุดและพิมพ์ 4"
    },
    29: {
        "question": "ข้อความใดอธิบายเกี่ยวกับ คลาส (Class) และ ออบเจกต์ (Object) ได้ดีที่สุด?",
        "options": [
            "คลาสคือโปรแกรมที่กำลังรัน ในขณะที่ออบเจกต์คือซอร์สโค้ด",
            "คลาสกำหนดสถานะและพฤติกรรม ส่วนออบเจกต์คืออินสแตนซ์ของคลาสนั้น",
            "คลาสสามารถเก็บได้เฉพาะข้อมูล ส่วนออบเจกต์สามารถเก็บได้เฉพาะเมธอด",
            "คลาสและออบเจกต์คือสิ่งเดียวกันอย่างแท้จริง"
        ],
        "explanation": "คลาสคือพิมพ์เขียว (Blueprint) ส่วนออบเจกต์คือสิ่งที่ถูกสร้างขึ้นจริงตามพิมพ์เขียวนั้น"
    },
    30: {
        "question": "กำหนดให้ `int[] numbers = {10, 20, 30, 40};` นิพจน์ใดใช้สำหรับเข้าถึงสมาชิกตัวสุดท้าย?",
        "options": ["numbers[4]", "numbers[3]", "numbers[last]", "numbers[-1]"],
        "explanation": "ดัชนีของอาร์เรย์ใน Java เริ่มต้นที่ 0 อาร์เรย์ขนาด 4 สมาชิกตัวสุดท้ายจะอยู่ที่ดัชนี 3 (numbers[3])"
    },
    31: {
        "question": "เลขสามหลักที่มีตัวเลขแต่ละหลักไม่ซ้ำกัน หลักแรกเป็นสองเท่าของหลักที่สอง หลักที่สามมีค่ามากกว่าหลักแรก ผลรวมของเลขทั้งสามหลักคือ 17 เลขนั้นคือเลขอะไร?",
        "options": ["638", "628", "836", "646"],
        "explanation": "เลข 638: หลักแรก (6) เป็นสองเท่าของหลักสอง (3), หลักสาม (8) มากกว่าหลักแรก (6), ผลรวม 6 + 3 + 8 = 17"
    },
    32: {
        "question": "โค้ดต่อไปนี้พิมพ์อะไรออกมา?",
        "options": ["10", "15", "5", "ข้อผิดพลาดในการคอมไพล์ (Compilation error)"],
        "explanation": "Java ใช้การส่งพารามิเตอร์แบบ Pass-by-value การเปลี่ยนแปลงค่าตัวแปรภายในเมธอด change() ไม่ส่งผลต่อตัวแปร x ภายนอก"
    },
    33: {
        "question": "มีเหรียญ 9 เหรียญที่มีลักษณะภายนอกเหมือนกันทุกประการ และมีเพียงเหรียญเดียวที่หนักกว่าเหรียญอื่น การใช้ตาชั่งสองแขนเพื่อรับประกันว่าจะพบเหรียญที่หนักกว่า ต้องชั่งอย่างน้อยกี่ครั้ง?",
        "options": ["1", "2", "3", "4"],
        "explanation": "แบ่งเหรียญออกเป็น 3 กลุ่ม (3-3-3): ชั่งครั้งที่ 1 ระบุกลุ่มที่หนักกว่า ชั่งครั้งที่ 2 ชั่งเหรียญในกลุ่มนั้น จะพบเหรียญที่หนักกว่าทันที รวม 2 ครั้ง"
    },
    34: {
        "question": "โค้ดต่อไปนี้พิมพ์อะไรออกมา?",
        "options": ["10", "16", "24", "25"],
        "explanation": "คำนวณค่าแฟกทอเรียล 4! = 1 * 2 * 3 * 4 = 24"
    },
    35: {
        "question": "มีคน 5 คน A, B, C, D, E ยืนเรียงแถว:\n- A ต้องอยู่หน้า C\n- B ต้องยืนต่อท้าย D ทันที\n- E ต้องไม่อยู่หัวหรือท้ายแถว\n- C ต้องไม่ยืนติดกับ E\nการจัดเรียงใดต่อไปนี้ถูกต้อง?",
        "options": ["A D B E C", "D B A E C", "A E D B C", "E A D B C"],
        "explanation": "A E D B C: A อยู่หน้า C, B อยู่ติดหลัง D (DB), E อยู่ตำแหน่งที่ 2 (ไม่ใช่หัว/ท้าย), C อยู่ตำแหน่งที่ 5 (ไม่ติดกับ E)"
    },
    36: {
        "question": "โค้ดต่อไปนี้พิมพ์อะไรออกมา?",
        "options": ["A แล้วตามด้วย C", "B แล้วตามด้วย C", "C เท่านั้น", "โปรแกรมหยุดทำงานโดยไม่พิมพ์อะไร"],
        "explanation": "การหาร 10 / 0 เกิด ArithmeticException ทำให้ข้ามการพิมพ์ \"A\" ไปเข้า catch พิมพ์ \"B\" จากนั้นทำงานต่อพิมพ์ \"C\""
    },
    37: {
        "question": "พิจารณาโค้ด: `Animal animal = new Dog();`\nหากคลาส `Dog` มีเมธอด `bark()` ที่คลาส `Animal` ไม่ได้กำหนดไว้ ข้อความใดถูกต้อง?",
        "options": [
            "animal.bark() ใช้งานได้เสมอเพราะออบเจกต์เป็น Dog",
            "ประเภทการอ้างอิง Animal เป็นตัวกำหนดเมธอดที่สามารถเรียกใช้งานได้โดยตรง",
            "เมธอดของ Dog ไม่สามารถเรียกใช้งานได้เลย",
            "Animal และ Dog ต้องมีเมธอดที่เหมือนกันทุกประการ"
        ],
        "explanation": "ในขั้นตอนคอมไพล์ คอมไพเลอร์จะตรวจสอบตามประเภทการอ้างอิง (Animal) จึงไม่สามารถเรียก bark() ตรงๆ ได้โดยไม่ทำการแปลงชนิดข้อมูล (Type Casting)"
    },
    38: {
        "question": "มีลูกบอล 12 ลูกที่ดูเหมือนกันทุกประการ มีลูกหนึ่งที่มีน้ำหนักผิดปกติ (อาจจะหนักกว่าหรือเบากว่าลูกอื่น) การใช้ตาชั่งสองแขนเพื่อระบุลูกที่ผิดปกติและบอกได้ว่าหนักกว่าหรือเบากว่า ต้องชั่งอย่างน้อยกี่ครั้ง?",
        "options": ["2", "3", "4", "5"],
        "explanation": "โจทย์การชั่งลูกบอล 12 ลูกคลาสสิก: ด้วยผลลัพธ์ที่เป็นไปได้ 24 กรณี (12 ลูก * 2 สภาวะ) ตาชั่ง 3 ครั้งให้ผลลัพธ์ได้ 3^3 = 27 กรณี ซึ่งเพียงพอที่จะระบุได้อย่างแน่นอนด้วยการชั่ง 3 ครั้ง"
    },
    39: {
        "question": "พิจารณาโค้ด:\n`Animal a = new Dog(); a.sound();`\nหากคลาส `Dog` ทำการ Override เมธอด `sound()` เมธอดของคลาสใดจะถูกเรียกทำงาน?",
        "options": ["Animal.sound()", "Dog.sound()", "ทั้งสองเมธอดจะถูกเรียก", "โค้ดไม่สามารถคอมไพล์ได้"],
        "explanation": "การเรียกเมธอดแบบ Dynamic Dispatch ในขณะรันไทม์จะเลือกใช้เมธอดของออบเจกต์จริง ซึ่งก็คือ Dog.sound()"
    },
    40: {
        "question": "ผลรวมของจำนวนเต็มทั้งหมดตั้งแต่ 1 ถึง 10 ที่สอดคล้องกับเงื่อนไข `i % 3 != 0` คือเท่าใด?",
        "options": ["36", "37", "38", "39"],
        "explanation": "ตัวเลขที่ไม่หารด้วย 3 ลงตัวได้แก่ 1, 2, 4, 5, 7, 8, 10 ผลรวม = 1 + 2 + 4 + 5 + 7 + 8 + 10 = 37"
    },
    41: {
        "question": "คู่ใดต่อไปนี้ประกอบด้วยประเภทข้อมูลดั้งเดิม (primitive type) 1 ตัว และประเภทข้อมูลอ้างอิง (reference type) 1 ตัวในภาษา Java?",
        "options": ["int และ String", "Integer และ String", "String และ Object", "int และ boolean"],
        "explanation": "`int` เป็น primitive type ส่วน `String` เป็น reference type (ออบเจกต์)"
    },
    42: {
        "question": "ข้อความใดเกี่ยวกับ `List` ใน Java ถูกต้อง?",
        "options": [
            "List ไม่สามารถเก็บสมาชิกที่ซ้ำกันได้",
            "List รักษาลำดับการใส่ข้อมูลและสามารถเก็บสมาชิกที่ซ้ำกันได้",
            "List สามารถเก็บได้เฉพาะ primitive types เท่านั้น",
            "List จะเรียงลำดับสมาชิกโดยอัตโนมัติ"
        ],
        "explanation": "อินเตอร์เฟซ List ใน Java Collection Framework จะรักษาลำดับที่เพิ่มข้อมูลเข้าไปและอนุญาตให้มีข้อมูลซ้ำได้"
    },
    43: {
        "question": "ตัวเลขถัดไปในลำดับคืออะไร: 4, 7, 13, 22, 34, ?",
        "options": ["47", "48", "49", "51"],
        "explanation": "ผลต่างเพิ่มขึ้นทีละพหุคูณของ 3: +3, +6, +9, +12 ตัวถัดไปจะเพิ่มขึ้น 15 -> 34 + 15 = 49"
    },
    44: {
        "question": "เมธอด `processPayment(Payment payment)` เรียก `payment.pay()` โดยที่ `CreditCardPayment` และ `BankTransferPayment` ต่างก็ Implement อินเตอร์เฟซ `Payment` โดยไม่มีการใช้คำสั่ง `instanceof` เลย แนวคิด OOP ใดทำให้เกิดการออกแบบนี้?",
        "options": ["การห่อหุ้ม (Encapsulation)", "ความหลากหลาย (Polymorphism)", "การสืบทอดอย่างเดียว (Inheritance only)", "การประกอบ (Composition)"],
        "explanation": "Polymorphism ทำให้สามารถเรียกเมธอดผ่าน Interface กลางได้ และโปรแกรมจะตัดสินใจเลือกการทำงานที่ถูกต้องตามคลาสจริงโดยไม่ต้องเขียนเงื่อนไขตรวจสอบชนิดข้อมูล"
    },
    45: {
        "question": "โค้ดต่อไปนี้พิมพ์อะไรออกมา?",
        "options": ["3 5", "5 3", "8 5", "5 8"],
        "explanation": "นี่คือขั้นตอนวิธีสลับค่าตัวแปรสองตัวโดยไม่ใช้ตัวแปรชั่วคราว: a=8, b=3, a=5 ค่าที่พิมพ์ออกมาคือ \"5 3\""
    },
    46: {
        "question": "พิจารณาโค้ดต่อไปนี้:",
        "questionAfter": "ผลลัพธ์ของ `a == b` และ `a.equals(b)` ตามลำดับคืออะไร?",
        "options": ["true, true", "false, false", "false, true", "true, false"],
        "explanation": "`==` เปรียบเทียบตำแหน่งหน่วยความจำ (อ้างอิงคนละออบเจกต์จึงได้ false) ส่วน `.equals()` เปรียบเทียบเนื้อหาของสตริง (ข้อความ \"Java\" เหมือนกันจึงได้ true)"
    },
    47: {
        "question": "เหตุใดการกำหนดให้ `balance` ของคลาส `Account` เป็น private จึงดีกว่าการอนุญาตให้โค้ดภายนอกแก้ไขได้โดยตรง?",
        "options": [
            "ทำให้โปรแกรมทำงานได้เร็วขึ้น",
            "ช่วยให้คลาสสามารถบังคับใช้กฎเกณฑ์และเงื่อนไขเมื่อสถานะของข้อมูลเปลี่ยนแปลง",
            "ป้องกันไม่ให้ออบเจกต์ถูกสร้างขึ้น",
            "สร้างการสืบทอดคุณสมบัติโดยอัตโนมัติ"
        ],
        "explanation": "การรักษาความปลอดภัยของข้อมูล (Encapsulation) ช่วยให้สามารถตรวจสอบเงื่อนไข เช่น ยอดเงินต้องไม่ติดลบ ก่อนที่จะอนุญาตให้เปลี่ยนแปลงค่าได้"
    },
    48: {
        "question": "รถยนต์ `Car` สร้างและจัดการเครื่องยนต์ `Engine` ซึ่งเป็นส่วนหนึ่งของวงจรชีวิตของตัวมันเอง โดย `Engine` มีลักษณะเป็นองค์ประกอบภายในของ `Car` มากกว่าจะเป็นสิ่งที่แยกอยู่อย่างอิสระ ความสัมพันธ์นี้แสดงถึงอะไรได้ดีที่สุด?",
        "options": ["การสืบทอด (Inheritance)", "การรวบรวม (Aggregation)", "การประกอบ (Composition)", "ความหลากหลาย (Polymorphism)"],
        "explanation": "Composition คือความสัมพันธ์แบบ Has-A ที่แนบแน่น โดยออบเจกต์ส่วนประกอบ (Engine) จะขึ้นอยู่กับวงจรชีวิตของออบเจกต์หลัก (Car)"
    },
    49: {
        "question": "Access Modifier ตัวใดในภาษา Java ที่จำกัดสิทธิ์การเข้าถึงสมาชิกของคลาสอย่างเข้มงวดที่สุด?",
        "options": ["public", "protected", "private", "default (package-private)"],
        "explanation": "คีย์เวิร์ด `private` อนุญาตให้เข้าถึงได้จากภายในคลาสเดียวกันเท่านั้น จึงเป็นระดับที่เข้มงวดที่สุด"
    },
    50: {
        "question": "ออบเจกต์สองตัว `a` และ `b` ถูกสร้างขึ้นจากคลาส `Account` เดียวกัน โดยแต่ละตัวมีฟิลด์ `balance` ของตนเอง หาก `a.balance` มีการเปลี่ยนแปลง โดยปกติจะเกิดอะไรขึ้นกับ `b.balance`?",
        "options": [
            "b.balance จะเปลี่ยนตามไปด้วย",
            "b.balance จะยังคงไม่เปลี่ยนแปลง",
            "โปรแกรมไม่สามารถมีออบเจกต์ Account สองตัวได้",
            "b.balance จะกลายเป็นศูนย์"
        ],
        "explanation": "ตัวแปรอินสแตนซ์จะแยกพื้นที่หน่วยความจำสำหรับแต่ละออบเจกต์อย่างอิสระ การแก้ไขข้อมูลของ `a` จึงไม่ส่งผลต่อ `b`"
    }
}

# English explanations mapping
EN_EXPLANATIONS = {
    1: "Developer and Designer are specialized types of Employee. The \"Is-A\" inheritance relationship means Developer and Designer inherit from the general Employee class.",
    2: "Binary encoding problem: With n strips in 1 simultaneous round, we can represent 2^n unique states. Since 2^9 = 512 < 1000 and 2^10 = 1024 >= 1000, exactly 10 strips are required.",
    3: "`Person p2 = p1;` copies the object reference on the Heap. Both variables point to the exact same object, so modifying `p2.name` also reflects on `p1.name`.",
    4: "Abstraction defines a common contract (via methods like `send()`) while encapsulating and hiding the underlying implementation details.",
    5: "Evaluate inside-out: f(4) = 4 + 2 = 6, then g(f(4)) = g(6) = 3 * 6 = 18.",
    6: "If A is guilty: statement A is true, B is false, C is false, D is true. Exactly two statements are true (A and D), satisfying the problem conditions.",
    7: "When i=1: 4 times. i=2: 3 times. i=3: 2 times. i=4: 1 time. Total = 4 + 3 + 2 + 1 = 10 times.",
    8: "The `static` modifier means `count` is a class variable shared across all instances. Incrementing via `a.count++` and `b.count++` modifies the same shared variable, resulting in 2.",
    9: "By Modus Tollens (contrapositive law): ~R implies ~Q (response time did not increase), and ~Q implies ~P (the server is not overloaded).",
    10: "The reference assignment `p2 = p1;` makes `p2` point to the object referenced by `p1`. The original object initially created for `p2` becomes eligible for garbage collection.",
    11: "Machine 1 produces 40 // 12 = 3 items (at min 12, 24, 36). Machine 2 produces 40 // 8 = 5 items (at min 8, 16, 24, 32, 40). Total completed = 3 + 5 = 8 items.",
    12: "Polymorphism and runtime dynamic method dispatch execute the overridden method of the actual object instance (Dog or Cat) regardless of the reference array type.",
    13: "Loop values: x starts at 1 -> 3 -> 7 -> 15 -> 31. At x = 31, condition x < 20 is false, loop terminates and prints 31.",
    14: "Programming against interfaces adheres to Open/Closed and Dependency Inversion principles, allowing new payment types to be integrated without modifying existing business logic.",
    15: "Both `a` and `b` reference the same Counter object. Incrementing twice increases the single object's instance variable to 2.",
    16: "Method Overriding is when a subclass provides a specific implementation for a method already declared in its superclass with the same signature.",
    17: "Encapsulation protects internal object state by declaring fields private and exposing validated public methods.",
    18: "Students knowing at least one: |J U P| = 24 + 18 - 10 = 32. Neither = 40 - 32 = 8.",
    19: "Each operation toggles exactly two lights, so the parity of lights turned ON remains invariant (always even). Therefore, an odd count of lights ON is impossible to reach.",
    20: "Inheritance represents an \"Is-A\" relationship (Manager is an Employee). The others represent Has-A or Uses-A relationships.",
    21: "Sequence rule: Next = Previous * 2 + 1. Thus: 47 * 2 + 1 = 95.",
    22: "Term 1 = 1. Term 2 = 4. Term 3 = 11. Term 4 = 26. Term 5 = 57. Term 6 = 57 * 2 + 6 = 120.",
    23: "OR expression (A && B) || C is false if and only if both sides are false: C is false AND (A && B) is false.",
    24: "If prize is in A: statement A is true, B is false, C is false, D is true. Exactly two statements are true (A and D).",
    25: "Turn on switch 1 for several minutes so the bulb heats up, turn it off, turn on switch 2 and enter: Lit bulb = Switch 2, Warm dark bulb = Switch 1, Cold dark bulb = Switch 3.",
    26: "With x = 10, condition x >= 10 && x < 20 evaluates to true, executing the first if-branch and printing \"A\".",
    27: "The `final` keyword renders a variable a constant. Reassigning a final variable causes a compilation error.",
    28: "Iterations: x=12 (c=1), x=6 (c=2), x=3 (c=3), x=1 (c=4). Condition 1 > 1 is false, prints 4.",
    29: "A class is a blueprint defining state and behavior; an object is an instantiated entity created from that blueprint.",
    30: "Java arrays are 0-indexed. An array of length 4 has indices 0 to 3. The last element is `numbers[3]`.",
    31: "In 638: first digit (6) is twice second (3), third digit (8) is greater than first (6), and 6 + 3 + 8 = 17.",
    32: "Java is strictly pass-by-value. Modifying parameter `value` inside `change()` does not affect the original variable `x` outside.",
    33: "Divide into 3 groups of 3 (3-3-3): Weighing 1 isolates the heavy group of 3. Weighing 2 balances 1 vs 1 to find the heavy coin. Minimum = 2.",
    34: "Computes 4! = 1 * 2 * 3 * 4 = 24.",
    35: "A E D B C satisfies: A before C, B immediately after D, E not at ends, and C not adjacent to E.",
    36: "Division 10 / 0 throws ArithmeticException, bypassing \"A\", caught by catch block which prints \"B\", then continues execution printing \"C\".",
    37: "At compile time, accessible methods are determined by the reference type `Animal`, which does not declare `bark()`.",
    38: "Classic 12 balls balance puzzle: with 24 possible outcomes (12 balls * 2 states), 3 weighings yield 3^3 = 27 states, which is mathematically sufficient to identify the ball.",
    39: "Dynamic method dispatch executes the overridden method of the runtime object instance (`Dog.sound()`).",
    40: "Numbers not divisible by 3 from 1 to 10 are: 1, 2, 4, 5, 7, 8, 10. Sum = 37.",
    41: "`int` is a primitive type; `String` is an object reference type.",
    42: "The Java `List` interface preserves insertion order and allows duplicate elements.",
    43: "Differences increase by multiples of 3: +3, +6, +9, +12, +15. Next term = 34 + 15 = 49.",
    44: "Polymorphism enables polymorphic dispatch where the implementation of `pay()` is determined by the runtime object without checking `instanceof`.",
    45: "Variable swap algorithm without temporary variable results in a = 5 and b = 3, printing \"5 3\".",
    46: "`==` compares heap memory references (two distinct objects = false), whereas `.equals()` compares string content (\"Java\" = true).",
    47: "Encapsulation allows the class to enforce invariants and business validation rules (e.g. non-negative balance) whenever state changes.",
    48: "Composition represents a strong Has-A relationship where the component (Engine) shares the lifecycle of the container (Car).",
    49: "`private` restricts accessibility strictly to within the declaring class, offering the highest level of restriction.",
    50: "Each object instance holds its own separate memory copy of instance fields. Mutating `a.balance` has no effect on `b.balance`."
}

def main():
    # Load base questions
    with open('js/questions.js', 'r', encoding='utf-8') as f:
        content = f.read()
    json_str = content[content.find('['):content.rfind(']')+1]
    base_questions = json.loads(json_str)

    trilingual_data = []

    for q in base_questions:
        qid = q['id']
        code = q['code']
        category = q['category']
        is_hard = q['isHard']
        code_snippet = q.get('codeSnippet')
        correct_ans = q['correctAnswer']

        # English data
        en_q = q['question']
        en_after = q.get('questionAfter', '')
        en_opts = q['options']
        en_exp = EN_EXPLANATIONS.get(qid, q.get('explanation', ''))

        # Vietnamese data
        vi_info = VI_TRANSLATIONS.get(qid, {})
        vi_q = vi_info.get('question', en_q)
        vi_after = vi_info.get('questionAfter', en_after)
        vi_opts_raw = vi_info.get('options', [o['text'] for o in en_opts])
        vi_opts = [{'key': en_opts[idx]['key'], 'text': vi_opts_raw[idx]} for idx in range(len(en_opts))]
        vi_exp = q.get('explanation', '')

        # Thai data
        th_info = TH_TRANSLATIONS.get(qid, {})
        th_q = th_info.get('question', vi_q)
        th_after = th_info.get('questionAfter', vi_after)
        th_opts_raw = th_info.get('options', [o['text'] for o in en_opts])
        th_opts = [{'key': en_opts[idx]['key'], 'text': th_opts_raw[idx]} for idx in range(len(en_opts))]
        th_exp = th_info.get('explanation', en_exp)

        item = {
            'id': qid,
            'code': code,
            'category': category,
            'isHard': is_hard,
            'codeSnippet': code_snippet,
            'correctAnswer': correct_ans,
            'translations': {
                'en': {
                    'categoryName': CATEGORY_NAMES[category]['en'],
                    'question': en_q,
                    'questionAfter': en_after,
                    'options': en_opts,
                    'explanation': en_exp
                },
                'vi': {
                    'categoryName': CATEGORY_NAMES[category]['vi'],
                    'question': vi_q,
                    'questionAfter': vi_after,
                    'options': vi_opts,
                    'explanation': vi_exp
                },
                'th': {
                    'categoryName': CATEGORY_NAMES[category]['th'],
                    'question': th_q,
                    'questionAfter': th_after,
                    'options': th_opts,
                    'explanation': th_exp
                }
            }
        }
        trilingual_data.append(item)

    print(f"Successfully assembled {len(trilingual_data)} trilingual questions.")

    # Write output to js/questions.js
    output_js = "/**\n * Trilingual Dataset (English, Vietnamese, Thai) for 50 Java Interview Questions\n */\n"
    output_js += "const quizData = " + json.dumps(trilingual_data, ensure_ascii=False, indent=2) + ";\n"

    with open('js/questions.js', 'w', encoding='utf-8') as f_out:
        f_out.write(output_js)

    print("Updated js/questions.js with complete trilingual translations!")

if __name__ == '__main__':
    main()
