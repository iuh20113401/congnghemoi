import { khoiTaoMenu } from "./gv_menu.js";
function dsDeTaiContent() {
  return `<div class="dsDeTai">
        <div class="tieuDe grid">
          <h3 class="heading heading--5 col-1">STT</h3>
          <h3 class="heading heading--5 col-1">Tên đề tài</h3>
          <h3 class="heading heading--5 col-3 text-center">Mô tả</h3>
          <h3 class="heading heading--5 col-2 text-center">Kỹ năng cần có</h3>
          <h3 class="heading heading--5 col-2 text-center">Tag</h3>
          <h3 class="heading heading--5 col-2 ">Trang thái</h3>
          <h3 class="heading heading--5 col-1 ">biêu tượng</h3>
        </div>
       <div class='noiDung'>
          
          <div class="noiDung--thongTin grid">
            <p class="text--body text--body_14 col-1">1</p>
            <p class="text--body text--body_14 col-1">
              Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh
            </p>
            <p class="text--body text--body_14 col-3">
              Việc chọn trường học là việc quan trọng trong tương lai cho hoc
              sinh. Website cung cấp cho học sinh dễ dàng, nhanh chóng chọn
              trường phù hợp nhất với nguyện vọng và năng lực của bản thân. Tạo
              CSDL lưu trữ thông tin ngành, điểm vào đại học của các trường
              những năm trước trên cả nước. Trên cơ sở đó, với kết quả học tập
              trong từng giai đoạn, Website sẽ cho ra kết quả tốt nhất.
            </p>
            <p class="text--body text--body_14 col-2">
              - Ngôn ngữ trên server: Tùy chọn (Ưu tiên: PHP, Java, Python,...)
              - CSDL: Tùy chọn (Ưu tiên: MySQL,..) - Lợi thế hơn khi có kiến
              thức về Machine Learning, Web Scraping
            </p>
            <div class="tags text--body text--body_14 col-2  text-center center">
              <div class="tag text--body text--body_14">HTML</div>
              <div class="tag text--body text--body_14">Phân tích dữ liệu</div>
              <div class="tag text--body text--body_14">CSS</div>
              <div class="tag text--body text--body_14">Javascript</div>
            </div>
            <p class="text--body text--body_14 col-2 text-center">
              Chờ duyệt
            </p>
            <div class="col-1 text-center">
              <div class="buttons buttons_doc">
              <button class="btn btn--secondary">Xem</button>
              <button class="btn btn--primary">Duyệt</button>
              </div>
            </div>
          </div>
          <div class="noiDung--thongTin grid">
            <p class="text--body text--body_14 col-1">1</p>
            <p class="text--body text--body_14 col-1">
              Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh
            </p>
            <p class="text--body text--body_14 col-3">
              Việc chọn trường học là việc quan trọng trong tương lai cho hoc
              sinh. Website cung cấp cho học sinh dễ dàng, nhanh chóng chọn
              trường phù hợp nhất với nguyện vọng và năng lực của bản thân. Tạo
              CSDL lưu trữ thông tin ngành, điểm vào đại học của các trường
              những năm trước trên cả nước. Trên cơ sở đó, với kết quả học tập
              trong từng giai đoạn, Website sẽ cho ra kết quả tốt nhất.
            </p>
            <p class="text--body text--body_14 col-2">
              - Ngôn ngữ trên server: Tùy chọn (Ưu tiên: PHP, Java, Python,...)
              - CSDL: Tùy chọn (Ưu tiên: MySQL,..) - Lợi thế hơn khi có kiến
              thức về Machine Learning, Web Scraping
            </p>
            <div class="tags text--body text--body_14 col-2 text-center center">
              <div class="tag text--body text--body_14">HTML</div>
              <div class="tag text--body text--body_14">Phân tích dữ liệu</div>
              <div class="tag text--body text--body_14">CSS</div>
              <div class="tag text--body text--body_14">Javascript</div>
            </div>
            <p class="text--body text--body_14 col-2 text-center">
              Chờ duyệt
            </p>
            <div class="col-1 text-center">
              <div class="buttons buttons_doc">
              <button class="btn btn--secondary">Xem</button>
              <button class="btn btn--primary">Duyệt</button>
              </div>
            </div>
          </div>

        </div>
      </div>`;
}
function khoiTao() {
  const main = document.querySelector(".main");
  khoiTaoMenu();
  main.insertAdjacentHTML("beforeend", dsDeTaiContent());
}
khoiTao();
