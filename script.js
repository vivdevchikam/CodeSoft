const inputEl = document.querySelector(".input-text");
const btnEl = document.querySelectorAll(".btn");

for (item of btnEl) {
  let btnNum;
  item.addEventListener("click", function (e) {
    btnNum = e.target.innerHTML;
    if (btnNum == "x") {
      btnNum = "*";
      inputEl.value += btnNum;
    } else if (btnNum == "÷") {
      btnNum = "/";
      inputEl.value += btnNum;
    } else if (btnNum == "AC") {
      btnNum = "";
      inputEl.value = btnNum;
    } else if (btnNum == "⌫") {
      inputEl.value = inputEl.value.substring(0, inputEl.value.length - 1);
    } else if (btnNum == "=") {
      inputEl.value = eval(inputEl.value);
    } else if (btnNum == "+/-") {
      inputEl.value = -Math.abs(inputEl.value);
    } else if (btnNum == "sin") {
      inputEl.value = Math.sin(inputEl.value);
    } else if (btnNum == "cos") {
      inputEl.value = Math.cos(inputEl.value);
    } else if (btnNum == "tan") {
      inputEl.value = Math.tan(inputEl.value);
    } else if (btnNum == "Log") {
      inputEl.value = Math.log(inputEl.value);
    } else if (btnNum == "e") {
      inputEl.value = 2.71828182846;
    } else if (btnNum == "!") {
      let i, f, num;
      f = 1;
      num = inputEl.value;
      for (i = 1; i <= num; i++) {
        f *= i;
        inputEl.value = f;
      }
    } else if (btnNum == "√") {
      inputEl.value = Math.sqrt(inputEl.value);
    } else {
      inputEl.value += btnNum;
    }
  });
}
