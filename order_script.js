// Products
let prices = [55000, 2999, 500, 2500];
let names = ["Laptop", "Headset", "Mouse", "Keyboard"];

// Calculation 
function calculateTotal(quantities) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i] * quantities[i];
    }
    return total;
}

// Discount
function applyDiscount(total) {
    let discount = 0;

    // Base discount for total >= 5000
    if (total >= 5000) {
        discount += total * 0.10; 
    }

    let vipChecked = document.getElementById("vip").checked;
    let seniorChecked = document.getElementById("senior").checked;

    // VIP 5%
    if (vipChecked) {
        discount += total * 0.05; 
    }

    // Senior 10%
    if (seniorChecked) {
        discount += total * 0.10; 
    }

    return discount;
}

// Receipt Display
function displayReceipt(quantities, total, discount, finalAmount) {
    let text = "----- RECEIPT -----\n";

    for (let i = 0; i < quantities.length; i++) {
        if (quantities[i] > 0) {
            text += `${names[i]} x ${quantities[i]} = ₱${prices[i] * quantities[i]}\n`;
        }
    }

    text += "\nTotal: ₱" + total;

    // Show which discounts applied
    let extraDiscounts = [];
    if (total >= 5000) extraDiscounts.push("10% over ₱5000");
    if (document.getElementById("vip").checked) extraDiscounts.push("VIP 5%");
    if (document.getElementById("senior").checked) extraDiscounts.push("Senior 10%");

    text += "\nDiscount: ₱" + discount + " (" + extraDiscounts.join(", ") + ")";
    text += "\n------------------";
    text += "\nFinal Amount: ₱" + finalAmount;

    document.getElementById("receipt").innerText = text;
}

// Main process
function processOrder() {
    let quantities = [];
    for (let i = 0; i < prices.length; i++) {
        quantities[i] = Number(document.getElementById("q" + i).value);
    }

    let total = calculateTotal(quantities);
    let discount = applyDiscount(total);
    let finalAmount = total - discount;

    displayReceipt(quantities, total, discount, finalAmount);
}

// Make VIP and Senior checkboxes mutually exclusive
document.getElementById("vip").addEventListener("change", function() {
    if (this.checked) {
        document.getElementById("senior").checked = false;
    }
});

document.getElementById("senior").addEventListener("change", function() {
    if (this.checked) {
        document.getElementById("vip").checked = false;
    }
});
