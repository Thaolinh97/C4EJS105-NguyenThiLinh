// Task1:
// 1. 
// var để khai báo biến có thể truy cập ở phạm vi hàm số hoặc ngoài hàm số
// const để khai báo biến là 1 hằng số, và giá trị của nó không thay đổi trong suốt quá trình chạy
// 2. Sự khác nhau:
// - Nếu sử dụng var thì trong 1 đoạn function, nếu sử dụng biến var cho 1 biến bên ngoài function thì coi như biến đó đã được thay đổi > gây khó khăn cho fix lỗi
// - Nếu sử dụng let thì trong đoạn function chỉ có được sử dụng trong function đó chứ không có bất cứ giá trị khởi tạo nào
// 3. Sự khác nhau:
// - let có thể update lại biến
// - const không thể update lại biến
// Task 2:
// 1. Boolean là một kiểu dữ liệu có môt trong 2 giá trị ;à true hoặc false
// 2. Là true or false
// Task3:
// a)
// for (let x = 0; x < 7; x++) {
//     console.log (x);
// }
// b)
// let a = prompt ('Enter a number?');
// for (let i = 0; i < 4; i++) {
//     console.log (i)
// }
// c)
// let a = prompt ('Enter n');
// for (let i = 3; i<7; i++) {
//     console.log (i)
// }
// d)
// let a = prompt ('Enter n');
// let b = prompt ('Enter c');
// for (let i = 2; i< 7; i++) {
//     console.log (i)
// }
// e)
// let n = Number (prompt ('Enter n'));
// let c = Number (prompt ('Enter c'));
// for (let i =c; i < n; i +3) {
//     console.log (i);
// }
// f)
// let n = Number (prompt ('Enter n'));
// let c = Number (prompt ('Enter c'));
// let s = Number (prompt ('Enter s'))
// for (let i=c; i<n; i+4) {
//     console.log (i);
// }
// Task4:
// let n = Number (prompt ('Enter a number'));
// let s = 1;
// for (i = 1; i<=n; i++) {
//     s=s*i;
// }
// alert (`The factorial of ${n} is ${s}`);
// Task5:
// let x = prompt ('How old are you?');
// if (x <= 14) {
//     alert ('You are not old enough to view this content');
// } else {
// alert ('Enjoy!');
// }
// Task6:
// let x = Number (prompt ('Enter a number'));
// if ( x < 4.5) {
//     alert ('Lower half of 9');
// } 
// else {
//     alert ('Higher half or 9');
// }
// Task7:
// let n = prompt ('n = ');
// let x = prompt ('x = ');
// if (x < n/2) {
//     alert ('x is lower half of n');
// }
// else {
//     alert ('x is in higher half of n');
// }
// Task8:
// let x = prompt ('x = ');
// if (x%2) {
//     alert ('x is an odd number')
// }
// else {
//     alert ('x is an even number')
// }
// Task9:
// a)
// let x = 0;
// let y = 0;
// while (x < 3) {
//     console.log ('L')
//     x++;
// }
// while (y < 3) {
//     console.log ('H')
//     y++;
// }
// b);
// let x = prompt ("Enter the total number of L's and H's?");
// let a = 0;
// let b = 0;
// while (a<4) {
//     console.log ('L')
//     a++;
// }
// while (b<3) {
//     console.log ('H')
//     b++;
// }
// c)

// let y = 0;
// let x = y%2;
// while (y < 8) {
//     console.log (x)
//     y++;
// }
// Task10:
// let a = Number(prompt ('Your weight in kg?'));
// let b = Number (prompt ('Your height in cm?'));
// let x = a*10000/(b*b);
// if (x < 16) {
//     alert ('Your are severely underweight');
// } else if (x >= 16 || x<18.5) {
//     alert ('Your are underweight');
// } else if (x >= 18.5 || x<= 25) {
//     alert ('Your are Normal');
// } else if (x >25 || x <= 30) {
//     alert ('Your are overweight');
// } else {
// alert ('Your are Obese');
// }