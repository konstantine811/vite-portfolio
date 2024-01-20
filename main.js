import "./style.scss";

const a = 10;
const b = 20;

switch (a) {
  case 5:
    console.log(" a дорівнює 5");
  case 10:
}

const equalsAB = a === 10 && b < 30 && b === 20;
const age = 34.0;
console.log(equalsAB);

const message =
  age > 34
    ? "your are not hass access to batut_______"
    : "have a nice day with jumping on the batut";

console.log(message);

// && - AND - I - та говорить за те що усі рівняння повинні бути виконані для true
// || - OR - АБО -

const ab = equalsAB ? "adf" : "adsfasdf";

if (equalsAB) {
  console.log("we are sit between 5 and 50");
} else {
  console.error("not equil");
}

document.addEventListener("keypress", onKeyDown);

function onKeyDown(e) {
  const code = e.code;
  if (code === "KeyD" && e.ctrlKey) {
    console.log("Control and D ");
    return;
  }

  switch (e.code) {
    case "KeyD":
    case "KeyR":
    case "KeyI":
      console.log(e.code);
      console.log("D __switch operator");
      break;
    case "KeyA":
      console.log("A __switch operator");
      break;
    case "KeyT":
      console.log("T __switch operator");
      break;
    default:
      console.log("not has description for button ");
      break;
  }
}
