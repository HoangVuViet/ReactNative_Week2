// 1. Hàm tính tổng hai số
const add = (a, b) => a + b;

// 2. Hàm kiểm tra số chẵn hay lẻ
const isEven = (num) => num % 2 === 0;

// 3. Hàm chuyển đổi nhiệt độ từ Celsius sang Fahrenheit
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

// 4. Hàm tạo chuỗi ngẫu nhiên
const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

// 5. Hàm tính giai thừa của một số
const factorial = (n) => (n <= 1) ? 1 : n * factorial(n - 1);

// 6. Hàm kiểm tra chuỗi có phải là palindrome
const isPalindrome = (str) => str === str.split('').reverse().join('');

// 7. Hàm lọc mảng số dương
const filterPositiveNumbers = (arr) => arr.filter(num => num > 0);

// 8. Hàm tìm giá trị lớn nhất trong mảng
const findMax = (arr) => Math.max(...arr);

// Ví dụ sử dụng
console.log(add(5, 10)); // Kết quả: 15
console.log(isEven(4)); // Kết quả: true
console.log(celsiusToFahrenheit(0)); // Kết quả: 32
console.log(generateRandomString(10)); // Kết quả: Một chuỗi ngẫu nhiên 10 ký tự
console.log(factorial(5)); // Kết quả: 120
console.log(isPalindrome('racecar')); // Kết quả: true
console.log(filterPositiveNumbers([-1, 2, 3, -4, 5])); // Kết quả: [2, 3, 5]
console.log(findMax([1, 2, 3, 4, 5])); // Kết quả: 5