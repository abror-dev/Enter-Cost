var eBtn = document.querySelector(".btn");
var elInp = document.querySelector(".inp");
var elHead = document.querySelector(".head");
function fn() {
  if (elInp.value > 9250000) {
    elHead.textContent = "Alisher oq yol";
    elInp.value = "";
  } else if (elInp.value < 9250000) {
    elHead.textContent = "Abrorbek damin olaver";
    elInp.value = "";
  } else {
    elHead.textContent = "Faqat raqam kriting";
    elInp.value = "";
  }
}
