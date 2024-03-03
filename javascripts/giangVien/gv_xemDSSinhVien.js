import { khoiTaoMenu } from "./gv_menu.js";
function truotXuong(tieuDe, active = false) {
  return ` <div class="truotXuong ${active ? "active" : ""}">
      <div class="truotXuong--tieuDe">
        <h3 class="heading heading--4">
          ${tieuDe}
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
          <h3 class="heading heading--5 col-1">STT</h3>
          <h3 class="heading heading--5 col-2 text-center">Mã số sinh viên</h3>
          <h3 class="heading heading--5 col-2 text-center">Họ tên</h3>
          <h3 class="heading heading--5 col-1 text-center">Mã đồ án</h3>
          <h3 class="heading heading--5 col-2 text-center">
            Tiến độ hoàn thành
          </h3>
          <h3 class="heading heading--5 col-2 text-center">Điểm giữa kỳ</h3>
          <h3 class="heading heading--5 col-2 text-center">Điểm cuối kỳ</h3>
        </div>
        <div class="noiDung">
          <div class="noiDung--thongTin grid">
            <h3 class="heading heading--5 col-1">1</h3>
            <h3 class="heading heading--5 col-2 text-center">20113401</h3>
            <h3 class="heading heading--5 col-2 text-center">
              Nguyễn Tuấn Kiệt
            </h3>
            <h3 class="heading heading--5 col-1 text-center">951</h3>
            <h3 class="heading heading--5 col-2 text-center">100%</h3>
            <h3 class="heading heading--5 col-2 text-center">10</h3>
            <h3 class="heading heading--5 col-2 text-center">10</h3>
          </div>
          <div class="noiDung--thongTin grid">
            <p class="heading heading--5 col-1">1</p>
            <p class="heading heading--5 col-2 text-center">20113401</p>
            <p class="heading heading--5 col-2 text-center">
              Nguyễn Tuấn Kiệt
            </p>
            <p class="heading heading--5 col-1 text-center">951</p>
            <p class="heading heading--5 col-2 text-center">100%</p>
            <p class="heading heading--5 col-2 text-center">
            <svg
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
            </svg>
            </p>
            <h3 class="heading heading--5 col-2 text-center">10</h3>
          </div>
          <div class="noiDung--thongTin grid">
            <p class="heading heading--5 col-1">1</p>
            <p class="heading heading--5 col-2 text-center">20113401</p>
            <p class="heading heading--5 col-2 text-center">
              Nguyễn Tuấn Kiệt
            </p>
            <p class="heading heading--5 col-1 text-center">951</p>
            <p class="heading heading--5 col-2 text-center">100%</p>
            <p class="heading heading--5 col-2 text-center">
                <svg
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
                </svg>
            
            </p>
            <p class="heading heading--5 col-2 text-center">10</p>
          </div>
          <div class="noiDung--thongTin grid">
            <p class="heading heading--5 col-1">1</p>
            <p class="heading heading--5 col-2 text-center">20113401</p>
            <p class="heading heading--5 col-2 text-center">
              Nguyễn Tuấn Kiệt
            </p>
            <p class="heading heading--5 col-1 text-center">951</p>
            <p class="heading heading--5 col-2 text-center">100%</p>
            <p class="heading heading--5 col-2 text-center">10</p>
            <p class="heading heading--5 col-2 text-center">
                <svg
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
                </svg>
            </p>
          </div>
        </div>
      </div>
    </div>`;
}
function khoiTao() {
  const dsSinhVien = document.querySelector(".dsSinhVien");
  khoiTaoMenu();
  dsSinhVien.insertAdjacentHTML(
    "beforeend",
    truotXuong("Xây dựng Website hỗ trợ việc chọn trường đại học cho học sinh")
  );
  dsSinhVien.insertAdjacentHTML(
    "beforeend",
    truotXuong("Xây dựng Website hỗ trợ việc chọn trường đại học cho giáo viên")
  );
  showNoiDung();
}
function showNoiDung() {
  const tieuDes = document.querySelectorAll(".truotXuong--tieuDe");
  tieuDes.forEach((tieuDe) => {
    tieuDe.addEventListener("click", (e) => {
      e.target.closest(".truotXuong").classList.toggle("active");
    });
  });
}
khoiTao();
