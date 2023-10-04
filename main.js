let btn = document.querySelectorAll("[type='button']");
let txt = document.querySelector("[type='text']");
console.log(btn);
btn.forEach(function (ele) {
  ele.onclick = function () {
    if (ele.value == "AC") {
      txt.value = "";
    } else if (ele.value == "DE") {
      txt.value = txt.value.toString().slice(0, -1);
    } else if (ele.value == "=") {
      txt.value = eval(txt.value);
    } else {
      txt.value += ele.value;
    }
  };
});
