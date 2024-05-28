// //sum: tên hàm
// //a,b: param - tham số của hàm
// //return trả về
// function sum(a,b){
//     return a+b
// }
// //02 - call function 
// // let: từ dùng để khai báo biến
// // tong: KDL: Số
// let tong = sum (6,1); // a=6 , b=1 // tong= 7
// //02 arrow finction 
// let sum2numbers = (a,b) => {
//     return a+b;
// }
// let tong2so = function(a,b){
//     return a+b;
// }
// let a= 6, b=1
// let result = sum2numbers(a,b)
// document.writeln(`<h1> Tổng của ${a} và ${b} là: ${result}<h1> `);
// // inline function
// let sumInline = (a,b) => a+b


// tính số mũ
function pow (coso, somu){
    let result =1;
    for(let i = 0 ; i< somu; i++){
        result *= coso
    }
     return result 
}
let recursionPow = (coso, somu)=>{
    if (somu === 0) {
        return 1
    }
    return coso*recursionPow(coso, somu-1);
}
let coso=2
let somu=4
document.writeln(`<h1>${coso} mũ ${somu} = ${pow (coso, somu)}</h1>`);
document.writeln(`<h1>(Đệ quy) ${coso} mũ ${somu} = ${recursionPow (coso, somu)}</h1>`);


// viết hàm kiểm tra số đối xứng
// viết hàm đảo số
function daoso(number){
    let array = []
    while(number>0) {
        array.push(number % 10)
        number = Math.floor(number/10)
    }// 321
    let so = array[0];
    for(let i = 1; i<array.length;i++){
        so = so*10+array 
    }
    return so
}

function ktrsodoixung(number){
    let array = []
    while(number>0) {
        array.push(number % 10)
        number = Math.floor(number/10)
    }// 12321

    for(let i = 1; i<length-1/2;i++){
        if(array [i] != array[array.length-1-i]){
            alert ('Không phải số đối xứng')
            return
        }
    }
    alert('Đây là số đối xứng')
}


// let result = daoso (12321)
// console.log(result)
ktrsodoixung(1232);

// viết hàm kiểm tra số hoàn hảo
function sohoanhao (number) {
    sum = 0;
    for(let i=0; i<=number/2;i++){
        if(number % i === 0) {
            sum +=i;
            alert('đây là số hoàn hảo')
            return
        }
    }

alert(`đây không phải là số hoàn hảo`)
}
sohoanhao(10)