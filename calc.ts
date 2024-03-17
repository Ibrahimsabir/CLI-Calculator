import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { massage: "Enter first number ", type: "number", name: "firstnumber" },
  { massage: "Enter 2nd number ", type: "number", name: "secondnumber" },
  {
    massage: "Select one of the operator to perform action",
    type: "list",
    name: "Operator",
    choices: [
      "Addition",
      "Substraction",
      "Multiplication",
      "Division",
      "Percentage",
      "Exponential",
    ],
  },
]);

// conditional statements

if (answer.Operator === "Addition") {
  let result = answer.firstnumber + answer.secondnumber;
  console.log("Your final answer is ", result);
} else if (answer.Operator === "Substraction") {
  let result1 = answer.firstnumber - answer.secondnumber;
  console.log("Your final answer is ", result1);
} else if (answer.Operator === "Multiplication") {
  let result2 = answer.firstnumber * answer.secondnumber;
  console.log("Your final answer is ", result2);
} else if (answer.Operator === "Division") {
  let result3 = answer.firstnumber / answer.secondnumber;
  console.log("Your final answer is ", result3);
} else if (answer.Operator ==="Percentage"){
  let result4 = answer.firstnumber * answer.secondnumber/100
  console.log("Your final answer is ", result4)
} else if(answer.Operator === "Exponential"){
  let result5 = answer.firstnumber**answer.secondnumber
  console.log("Your final answer is ",result5)
}
