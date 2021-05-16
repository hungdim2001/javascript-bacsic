/**
 * Kiểu dữ liệu trong javascript
 * 1.Kiểu dữ liệu nguyên thuỷ-Primitive Data
 *  -Number
 *  -String
 *  - boolean
 *  -Undefine// chưa xác định
 *  -Null// nothing không có  gì cả
 *  - Symbol
 *
 * 2.Kiểu dữ liệu phức tạp - complex data
 * - function
 * - object
 *
 */
var fullName = "Hùng ' Nguyễn";
console.log(fullName);
// symbol
var id = Symbol(id); //unique: tính dộc nhất
//function
var myFunction = function() {
    console.log("xin chào các bạn");
};
myFunction();
//object
var myObject = {
    name: "Hung Nguyen", // có key và value bên trái là key bên phải là value
    age: 18,
    add: "thanh hoa",
};
console.log("myObject", myObject);
var myArr = ["javascript", "PHP", "java"];
console.log(myArr);
// cách kiểm tra  kiểu dữ liệu
console.log(typeof myArr);

function run(a, b, c) {
    var result =
        (a == truthy && a) ||
        (a == falsy && b == truthy && b) ||
        (a == falsy && b == falsy && c);

    return result;
}
console.log(run(1, 2, 3));
// Làm bài tập tại đây
var commentText = "Học chưa hiểu là học chưa đủ!";
var authorName = "Sơn Đặng:";
var fullCommentText = `${authorName} ${commentText}`;
console.log(fullCommentText);