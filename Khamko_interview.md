# **INTERN / FRESHER JAVA TESTING** 

**Họ và tên ứng viên:** ______________________________________ 

**Email:** ____________________ 

**Hướng dẫn:** Chọn **một đáp án đúng nhất** cho mỗi câu hỏi. 

### **1. [O06]** 

A company has Employee as a general type, with Developer and Designer as specialized types. Which design best represents this relationship? 

- A. Employee inherits Developer and Designer 

- B. Developer and Designer inherit Employee 

- C. Employee and Developer must be unrelated 

- D. Developer contains Employee 

### **2. [L14]** 

You have 1,000 bottles and exactly one bottle is contaminated. You have test strips that turn positive if exposed to the contaminated bottle. All tests can be performed simultaneously in one round. What is the minimum number of strips required to identify the contaminated bottle? 

A. 8 B. 9 C. 10 D. 11 

### **3. [J02]** 

Consider: 

Person p1 = new Person(); Person p2 = p1; p2.name = "Alice"; 

What is the value of p1.name? 

A. null B. Alice C. Compilation error 

D. An unpredictable value 

### **4. [O13]** 

A system defines a Notification abstraction with send(). EmailNotification and SmsNotification provide their own implementations. What is the main purpose of the abstraction? 

A. To force all notifications to use identical internal code 

B. To expose a common contract while hiding implementation details C. To prevent creating notification objects 

D. To eliminate methods 

### **5. [P06]** 

Let f(x) = x + 2 and g(x) = 3x. What is g(f(4))? 

A. 14 B. 18 C. 20 D. 24 

### **6. [L06]** 

Four people A, B, C, D are suspects. Exactly one person is guilty. Each makes one statement. 

A: "A is guilty." 

B: "A is not guilty." 

C: "B is guilty." 

D: "The guilty person is either A or B." 

Exactly two statements are true. Who is guilty? 

A. A B. B C. C D. D 

### **7. [P05]** 

How many times is X printed? 

for (int i = 1; i <= 4; i++) { for (int j = i; j <= 4; j++) { print("X"); } } A. 8 B. 9 C. 10 D. 12 

### **8. [J06]** 

Consider: 

class Counter { 

static int count = 0; 

} Counter a = new Counter(); 

Counter b = new Counter(); 

a.count++; 

b.count++; 

What is Counter.count? 

A. 0 B. 1 C. 2 D. Compilation error 

### **9. [L05]** 

A system has the following rules: If the server is overloaded, the response time increases. If the response time increases, users receive a warning. Today users did not receive a warning. What can we conclude? 

A. The server is overloaded 

B. The server is not overloaded 

C. The response time increased 

D. We cannot determine whether the server is overloaded 

### **10. [O03]** 

What happens after this code? 

Person p1 = new Person(); Person p2 = new Person(); p2 = p1; 

A. p1 and p2 refer to the same object B. p1 and p2 are always two different objects C. p1 is deleted immediately 

D. p2 becomes null 

### **11. [L10]** 

Two machines operate for 40 minutes. Machine 1 produces one item every 12 minutes and Machine 2 produces one item every 8 minutes. If both start at the same time and only complete items are counted, how many items are produced in total? 

A. 8 B. 10 C. 12 D. 13 

### **12. [O11]** 

Consider: 

Animal[] animals = { new Dog(), new Cat(), new Dog() }; 

Each subclass overrides sound(). What happens when a loop calls animals[i].sound()? 

A. The Animal implementation is always called B. The program chooses the method based only on the array type C. The Dog/Cat implementation corresponding to each actual object is called D. The program throws an error because the array contains different subclasses 

### **13. [P03]** 

What is printed? 

int x = 1; while (x < 20) { x = x * 2 + 1; } print(x); A. 15 B. 20 C. 31 D. 63 

### **14. [O14]** 

Why can programming against a Payment interface make a system easier to extend? 

A. Code using Payment depends on one specific payment implementation B. Code can work with different implementations that satisfy the same contract C. Interfaces automatically make code faster 

D. Interfaces remove the need for testing 

### **15. [J10]** 

Consider the following Java code. Assume each Counter object has its own instance variable value, initialized to 0, and increment() increases that object's value by 1. 

Counter a = new Counter(); Counter b = a; a.increment(); b.increment(); 

What is the value of a.value after these statements? 

A. 0 B. 1 C. 2 

D. Compilation error 

### **16. [O08]** 

A subclass provides its own implementation of a method that already exists in its superclass. What is this called? 

A. Overloading 

B. Overriding 

C. Encapsulation 

D. Composition 

### **17. [O04]** 

An Account class keeps balance private and provides deposit() and withdraw() methods that validate transactions. Which OOP principle is primarily being applied? 

A. Inheritance B. Encapsulation 

C. Polymorphism 

D. Abstraction 

### **18. [L07]** 

There are 40 students. 24 know Java, 18 know Python, and 10 know both. How many know neither Java nor Python? 

A. 6 B. 8 C. 10 

D. 12 

### **19. [L03]** 

A machine has three lights: A, B, and C. Initially, all three lights are OFF. 

Each operation must toggle exactly two lights: 

Operation 1: toggle A and B Operation 2: toggle B and C Operation 3: toggle A and C You may perform these operations any number of times, in any order. Which state is impossible to reach? 

A. A = ON, B = ON, C = OFF B. 42 C. 44 D. 46 

### **20. [O07]** 

Which relationship is the strongest example of inheritance? 

A. Manager is an Employee B. Car has an Engine C. Library has Books 

D. Computer uses a Keyboard 

### **21. [L02]** 

What is the next number in the sequence: 2, 5, 11, 23, 47, ? 

A. 91 B. 94 C. 95 D. 97 

### **22. [L15]** 

Start with 1. To generate each next term, multiply the previous term by 2, then add the position of the new term. For example, term 2 = 1×2+2. What is term 6? 

A. 112 B. 118 

C. 120 D. 121 

### **23. [P01]** 

When is the expression (A && B) || C false? 

A. A: A and B are both false B. B: C is false and at least one of A or B is false C. C: C is true and A is false D. D: A and B are both true 

### **24. [L09]** 

A prize is hidden in exactly one of four boxes: A, B, C, or D. Each box has one statement. Exactly two statements are true. 

A: "The prize is in A." B: "The prize is not in A." C: "The prize is in B." D: "The prize is in A or B." 

Where is the prize? 

A. A B. B C. C D. D 

### **25. [L12]** 

There are three switches outside a room and three bulbs inside. Each switch controls exactly one bulb. You may enter the room only once. Which strategy lets you identify all three switch-bulb pairs? 

A. Turn on one switch and immediately enter 

B. Turn on one switch for several minutes, turn it off, turn on a second switch, then enter and use light and temperature 

C. Turn on two switches and enter 

D. Enter first, then return to the switches 

### **26. [P02]** 

What does this code print? 

int x = 10; if (x >= 10 && x < 20) print("A"); else if (x == 20) print("B"); else print("C"); 

A. A B. B C. C D. Nothing 

### **27. [J07]** 

What happens if code declares final int x = 10; and later tries x = 20;? 

A. x becomes 20 B. x cannot be reassigned C. The program creates a second x D. x becomes null 

### **28. [P10]** 

What is printed? 

int x = 25; int count = 0; while (x > 1) { x = x / 2; count++; } print(count); 

A. 3 B. 4 C. 5 D. 6 

### **29. [O01]** 

Which statement best describes a class and an object? 

A. A class is a running program, while an object is source code B. A class defines state and behavior; an object is an instance of that class C. A class can contain only data; an object can contain only methods D. A class and an object are exactly the same thing 

### **30. [J04]** 

Given int[] numbers = {10, 20, 30, 40}; which expression accesses the last element? 

A. numbers[4] B. numbers[3] C. numbers[last] 

D. numbers[-1] 

### **31. [L08]** 

A three-digit number has three different digits. The first digit is twice the second digit. The third digit is greater than the first digit. The sum of the three digits is 17. What is the number? 

A. 638 B. 628 C. 836 D. 646 

### **32. [P07]** 

What is printed? 

int x = 10; void change(int value) { value += 5; } change(x); print(x); 

A. 10 B. 15 C. 5 D. Compilation error 

### **33. [L11]** 

There are 9 identical-looking coins, and exactly one is heavier than the others. Using a balance scale, what is the minimum number of weighings needed to guarantee finding the heavier coin? 

A. 1 B. 2 C. 3 D. 4 

### **34. [P09]** 

What is printed? int result = 1; for (int i = 1; i <= 4; i++) { result *= i; } print(result); 

A. 10 B. 16 C. 24 D. 25 

### **35. [L04]** 

Five people A, B, C, D, E stand in a line. A must be before C. B must stand immediately after D. E cannot be at either end. C cannot stand next to E. Which arrangement is valid? 

A. A D B E C B. D B A E C C. A E D B C D. E A D B C 

### **36. [J09]** 

What is printed? 

try { int x = 10 / 0; System.out.println("A"); } catch (ArithmeticException e) { System.out.println("B"); } System.out.println("C"); 

A. A then C B. B then C C. C only D. The program stops without output 

### **37. [O10]** 

Consider: 

Animal animal = new Dog(); 

If Dog has a method bark() that Animal does not define, which statement is correct? 

A. animal.bark() always works because the object is a Dog B. The reference type Animal determines which methods can be called directly C. Dog methods can never be called 

D. Animal and Dog must have identical methods 

### **38. [L13]** 

There are 12 identical-looking balls. Exactly one ball is abnormal, but it may be either heavier or lighter than the others. Using a balance scale, what is the minimum number of weighings needed to always identify the abnormal ball and determine whether it is heavier or lighter? 

A. 2 B. 3 C. 4 D. 5 

### **39. [O09]** 

Consider: 

Animal a = new Dog(); 

a.sound(); 

If Dog overrides sound(), which implementation is called? 

A. Animal.sound() B. Dog.sound() C. Both methods are called D. The code cannot compile 

### **40. [P04]** 

What is the sum of all integers from 1 to 10 for which i % 3 != 0? 

A. 36 B. 37 C. 38 D. 39 

### **41. [J01]** 

Which pair contains one primitive type and one reference type in Java? 

A. int and String B. Integer and String C. String and Object 

D. int and boolean 

### **42. [J05]** 

Which statement about Java List is correct? 

A. A List cannot contain duplicates B. A List maintains element order and can contain duplicates C. A List can contain only primitive types D. A List automatically sorts elements 

### **43. [L01]** 

What is the next number in the sequence: 4, 7, 13, 22, 34, ? 

A. 47 B. 48 C. 49 D. 51 

### **44. [O12]** 

A method processPayment(Payment payment) calls payment.pay(). CreditCardPayment and BankTransferPayment both implement Payment. No instanceof checks are used. What OOP concept makes this design possible? 

A. Encapsulation B. Polymorphism C. Inheritance only 

D. Composition 

### **45. [P08]** 

What is printed? 

int a = 3; int b = 5; a = a + b; b = a - b; a = a - b; print(a + " " + b); 

A. 3 5 B. 5 3 C. 8 5 D. 5 8 

### **46. [J03]** 

Consider: 

String a = new String("Java"); String b = new String("Java"); 

What are the results of a == b and a.equals(b)? 

A. true, true 

B. false, false 

C. false, true 

D. true, false 

### **47. [O05]** 

Why is it generally better to keep an Account's balance private instead of allowing any code to modify it directly? 

- A. It makes the program run faster 

- B. It allows the class to enforce rules when the state changes 

- C. It prevents objects from being created 

- D. It automatically creates inheritance 

### **48. [O15]** 

A Car creates and manages an Engine as part of its own lifecycle. The Engine is conceptually a component of the Car rather than an independently managed entity. Which relationship is best represented? 

A. Inheritance 

B. Aggregation 

C. Composition 

- D. Polymorphism 

### **49. [J08]** 

Which Java access modifier provides the most restricted direct access to a class member? 

A. public 

B. protected 

C. private 

D. default 

### **50. [O02]** 

Two objects a and b are created from the same Account class. Each has its own balance field. If a.balance changes, what normally happens to b.balance? 

A. b.balance also changes B. b.balance remains unchanged C. The program cannot have two Account objects D. b.balance becomes zero 

## **END OF TEST** 

