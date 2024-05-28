// khai báo biến
/*var fullName = 'Hoang Ngoc Bao long';
var age=18;

//goi ham thong bao
// hàm alert
alert(fullName);
alert(age);
// hàm console
console.log(fullName)
console.log(age)

// hàm confirm
confirm('Xác nhận bạn đủ tuổi')
// hàm prompt
prompt('Xác nhận bạn đủ tuổi')
// hàm setTimeout 
setTimeout(function() {
    alert('thông báo')
},1000)
// hàm setInterval
setInterval(function()  {
    console.log('đây là log ' + Math.random)
},1000)

//toán tử số học 
var a= 1+1;
console.log(a);
//toán tử gán 
var sport = 'bóng đá'
// toán tử so sánh
var a= 1;
var a=2;

if(a<b){
    alert('đúng')
}

// toán tử logic
 var a = 1;
 var b = 2;

if(a>0 && b>0){
    alert('a & b lớn hơn 0')
}

// toán tử số học

var a=4;
var b=2;
// toán tử cộng
var c= a+b;
console.log(c);
//toán tử trừ
var d= a-b;
console.log(d);
//toán tử nhân
var e= a*b;
console.log(e);
//toán tử lũy thừa
var f= a**b;
console.log(f);
//toán tử chia
var g= a/b;
console.log(g);
//toán tử chia có dư
var h= a%b;
console.log(h);
//toán tử tăng 1 giá trị
var j = 8;
j++;
console.log(j);
//toán tử giảm 1 giá trị
var k = 8;
k--;
console.log(k);

var x = 6;
//th1: tiền tố
// việc 1: cộng 1 cho x, x=x+1 => x=7
// việc 2: trả về sau khi +1
console.log(++x);
//th2: hậu tố
 var y=6;
 var output = y--;
 console.log('output: ',output);
 console.log('a: ' , y);

 var number = 6;
 var z= +number *2 - number--*3;    
 //7*2-7*3
 console.log('output: ', z);


 // toán tử gán
 // toán tử =
var a=1;

a = a + 2;

console.log(a);

// toán tử +=
var b=1;

b +=2;
 console.log(b);

 // toán tử -=
  var c=1;

  c -=2;

  console.log(c);

  // toán tử *=
  var d=1;

  d *=2;

  console.log(d);

  // toán tử /=

  var e=1;

  e -=2;

  console.log(e);

  // toán tử **=

  var f=1;

  f **=2;

  console.log(f);


var firstName='Bảo'
var lastName='Long'

console.log(firstName+' ' +lastName);

var Name= 'Long';
Name += ' Bảo';
console.log(Name)
var a = 1;
var b = 2;
if(a==b) {
    console.log(' điều kiện đúng')
} else {
    console.log(' điều kiện sai')
}
if (a != b) {
    console.log(' điều kiện đúng')
}  else {
    console.log(' điều kiện sai')
}
if (a >= b) {
    console.log(' điều kiện đúng')
}  else {
    console.log(' điều kiện sai')
}
if (a <= b) {
    console.log(' điều kiện đúng')
}  else {
    console.log(' điều kiện sai')
}
if (a > b) {
    console.log(' điều kiện đúng')
}  else {
    console.log(' điều kiện sai')
}
if (a < b) {
    console.log(' điều kiện đúng')
}  else {
    console.log(' điều kiện sai')
}
var x = 'Bảo Long'
var y = 'bảo long'
if (x == y) {
    console.log(' điều kiện đúng')
}  else {
    console.log(' điều kiện sai')
}


// Boolean
var a=1;
var b=2;

var isSuccess = a>b;

console.log(isSuccess)


// câu điều kiện if-else

var isSuccess =1<2;
if(isSuccess) {
    console.log('điều kiện đúng')
} else{
    console.log('điều kiện sai')
}

// toán tử logic
//&& -- and
//|| -- or
// ! -- not

var a = 1;
var b = 2;
var c = 3;

if(a>0 && b>0 && c>0){
    console.log(' điều kiện đúng ')
}
if(a > 0 || b < 0 || c < 0){
    console.log(' điều kiện đúng ')
}
if(!(a<0)){
    console.log(' điều kiện đúng ')
}


// number type
var a=1;
var b=2;
var c=1.5;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// string type
var fullName= 'Bảo Long'
console.log(typeof fullName);

// Boolean
 var isSuccess= true;
 console.log(typeof isSuccess);

//Undedined
var age;
console.log(typeof age)

// Null
var isNull= null;
console.log(typeof isNull);

// Symbol
var id= Symbol('id');
console.log(typeof id);

// function
var myFunction = function () {
    alert('xin chào')
}
console.log(typeof myFunction);

// Object types
var myObject = {
    name: 'Bảo Long',
    age: 18,
    adress: ' Hue',
    myFunction: function () {
        
    }
}

console.log(typeof myObject);

// Array types
var myArray = [
    'JavaScript',
    'php',
    'Ruby',
];
console.log(typeof myArray);



var a='1';
var b=1;
 console.log(a !==b );
 console.log(a ===b );

var a = 1;
var b = 2;
var result = a < b && a<0;
console.log(result)

var result2 = 'A' && 'B' && NaN && 'C';
console.log(result2);

if(result2) {
    console.log('điều kiện đúng')
} else {
    console.log(' điều kiện sai ')
}  
var result3 = null || false || undefined || 0; 
console.log(result3);
if(result3) {
    console.log('điều kiện đúng')
} else {
    console.log(' điều kiện sai ')
}  
*/
// đổi chuỗi thành số
number=10;
so=0;
let result4 = Number.parseInt('11'); // 0011=3
document.writeln(`<h1> result = ${result4} </h1>`);

// 

document.writeln(`<h1> number = ${number} </h1>`);
document.writeln(`<h1> so = ${so} </h1>`);

let numberOfStudent =100 // coding convension:  CAMEL

let number1=10;
let number2= "10"
if(number1==number2){
    let number3=3;
    alert('Đúng')
} else {
    alert("Sai")
}
console.log(number2) // lỗi

let numberStudent = -1
if(numberStudent){
    alert('Đúng')
}
else{
    alert('Sai')
}

let array = [,1,2,3,0,4,5,6,7,8,9]
for (let i= 0; i<array.length;i++) {
    if(array[i] === 0){
        document.writeln(`<h2> số 0 ở vị trí thứ ${i} trong mảng </h2>`)
        break;
    }
}
