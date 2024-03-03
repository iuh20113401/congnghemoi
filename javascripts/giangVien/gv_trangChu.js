import { khoiTaoMenu } from "./gv_menu.js";
const thongBaos = [
  {
    noiDung:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum magnam nihil enim.",
    ngay: "23/2/2924",
  },
  {
    noiDung:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum magnam nihil enim.",
    ngay: "23/2/2924",
  },
  {
    noiDung:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum magnam nihil enim.",
    ngay: "23/2/2924",
  },
  {
    noiDung:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum magnam nihil enim.",
    ngay: "23/2/2924",
  },
];
function taoThongBao(noiDung, ngay) {
  return `<div class="thongBao--noiDung text--body text--body_16">
            <p class="noiDung">${noiDung}</p>
            <p class="ngay">${ngay}</p>
          </div>`;
}

function noiDungThongBaos() {
  return `<div class="thongBao--noiDungs">
            ${thongBaos
              .map((thongBao) => taoThongBao(thongBao.noiDung, thongBao.ngay))
              .join("")}
          </div>`;
}

function khoiTao() {
  khoiTaoMenu();
  const main = document.querySelector(".thongBao");
  main.insertAdjacentHTML("beforeend", noiDungThongBaos());
}

khoiTao();
