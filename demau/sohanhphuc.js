function soHanhPhuc(n) {
    function getSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let slow = n;
    let fast = getSumOfSquares(n);

    while (fast !== 1 && slow !== fast) {
        slow = getSumOfSquares(slow);
        fast = getSumOfSquares(getSumOfSquares(fast));
    }

    if (fast === 1) {
        document.write(n + " là số hạnh phúc");
    } else {
        document.write(n + " không phải là số hạnh phúc");
    }
}

// Ví dụ sử dụng hàm với số cố định
soHanhPhuc(19);  // 19 là số hạnh phúc
soHanhPhuc(20); // 20 không phải là số hạnh phúc
