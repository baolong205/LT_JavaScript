function songuyento(n){
    var snt = true;
    if (n < 2) {
        snt = false;
    } else {
        for(var i = 2; i <= Math.sqrt(n); i++){
            if(n % i == 0){
                snt = false;
                break;
            }
        }
    }

    if (snt == true){
        document.write(n + " là số nguyên tố ");
    } else {
        document.write(n + " không phải là số nguyên tố ");
    }
}

let n = prompt("Nhập một số tự nhiên: ");
n = parseInt(n);
if (!isNaN(n)) {
    songuyento(n);
} else {
    document.write("Vui lòng nhập một số hợp lệ.");
}
