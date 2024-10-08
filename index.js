// 1. Declare customerName in global scope with initial value 'bob'
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();  // Convert customerName to uppercase
}

// 3. Function to set bestCustomer in global scope
function setBestCustomer() {
    bestCustomer = 'not bob';  // Declares `bestCustomer` globally
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';  // Changes the value of `bestCustomer`
}

// 5. Declare constant leastFavoriteCustomer and attempt to change it
const leastFavoriteCustomer = 'Karen';

function changeLeastFavoriteCustomer() {
    // Attempt to change a constant, which should throw an error
    leastFavoriteCustomer = 'Bob';  // This will throw an error
}

// Example function calls (comment these out when running tests)
console.log(customerName);              // Output: bob

