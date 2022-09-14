console.log("RimSam Runing!");
let calculate = () => {
  let num1, num2, add, mult, div, sub;
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  add = parseInt(num1) + parseInt(num2);
  //parse the values to int to be added otherwise values will be just concatenated and not added.
  sub = num1 - num2;
  mult = num1 * num2;
  div = num1 / num2;
  document.getElementById("add").innerHTML = add;
  document.getElementById("sub").innerHTML = sub;
  document.getElementById("mult").innerHTML = mult;
  document.getElementById("div").innerHTML = div;
};
