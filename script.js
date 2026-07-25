
const display = document.getElementById("display")
function appendToDisplay(input) {
  display.value += input;
  display.scrollLeft = display.scrollWidth;
}
function del (input){
  display.value = display.value.slice(0, -1);
  display.scrollLeft = display.scrollWidth;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
      display.value = eval(display.value);
  }
  catch (error) {
      display.value = "Error";  
  }
}

