const fakeTK = [
  {
    maTaiKhoan: "20113401",
    matKhau: "sinhvien123",
    vaiTro: 1,
  },
  {
    maTaiKhoan: "20113402",
    matKhau: "giangvien123",
    vaiTro: 2,
  },
];

function nhapTaiKhoan() {
  const tk = document.querySelector("#maTaiKhoan");
  tk.addEventListener("input", (e) => {
    if (tk.value.length > 0 && !kiemTraHopLeTaiKhoan(tk.value)) {
      tk.classList.add("invalid");
    } else {
      tk.classList.remove("invalid");
    }
  });
}
function kiemTraHopLeTaiKhoan(tk) {
  //   start to end it contain 8 to 10 digit
  const pattern = /^\d{8,10}$/;
  return pattern.test(tk);
}
function nhapMatKhau() {
  const mk = document.querySelector("#matKhau");
  mk.addEventListener("input", (e) => {
    if (mk.value.length > 0 && !kiemTraHopLeMatKhau(mk.value)) {
      mk.classList.add("invalid");
    } else {
      mk.classList.remove("invalid");
    }
  });
}
function kiemTraHopLeMatKhau(mk) {
  const pattern = /[A-z0-9]{8,}/i;
  return pattern.test(mk);
}
function bamNutDangNhap() {
  const btnDangNhap = document.querySelector("#dangNhap");
  btnDangNhap.addEventListener("click", (e) => {
    e.preventDefault();
    const taikhoan = kiemTraThongTin();
    console.log(taikhoan);
    if (!taikhoan) {
      document.querySelector(".error").innerHTML = textError();
      document.querySelector(".error").classList.remove("hidden");
    } else {
      document.querySelector(".error").classList.add("hidden");
      chuyenTrangChu(taikhoan);
    }
  });
}

function textError() {
  return `<div class="error">
            <p class="heading heading--5 text--error">
              Sai tài khoản hoặc mật khẩu
            </p>
          </div>`;
}
function kiemTraThongTin() {
  const taikhoan = document.querySelector("#maTaiKhoan")?.value;
  const matKhau = document.querySelector("#matKhau")?.value;
  const isTk = fakeTK.filter(
    (tk) => tk.maTaiKhoan == taikhoan && tk.matKhau == matKhau
  );
  return isTk.length ? isTk[0] : false;
}
function chuyenTrangChu(taikhoan) {
  console.log(taikhoan.vaiTro);
  if (taikhoan.vaiTro == 1) {
    window.location.replace("./pages/sinhvien/sv_trangChu.html");
  } else {
    window.location.replace("./pages/giangVien/gv_trangChu.html");
  }
}
function khoiTao() {
  nhapTaiKhoan();
  nhapMatKhau();
  bamNutDangNhap();
}
khoiTao();
