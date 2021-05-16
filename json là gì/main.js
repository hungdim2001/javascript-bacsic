/*
Json là gì:
1. là một định dạng dữ liệu ( chuỗi )
2.Javascript Object Notation
3.JSON:number, boolean, null, array, Object

mã hoá/ giải mã
encode/decode
stringify: từ javascript sang Json
parser: từ json sang javascript
*/
// var json= '["javascript","PHP"]';
var json = '{"name":"nguyen van hung", "age": "18"}';
var a = "1";
console.log(JSON.parse(json));
console.log(
  JSON.stringify({
    name: " hung nguyen ",
    age: " 18",
  })
);
