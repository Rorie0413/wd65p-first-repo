const ProductName = "Product Name"
let quantity = 5
let amount = 10
let TaxRate = .12

let SubTotal=quantity * amount
let TaxAmount = SubTotal * TaxRate

let TotalAmount = SubTotal + TaxAmount

console.log("Product Name:" + ProductName)
console.log("Quantity:" + quantity)
console.log ("Amount: " + amount)
console.log ("Tax Rate: 12%")
console.log ("Subtotal: " + SubTotal)
console.log ("Tax Amount: "+ TaxAmount)
console.log ("Total Amount: "+ TotalAmount)