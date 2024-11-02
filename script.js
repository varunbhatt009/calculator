let display = document.getElementById("display");

function clearDisplay() {
  display.innerText = "0";
}

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  display.innerText += " " + operator + " ";
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === "") {
    display.innerText = "0";
  }
}

function calculateResult() {
  try {
    display.innerText = eval(display.innerText.replace("×", "*").replace("÷", "/"));
  } catch {
    display.innerText = "Error";
  }
}
