export const CALCULATOR_ACTIONS = {
  emptyValue: "empty-value",
  plusMinus: "plus-minus",
};
export const CALCULATOR_CONFIG = [
  [
    { value: "AC", action: CALCULATOR_ACTIONS.emptyValue },
    { value: "+/-", action: CALCULATOR_ACTIONS.plusMinus },
    { value: "%" },
    { value: "➗" },
  ],
  [{ value: "7" }, { value: "8" }, { value: "9" }, { value: "✖️" }],
  [{ value: "4" }, { value: "5" }, { value: "6" }, { value: "-" }],
  [{ value: "1" }, { value: "2" }, { value: "3" }, { value: "+" }],
  [{ value: "0", colspan: 2 }, { value: "." }, { value: "=" }],
];
