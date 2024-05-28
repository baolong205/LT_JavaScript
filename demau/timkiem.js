//1. Tìm kiếm tuần tự
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Trả về chỉ số của phần tử nếu tìm thấy
        }
    }
    return -1; // Trả về -1 nếu không tìm thấy
}

// Sử dụng
const arr = [4, 7, 2, 8, 5];
console.log(linearSearch(arr, 8)); // Output: 3
console.log(linearSearch(arr, 3)); // Output: -1 (không tìm thấy)
//2. tìm kiếm nhị phân
//Yêu cầu mảng đã được sắp xếp tăng dần
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Trả về chỉ số của phần tử nếu tìm thấy
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Trả về -1 nếu không tìm thấy
}

// Sử dụng
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log(binarySearch(arr, 23)); // Output: 5
console.log(binarySearch(arr, 20)); // Output: -1 (không tìm thấy)


