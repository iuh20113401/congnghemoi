export function themModal(noiDung) {
  return ` <div class="layer">
      <div class="xacNhan">
        ${noiDung}
      </div>
    </div>`;
}
export function themModalXacNhan(noiDung, type) {
  return themModal(noiDungModalXacNhan(noiDung, type));
}
function noiDungModalXacNhan(noiDung, type) {
  return `<h1 class="heading heading--3">${noiDung}</h1>
        <div class="buttons full">
          <button class="btn btn--secondary center" id="dongModal">Hủy</button>
          <button class="btn btn--${type} center" id="xacNhan">Xác nhận</button>
        </div>`;
}
