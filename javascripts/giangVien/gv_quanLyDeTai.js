import { khoiTaoMenu } from "./gv_menu.js";
import { themModalXacNhan } from "../xacNhan.js";
import { nhanNut } from "../helper.js";
const fakeDSDeTai = [
  {
    maDeTai: "2332",
    tenDeTai: "Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh",
    moTa: "Việc chọn trường học là việc quan trọng trong tương lai cho hoc sinh. Website cung cấp cho học sinh dễ dàng, nhanh chóng chọn trường phù hợp nhất với nguyện vọng và năng lực của bản thân. Tạo CSDL lưu trữ thông tin ngành, điểm vào đại học của các trường những năm trước trên cả nước. Trên cơ sở đó, với kết quả học tập trong từng giai đoạn, Website sẽ cho ra kết quả tốt nhất.",
    kyNangCanCo: `- Ngôn ngữ trên server: Tùy chọn (Ưu tiên: PHP, Java, Python,...)
    - CSDL: Tùy chọn (Ưu tiên: MySQL,..) 
    - Lợi thế hơn khi có kiến thức về Machine Learning, Web Scraping`,
    ketQuaCanDat: "Muốn làm gì làm miễn có cái web là được",
    tags: [
      { maTag: 1, tenTag: "HTML", color: "red" },
      { maTag: 2, tenTag: "CSS", color: "blue" },
      { maTag: 3, tenTag: "Javascript", color: "yellow" },
      { maTag: 4, tenTag: "Phân tích thiết kế", color: "green" },
    ],
    trangThai: "Chờ duyệt",
    loai: "DH",
  },
  {
    maDeTai: "2333",
    tenDeTai: "Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh",
    moTa: "Việc chọn trường học là việc quan trọng trong tương lai cho hoc sinh. Website cung cấp cho học sinh dễ dàng, nhanh chóng chọn trường phù hợp nhất với nguyện vọng và năng lực của bản thân. Tạo CSDL lưu trữ thông tin ngành, điểm vào đại học của các trường những năm trước trên cả nước. Trên cơ sở đó, với kết quả học tập trong từng giai đoạn, Website sẽ cho ra kết quả tốt nhất.",
    kyNangCanCo: `- Ngôn ngữ trên server: Tùy chọn (Ưu tiên: PHP, Java, Python,...)
    - CSDL: Tùy chọn (Ưu tiên: MySQL,..) 
    - Lợi thế hơn khi có kiến thức về Machine Learning, Web Scraping`,
    ketQuaCanDat: "Muốn làm gì làm miễn có cái web là được",
    tags: [
      { maTag: 1, tenTag: "HTML", color: "red" },
      { maTag: 2, tenTag: "CSS", color: "blue" },
      { maTag: 3, tenTag: "Javascript", color: "yellow" },
      { maTag: 4, tenTag: "Phân tích thiết kế", color: "green" },
    ],
    trangThai: "Chờ duyệt",
    loai: "DH",
  },
  {
    maDeTai: "2334",
    tenDeTai: "Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh",
    moTa: "Việc chọn trường học là việc quan trọng trong tương lai cho hoc sinh. Website cung cấp cho học sinh dễ dàng, nhanh chóng chọn trường phù hợp nhất với nguyện vọng và năng lực của bản thân. Tạo CSDL lưu trữ thông tin ngành, điểm vào đại học của các trường những năm trước trên cả nước. Trên cơ sở đó, với kết quả học tập trong từng giai đoạn, Website sẽ cho ra kết quả tốt nhất.",
    kyNangCanCo: `- Ngôn ngữ trên server: Tùy chọn (Ưu tiên: PHP, Java, Python,...)
    - CSDL: Tùy chọn (Ưu tiên: MySQL,..) 
    - Lợi thế hơn khi có kiến thức về Machine Learning, Web Scraping`,
    ketQuaCanDat: "Muốn làm gì làm miễn có cái web là được",
    tags: [
      { maTag: 1, tenTag: "HTML", color: "red" },
      { maTag: 2, tenTag: "CSS", color: "blue" },
      { maTag: 3, tenTag: "Javascript", color: "yellow" },
      { maTag: 4, tenTag: "Phân tích thiết kế", color: "green" },
    ],
    trangThai: "Chờ duyệt",
    loai: "DH",
  },
  {
    maDeTai: "2335",
    tenDeTai: "Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh",
    moTa: "Việc chọn trường học là việc quan trọng trong tương lai cho hoc sinh. Website cung cấp cho học sinh dễ dàng, nhanh chóng chọn trường phù hợp nhất với nguyện vọng và năng lực của bản thân. Tạo CSDL lưu trữ thông tin ngành, điểm vào đại học của các trường những năm trước trên cả nước. Trên cơ sở đó, với kết quả học tập trong từng giai đoạn, Website sẽ cho ra kết quả tốt nhất.",
    kyNangCanCo: `- Ngôn ngữ trên server: Tùy chọn (Ưu tiên: PHP, Java, Python,...)
    - CSDL: Tùy chọn (Ưu tiên: MySQL,..) 
    - Lợi thế hơn khi có kiến thức về Machine Learning, Web Scraping`,
    ketQuaCanDat: "Muốn làm gì làm miễn có cái web là được",
    tags: [
      { maTag: 1, tenTag: "HTML", color: "red" },
      { maTag: 2, tenTag: "CSS", color: "blue" },
      { maTag: 3, tenTag: "Javascript", color: "yellow" },
      { maTag: 4, tenTag: "Phân tích thiết kế", color: "green" },
    ],
    trangThai: "Chờ duyệt",
    loai: "DH",
  },
];
function dsDeTaiContent() {
  return `<div class="dsDeTai">
        <div class="tieuDe grid">
          <h3 class="heading heading--5 col-1">STT</h3>
          <h3 class="heading heading--5 col-1">Tên đề tài</h3>
          <h3 class="heading heading--5 col-3 text-center">Mô tả</h3>
          <h3 class="heading heading--5 col-2 text-center">Kỹ năng cần có</h3>
          <h3 class="heading heading--5 col-2 text-center">Tag</h3>
          <h3 class="heading heading--5 col-2 text-center">Trang thái</h3>
          <h3 class="heading heading--5 col-1 text-center">biêu tượng</h3>
        </div>
        ${taoDSDeTai(fakeDSDeTai)}
      </div>`;
}

function taoDSDeTai(dsDeTai) {
  return `<div class='noiDung'>${dsDeTai.map(deTai).join("")}</div>`;
}

function deTai(deTai) {
  return `<div class="noiDung--thongTin grid">
            <p class="text--body text--body_14 col-1">1</p>
            <p class="text--body text--body_14 col-1">${deTai.tenDeTai}</p>
            <p class="text--body text--body_14 col-3">${deTai.moTa}</p>
            <p class="text--body text--body_14 col-2">${deTai.kyNangCanCo}</p>
            <div class="tags col-2  text--body text--body_14 text-center center">${taoTags(
              deTai.tags
            )}</div>
            <p class=" text--body text--body_14 col-2 text-center">${
              deTai.trangThai
            }</p>
            <div class="col-1 text-center">
              <div class="buttons buttons_doc">
                <button class="sua btn btn_small sua btn--secondary" id=${
                  deTai.maDeTai
                }>Sửa</button>
                <button class="xoa btn btn_small xoa btn--third" id=${
                  deTai.maDeTai
                }>Xóa</button>
              </div>
            </div>
          </div>`;
}

function taoTags(tags) {
  return tags.map(taoTag).join("");
}

function taoTag(tag) {
  return `<div class="tag text--body text--body_14" style="background-color: ${tag.color};">${tag.tenTag}</div>`;
}

function khoiTao() {
  khoiTaoMenu();
  themNoiDungMain("part", "beforeend", dsDeTaiContent());
  nhanNutXoa();
  nhanNutSua();
}
function themNoiDungMain(type = "part", viTri, noiDung) {
  const main = document.querySelector(".main");
  if (type == "part") {
    main.insertAdjacentHTML(viTri, noiDung);
  } else {
    main.innerHTML = noiDung;
  }
}
function nhanNutXoa() {
  nhanNut("xoa", themModal, xoaDeTai);
}
function nhanNutSua() {
  nhanNut("sua", (e) => {
    suaDeTai(e.target.id);
  });
}
function themModal() {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforebegin",
    themModalXacNhan("Bạn có chắc muốn xóa đề tài này?", "third")
  );
}
function xoaDeTai(maDeTai) {
  const dongY = document.querySelector("#xacNhan");
  dongY.addEventListener("click", (e) => {
    dongY.closest(".layer").remove();
    console.log(maDeTai);
  });
}
function suaDeTai(maDeTai) {
  const deTai = fakeDSDeTai.filter((d) => d.maDeTai === maDeTai)?.[0];
  themNoiDungMain("all", null, noiDungSuaDeTai(deTai));
}
function noiDungSuaDeTai(deTai) {
  return `<form action="" class="form">
          <h3 class="content--tieuDe heading heading--3 center">
            Thông tin đề tài
          </h3>
          <div class="content">
            <div class="content--thongTins inputFields">
              <div class="content--thongTin inputField">
                <label for="tenDeTai" class="text--label text--label_16_bold"
                  >Tên đề tài</label
                >
                <input
                  type="text"
                  class="input input_nhap"
                  id="tenDeTai"
                  name="tenDeTai"
                  value = "${deTai.tenDeTai}"
                />
              </div>
              <div class="content--thongTin inputField">
                <label for="loai" class="text--label text--label_16_bold"
                  >Loại</label
                >
                <select name="loai" id="loai" class="input input_nhap">
                  <option value="">Chọn loại</option>
                  <option value="dh" ${
                    deTai.loai == "DH" ? "selected" : ""
                  }>Đại học</option>
                  <option value="cd" ${
                    deTai.loai == "CD" ? "selected" : ""
                  }>Cao đẳng</option>
                </select>
              </div>
              <div class="content--thongTin inputField">
                <label for="moTa" class="text--label text--label_16_bold"
                  >Mô tả</label
                >
                <textarea
                  type="text"
                  class="input input_nhap text--body text--body_16"
                  cols="10"
                  rows="5"
                  id="moTa"
                  name="moTa"
                  
                > ${deTai.moTa}</textarea>
              </div>
              <div class="content--thongTin inputField">
                <label
                  for="ketQuaCanDat"
                  class="text--label text--label_16_bold"
                  >Kết quả cần đạt</label
                >
                <input
                  type="text"
                  class="input input_nhap"
                  id="ketQuaCanDat"
                  name="ketQuaCanDat"
                  value = "${deTai.ketQuaCanDat}"
                />
              </div>
              <div class="content--thongTin inputField">
                <label for="kyNangCanCo" class="text--label text--label_16_bold"
                  >Kỹ năng cần có</label
                >
                <textarea
                  type="text"
                  class="input input_nhap text--body text--body_16"
                  id="kyNangCanCo"
                  name="kyNangCanCo"
                  rows="3"
                >   ${deTai.kyNangCanCo}</textarea>
              </div>
              <div class="content--thongTin inputField">
                <label for="tag" class="text--label text--label_16_bold"
                  >Tag</label
                >
               <div class="tags tags_input input text--body text--body_14 text-center center">${taoTags(
                 deTai.tags
               )}</div>
              </div>
            </div>
          </div>
          <div class="buttons">
            <button class="btn btn--secondary"  id = 'quayLai'>Quay lại</button>
            <button class="btn btn--fourth" disabled id = 'sua'>Sua đề tài</button>
          </div>
        </form>`;
}
khoiTao();
