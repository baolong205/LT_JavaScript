function soFibonacci(n) {
    var isFib = false;
    if (n === 0 || n === 1) {
        isFib = true;
    } else {
        var a = 0;
        var b = 1;
        var fib = a + b;
        while (fib <= n) {
            if (fib === n) {
                isFib = true;
                break;
            }
            a = b;
            b = fib;
            fib = a + b;
        }
    }

    if (isFib) {
        document.write(n + " là số Fibonacci");
    } else {
        document.write(n + " không phải là số Fibonacci");
    }
}

let n = prompt("Nhập một số tự nhiên: ");
n = parseInt(n);
if (!isNaN(n)) {
    soFibonacci(n);
} else {
    document.write("Vui lòng nhập một số hợp lệ.");
}
