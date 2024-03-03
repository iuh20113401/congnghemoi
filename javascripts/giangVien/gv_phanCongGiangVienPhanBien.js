import { khoiTaoMenu } from "./gv_menu.js";
const dsDoAn = [
  {
    tenDeTai: "Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh ",
    giangVienHD: "Trần Thị Kim Chi",
    moTa: "Việc chọn trường học là việc quan trọng trong tương lai cho hoc sinh. Website cung cấp cho học sinh dễ dàng, nhanh chóng chọn trường phù hợp nhất với nguyện vọng và năng lực của bản thân. Tạo CSDL lưu trữ thông tin ngành, điểm vào đại học của các trường những năm trước trên cả nước. Trên cơ sở đó, với kết quả học tập trong từng giai đoạn, Website sẽ cho ra kết quả tốt nhất.",
    kyNangCanCo:
      "  - Ngôn ngữ trên server: Tùy chọn (Ưu tiên: PHP, Java, Python,...) - CSDL: Tùy chọn (Ưu tiên: MySQL,..) - Lợi thế hơn khi có kiến thức về Machine Learning, Web Scraping",
    ketQuaCanDat: "Miễn có cái web sai được là được",
    tag: [
      { maTag: 1, tenTag: "html" },
      { maTag: 2, tenTag: "Css" },
      { maTag: 3, tenTag: "Javascript" },
      { maTag: 4, tenTag: "Phân tích thiết kế" },
    ],
    doAn: [
      {
        maDoAn: 252,
        sinhvien: [
          {
            maSinhVien: "20113401",
            tenSinhVien: "Nguyễn Tuấn Kiệt",
            diemGiuaKy: "10",
            diemCuoiKy: "10",
          },
          {
            maSinhVien: "20113401",
            tenSinhVien: "Nguyễn Tuấn Kiệt",
            diemGiuaKy: "10",
            diemCuoiKy: "10",
          },
        ],
      },
      {
        maDoAn: 253,
        sinhvien: [
          {
            maSinhVien: "20113401",
            tenSinhVien: "Nguyễn Tuấn Kiệt",
            diemGiuaKy: "10",
            diemCuoiKy: "10",
          },
          {
            maSinhVien: "20113401",
            tenSinhVien: "Nguyễn Tuấn Kiệt",
            diemGiuaKy: "10",
            diemCuoiKy: "10",
          },
        ],
      },
    ],
  },
  {
    tenDeTai: "Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh ",
    giangVienHD: "Trần Thị Kim Chi",
    moTa: "Việc chọn trường học là việc quan trọng trong tương lai cho hoc sinh. Website cung cấp cho học sinh dễ dàng, nhanh chóng chọn trường phù hợp nhất với nguyện vọng và năng lực của bản thân. Tạo CSDL lưu trữ thông tin ngành, điểm vào đại học của các trường những năm trước trên cả nước. Trên cơ sở đó, với kết quả học tập trong từng giai đoạn, Website sẽ cho ra kết quả tốt nhất.",
    kyNangCanCo:
      "  - Ngôn ngữ trên server: Tùy chọn (Ưu tiên: PHP, Java, Python,...) - CSDL: Tùy chọn (Ưu tiên: MySQL,..) - Lợi thế hơn khi có kiến thức về Machine Learning, Web Scraping",
    ketQuaCanDat: "Miễn có cái web sai được là được",
    tag: [
      { maTag: 1, tenTag: "html" },
      { maTag: 2, tenTag: "Css" },
      { maTag: 3, tenTag: "Javascript" },
      { maTag: 4, tenTag: "Phân tích thiết kế" },
    ],
    doAn: [
      {
        maDoAn: 252,
        sinhvien: [
          {
            maSinhVien: "20113401",
            tenSinhVien: "Nguyễn Tuấn Kiệt",
            diemGiuaKy: "10",
            diemCuoiKy: "10",
          },
          {
            maSinhVien: "20113401",
            tenSinhVien: "Nguyễn Tuấn Kiệt",
            diemGiuaKy: "10",
            diemCuoiKy: "10",
          },
        ],
      },
      {
        maDoAn: 253,
        sinhvien: [
          {
            maSinhVien: "20113401",
            tenSinhVien: "Nguyễn Tuấn Kiệt",
            diemGiuaKy: "10",
            diemCuoiKy: "10",
          },
          {
            maSinhVien: "20113401",
            tenSinhVien: "Nguyễn Tuấn Kiệt",
            diemGiuaKy: "10",
            diemCuoiKy: "10",
          },
        ],
      },
    ],
  },
];
function themDoAn(doAn, active = false) {
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
      <div class="tieuDe grid">
          <h3 class="heading heading--5 col-4 text-center">Mô tả </h3>
          <h3 class="heading heading--5 col-2 text-center">Kết quả cần đạt</h3>
          <h3 class="heading heading--5 col-3 text-center">Kỹ năng cần có</h3>
          <h3 class="heading heading--5 col-3 text-center">Tag</h3>
        </div>
        <div class="noiDung">
          <div class="noiDung--thongTin grid">
            <h3 class="heading heading--5 col-4">${doAn.moTa}
            </h3>
            <div class="heading heading--5 col-2 ">${doAn.ketQuaCanDat}</div>
            <div class="heading heading--5 col-3 ">
               ${doAn.kyNangCanCo}
            </div>
            <div class="heading heading--5 col-3 text-center tags">
            <div class="tag text--body text--body_14">HTML</div>
              <div class="tag text--body text--body_14">Phân tích dữ liệu</div>
              <div class="tag text--body text--body_14">CSS</div>
              <div class="tag text--body text--body_14">Javascript</div></div>
          </div>
        </div>
        ${truotXuongNoiDungDoAns(doAn.doAn)}
      </div>
    </div>`;
}
function truotXuongNoiDungDoAns(dsDoAn) {
  return dsDoAn.map((doAn) => truotXuongNoiDungDoAn(doAn)).join("");
}
function truotXuongNoiDungDoAn(doAn) {
  let html = `<div class="truotXuong_nho">
            <div class="truotXuong_nho--tieuDe">
                <h3 class="heading heading--4">
                    ${doAn.maDoAn}
                </h3>
                <button class ="btn btn--primary m-0">Phân công giảng viên phản biện</button>
            </div>`;
  html += truotXuongNoiDungSinhVien(doAn.sinhvien);
  html += `</div>`;
  return html;
}
function truotXuongNoiDungSinhVien(dsSinhVien) {
  return ` 
  
  
  <div class="truotXuong_nho--noiDung">
  <div class="tieuDe grid">
          <h3 class="heading heading--5 col-1 text-center">STT </h3>
          <h3 class="heading heading--5 col-2 text-center">Mã số sinh viên</h3>
          <h3 class="heading heading--5 col-3 text-center">Họ tên sinh viên</h3>
          <h3 class="heading heading--5 col-3 text-center">Điểm giữa kỳ</h3>
          <h3 class="heading heading--5 col-3 text-center">Điểm cuối kỳ</h3>
          </div>
          ${dsSinhVien.map((sv, i) => sinhVien(i + 1, sv)).join("")}
          </div>
        `;
}
function sinhVien(stt, sinhVien) {
  let html = `<div class="noiDungs">
              <div class="noiDung--thongTin grid">
                    <h3 class="heading heading--5 col-1">${stt}</h3>
                    <h3 class="heading heading--5 col-2 text-center">${sinhVien.maSinhVien}</h3>
                    <h3 class="heading heading--5 col-3 text-center">
                    ${sinhVien.tenSinhVien}
                    </h3>
                    <h3 class="heading heading--5 col-3 text-center">${sinhVien.diemGiuaKy}</h3>
                    <h3 class="heading heading--5 col-3 text-center">${sinhVien.diemCuoiKy}</h3>
                </div>
                </div>
            `;
  return html;
}
function themDsDoAn() {
  const dsSinhVien = document.querySelector(".dsSinhVien");
  const divDsDoAn = dsDoAn.map((doAn) => themDoAn(doAn));
  dsSinhVien.insertAdjacentHTML("beforeend", divDsDoAn);
}
function khoiTao() {
  khoiTaoMenu();
  themDsDoAn();
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
