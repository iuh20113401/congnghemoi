import { khoiTaoMenu } from "./sv_menu.js";
import { footerContent } from "../footer.js";
function khoiTao() {
  const container = document.querySelector(".container");
  khoiTaoMenu();
  container.insertAdjacentHTML("beforeend", footerContent());
}
khoiTao();
