import { khoiTaoMenu } from "./sv_menu.js";
import { footerContent } from "../footer.js";
import { themModalXacNhan, themModal } from "../xacNhan.js";
const dsDeTai = [
  {
    maDeTai: 1,
    tenDeTai: "Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh",
    giangVienHD: "Trần Thị Kim Chi",
    moTa: "Việc chọn trường học là việc quan trọng trong tương lai cho hoc sinh. Website cung cấp cho học sinh dễ dàng, nhanh chóng chọn trường phù hợp nhất với nguyện vọng và năng lực của bản thân. Tạo CSDL lưu trữ thông tin ngành, điểm vào đại học của các trường những năm trước trên cả nước. Trên cơ sở đó, với kết quả học tập trong từng giai đoạn, Website sẽ cho ra kết quả tốt nhất.",
    kyNangCanCo: ` - Ngôn ngữ trên server: Tùy chọn (Ưu tiên: PHP, Java, Python,...)
              - CSDL: Tùy chọn (Ưu tiên: MySQL,..) - Lợi thế hơn khi có kiến
              thức về Machine Learning, Web Scraping`,
    tag: [
      { maTag: 1, tenTag: "Html", color: "red" },
      { maTag: 2, tenTag: "Css", color: "blue" },
      { maTag: 3, tenTag: "Javascript", color: "Yellow" },
      { maTag: 4, tenTag: "Phân tích yêu cầu", color: "green" },
    ],
  },
  {
    maDeTai: 2,
    tenDeTai: "Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh",
    giangVienHD: "Trần Thị Kim Chi",
    moTa: "Việc chọn trường học là việc quan trọng trong tương lai cho hoc sinh. Website cung cấp cho học sinh dễ dàng, nhanh chóng chọn trường phù hợp nhất với nguyện vọng và năng lực của bản thân. Tạo CSDL lưu trữ thông tin ngành, điểm vào đại học của các trường những năm trước trên cả nước. Trên cơ sở đó, với kết quả học tập trong từng giai đoạn, Website sẽ cho ra kết quả tốt nhất.",
    kyNangCanCo: ` - Ngôn ngữ trên server: Tùy chọn (Ưu tiên: PHP, Java, Python,...)
              - CSDL: Tùy chọn (Ưu tiên: MySQL,..) - Lợi thế hơn khi có kiến
              thức về Machine Learning, Web Scraping`,
    tag: [
      { maTag: 1, tenTag: "Html", color: "red" },
      { maTag: 2, tenTag: "Css", color: "blue" },
      { maTag: 3, tenTag: "Javascript", color: "Yellow" },
      { maTag: 4, tenTag: "Phân tích yêu cầu", color: "green" },
    ],
  },
  {
    maDeTai: 3,
    tenDeTai: "Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh",
    giangVienHD: "Trần Thị Kim Chi",
    moTa: "Việc chọn trường học là việc quan trọng trong tương lai cho hoc sinh. Website cung cấp cho học sinh dễ dàng, nhanh chóng chọn trường phù hợp nhất với nguyện vọng và năng lực của bản thân. Tạo CSDL lưu trữ thông tin ngành, điểm vào đại học của các trường những năm trước trên cả nước. Trên cơ sở đó, với kết quả học tập trong từng giai đoạn, Website sẽ cho ra kết quả tốt nhất.",
    kyNangCanCo: ` - Ngôn ngữ trên server: Tùy chọn (Ưu tiên: PHP, Java, Python,...)
              - CSDL: Tùy chọn (Ưu tiên: MySQL,..) - Lợi thế hơn khi có kiến
              thức về Machine Learning, Web Scraping`,
    tag: [
      { maTag: 1, tenTag: "Html", color: "red" },
      { maTag: 2, tenTag: "Css", color: "blue" },
      { maTag: 3, tenTag: "Javascript", color: "Yellow" },
      { maTag: 4, tenTag: "Phân tích yêu cầu", color: "green" },
    ],
  },
  {
    maDeTai: 4,
    tenDeTai: "Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh",
    giangVienHD: "Trần Thị Kim Chi",
    moTa: "Việc chọn trường học là việc quan trọng trong tương lai cho hoc sinh. Website cung cấp cho học sinh dễ dàng, nhanh chóng chọn trường phù hợp nhất với nguyện vọng và năng lực của bản thân. Tạo CSDL lưu trữ thông tin ngành, điểm vào đại học của các trường những năm trước trên cả nước. Trên cơ sở đó, với kết quả học tập trong từng giai đoạn, Website sẽ cho ra kết quả tốt nhất.",
    kyNangCanCo: ` - Ngôn ngữ trên server: Tùy chọn (Ưu tiên: PHP, Java, Python,...)
              - CSDL: Tùy chọn (Ưu tiên: MySQL,..) - Lợi thế hơn khi có kiến
              thức về Machine Learning, Web Scraping`,
    tag: [
      { maTag: 1, tenTag: "Html", color: "red" },
      { maTag: 2, tenTag: "Css", color: "blue" },
      { maTag: 3, tenTag: "Javascript", color: "Yellow" },
      { maTag: 4, tenTag: "Phân tích yêu cầu", color: "green" },
    ],
  },
];
function dsDeTaiNoiDung() {
  return `
      <div class="dsDeTai">
        <div class="tieuDe grid">
          <h3 class="heading heading--5 col-1">STT</h3>
          <h3 class="heading heading--5 col-1">Tên đề tài</h3>
          <h3 class="heading heading--5 col-1 text-center">Giảng viên HD</h3>
          <h3 class="heading heading--5 col-3 text-center">Mô tả</h3>
          <h3 class="heading heading--5 col-2 text-center">Kỹ năng cần có</h3>
          <h3 class="heading heading--5 col-2 text-center">Tag</h3>
          <h3 class="heading heading--5 col-2 text-center">biêu tượng</h3>
        </div>
        ${taoDSDeTai(dsDeTai)}
    </div>`;
}
function taoDSDeTai(dsDeTai) {
  let html = "<div class='noiDung'>";
  dsDeTai.forEach((noiDungDeTai, i) => {
    html += deTai(i + 1, noiDungDeTai);
  });
  html += "</div>";
  return html;
}
function deTai(stt, deTai) {
  return `<div class="noiDung--thongTin grid">
            <p class="text--body text--body_14 col-1">${stt}</p>
            <p class="text--body text--body_14 col-1">
              ${deTai.tenDeTai}
            </p>
            <p class="text--body text--body_14 col-1 text-center">
              ${deTai.giangVienHD}
            </p>
            <p class="text--body text--body_14 col-3">
              ${deTai.moTa}
            </p>
            <p class="text--body text--body_14 col-2">
              ${deTai.kyNangCanCo}
            </p>
            <div class="tags text--body text--body_14 col-2 text-center center">
              ${tags(deTai.tag)}
            </div>
            <div class="col-2 text-center">
              <button class="dangKy btn btn--primary" id = ${
                deTai.maDeTai
              }>Đăng ký</button>
            </div>
          </div>`;
}
function tags(tags) {
  let tagsHtml = "";
  tags.forEach((tag) => {
    tagsHtml += taoTag(tag);
  });
  return tagsHtml;
}
function taoTag(tag) {
  return `<div class="tag text--body text--body_14" style="background-color: ${tag.color} ;" >${tag.tenTag}</div>`;
}
function khoiTao() {
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  khoiTaoMenu();
  main.insertAdjacentHTML("beforeend", dsDeTaiNoiDung());
  container.insertAdjacentHTML("beforeend", footerContent());
  nhanNutDangKy();
  nhanNutTaoNhom();
}
function nhanNutDangKy() {
  const btns = document.querySelectorAll(".dangKy");
  const container = document.querySelector(".container");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const noiDung = "Bạn có chắc muốn đăng ký đề tài này";
      container.insertAdjacentHTML(
        "beforebegin",
        themModalXacNhan("Bạn có chắc muốn đăng ký đề tài này?", "primary")
      );
      dongXacNhan();
      dangKyDeTai(btn.id);
    });
  });
}
function nhanNutTaoNhom() {
  const btn = document.querySelector("#taoNhom");
  const container = document.querySelector(".container");
  btn.addEventListener("click", (e) => {
    container.insertAdjacentHTML(
      "beforebegin",
      themModal(noiDungModalTaoNhom())
    );
    dongXacNhan();
    taoNhom(btn.id);
  });
}
function dongXacNhan() {
  const close = document.querySelector("#dongModal");
  close.addEventListener("click", (e) => {
    e.preventDefault();
    close.closest(".layer").remove();
    console.log(close.closest(".layer"));
  });
}
function dangKyDeTai(maDeTai) {
  const dongY = document.querySelector("#xacNhan");
  dongY.addEventListener("click", (e) => {
    dongY.closest(".layer").remove();
  });
}
function taoNhom() {
  const dongY = document.querySelector("#xacNhan");
  dongY.addEventListener("click", async (e) => {
    e.preventDefault();
    const form = document.querySelector(".form");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    dongY.closest(".layer").remove();
  });
}
function noiDungModalTaoNhom() {
  return `<h1 class="heading heading--3">Thông tin tạo nhóm</h1>
      <form action="" class="form">
        <div class="inputFields">
          <div class="inputField">
            <label for="maSinhVien" class="heading heading--4"
              >Mã sinh viên</label
            >
            <input type="text" class="input input_nhap" name="maSinhVien" id="maSinhVien" />
          </div>
          <div class="inputField">
            <label for="maSinhVien" class="heading heading--4">Nội dung</label>
            <textarea
              type="text"
              class="input input_nhap"
              id="noiDung"
              name ="noiDung"
            ></textarea>
          </div>
        </div>
        <div class="buttons full">
          <button class="btn btn--secondary center" id="dongModal">Hủy</button>
          <button class="btn btn--primary center" id="xacNhan">Đồng ý</button>
        </div>
      </form>
      `;
}
khoiTao();
