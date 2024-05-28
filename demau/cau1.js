function sum(n) {
    let tong = 0;
    for (let i = 0; i<=n; i++){
        if(i%7 ===0 ) {
            tong +=i;
        }
    }
    return tong;
}
let n = 21
console.log(sum(n))