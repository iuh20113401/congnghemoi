import { khoiTaoMenu } from "./sv_menu.js";
import { footerContent } from "../footer.js";
import { themModal, themModalXacNhan } from "../xacNhan.js";
const TTDA = {
  maDoAn: 1,
  tenDeTai: "Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh",
  giangVienHD: "Trần Thị Kim Chi",
  moTa: "Việc chọn trường học là việc quan trọng trong tương lai cho hoc sinh. Website cung cấp cho học sinh dễ dàng, nhanh chóng chọn trường phù hợp nhất với nguyện vọng và năng lực của bản thân. Tạo CSDL lưu trữ thông tin ngành, điểm vào đại học của các trường những năm trước trên cả nước. Trên cơ sở đó, với kết quả học tập trong từng giai đoạn, Website sẽ cho ra kết quả tốt nhất.</textarea",
  kyNangCanCo: `- Ngôn ngữ trên server: Tùy chọn (Ưu tiên: PHP, Java, Python,...) 
            - CSDL: Tùy chọn (Ưu tiên: MySQL,..) 
            - Lợi thế hơn khi có kiến thức về Machine Learning, Web Scraping"`,
  ketQuaCanDat: "Miễn có cái web chạy được là được",
  tag: [
    { maTag: 1, tenTag: "HTML", color: "green" },
    { maTag: 2, tenTag: "CSS", color: "green" },
    { maTag: 3, tenTag: "Javascript", color: "green" },
    { maTag: 4, tenTag: "Phân tích thiết kế", color: "green" },
  ],
  huongDan: [
    { maHuongDan: 1, noiDung: "Hướng dẫn 1" },
    { maHuongDan: 2, noiDung: "Hướng dẫn 1" },
    { maHuongDan: 3, noiDung: "Hướng dẫn 1" },
    { maHuongDan: 4, noiDung: "Hướng dẫn 1" },
  ],
};
function khoiTao() {
  const container = document.querySelector(".container");
  khoiTaoMenu();
  container.insertAdjacentHTML("beforeend", footerContent());
  themNoiDungDoAn();
  huyDangKyDeTai();
}
function themNoiDungDoAn() {
  const main = document.querySelector(".main");
  main.insertAdjacentHTML("beforeend", noiDungDoAn());
  khoiTaoProgress();
}
function noiDungDoAn() {
  return ` <div class="content">
          <div class="content--right">
            ${noiDunBenRight()}
          </div>
          <div class="content--left fileBaoCao">
            <h4 class="fileBaoCao--tieuDe center heading heading--4">
              File báo cáo
            </h4>
          </div>
        </div>`;
}
function noiDunBenRight() {
  return `<div class="content--thongTins inputFields">
              <div class="content--thongTin inputField">
                <label for="maDoAn" class="text--label text--label_16_bold"
                  >Mã đồ án</label
                >
                <input
                  type="text"
                  class="input disabled"
                  value="${TTDA.maDoAn}"
                  id="maDoAn"
                  name="maDoAn"
                  disabled
                />
              </div>
              <div class="content--thongTin inputField">
                <label for="tenDeTai" class="text--label text--label_16_bold"
                  >Tên đề tài</label
                >
                <input
                  type="text"
                  class="input disabled"
                  value="${TTDA.tenDeTai}"
                  id="tenDeTai"
                  name="tenDeTai"
                  disabled
                />
              </div>
              <div class="content--thongTin inputField">
                <label for="giangVienHD" class="text--label text--label_16_bold"
                  >Giảng viên hướng dẫn</label
                >
                <input
                  type="text"
                  class="input disabled"
                  value="${TTDA.giangVienHD}"
                  id="giangVienHD"
                  name="giangVienHD"
                  disabled
                />
              </div>
              <div class="content--thongTin inputField">
                <label for="moTa" class="text--label text--label_16_bold"
                  >Mô tả</label
                >
                <textarea
                  type="text"
                  class="input disabled text--body text--body_16"
                  cols="10"
                  rows="5"
                  id="moTa"
                  name="moTa"
                  disabled
                >
                ${TTDA.moTa}</textarea
                >
              </div>
              <div class="content--thongTin inputField">
                <label
                  for="ketQuaCanDat"
                  class="text--label text--label_16_bold"
                  >Kết quả cần đạt</label
                >
                <input
                  type="text"
                  class="input disabled"
                  value="${TTDA.ketQuaCanDat}"
                  id="ketQuaCanDat"
                  name="ketQuaCanDat"
                  disabled
                />
              </div>
              <div class="content--thongTin inputField">
                <label for="kyNangCanCo" class="text--label text--label_16_bold"
                  >Kỹ năng cần có</label
                >
                <textarea
                  type="text"
                  class="input disabled text--body text--body_16"
                  id="kyNangCanCo"
                  name="kyNangCanCo"
                  rows="3"
                  disabled
                >
           ${TTDA.kyNangCanCo}
            </textarea
                >
              </div>
              <div class="content--thongTin inputField">
                <label for="tag" class="text--label text--label_16_bold"
                  >Tag</label
                >
                
              <div class="input disabled tags text--body text--body_14">
                ${taoTags(TTDA.tag)}
              </div>
              </div>
            </div>
            <div class="huongDan">
              <h3 class="huongDan--tieuDe heading heading--3">Hướng dẫn</h3>
              ${huongDan()}
            </div>
            <div class="comment">
              <input
                type="text"
                class="input input_large"
                placeholder="Comment"
              />
            </div>`;
}
function huongDan() {
  return `<div class="inputFields">
                <div class="progress">
                  <div class="progress-bar" id="myProgressBar"></div>
                  <div class="progress-text" id="progressText">10%</div>
                </div>
                ${noiDungHuongDans(TTDA.huongDan)}
              </div>`;
}
function noiDungHuongDans(noiDungs) {
  let html = noiDungs.map((noiDung) => noiDungHuongDan(noiDung)).join("");
  return html;
}
function noiDungHuongDan(noiDung) {
  return `<div class="inputField">
                  <input type="checkbox" class="checkbox" id="checkbox${noiDung.maHuongDan}" name="checkbox"  />
                  <label
                    for="checkbox${noiDung.maHuongDan}"
                    class="huongDan--noiDung text--label text--label_16"
                    >${noiDung.noiDung}</label
                  >
                </div>`;
}
function taoTags(tags) {
  let tagsHtml = "";
  tags.forEach((tag) => {
    tagsHtml += taoTag(tag);
  });
  return tagsHtml;
}
function taoTag(tag) {
  return `<div class="tag text--body text--body_14" style="background-color: ${tag.color} ;" >${tag.tenTag}</div>`;
}
function khoiTaoProgress() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  toMauProgressBar(checkboxes);
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      toMauProgressBar(checkboxes);
    });
  });
}
function toMauProgressBar(checkboxes) {
  const progressBar = document.getElementById("myProgressBar");
  const progressText = document.getElementById("progressText");
  const totalCheckboxes = checkboxes.length;
  const checkedCheckboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;
  const progressPercentage = Math.floor(
    (checkedCheckboxes / totalCheckboxes) * 100
  );
  progressBar.style.width = progressPercentage + "%";
  progressText.textContent = progressPercentage + "%";
}
function huyDangKyDeTai() {
  const container = document.querySelector(".container");
  const btn = document.querySelector("#huyDangKy");
  btn.addEventListener("click", (e) => {
    const noiDung = "Bạn có chắc muốn hủy đăng ký đề tài này?";
    container.insertAdjacentHTML(
      "beforebegin",
      themModalXacNhan(noiDung, "third")
    );
    dongXacNhan();
  });
}
function dongXacNhan() {
  const close = document.querySelector("#dongModal");
  close.addEventListener("click", (e) => {
    close.closest(".layer").remove();
    console.log(close.closest(".layer"));
  });
}
khoiTao();
