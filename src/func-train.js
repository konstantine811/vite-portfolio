// FUnction expression
const a = 3;

const functionExpression = function (value) {
  console.log("this functionExpression");
};

function functionDeclartion(value, name = "Petro", valueSecond) {
  const concatValues = value.key + " " + name;
  console.log("this functionDeclartion", concatValues);
  return 5 + 5;
}

function sum(a, b, callback) {
  const res = a + b;
  console.log("res______", callback);
  callback(res);
}

function showAlert(result) {
  alert(result);
}

function showConsole(result) {
  console.log(result);
}

function showToHtml(result) {
  const div = document.createElement("div");
  div.innerHTML = result;
  document.getElementById("cardBody").appendChild(div);
}

// sum(5, 6, showAlert);
sum(11, 16, showConsole);
sum(110, 1100, showToHtml);
sum(110, 30, function (result) {
  console.log("______", result);
});
