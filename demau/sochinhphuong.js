function sochinhphuong(n){
    
    let scp = 0;

    //Tìm số bất kỳ nhỏ hơn hoặc bằng n mà bình phương bằng n
    let i = 0;
    while(i <= n){
        if( Math.pow( i, 2) == n ) {   
            scp = 1;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return scp;
}

let n= prompt(" nhap mot so tu nhien: ");
    


if (isNaN(n) || n < 0) {
    document.write("Vui lòng nhập một số tự nhiên hợp lệ.");
} else {
    let check = sochinhphuong(n);
    if (check == 1) document.write(n + " là số chính phương");
    else document.write(n + " không phải là số chính phương");
}