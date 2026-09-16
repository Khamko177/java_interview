# BỘ ĐỀ VÀ ĐÁP ÁN CHI TIẾT 50 CÂU HỎI INTERVIEW JAVA INTERN / FRESHER

> **Tài liệu tham chiếu:** [Khamko_interview.md](file:///c:/Copilot_Project/Java_interview/Khamko_interview.md)  
> **Tổng số câu hỏi:** 50 câu trắc nghiệm  
> **Cấu trúc đề:** 4 nhóm chủ đề chính (Java Core, OOP, Logic, Programming) và nhóm lọc 6 câu hỏi phân loại độ khó cao.

---

## 📊 BẢNG TỔNG QUAN ĐÁP ÁN 50 CÂU

| STT | Mã câu | Chủ đề | Đáp án đúng | STT | Mã câu | Chủ đề | Đáp án đúng |
|:---:|:---:|:---|:---:|:---:|:---:|:---|:---:|
| **1** | `[O06]` | OOP | **B** | **26** | `[P02]` | Programming | **A** |
| **2** | `[L14]` | Logic *(Câu khó)* | **C (10)** | **27** | `[J07]` | Java Core | **B** |
| **3** | `[J02]` | Java Core | **B (Alice)** | **28** | `[P10]` | Programming | **B (4)** |
| **4** | `[O13]` | OOP | **B** | **29** | `[O01]` | OOP | **B** |
| **5** | `[P06]` | Programming | **B (18)** | **30** | `[J04]` | Java Core | **B (numbers[3])** |
| **6** | `[L06]` | Logic | **A** | **31** | `[L08]` | Logic | **A (638)** |
| **7** | `[P05]` | Programming | **C (10)** | **32** | `[P07]` | Programming | **A (10)** |
| **8** | `[J06]` | Java Core | **C (2)** | **33** | `[L11]` | Logic *(Câu khó)* | **B (2)** |
| **9** | `[L05]` | Logic | **B** | **34** | `[P09]` | Programming | **C (24)** |
| **10** | `[O03]` | OOP | **A** | **35** | `[L04]` | Logic *(Câu khó)* | **C** |
| **11** | `[L10]` | Logic | **A (8)** | **36** | `[J09]` | Java Core | **B (B then C)** |
| **12** | `[O11]` | OOP | **C** | **37** | `[O10]` | OOP | **B** |
| **13** | `[P03]` | Programming | **C (31)** | **38** | `[L13]` | Logic *(Câu khó)* | **B (3)** |
| **14** | `[O14]` | OOP | **B** | **39** | `[O09]` | OOP | **B (Dog.sound())** |
| **15** | `[J10]` | Java Core | **C (2)** | **40** | `[P04]` | Programming | **B (37)** |
| **16** | `[O08]` | OOP | **B (Overriding)** | **41** | `[J01]` | Java Core | **A (int & String)** |
| **17** | `[O04]` | OOP | **B (Encapsulation)** | **42** | `[J05]` | Java Core | **B** |
| **18** | `[L07]` | Logic | **B (8)** | **43** | `[L01]` | Logic | **C (49)** |
| **19** | `[L03]` | Logic *(Câu khó)* | **A** | **44** | `[O12]` | OOP | **B (Polymorphism)** |
| **20** | `[O07]` | OOP | **A** | **45** | `[P08]` | Programming | **B (5 3)** |
| **21** | `[L02]` | Logic | **C (95)** | **46** | `[J03]` | Java Core | **C (false, true)** |
| **22** | `[L15]` | Logic | **C (120)** | **47** | `[O05]` | OOP | **B** |
| **23** | `[P01]` | Programming | **B** | **48** | `[O15]` | OOP | **C (Composition)** |
| **24** | `[L09]` | Logic | **A** | **49** | `[J08]` | Java Core | **C (private)** |
| **25** | `[L12]` | Logic *(Câu khó)* | **B** | **50** | `[O02]` | OOP | **B** |

---

# CHI TIẾT TỪNG CÂU HỎI, ĐÁP ÁN & GIẢI THÍCH

---

### **1. [O06]**
A company has `Employee` as a general type, with `Developer` and `Designer` as specialized types. Which design best represents this relationship?
- A. `Employee` inherits `Developer` and `Designer`
- **B. `Developer` and `Designer` inherit `Employee`**
- C. `Employee` and `Developer` must be unrelated
- D. `Developer` contains `Employee`

* **Đáp án đúng:** **B**
* **Giải thích:** Quan hệ "Is-A" (Kế thừa - Inheritance): `Employee` là lớp cha (tổng quát), `Developer` và `Designer` là các lớp con chuyên biệt kế thừa các thuộc tính và hành vi chung từ `Employee`.

---

### **2. [L14]** ⭐ *(Câu khó)*
You have 1,000 bottles and exactly one bottle is contaminated. You have test strips that turn positive if exposed to the contaminated bottle. All tests can be performed simultaneously in one round. What is the minimum number of strips required to identify the contaminated bottle?
- A. 8
- B. 9
- **C. 10**
- D. 11

* **Đáp án đúng:** **C (10)**
* **Giải thích:** Đây là bài toán tìm nhị phân bằng que thử trong 1 lần thử. Mỗi chai từ 1 đến 1000 được đánh mã nhị phân 10 bit ($2^{10} = 1024 \ge 1000$). Ta nhỏ mẫu của chai vào que thứ $k$ nếu bit thứ $k$ của mã chai đó là 1. Sau khi thử, kết quả đổi màu của 10 que thử ghép lại thành đúng chuỗi nhị phân xác định vị trí chai có độc. Với 9 que thì $2^9 = 512 < 1000$ (không đủ). Do đó cần tối thiểu 10 que.

---

### **3. [J02]**
Consider:
```java
Person p1 = new Person(); 
Person p2 = p1; 
p2.name = "Alice";
```
What is the value of `p1.name`?
- A. `null`
- **B. `Alice`**
- C. Compilation error
- D. An unpredictable value

* **Đáp án đúng:** **B (Alice)**
* **Giải thích:** Biến đối tượng trong Java lưu trữ địa chỉ tham chiếu vùng nhớ trên Heap. Câu lệnh `Person p2 = p1;` gán địa chỉ của cùng một đối tượng từ `p1` sang `p2`. Khi thay đổi `p2.name`, đối tượng thực tế bị thay đổi, do đó `p1.name` cũng mang giá trị `"Alice"`.

---

### **4. [O13]**
A system defines a `Notification` abstraction with `send()`. `EmailNotification` and `SmsNotification` provide their own implementations. What is the main purpose of the abstraction?
- A. To force all notifications to use identical internal code
- **B. To expose a common contract while hiding implementation details**
- C. To prevent creating notification objects
- D. To eliminate methods

* **Đáp án đúng:** **B**
* **Giải thích:** Mục đích cốt lõi của tính trừu tượng (Abstraction) là công khai giao diện chung (`send()`), giúp các module bên ngoài tương tác thông qua hợp đồng chung mà không cần quan tâm đến cách thức gửi chi tiết của Email hay SMS.

---

### **5. [P06]**
Let $f(x) = x + 2$ and $g(x) = 3x$. What is $g(f(4))$?
- A. 14
- **B. 18**
- C. 20
- D. 24

* **Đáp án đúng:** **B (18)**
* **Giải thích:** Tính toán hàm lồng nhau từ trong ra ngoài:
  1. $f(4) = 4 + 2 = 6$.
  2. $g(f(4)) = g(6) = 3 \times 6 = 18$.

---

### **6. [L06]**
Four people A, B, C, D are suspects. Exactly one person is guilty. Each makes one statement.
- **A:** "A is guilty."
- **B:** "A is not guilty."
- **C:** "B is guilty."
- **D:** "The guilty person is either A or B."

Exactly two statements are true. Who is guilty?
- **A. A**
- B. B
- C. C
- D. D

* **Đáp án đúng:** **A**
* **Giải thích:** Xét từng trường hợp:
  - Nếu **A có tội**: A nói thật (1), B nói dối (0), C nói dối (0), D nói thật (1). Có đúng 2 phát biểu thật $\Rightarrow$ **Thỏa mãn**.
  - Nếu B có tội: A nói dối (0), B nói thật (1), C nói thật (1), D nói thật (1) $\Rightarrow$ 3 phát biểu thật (loại).
  - Nếu C hoặc D có tội: chỉ có B nói thật $\Rightarrow$ 1 phát biểu thật (loại).

---

### **7. [P05]**
How many times is X printed?
```java
for (int i = 1; i <= 4; i++) { 
    for (int j = i; j <= 4; j++) { 
        print("X"); 
    } 
}
```
- A. 8
- B. 9
- **C. 10**
- D. 12

* **Đáp án đúng:** **C (10)**
* **Giải thích:**
  - $i = 1$: $j$ chạy từ 1 đến 4 $\rightarrow$ 4 lần.
  - $i = 2$: $j$ chạy từ 2 đến 4 $\rightarrow$ 3 lần.
  - $i = 3$: $j$ chạy từ 3 đến 4 $\rightarrow$ 2 lần.
  - $i = 4$: $j$ chạy từ 4 đến 4 $\rightarrow$ 1 lần.  
  Tổng cộng: $4 + 3 + 2 + 1 = 10$ lần.

---

### **8. [J06]**
Consider:
```java
class Counter { 
    static int count = 0; 
} 
Counter a = new Counter(); 
Counter b = new Counter(); 
a.count++; 
b.count++;
```
What is `Counter.count`?
- A. 0
- B. 1
- **C. 2**
- D. Compilation error

* **Đáp án đúng:** **C (2)**
* **Giải thích:** Biến có từ khóa `static` thuộc về lớp (class variable) và được chia sẻ chung cho toàn bộ các thể hiện của lớp đó. Cả `a.count++` và `b.count++` đều cùng tác động tăng giá trị của biến dùng chung này, từ 0 lên 2.

---

### **9. [L05]**
A system has the following rules:
- If the server is overloaded, the response time increases. ($P \rightarrow Q$)
- If the response time increases, users receive a warning. ($Q \rightarrow R$)
- Today users did not receive a warning. ($\neg R$)

What can we conclude?
- A. The server is overloaded
- **B. The server is not overloaded**
- C. The response time increased
- D. We cannot determine whether the server is overloaded

* **Đáp án đúng:** **B**
* **Giải thích:** Dựa vào luật phản đảo (Modus Tollens):
  - Vì $\neg R$ (người dùng không nhận cảnh báo) $\Rightarrow \neg Q$ (thời gian phản hồi không tăng).
  - Vì $\neg Q$ $\Rightarrow \neg P$ (máy chủ không bị quá tải).

---

### **10. [O03]**
What happens after this code?
```java
Person p1 = new Person(); 
Person p2 = new Person(); 
p2 = p1;
```
- **A. p1 and p2 refer to the same object**
- B. p1 and p2 are always two different objects
- C. p1 is deleted immediately
- D. p2 becomes null

* **Đáp án đúng:** **A**
* **Giải thích:** Gán `p2 = p1;` làm cho biến tham chiếu `p2` trỏ đến cùng đối tượng mà `p1` đang trỏ. Đối tượng ban đầu được tạo cho `p2` trở thành đối tượng mồ côi (không còn tham chiếu) và sẽ được Garbage Collector thu hồi sau đó.

---

### **11. [L10]**
Two machines operate for 40 minutes. Machine 1 produces one item every 12 minutes and Machine 2 produces one item every 8 minutes. If both start at the same time and only complete items are counted, how many items are produced in total?
- **A. 8**
- B. 10
- C. 12
- D. 13

* **Đáp án đúng:** **A (8)**
* **Giải thích:**
  - Máy 1 hoàn thành 1 sản phẩm mỗi 12 phút $\rightarrow \lfloor 40 / 12 \rfloor = 3$ sản phẩm (vào phút 12, 24, 36).
  - Máy 2 hoàn thành 1 sản phẩm mỗi 8 phút $\rightarrow \lfloor 40 / 8 \rfloor = 5$ sản phẩm (vào phút 8, 16, 24, 32, 40).
  - Tổng số sản phẩm hoàn chỉnh = $3 + 5 = 8$.

---

### **12. [O11]**
Consider:
```java
Animal[] animals = { new Dog(), new Cat(), new Dog() };
```
Each subclass overrides `sound()`. What happens when a loop calls `animals[i].sound()`?
- A. The Animal implementation is always called
- B. The program chooses the method based only on the array type
- **C. The Dog/Cat implementation corresponding to each actual object is called**
- D. The program throws an error because the array contains different subclasses

* **Đáp án đúng:** **C**
* **Giải thích:** Đây là tính Đa hình (Polymorphism) và cơ chế Dynamic Binding lúc runtime. Dù mảng có kiểu khai báo là `Animal[]`, khi gọi phương thức bị ghi đè, JVM sẽ gọi hàm tương ứng với kiểu đối tượng thực tế (`Dog` hoặc `Cat`).

---

### **13. [P03]**
What is printed?
```java
int x = 1; 
while (x < 20) { 
    x = x * 2 + 1; 
} 
print(x);
```
- A. 15
- B. 20
- **C. 31**
- D. 63

* **Đáp án đúng:** **C (31)**
* **Giải thích:** Diễn tiến giá trị qua từng vòng lặp:
  - Khởi tạo: $x = 1$.
  - Vòng 1: $1 < 20 \rightarrow x = 1 \times 2 + 1 = 3$.
  - Vòng 2: $3 < 20 \rightarrow x = 3 \times 2 + 1 = 7$.
  - Vòng 3: $7 < 20 \rightarrow x = 7 \times 2 + 1 = 15$.
  - Vòng 4: $15 < 20 \rightarrow x = 15 \times 2 + 1 = 31$.
  - Vòng 5: $31 < 20$ (Sai $\rightarrow$ dừng lặp). In ra: 31.

---

### **14. [O14]**
Why can programming against a `Payment` interface make a system easier to extend?
- A. Code using Payment depends on one specific payment implementation
- **B. Code can work with different implementations that satisfy the same contract**
- C. Interfaces automatically make code faster
- D. Interfaces remove the need for testing

* **Đáp án đúng:** **B**
* **Giải thích:** Tuân thủ nguyên lý Dependency Inversion và Open/Closed Principle (SOLID). Mã nguồn chỉ giao tiếp qua `Payment` interface, cho phép cắm thêm các cổng thanh toán mới mà không cần chỉnh sửa code lõi.

---

### **15. [J10]**
Consider the following Java code. Assume each `Counter` object has its own instance variable `value`, initialized to 0, and `increment()` increases that object's value by 1.
```java
Counter a = new Counter(); 
Counter b = a; 
a.increment(); 
b.increment();
```
What is the value of `a.value` after these statements?
- A. 0
- B. 1
- **C. 2**
- D. Compilation error

* **Đáp án đúng:** **C (2)**
* **Giải thích:** Cả hai biến tham chiếu `a` và `b` cùng trỏ tới một đối tượng `Counter` duy nhất. Gọi `a.increment()` rồi `b.increment()` làm tăng thuộc tính `value` của đối tượng đó 2 lần $\rightarrow$ giá trị bằng 2.

---

### **16. [O08]**
A subclass provides its own implementation of a method that already exists in its superclass. What is this called?
- A. Overloading
- **B. Overriding**
- C. Encapsulation
- D. Composition

* **Đáp án đúng:** **B (Overriding)**
* **Giải thích:** Ghi đè phương thức (Method Overriding) là việc lớp con cung cấp cài đặt riêng cho phương thức đã có ở lớp cha với cùng tên, cùng danh sách tham số.

---

### **17. [O04]**
An `Account` class keeps `balance` private and provides `deposit()` and `withdraw()` methods that validate transactions. Which OOP principle is primarily being applied?
- A. Inheritance
- **B. Encapsulation**
- C. Polymorphism
- D. Abstraction

* **Đáp án đúng:** **B (Encapsulation)**
* **Giải thích:** Tính đóng gói (Encapsulation) bảo vệ dữ liệu nội bộ bằng cách đặt thuộc tính là `private` và chỉ cho phép truy cập, biến đổi có kiểm soát thông qua các phương thức `public`.

---

### **18. [L07]**
There are 40 students. 24 know Java, 18 know Python, and 10 know both. How many know neither Java nor Python?
- A. 6
- **B. 8**
- C. 10
- D. 12

* **Đáp án đúng:** **B (8)**
* **Giải thích:** Công thức tập hợp:
  - Số người biết ít nhất 1 ngôn ngữ: $|J \cup P| = 24 + 18 - 10 = 32$.
  - Số người không biết ngôn ngữ nào: $40 - 32 = 8$.

---

### **19. [L03]** ⭐ *(Câu khó)*
A machine has three lights: A, B, and C. Initially, all three lights are OFF.
Each operation must toggle exactly two lights:
- Operation 1: toggle A and B
- Operation 2: toggle B and C
- Operation 3: toggle A and C

You may perform these operations any number of times, in any order. Which state is impossible to reach?
- **A. A = ON, B = ON, C = OFF** *(Hoặc bất kỳ trạng thái có số đèn bật là lẻ)*
- B. 42
- C. 44
- D. 46

* **Đáp án đúng:** **A**
* **Giải thích:** Mỗi thao tác luôn đảo trạng thái của đúng 2 bóng đèn. Do đó, tính chẵn/lẻ (parity) của tổng số bóng đèn đang BẬT luôn không đổi (bắt đầu là 0 đèn bật = số chẵn). Vì vậy không bao giờ có thể đạt tới trạng thái có 1 đèn hoặc 3 đèn bật (số lẻ). *(Lưu ý: các đáp án B, C, D là số trong đề gốc, đáp án duy nhất mô tả trạng thái đèn là A).*

---

### **20. [O07]**
Which relationship is the strongest example of inheritance?
- **A. Manager is an Employee**
- B. Car has an Engine
- C. Library has Books
- D. Computer uses a Keyboard

* **Đáp án đúng:** **A**
* **Giải thích:** Quan hệ kế thừa là quan hệ "Is-A" (Manager là một Employee). B và C là quan hệ Has-A (Composition/Aggregation), D là quan hệ Use-A (Dependency).

---

### **21. [L02]**
What is the next number in the sequence: 2, 5, 11, 23, 47, ?
- A. 91
- B. 94
- **C. 95**
- D. 97

* **Đáp án đúng:** **C (95)**
* **Giải thích:** Quy luật dãy số: $\text{Số sau} = \text{Số trước} \times 2 + 1$:
  - $2 \times 2 + 1 = 5$
  - $5 \times 2 + 1 = 11$
  - $11 \times 2 + 1 = 23$
  - $23 \times 2 + 1 = 47$
  - $47 \times 2 + 1 = 95$.

---

### **22. [L15]**
Start with 1. To generate each next term, multiply the previous term by 2, then add the position of the new term. What is term 6?
- A. 112
- B. 118
- **C. 120**
- D. 121

* **Đáp án đúng:** **C (120)**
* **Giải thích:** Tính lần lượt theo từng vị trí:
  - Vị trí 1: $1$
  - Vị trí 2: $1 \times 2 + 2 = 4$
  - Vị trí 3: $4 \times 2 + 3 = 11$
  - Vị trí 4: $11 \times 2 + 4 = 26$
  - Vị trí 5: $26 \times 2 + 5 = 57$
  - Vị trí 6: $57 \times 2 + 6 = 120$.

---

### **23. [P01]**
When is the expression `(A && B) || C` false?
- A. A: A and B are both false
- **B. B: C is false and at least one of A or B is false**
- C. C: C is true and A is false
- D. D: A and B are both true

* **Đáp án đúng:** **B**
* **Giải thích:** Phép toán `OR` ($||$) chỉ cho kết quả `false` khi cả hai vế đều `false`:
  - Vế phải `C` phải là `false`.
  - Vế trái `(A && B)` phải là `false`, tức là ít nhất một trong hai biến $A$ hoặc $B$ mang giá trị `false`.

---

### **24. [L09]**
A prize is hidden in exactly one of four boxes: A, B, C, or D. Each box has one statement. Exactly two statements are true.
- **A:** "The prize is in A."
- **B:** "The prize is not in A."
- **C:** "The prize is in B."
- **D:** "The prize is in A or B."

Where is the prize?
- **A. A**
- B. B
- C. C
- D. D

* **Đáp án đúng:** **A**
* **Giải thích:**
  - Nếu phần thưởng ở hộp **A**: Phát biểu A (Đúng), B (Sai), C (Sai), D (Đúng) $\rightarrow$ Đúng 2 phát biểu đúng $\Rightarrow$ **Thỏa mãn**.
  - Nếu ở hộp B: B (Đúng), C (Đúng), D (Đúng) $\rightarrow$ 3 phát biểu đúng (loại).
  - Nếu ở hộp C hoặc D: chỉ có B là đúng $\rightarrow$ 1 phát biểu đúng (loại).

---

### **25. [L12]** ⭐ *(Câu khó)*
There are three switches outside a room and three bulbs inside. Each switch controls exactly one bulb. You may enter the room only once. Which strategy lets you identify all three switch-bulb pairs?
- A. Turn on one switch and immediately enter
- **B. Turn on one switch for several minutes, turn it off, turn on a second switch, then enter and use light and temperature**
- C. Turn on two switches and enter
- D. Enter first, then return to the switches

* **Đáp án đúng:** **B**
* **Giải thích:** Bật công tắc 1 một lúc để bóng đèn nóng lên, sau đó tắt đi và bật công tắc 2 rồi bước vào phòng:
  - Bóng đèn đang sáng $\rightarrow$ Công tắc 2.
  - Bóng đèn tắt nhưng chạm vào thấy nóng $\rightarrow$ Công tắc 1.
  - Bóng đèn tắt và nguội $\rightarrow$ Công tắc 3.

---

### **26. [P02]**
What does this code print?
```java
int x = 10; 
if (x >= 10 && x < 20) print("A"); 
else if (x == 20) print("B"); 
else print("C");
```
- **A. A**
- B. B
- C. C
- D. Nothing

* **Đáp án đúng:** **A**
* **Giải thích:** Với $x = 10$, điều kiện `x >= 10 && x < 20` thỏa mãn (`true && true = true`), nhánh `if` đầu tiên được thực thi và in ra `"A"`.

---

### **27. [J07]**
What happens if code declares `final int x = 10;` and later tries `x = 20;`?
- A. x becomes 20
- **B. x cannot be reassigned**
- C. The program creates a second x
- D. x becomes null

* **Đáp án đúng:** **B**
* **Giải thích:** Trong Java, từ khóa `final` áp dụng cho biến khiến giá trị của biến đó không thể thay đổi sau khi khởi tạo (hằng số). Việc gán lại giá trị sẽ gây lỗi biên dịch (Compilation Error).

---

### **28. [P10]**
What is printed?
```java
int x = 25; 
int count = 0; 
while (x > 1) { 
    x = x / 2; 
    count++; 
} 
print(count);
```
- A. 3
- **B. 4**
- C. 5
- D. 6

* **Đáp án đúng:** **B (4)**
* **Giải thích:**
  - Lần 1: $x = 25 / 2 = 12$, $count = 1$.
  - Lần 2: $x = 12 / 2 = 6$, $count = 2$.
  - Lần 3: $x = 6 / 2 = 3$, $count = 3$.
  - Lần 4: $x = 3 / 2 = 1$, $count = 4$.
  - Kiểm tra điều kiện $x > 1$ ($1 > 1$ là sai $\rightarrow$ dừng lặp). In ra: 4.

---

### **29. [O01]**
Which statement best describes a class and an object?
- A. A class is a running program, while an object is source code
- **B. A class defines state and behavior; an object is an instance of that class**
- C. A class can contain only data; an object can contain only methods
- D. A class and an object are exactly the same thing

* **Đáp án đúng:** **B**
* **Giải thích:** Lớp (Class) là bản vẽ thiết kế quy định trạng thái và hành vi; đối tượng (Object) là một thực thể cụ thể (instance) được cấp phát bộ nhớ dựa trên bản vẽ đó.

---

### **30. [J04]**
Given `int[] numbers = {10, 20, 30, 40};` which expression accesses the last element?
- A. `numbers[4]`
- **B. `numbers[3]`**
- C. `numbers[last]`
- D. `numbers[-1]`

* **Đáp án đúng:** **B (numbers[3])**
* **Giải thích:** Mảng trong Java có chỉ mục từ `0` đến `length - 1`. Mảng có 4 phần tử thì phần tử cuối cùng ở vị trí chỉ mục 3.

---

### **31. [L08]**
A three-digit number has three different digits. The first digit is twice the second digit. The third digit is greater than the first digit. The sum of the three digits is 17. What is the number?
- **A. 638**
- B. 628
- C. 836
- D. 646

* **Đáp án đúng:** **A (638)**
* **Giải thích:**
  - Số 638 có 3 chữ số phân biệt: 6, 3, 8.
  - Chữ số đầu gấp đôi chữ số thứ hai: $6 = 3 \times 2$.
  - Chữ số thứ ba lớn hơn chữ số đầu: $8 > 6$.
  - Tổng ba chữ số: $6 + 3 + 8 = 17$.

---

### **32. [P07]**
What is printed?
```java
int x = 10; 
void change(int value) { 
    value += 5; 
} 
change(x); 
print(x);
```
- **A. 10**
- B. 15
- C. 5
- D. Compilation error

* **Đáp án đúng:** **A (10)**
* **Giải thích:** Java truyền tham số hoàn toàn theo cơ chế truyền giá trị (Pass-by-value). Giá trị 10 được sao chép vào biến cục bộ `value`. Mọi thay đổi trên `value` không làm thay đổi biến `x` ở phạm vi bên ngoài.

---

### **33. [L11]** ⭐ *(Câu khó)*
There are 9 identical-looking coins, and exactly one is heavier than the others. Using a balance scale, what is the minimum number of weighings needed to guarantee finding the heavier coin?
- A. 1
- **B. 2**
- C. 3
- D. 4

* **Đáp án đúng:** **B (2)**
* **Giải thích:** Chia 9 đồng thành 3 nhóm (3-3-3):
  - Lần cân 1: Đặt nhóm 1 và nhóm 2 lên cân. Nếu một bên lệch thì đồng nặng ở bên đó; nếu thăng bằng thì đồng nặng ở nhóm 3.
  - Lần cân 2: Lấy 3 đồng của nhóm nặng, đặt mỗi đồng lên 1 đĩa cân, giữ lại 1 đồng. Ta tìm ra ngay đồng nặng nhất. Tối thiểu cần 2 lần cân ($3^2 = 9$).

---

### **34. [P09]**
What is printed?
```java
int result = 1; 
for (int i = 1; i <= 4; i++) { 
    result *= i; 
} 
print(result);
```
- A. 10
- B. 16
- **C. 24**
- D. 25

* **Đáp án đúng:** **C (24)**
* **Giải thích:** Vòng lặp tính giai thừa của 4: $1 \times 2 \times 3 \times 4 = 24$.

---

### **35. [L04]** ⭐ *(Câu khó)*
Five people A, B, C, D, E stand in a line.
- A must be before C.
- B must stand immediately after D.
- E cannot be at either end.
- C cannot stand next to E.

Which arrangement is valid?
- A. A D B E C
- B. D B A E C
- **C. A E D B C**
- D. E A D B C

* **Đáp án đúng:** **C (A E D B C)**
* **Giải thích:**
  - A đứng trước C: Đúng (vị trí 1 và 5).
  - B đứng ngay sau D: Đúng (D vị trí 3, B vị trí 4 $\rightarrow$ cặp "DB").
  - E không đứng ở 2 đầu: Đúng (E ở vị trí 2).
  - C không đứng cạnh E: Đúng (E ở vị trí 2, C ở vị trí 5).

---

### **36. [J09]**
What is printed?
```java
try { 
    int x = 10 / 0; 
    System.out.println("A"); 
} catch (ArithmeticException e) { 
    System.out.println("B"); 
} 
System.out.println("C");
```
- A. A then C
- **B. B then C**
- C. C only
- D. The program stops without output

* **Đáp án đúng:** **B (B then C)**
* **Giải thích:** Câu lệnh `10 / 0` ném ra ngoại lệ `ArithmeticException`, dòng in "A" bị bỏ qua, luồng nhảy vào khối `catch` và in ra "B". Sau đó chương trình chạy tiếp câu lệnh kế tiếp ngoài khối try-catch và in ra "C".

---

### **37. [O10]**
Consider:
```java
Animal animal = new Dog();
```
If `Dog` has a method `bark()` that `Animal` does not define, which statement is correct?
- A. `animal.bark()` always works because the object is a Dog
- **B. The reference type Animal determines which methods can be called directly**
- C. Dog methods can never be called
- D. Animal and Dog must have identical methods

* **Đáp án đúng:** **B**
* **Giải thích:** Trong thời gian biên dịch (Compile-time), trình biên dịch kiểm tra tính hợp lệ dựa trên kiểu tham chiếu (`Animal`). Vì `Animal` không có phương thức `bark()`, nên gọi trực tiếp `animal.bark()` sẽ gặp lỗi biên dịch (trừ khi ép kiểu sang `Dog`).

---

### **38. [L13]** ⭐ *(Câu khó)*
There are 12 identical-looking balls. Exactly one ball is abnormal, but it may be either heavier or lighter than the others. Using a balance scale, what is the minimum number of weighings needed to always identify the abnormal ball and determine whether it is heavier or lighter?
- A. 2
- **B. 3**
- C. 4
- D. 5

* **Đáp án đúng:** **B (3)**
* **Giải thích:** Bài toán cân 12 quả bóng kinh điển. Có 12 quả và 2 trạng thái (nặng hơn/nhẹ hơn) $\rightarrow$ 24 trường hợp. Mỗi lần cân có 3 kết quả (trái, phải, bằng nhau). Với 3 lần cân, số trường hợp phân biệt tối đa là $3^3 = 27 \ge 24$. Bằng chiến thuật chia 4-4-4 ở lần cân đầu tiên, ta luôn tìm ra quả bóng lỗi sau đúng 3 lần cân.

---

### **39. [O09]**
Consider:
```java
Animal a = new Dog(); 
a.sound();
```
If `Dog` overrides `sound()`, which implementation is called?
- A. `Animal.sound()`
- **B. `Dog.sound()`**
- C. Both methods are called
- D. The code cannot compile

* **Đáp án đúng:** **B (Dog.sound())**
* **Giải thích:** Tính đa hình động (Dynamic Method Dispatch): Khi phương thức đã được ghi đè, tại thời điểm chạy (runtime), JVM sẽ gọi phiên bản cài đặt của đối tượng thực tế (`Dog`).

---

### **40. [P04]**
What is the sum of all integers from 1 to 10 for which `i % 3 != 0`?
- A. 36
- **B. 37**
- C. 38
- D. 39

* **Đáp án đúng:** **B (37)**
* **Giải thích:** Các số từ 1 đến 10 không chia hết cho 3 gồm: 1, 2, 4, 5, 7, 8, 10.  
  Tổng: $1 + 2 + 4 + 5 + 7 + 8 + 10 = 37$.

---

### **41. [J01]**
Which pair contains one primitive type and one reference type in Java?
- **A. `int` and `String`**
- B. `Integer` and `String`
- C. `String` and `Object`
- D. `int` and `boolean`

* **Đáp án đúng:** **A**
* **Giải thích:** `int` là kiểu dữ liệu nguyên thủy (primitive), còn `String` là kiểu đối tượng tham chiếu (reference type). (B, C là 2 kiểu reference; D là 2 kiểu primitive).

---

### **42. [J05]**
Which statement about Java `List` is correct?
- A. A List cannot contain duplicates
- **B. A List maintains element order and can contain duplicates**
- C. A List can contain only primitive types
- D. A List automatically sorts elements

* **Đáp án đúng:** **B**
* **Giải thích:** Giao diện `List` trong Java Collection Framework lưu trữ các phần tử có thứ tự chèn (insertion order) và cho phép các phần tử có giá trị trùng lặp (duplicates).

---

### **43. [L01]**
What is the next number in the sequence: 4, 7, 13, 22, 34, ?
- A. 47
- B. 48
- **C. 49**
- D. 51

* **Đáp án đúng:** **C (49)**
* **Giải thích:** Hiệu giữa các số liên tiếp tăng dần theo bội số của 3:
  - $7 - 4 = +3$
  - $13 - 7 = +6$
  - $22 - 13 = +9$
  - $34 - 22 = +12$  
  $\rightarrow$ Số tiếp theo: $34 + 15 = 49$.

---

### **44. [O12]**
A method `processPayment(Payment payment)` calls `payment.pay()`. `CreditCardPayment` and `BankTransferPayment` both implement `Payment`. No `instanceof` checks are used. What OOP concept makes this design possible?
- A. Encapsulation
- **B. Polymorphism**
- C. Inheritance only
- D. Composition

* **Đáp án đúng:** **B (Polymorphism)**
* **Giải thích:** Tính đa hình (Polymorphism) cho phép hàm nhận tham chiếu giao diện cha `Payment` và tự động điều hướng cuộc gọi `payment.pay()` đến hành vi cụ thể tương ứng của từng lớp con mà không cần kiểm tra kiểu dữ liệu bằng `instanceof`.

---

### **45. [P08]**
What is printed?
```java
int a = 3; 
int b = 5; 
a = a + b; 
b = a - b; 
a = a - b; 
print(a + " " + b);
```
- A. 3 5
- **B. 5 3**
- C. 8 5
- D. 5 8

* **Đáp án đúng:** **B (5 3)**
* **Giải thích:** Đây là kỹ thuật hoán đổi 2 số không dùng biến phụ:
  - $a = 3 + 5 = 8$
  - $b = 8 - 5 = 3$
  - $a = 8 - 3 = 5$  
  In ra: `"5 3"`.

---

### **46. [J03]**
Consider:
```java
String a = new String("Java"); 
String b = new String("Java");
```
What are the results of `a == b` and `a.equals(b)`?
- A. `true`, `true`
- B. `false`, `false`
- **C. `false`, `true`**
- D. `true`, `false`

* **Đáp án đúng:** **C (false, true)**
* **Giải thích:**
  - Toán tử `==` so sánh địa chỉ vùng nhớ tham chiếu. Vì sử dụng từ khóa `new`, hai đối tượng nằm ở hai địa chỉ bộ nhớ riêng biệt trên Heap $\rightarrow$ `false`.
  - Phương thức `equals()` trong lớp `String` so sánh nội dung ký tự của chuỗi $\rightarrow$ đều là `"Java"` nên trả về `true`.

---

### **47. [O05]**
Why is it generally better to keep an `Account`'s balance private instead of allowing any code to modify it directly?
- A. It makes the program run faster
- **B. It allows the class to enforce rules when the state changes**
- C. It prevents objects from being created
- D. It automatically creates inheritance

* **Đáp án đúng:** **B**
* **Giải thích:** Giữ thuộc tính `private` giúp đóng gói dữ liệu, buộc các thay đổi phải thông qua các phương thức nghiệp vụ để đảm bảo các ràng buộc (ví dụ: số dư không âm, số tiền giao dịch hợp lệ).

---

### **48. [O15]**
A `Car` creates and manages an `Engine` as part of its own lifecycle. The `Engine` is conceptually a component of the `Car` rather than an independently managed entity. Which relationship is best represented?
- A. Inheritance
- B. Aggregation
- **C. Composition**
- D. Polymorphism

* **Đáp án đúng:** **C (Composition)**
* **Giải thích:** Quan hệ Hợp thành (Composition): `Engine` là một phần gắn liền với vòng đời của `Car`. Nếu `Car` bị tiêu hủy thì `Engine` bên trong nó cũng không tồn tại độc lập.

---

### **49. [J08]**
Which Java access modifier provides the most restricted direct access to a class member?
- A. `public`
- B. `protected`
- **C. `private`**
- D. `default`

* **Đáp án đúng:** **C (private)**
* **Giải thích:** Mức độ hạn chế tăng dần: `public` < `protected` < `default` (package-private) < `private`. Modifier `private` chỉ cho phép truy cập từ bên trong chính class đó.

---

### **50. [O02]**
Two objects `a` and `b` are created from the same `Account` class. Each has its own `balance` field. If `a.balance` changes, what normally happens to `b.balance`?
- A. `b.balance` also changes
- **B. `b.balance` remains unchanged**
- C. The program cannot have two Account objects
- D. `b.balance` becomes zero

* **Đáp án đúng:** **B (b.balance remains unchanged)**
* **Giải thích:** Mỗi thể hiện đối tượng (instance) sở hữu vùng nhớ riêng biệt cho các biến thể hiện (instance variables). Do đó, sự thay đổi thuộc tính trên đối tượng `a` hoàn toàn độc lập và không ảnh hưởng đến đối tượng `b`.

---
## **KẾT THÚC BỘ ĐÁP ÁN**
