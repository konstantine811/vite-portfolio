import "../style.scss";
import { CALCULATOR_ACTIONS, CALCULATOR_CONFIG } from "./config";

export function calculator() {
  const tableEl = document.getElementById("calculatorBtn");

  CALCULATOR_CONFIG.forEach((itemArr) => {
    const trEl = document.createElement("tr");
    itemArr.forEach((itemObj) => {
      createCalculatorData(itemObj, trEl);
    });
    tableEl.appendChild(trEl);
  });
}

calculator();

function createCalculatorData(itemObj, trEl) {
  if (itemObj.value) {
    const tdEl = document.createElement("td");
    const btnEl = document.createElement("button");
    tdEl.className = "p-1";
    btnEl.className += "btn w-full";
    if (itemObj.class) {
      btnEl.className += ` ${itemObj.class}`;
    }
    if (itemObj.colspan) {
      tdEl.colSpan = itemObj.colspan;
    }
    btnEl.innerHTML = itemObj.value;
    tdEl.appendChild(btnEl);
    trEl.appendChild(tdEl);

    btnEl.addEventListener("click", () => {
      switchCaclButton(itemObj);
    });
  }
}

function switchCaclButton(itemObj) {
  switch (itemObj.action) {
    case CALCULATOR_ACTIONS.emptyValue:
      emptyValue();
      break;
    case CALCULATOR_ACTIONS.plusMinus:
      plusMinus();
      break;
    default:
      simpleNumberAction(itemObj);
      break;
  }
}

function emptyValue() {
  console.log("empty value");
}

function plusMinus() {
  console.log("add plus/minus");
}

function simpleNumberAction(itemObj) {
  console.log("iitem obj", itemObj.value);
}
