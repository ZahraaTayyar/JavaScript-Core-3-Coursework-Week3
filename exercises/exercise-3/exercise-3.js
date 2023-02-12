let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

//I did it without putting it in a function, would like to put it in function, not sure how.
let header = `QTY     ITEM         TOTAL`;

let receiptList = order
      .map((item) => `${item.quantity}    ${item.itemName}    £${item.unitPrice}`)

let arrayOfPrice = order
      .map((item) => item.unitPrice);

let total = arrayOfPrice.reduce((a, b) => (a + b));

console.log(header);
console.log(receiptList);
console.log(total);
