var array = ["php", "javascript", "java"];
// var [a, b, c] = array;
var [a, ...rest] = array;
console.log(a);
console.log(rest);
var course = {
  name: "java",
  price: 1000,
  description: "description of Course",
  children: {
    name: "c++",
  },
};
var {
  children: { name: childrenName },
} = course;
var { name, ...rest } = course;
console.log(childrenName);
console.log(rest);
var { description = "undefine" } = course;
console.log(description);
function logger(...params)//rest
 {
  console.log(params);
}
logger(1, 2, 3, 4, 5, 6);
// spread
var array1 = ["c++", "java", "javascript", "c#"];
var array2 = ["nodejs", "ReactJs", "laravel"];
var array3 = [...array1, ...array2];
console.log(array3);

var array = ["JavaScript", "PHP", "Ruby", "RectJS"];

function logger1(a, ...array) {
  // Đây là dùng toán tử rest khi là tham số
  for (var i = 0; i < array.length; ++i) {
    console.log(array[i]);
  }
  // console.log(a);
}

logger1(...array); // Đây là dùng toán tử Spread khi truyền vào đối số
