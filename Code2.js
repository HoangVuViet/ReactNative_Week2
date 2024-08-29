// 1. Function to calculate tip
const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
};

// Test the function with a bill value of 100
console.log(`Tip for a bill of 100: ${calcTip(100).toFixed(2)}`);

// 2. Create an array 'bills' with test data
const bills = [125, 555, 44];

// 3. Create an array 'tips' using the calcTip function
const tips = bills.map(calcTip);

// 4. Create an array 'total' containing the total values (bill + tip)
const total = bills.map((bill, index) => bill + tips[index]);

// Output the results
console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Total: ${total}`);