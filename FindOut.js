// 1. Hàm kiểm tra xem một số có phải là số nguyên không
const findOutIsInteger = (num) => Number.isInteger(num);

// 2. Hàm tìm số lớn nhất trong mảng
const findOutMax = (arr) => Math.max(...arr);

// 3. Hàm tìm số nhỏ nhất trong mảng
const findOutMin = (arr) => Math.min(...arr);

// 4. Hàm kiểm tra xem một chuỗi có chứa một từ cụ thể không
const findOutContains = (str, word) => str.includes(word);

// 5. Hàm tìm vị trí của một phần tử trong mảng
const findOutIndex = (arr, value) => arr.indexOf(value);

// 6. Hàm kiểm tra xem một phần tử có tồn tại trong mảng không
const findOutExists = (arr, value) => arr.includes(value);

// 7. Hàm tính tổng các số trong mảng
const findOutSum = (arr) => arr.reduce((acc, num) => acc + num, 0);

// 8. Hàm tìm các số dương trong mảng
const findOutPositiveNumbers = (arr) => arr.filter(num => num > 0);

// Ví dụ sử dụng
console.log(findOutIsInteger(4)); // Kết quả: true
console.log(findOutMax([1, 2, 3, 4, 5])); // Kết quả: 5
console.log(findOutMin([1, 2, 3, 4, 5])); // Kết quả: 1
console.log(findOutContains('Hello world', 'world')); // Kết quả: true
console.log(findOutIndex([10, 20, 30], 20)); // Kết quả: 1
console.log(findOutExists([1, 2, 3], 4)); // Kết quả: false
console.log(findOutSum([1, 2, 3, 4])); // Kết quả: 10
console.log(findOutPositiveNumbers([-1, 2, 3, -4, 5])); // Kết quả: [2, 3, 5]