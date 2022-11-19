// UI Variables
let inputField = document.querySelector("#input");
const buttons = document.querySelector(".buttons");

// Load All Events
loadAllEventListeners();

// Load All Event Listeners
function loadAllEventListeners() {
  // Buttons click event (Event Delegation)
  buttons.addEventListener("click", calculate);
}

// Calculate
function calculate(e) {
  let value = inputField.value;

  // If button is pressed
  if (e.target.classList.contains("btn")) {
    // Action Category of button
    if (e.target.classList.contains("btn-action")) {
      if (e.target.value === "c") {
        value = "";
      }
      if (e.target.value === "+/-") {
        if (value != "") {
          value = Number(value);
          value = -value;
          value = String(value);
        }
      }
      if (e.target.value === "%") {
        // if there is no operation operator inside value
        if (value != "") {
          if (
            value.indexOf("/") === -1 &&
            value.indexOf("x") === -1 &&
            value.indexOf("-") === -1 &&
            value.indexOf("+") === -1
          ) {
            value = parseFloat(value) / 100;
          }
        }

        // ToDo: Complete for value containing operators
      }
    }

    // Action Category of button
    else if (e.target.classList.contains("btn-operation")) {
      if (e.target.value === "/") {
        if (value != "") {
          value += "/";
        }
      }
      if (e.target.value === "x") {
        if (value != "") {
          value += "x";
        }
      }
      if (e.target.value === "-") {
        if (value != "") {
          value += "-";
        }
      }
      if (e.target.value === "+") {
        if (value != "") {
          value += "+";
        }
      }
      if (e.target.value === "=") {
        console.log("= pressed");
        //   ToDo: Complete this feature
      }
    }

    // Number Category of button
    else if (e.target.classList.contains("btn-number")) {
      if (e.target.value === ".") {
        if (value.indexOf(".") === -1) {
          value += ".";
        }
      } else if (e.target.value === "0") {
        value += "0";
      } else if (e.target.value === "1") {
        value += "1";
      } else if (e.target.value === "2") {
        value += "2";
      } else if (e.target.value === "3") {
        value += "3";
      } else if (e.target.value === "4") {
        value += "4";
      } else if (e.target.value === "5") {
        value += "5";
      } else if (e.target.value === "6") {
        value += "6";
      } else if (e.target.value === "7") {
        value += "7";
      } else if (e.target.value === "8") {
        value += "8";
      } else if (e.target.value === "9") {
        value += "9";
      }
    }
  }
  inputField.value = value;
}
