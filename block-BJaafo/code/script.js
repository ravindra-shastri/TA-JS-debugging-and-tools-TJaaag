// Get full name

function fullName(firstName,lastName) {
    return firstName + " " + lastName
}

let result = fullName("Hello","World");
let expected = "Hello Wor";
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}

let result = fullName("Hello","World");
let expected = "Hello World";
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}

// Calculate total amount

function totalAmount
    (amount, taxRate) {
    return amount + (amount * taxRate)
}

let result = totalAmount(100,10);
let expected = 110;
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}

let result = totalAmount(100,10);
let expected = 1100;
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}


