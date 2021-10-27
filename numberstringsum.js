// function numberStringSum() {
//   const inputvalue = ["5", "6"];
//   for (let i in inputvalue) {
//     if (typeof i === "string" && Number(i)) {
//       results = inputvalue[0] + inputvalue[1];
//     }
//   }
//   return results;
// }

// numberStringSum();
// console.log(results);
function numberstringsum(num1, num2) {
  let sum = "";
  if (typeof num1 === "string" && typeof num2 === "string") {
    const sum = String(parseInt(num1) + parseInt(num2));
  } else {
    console.log("This is not a string ");
  }
  return sum;
}

const output = numberstringsum("2", "5");
console.log(output);
