function menuContent() {
  return ` <div class="navigation ">
      <div class="nav--content">
        <div class="nav--logoBox">
          <img
            src="../../img/logo_small.png"
            alt="small logo of iuh"
            class="nav--logo"
          />
        </div>
        <ul class="menuItems ">
          <li>
            <a href="sv_trangChu.html" class="menuItem active">
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
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <h3 class="heading heading--5">Trang chủ</h3>
            </a>
          </li>
          <li>
            <a href="sv_quanLyDeTai.html" class="menuItem">
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
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>

              <h3 class="heading heading--5">Quản lý đề tài</h3>
            </a>
          </li>
          <li class="menuItem">
            <a href="#" class="menuItem">
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <h3 class="heading heading--5">Lịch họp</h3></a
            >
          </li>
          <li class="menuItem">
            <a href="sv_troChuyen.html" class="menuItem">
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
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <h3 class="heading heading--5">Trò chuyện</h3></a
            >
          </li>
        </ul>
        <div class="nav--footer">
          <a href="#" class="account">
            <div class="avatarBox">
              <img
                src="../../img/banner.png"
                alt="account avatar"
                class="avatar"
              />
            </div>
            <div class="name heading--5">Nguyễn Tuấn Kiệt</div>
          </a>
        </div>
      </div>
    </div>`;
}
function khoiTaoMenu() {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML("afterbegin", menuContent());
  hightLink();
}
function hightLink() {
  const menu = document.querySelector(".navigation");
  const url = window.location.href;
  const links = menu.querySelectorAll("a");
  links.forEach((link) => {
    const isPage = url.includes(link.href);
    if (isPage) link.classList.add("active");
    else link.classList.remove("active");
  });
}
export { khoiTaoMenu };
