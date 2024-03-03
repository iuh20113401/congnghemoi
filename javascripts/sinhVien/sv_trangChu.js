import { khoiTaoMenu } from "./sv_menu.js";
import { footerContent } from "../footer.js";
const noiDungThongBaos = [
  {
    maThongBao: 1,
    noiDung:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum magnam nihil enim.",
    ngay: "23/2/2924",
  },
  {
    maThongBao: 2,
    noiDung:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum magnam nihil enim.",
    ngay: "23/2/2924",
  },
  {
    maThongBao: 3,
    noiDung:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum magnam nihil enim.",
    ngay: "23/2/2924",
  },
  {
    maThongBao: 4,
    noiDung:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum magnam nihil enim.",
    ngay: "23/2/2924",
  },
];
function nhapThongBao() {
  const divThongBao = document.querySelector(".thongBao");
  divThongBao.insertAdjacentHTML("beforeend", thongBaos(noiDungThongBaos));
}
function thongBaos(noiDungThongBaos) {
  return `<div class="thongBao--noiDungs">
           ${noiDungThongBaos.map((tb) => thongBaoNoiDung(tb)).join("")}
          </div>`;
}
function thongBaoNoiDung(thongBao) {
  return `<div class="thongBao--noiDung text--body text--body_16">
              <p class="noiDung">
                ${thongBao.noiDung}
              </p>
              <p class="ngay">${thongBao.ngay}</p>
            </div>`;
}
function khoiTao() {
  const container = document.querySelector(".container");
  khoiTaoMenu();
  container.insertAdjacentHTML("beforeend", footerContent());
  nhapThongBao();
}
khoiTao();
