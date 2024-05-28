//Chuyển đổi từ hệ cơ số bất kỳ sang hệ cơ số 10
function fromBaseToDecimal(number, base) {
    return parseInt(number, base);
}

// Ví dụ sử dụng:
let numberInBase2 = "1010";  // Hệ cơ số 2 (nhị phân)
let base2ToDecimal = fromBaseToDecimal(numberInBase2, 2);
document.write(`${numberInBase2} từ hệ cơ số 2 sang hệ cơ số 10 là ${base2ToDecimal}<br>`);

let numberInBase16 = "1A";  // Hệ cơ số 16 (thập lục phân)
let base16ToDecimal = fromBaseToDecimal(numberInBase16, 16);
document.write(`${numberInBase16} từ hệ cơ số 16 sang hệ cơ số 10 là ${base16ToDecimal}<br>`);
//Chuyển đổi từ hệ cơ số 10 sang hệ cơ số bất kỳ
function fromDecimalToBase(number, base) {
    return number.toString(base);
}

// Ví dụ sử dụng:
let decimalNumber = 10;
let decimalToBase2 = fromDecimalToBase(decimalNumber, 2);  // Chuyển sang hệ cơ số 2
document.write(`${decimalNumber} từ hệ cơ số 10 sang hệ cơ số 2 là ${decimalToBase2}<br>`);

decimalNumber = 26;
let decimalToBase16 = fromDecimalToBase(decimalNumber, 16);  // Chuyển sang hệ cơ số 16
document.write(`${decimalNumber} từ hệ cơ số 10 sang hệ cơ số 16 là ${decimalToBase16}<br>`);
