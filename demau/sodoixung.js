function soDoiXung(n) {
    var original = n.toString();
    var reversed = original.split('').reverse().join('');
    
    if (original === reversed) {
        document.write(n + " là số đối xứng");
    } else {
        document.write(n + " không phải là số đối xứng");
    }
}

// Ví dụ sử dụng hàm với số cố định
soDoiXung(121);  // 121 là số đối xứng
document.write("<br>");
soDoiXung(123);  // 123 không phải là số đối xứng
