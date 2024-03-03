import { khoiTaoMenu } from "./gv_menu.js";
const dsDoAn = [
  {
    maDoAn: 1,
    tenDeTai: "Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh ",
    giangVienHD: "Trần Thị Kim Chi",
    giangVienPhanBien1: "Nguyễn Văn A",
    giangVienPhanBien2: "Nguyễn Văn A",
    sinhvien: [
      {
        maSinhVien: "20113401",
        tenSinhVien: "Nguyễn Tuấn Kiệt",
        diemPhanBien1: null,
        diemPhanBien2: "10",
      },
      {
        maSinhVien: "20113401",
        tenSinhVien: "Nguyễn Tuấn Kiệt",
        diemPhanBien1: null,
        diemPhanBien2: "10",
      },
    ],
  },
  {
    maDoAn: 2,
    tenDeTai: "Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh ",
    giangVienHD: "Võ Ngọc Tân Phước",
    giangVienPhanBien1: "Nguyễn Văn A",
    giangVienPhanBien2: "Nguyễn Văn A",
    sinhvien: [
      {
        maSinhVien: "20113401",
        tenSinhVien: "Nguyễn Tuấn Kiệt",
        diemPhanBien1: "10",
        diemPhanBien2: null,
      },
      {
        maSinhVien: "20113401",
        tenSinhVien: "Nguyễn Tuấn Kiệt",
        diemPhanBien1: "10",
        diemPhanBien2: null,
      },
    ],
  },
];
function taoDsDoAn() {
  const dsSinhVien = document.querySelector(".dsSinhVien");
  const divDsDoAn = dsDoAn.map((doAn) => truotXuong(doAn)).join("");
  dsSinhVien.insertAdjacentHTML("beforeend", divDsDoAn);
}
function truotXuong(doAn, active = false) {
  console.log(doAn);
  return ` <div class="truotXuong ${active ? "active" : ""}">
      <div class="truotXuong--tieuDe">
        <h3 class="heading heading--4">
          ${doAn.tenDeTai} - GV.${doAn.giangVienHD}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="truotXuong--icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div class="truotXuong--noiDung">
        <div class="truotXuong_nho">
            <div class="truotXuong_nho--tieuDe">
                <h3 class="heading heading--4">
                    Đồ án 1
                </h3>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="truotXuong--icon"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
                </svg>
            </div>
            <div class="truotXuong_nho--noiDung">
                <div class="tieuDe grid">
                    <h3 class="heading heading--5 col-1">STT</h3>
                    <h3 class="heading heading--5 col-2 text-center">Mã số sinh viên</h3>
                    <h3 class="heading heading--5 col-3 text-center">Họ tên</h3>
                    <h3 class="heading heading--5 col-3 text-center">Điểm phản biện 1</h3>
                    <h3 class="heading heading--5 col-3 text-center">Điểm phản biện 2</h3>
                </div>
                <div class="noiDungs">
                  ${themThongTinSinhViens(doAn.sinhvien)}
                </div>
          </div>
        </div>
      </div>
    </div>`;
}
function themThongTinSinhViens(sinhViens) {
  console.log(sinhViens);
  return sinhViens.map((sv, i) => themThongTinSinhVien(i, sv)).join("");
}
function themThongTinSinhVien(stt, sinhVien) {
  return `<div class="noiDung--thongTin grid">
                    <div class="heading heading--5 col-1">${stt}</div>
                    <div class="heading heading--5 col-2 text-center">${
                      sinhVien.maSinhVien
                    }</div>
                    <div class="heading heading--5 col-3 text-center">${
                      sinhVien.tenSinhVien
                    }</div>
                    <div class="heading heading--5 col-3 text-center">${
                      sinhVien.diemPhanBien1 == null
                        ? `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="icon"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                    </svg>`
                        : `${sinhVien.diemPhanBien1}`
                    } </div>
                    <div class="heading heading--5 col-3 text-center">${
                      sinhVien.diemPhanBien2 == null
                        ? `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="icon"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                    </svg>`
                        : `${sinhVien.diemPhanBien2}`
                    }</div>
                </div>`;
}
function khoiTao() {
  khoiTaoMenu();
  taoDsDoAn();
  showNoiDung();
  showNoiDungNho();
}
function showNoiDung() {
  const tieuDes = document.querySelectorAll(".truotXuong--tieuDe");
  tieuDes.forEach((tieuDe) => {
    tieuDe.addEventListener("click", (e) => {
      e.target.closest(".truotXuong").classList.toggle("active");
    });
  });
}
function showNoiDungNho() {
  const tieuDeNhos = document.querySelectorAll(".truotXuong_nho--tieuDe");
  tieuDeNhos.forEach((nho) => {
    nho.addEventListener("click", (e) => {
      e.target.closest(".truotXuong_nho").classList.toggle("active");
    });
  });
}
khoiTao();
