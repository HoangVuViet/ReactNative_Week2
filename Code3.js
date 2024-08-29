// 1. Create objects for Mark and John
const mark = {
    fullName: 'Mark Miller',
    mass: 78, // in kg
    height: 1.69, // in meters
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92, // in kg
    height: 1.95, // in meters
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

// 2. Calculate BMI for both
const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

// 3. Log who has the higher BMI
if (markBMI > johnBMI) {
    console.log(`${mark.fullName}'s BMI (${markBMI.toFixed(2)}) is higher than ${john.fullName}'s (${johnBMI.toFixed(2)})!`);
} else if (johnBMI > markBMI) {
    console.log(`${john.fullName}'s BMI (${johnBMI.toFixed(2)}) is higher than ${mark.fullName}'s (${markBMI.toFixed(2)})!`);
} else {
    console.log(`Both have the same BMI (${markBMI.toFixed(2)})!`);
}