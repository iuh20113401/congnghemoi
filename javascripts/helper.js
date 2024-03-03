export function nhanNut(selector, callFn, dongYFn = null) {
  const btns = document.querySelectorAll(`.${selector}`);
  const container = document.querySelector(".container");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      callFn(e);
      if (dongYFn) {
        dongXacNhan();
        dongYFn(btn.id);
      }
    });
  });
}
function dongXacNhan() {
  const close = document.querySelector("#dongModal");
  close.addEventListener("click", (e) => {
    e.preventDefault();
    close.closest(".layer").remove();
  });
}
