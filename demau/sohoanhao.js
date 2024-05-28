function soHoanHao(n) {
    var sum = 0;
    for (var i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    if (sum === n && n !== 0) {
        document.write(n + " là số hoàn hảo");
    } else {
        document.write(n + " không phải là số hoàn hảo");
    }
}

// Ví dụ sử dụng hàm với số cố định
soHoanHao(6);
