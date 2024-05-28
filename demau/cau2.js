let danhSachSinhVien = [
    {
        maSV: "SV001",
        tenSV: "Nguyen Van A",
        diemToan: 8.5,
        diemVan: 7.0,
    },
    {
        maSV: "SV002",
        tenSV: "Tran Thi B",
        diemToan: 7.0,
        diemVan: 8.0,
    },
    {
        maSV: "SV003",
        tenSV: "Le Van C",
        diemToan: 9.0,
        diemVan: 9.5,
    }
];

class SinhVien{
    constructor(maSV,tenSV,diemToan,diemVan){
        this.maSV=maSV;
        this.tenSV=tenSV;
        this.diemToan=diemToan;
        this.diemVan=diemVan;
    }

    tinhDiemtrungbinh(){
        const DiemTB = (this.diemToan+this.diemVan)/2
        return DiemTB
    }
}
const sv1 = new SinhVien('SV001','Nguyen Van A',9.5,8.4)
console.log(sv1.tinhDiemtrungbinh())
function TimDiemVanThap(){
    let SinhVienThapNhat=danhSachSinhVien[0]
    for(const sv of danhSachSinhVien){
        if(sv.diemVan<SinhVienThapNhat.diemVan){
            SinhVienThapNhat=sv
        }
    }
    return SinhVienThapNhat
}

function TimDiemVanCao(){
    let SinhVienCaoNhat=danhSachSinhVien[0]
    for(const sv of danhSachSinhVien){
        if(sv.diemVan>SinhVienCaoNhat.diemVan){
            SinhVienCaoNhat=sv
        }
    }
    return SinhVienCaoNhat
}
const SinhVienCaoNhat = TimDiemVanCao(danhSachSinhVien)
console.log(" sinh viên có điểm văn cao: ")


console.log(SinhVienCaoNhat)
console.log(" sinh viên có điểm văn thấp: ")
var SinhVienThapNhat = TimDiemVanThap(danhSachSinhVien)
console.log(SinhVienThapNhat)


function timSinhVienToanTren6(danhSachSinhVien) {
    return danhSachSinhVien.filter(sv => sv.diemToan > 6.0);
}

const svToanTren6 = timSinhVienToanTren6(danhSachSinhVien);

// Hiển thị danh sách sinh viên có điểm Toán trên 6.0
console.log("Danh sách sinh viên có điểm Toán trên 6.0:");
svToanTren6.forEach(sv => console.log(sv.tenSV));