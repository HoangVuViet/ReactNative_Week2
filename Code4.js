// Function to calculate tip
const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
};

// 1. Create an array 'bills' with test data
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Create empty arrays for tips and totals
const tips = [];
const totals = [];

// 3. Use a for loop to calculate tips and totals
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip); // Add tip to the tips array
    totals.push(bills[i] + tip); // Add total (bill + tip) to the totals array
}

// 4. Bonus: Function to calculate average
const calcAverage = (arr) => {
    let sum = 0; // Initialize sum
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add current value to sum
    }
    return sum / arr.length; // Calculate and return average
};

// Call the function with the 'totals' array
const averageTotal = calcAverage(totals);

// Output the results
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);
console.log('Average Total:', averageTotal.toFixed(2));