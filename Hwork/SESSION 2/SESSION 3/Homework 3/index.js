// CHECK POINT
// SESSION 3: ARRAY
// Init + Create:
// let movies = ['running man', 'soul', 'nguoi soi'];
// alert (movies);
// let newMovie = 'meo meo';
// movies.push (newMovie);
// alert (movies);
// read:
// let movies = ['running man', 'soul', 'nguoi soi'];
// let i = Number (prompt ('Enter movies'));
// console.log (movies [i]);
// Update:
// 1.
// let movies = ['running man', 'soul', 'nguoi soi'];
// let movieTitle = prompt ('Enter movieTitle');
// movies [0] = 'movieTitle';
// console.log (movies);
// 2.
// let movies = ['running man', 'soul', 'nguoi soi'];
// let i = Number (prompt ('Nhập vị trí i'));
// let movieTitle = prompt ('Nhập tên phim');
// movies [i] = movieTitle;
// console.log (movies);
// Delete:
// let movies = ['running man', 'soul', 'nguoi soi'];
// let i = Number (prompt ('Nhập tên movies'));
// movies [i] = "";
// console.log (movies);
// 2.
// let movies = ['running man', 'soul', 'nguoi soi'];
// let i = Number (prompt ('Nhập i'));
// let n = prompt ('Xóa tên movie)');
// movies.splice (i, n);
// console.log (movies);
// Read all:
// 1.
// let movies = ['running man', 'soul', 'nguoi soi'];
// let n = movies.length;
// for (let i=0; i < n; i++) {
//     console.log (movies [i]);
// }
// 2:
// let movies = ['running man', 'soul', 'nguoi soi'];
// let n = movies.length/2;
// for (let i=0; i < n; i++) {
//     console.log (movies [i]);
// }
// 3:
// let movies = ['running man', 'soul', 'nguoi soi'];
// let n = movies.length;
// let x = 1;
// for (let i=0; i < n; i++) {
//     console.log (x. movies [i]);
// }
// 
// 
// HOMEWORK 3:
// Task4:
// let n = prompt ('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?');
// let i = ['Jeans', 'T-shirt', 'Socks'];
// if (n == 'e') {
//     alert ('This command is not supported');
// } else if (n == 'r') {
//     for (let x = 0; x < i.length; x++); {
//         console.log (x. i[n]);
//     }
// } else if (n == 'c') {
//     let newItem = prompt ('Enter the name of the new item'); alert ('Done');
// } else if (n = 'r') {
//     n.push ('Tie');
// } else if (n == 'u') {
//     let position = Number (prompt ('Enter the position')); 
//     let newName = prompt ('Black shirt');
//     alert ('Done');
// }
// Task5:
// let n = prompt ('Enter a sequence of Number, seperated by ","');
// let array1 = n.split (',');
// let sum = 0;
// for (let x = 0; x < array1.length; x++) {
//     sum = sum + Number (array1 [x]);
// }
// alert (`The sum of them is ${sum}`);

// Task6:
// let n= prompt ('Enter a sequence of numbers, separated by ","');
// let array1 = n.split (',');
// let min = Math.min.apply(Math, array1);
// alert (`The smallest number is ${min}`);

// Task7:
// let array = [10, 20, 11, 39, 99];
// let n = prompt ('Enter a number');
// for (let i =0; i <array.length; i++) {
//         if (n==array[i]) {
//     alert (`${n} is FOUND in my array`);
// } else {
//     alert (`${n} is not FOUND`);
// }
// }
// Task8:
// 8.1:
// let sizeSheep = [5, 7, 300, 90, 24, 50, 75];
// console.log ('Hello, my name is Phuong Nam and here is my sheep sizes:')
// for (let i = 0; i < sizeSheep.length; i++) {
//     console.log (sizeSheep[i]);
// }
// 8.2:
// let sizeSheep = [5, 7, 300, 90, 24, 50, 75];
// let max = Math.max.apply (Math,sizeSheep);
// console.log (`Now my bigest sheep has size ${max}, let shave it`);
// max = sizeSheep.indexOf (max);
// sizeSheep [max] = 8;
// console.log (sizeSheep);
// 8.4:
// let sizeSheep = [5, 7, 300, 90, 24, 50, 75];
// for (let i =0; i<sizeSheep.length; i++) {
//     sizeSheep [i] = Number (sizeSheep[i])+50;
// }
// console.log ('One months has, passed, my sheeps have grown, here are their sizes');
// console.log (sizeSheep);



