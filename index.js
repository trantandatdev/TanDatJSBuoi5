// BAI TAP 1: Quản lý tuyển sinh
function tinhDiemKhuVuc(khuvuc) {
    if (khuvuc == "A") {
        return 2;
    } else if (khuvuc == "B") {
        return 1;
    } else if (khuvuc == "C") {
        return 0.5;
    } else {
        return 0;
    }
}

function tinhDiemDoiTuong(doituong) {
    if (doituong == "1") {
        return 2.5;
    } else if (doituong == "2") {
        return 1.5;
    } else if (doituong == "3") {
        return 1;
    } else {
        return 0;
    }
}

function tongDiem() {
    var diemChuan = document.getElementById('diemChuan').value*1;
    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = document.getElementById('doiTuong').value;
    var diem1 = document.getElementById('diem1').value*1;
    var diem2 = document.getElementById('diem2').value*1;
    var diem3 = document.getElementById('diem3').value*1;
    var diemKV = tinhDiemKhuVuc(khuVuc);
    var diemDT = tinhDiemDoiTuong(doiTuong);
    var tongDiem = diem1+diem2+diem3+diemKV+diemDT;
    if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        document.getElementById('ketQuaBai1').innerHTML=`Ban da rot. Do co mon 0 diem`;
    } else if (tongDiem<diemChuan) {
        document.getElementById('ketQuaBai1').innerHTML=`Ban da rot. Tong Diem: ${tongDiem}`;
    } else {
        document.getElementById('ketQuaBai1').innerHTML=`Ban da dau. Tong Diem: ${tongDiem}`;
    }
}



// BAI TAP 2:Tính tiền điện
function tinhTienDien() {
    var hoTen = document.getElementById('hoTen').value;
    var KWDien = document.getElementById('KWDien').value*1;
    var tongTien = 0;

    if (KWDien<=50) {
        tongTien = KWDien * 500;
    } else if(50<KWDien && KWDien<=100) {
        tongTien = 50 * 500 + (KWDien-50)*650;
    } else if(100<KWDien && KWDien<=200) {
        tongTien = 50*500 + 50*650 + (KWDien-100)*850;
    } else if(200<KWDien && KWDien<=350) {
        tongTien = 50*500 + 50*650 + 100*850 + (KWDien-200)*1100;
    } else {
        tongTien = 50*500 + 50*650 + 100*850 + 150*1100 + (KWDien-350)*1300;
    }
    document.getElementById('ketQuaBai2').innerHTML = `Họ tên: ${hoTen} Tong tien: ${tongTien.toLocaleString()} VND`
}
// BAI TAP 3: Tính thuế thu nhập cá nhân
function tinhThue() {
    var hoVaTen = document.getElementById('hoTen3').value;
    var tongThuNhapNam = document.getElementById('tongThuNhapNam').value*1;
    var soNguoi = document.getElementById('soNguoi').value*1;
    var thuNhapCT = tongThuNhapNam - 4000000 - soNguoi* 1600000;
    var tienThue = 0;
    if (thuNhapCT<= 60e6) {
        tienThue = thuNhapCT*0.05
    } else if (thuNhapCT<= 120e6) {
        tienThue = thuNhapCT*0.1
    } else if (thuNhapCT<= 210e6) {
        tienThue = thuNhapCT*0.15
    } else if (thuNhapCT<= 384e6) {
        tienThue = thuNhapCT*0.2
    } else if (thuNhapCT<= 624e6) {
        tienThue = thuNhapCT*0.25
    } else if (thuNhapCT<= 960e6) {
        tienThue = thuNhapCT*0.3
    } else {
        tienThue = thuNhapCT*0.35
    }
    document.getElementById('ketQuaBai3').innerHTML=`Ho ten: ${hoVaTen} <br> Tien thue thu nhap ca nhan: ${new Intl.NumberFormat(
        "de-DE",
        { style: "currency", currency: "VND" }
    ).format(tienThue)}`;
}

// BAI TAP 4: Tính tiền cáp
function showSelectedOption() {
    var selectElement = document.getElementById("KH").value;

    var anSoketnoi = document.getElementById("doanhnghiep-ketnoi");
    anSoketnoi.style.display = "none";

    var hienSoketnoi = document.getElementById(selectElement + "-ketnoi");

    if (hienSoketnoi) {
    hienSoketnoi.style.display = "block";
    }
}

function tinhPhidichvucoban(ketnoi) {
    var giaTien;
    if (ketnoi > "0" && ketnoi <= "10") {
    giaTien = 75;
    } else {
      var inputKetnoi = document.getElementById("soketnoi").value * 1;
      giaTien = 75 + (inputKetnoi - 10) * 5;
    }
    return giaTien;
}
function ketquaTiencap() {
    var inputKH = document.getElementById("KH").value;
    var inputKetnoi = document.getElementById("soketnoi").value * 1;
    var inputMaKH = document.getElementById("maKH").value;
    var inputKenhCC = document.getElementById("kenhCC").value * 1;
    var giaKetnoi = tinhPhidichvucoban(inputKetnoi);

    var tienCapDan = 25 + 7.5 * inputKenhCC;
    var tienCapdoanhnghiep = 15 + giaKetnoi + 50 * inputKenhCC;

    var tiencap;
    if (inputKH == "") {
    alert("Hay chon loai khach hang");
    } else if (inputKH == "nhadan") {
    tiencap = tienCapDan;
    } else {
    tiencap = tienCapdoanhnghiep;
    }
    document.getElementById(
    "result_tiencap"
    ).innerHTML = `Ma KH: ${inputMaKH} <br> Tien cap: ${new Intl.NumberFormat(
    "de-DE",
    { style: "currency", currency: "USD" }
    ).format(tiencap)}`;
}