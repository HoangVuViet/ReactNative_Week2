// 1. Hàm viết lại chuỗi thành chữ hoa
const rewriteToUpperCase = (str) => str.toUpperCase();

// 2. Hàm viết lại chuỗi thành chữ thường
const rewriteToLowerCase = (str) => str.toLowerCase();

// 3. Hàm viết lại chuỗi thành kiểu chữ đầu mỗi từ
const rewriteToTitleCase = (str) => {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

// 4. Hàm viết lại chuỗi bằng cách loại bỏ khoảng trắng thừa
const rewriteTrim = (str) => str.trim();

// 5. Hàm viết lại chuỗi bằng cách thay thế ký tự
const rewriteReplaceChar = (str, target, replacement) => str.replace(new RegExp(target, 'g'), replacement);

// 6. Hàm viết lại chuỗi bằng cách đảo ngược nó
const rewriteReverse = (str) => str.split('').reverse().join('');

// Ví dụ sử dụng
console.log(rewriteToUpperCase('hello world')); // Kết quả: 'HELLO WORLD'
console.log(rewriteToLowerCase('HELLO WORLD')); // Kết quả: 'hello world'
console.log(rewriteToTitleCase('hello world from javascript')); // Kết quả: 'Hello World From Javascript'
console.log(rewriteTrim('   hello world   ')); // Kết quả: 'hello world'
console.log(rewriteReplaceChar('hello world', 'o', '0')); // Kết quả: 'hell0 w0rld'
console.log(rewriteReverse('hello')); // Kết quả: 'olleh'