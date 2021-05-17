var containerEle = document.body.querySelector(".container");

var bill = prompt("Input Your Bill.");
Number.isInteger(bill)

tax = bill * .07;
taxed_bill = +bill + +tax;
tip = taxed_bill * .05;
final_bill = +tip + +taxed_bill;

document.body.querySelector(".container").innerHTML = "Your bill is $" + final_bill + ",";