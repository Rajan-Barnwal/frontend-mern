// Define a function to generate the receipt
function generateReceipt(name, age, medicine, date, time) {
    // Format the receipt content
    let receiptContent = `
        Receipt
        --------
        Name: ${name}
        Age: ${age}
        Medicine: ${medicine}
        Date: ${date}
        Time: ${time}
        Thank you for your purchase!
    `;
    return receiptContent;
}

// Example inputs
let name = "John Doe";
let age = 30;
let medicine = "Paracetamol";
let date = "2024-04-30";
let time = "10:00 AM";

// Generate the receipt
let receipt = generateReceipt(name, age, medicine, date, time);

// Print the receipt
console.log(receipt);
