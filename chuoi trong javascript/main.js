// // Làm bài tập tại đây
// var commentText = "Học chưa hiểu là học chưa đủ!";
// var authorName = "Sơn Đặng:";
// var fullCommentText = `${authorName} ${commentText}`;
// console.log(fullCommentText);
// Làm bài tập tại đây
// var commentText =
//     " Để hiển thị được chuỗi chứa dấu gạch chéo ngược (\\) ta phải thêm dấu\\ vào trước hoặc sau nó";
// console.log(commentText);
var myName = "nguyễn văn hùng";
// Làm việc với chuỗi :
// 1.length:
console.log(myName.length);
// 2. find index:: Finding a String in a String, console.log(myName.indexOf('va'), position);
// find last string in a string console.log(myName.lastIndexOf('va')
console.log(myName.indexOf('a', 0));

// 3. cut string console.log(myName.slice(startPosition, endPosition));
console.log(myName.slice(3, 4)); // tham số âm thì sẽ cắt từ cuối chuỗi lên đầu
// myName.substr(3,4):cắt từ vị trí số 3 4 ký tự
// myName.substring :giống slice nhưng không chấp nhận index âm
// 4. replace
console.log(myName.replace(/VĂN/i, "Văn"));
//replace all:console.log(myName.replace(/văn/g , 'Văn'));
//hoạt động replace phân biệt chữ hoa và chữ thường để không phân biệt chữ hoa và chữ thường
// ta phải sử dụng biểu thức chính quy: console.log(myName.replace(/VĂN/i , 'Văn'));
// 5. convert to upper case
console.log(myName.toUpperCase());
// 6. convert to lower case
console.log(myName.toLowerCase());
// 7. trim:loại bỏ khoảng trắng  thừa ở đầu và cuối chuỗi
console.log(myName.trim());
// 8. split: cắt một chuỗi thành một mảng sao bỏ các điểm dung
var language = "javascript, PHP, Ruby, Java";
console.log(language.split(", "));
// 9. get a character by index
// console.log(myName.charAt(position));
// myName.charCodeAt(position): trả về mã ascii của ký tự vị trí đó
//10. nối 2 chuỗi 
var text1 ="Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
// 11. đệm vào đầu và cuối của một string
var nameH = "5";
nameH = nameH.padStart(4, '0'); //nameH = nameH.padEnd(4, '0');

console.log(nameH);

//newString = string.replace(/\s+/g,' ').trim(); : xoá bỏ tất cả các khoảng trắng thừa trong chuỗi