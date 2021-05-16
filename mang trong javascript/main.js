var arr = ["Javascript", "PHP", "java", "C"];
// 1.to string
console.log(arr.toString());
// 2. join
console.log(arr.join(""));
// 3.pop: xoá đi phần tử cuối mảng và trả về phần tử đã xoá
console.log(arr.pop());
console.log(arr);
//4.push: thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
console.log(arr.push(" c++", "c#"));
console.log(arr);
//5.shift: xoá đi phần tử đầu mảng và trả về phần tử đó
console.log(arr.shift());
console.log(arr);
//6.unShift: thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
console.log(arr.unshift("javascript", 'xxx'));
console.log(arr);
// 7.splicing: dùng để xoá,cắt, trèn phần tử mới vào mảng
// arr.splice(index,số lượng phần tử muốn xoá, )
arr.splice(1, 2);
console.log(arr);
// arr.splice(index,0, 'dart','xx'): chèn dart và xx vào vị trí index, từ tham số thứ 3 trở đi là các phần tử chèn vào
arr.splice(1, 0, 2, "python");
console.log(arr);
// 8.concat(): nối 2 array
var arr2 = ["a", "b", "v", 2, 3];
var sum = arr.concat(arr2);
console.log(sum);
//9. slice: cắt các phần tử trong mảng
console.log(sum.slice(3, 5));
// 10.sort arr.sort(): sắp xếp số tăng dần và sắp theo bảng chữ cái anpha B
// arr.reverse(): sắp xếp theo chiều đảo ngược