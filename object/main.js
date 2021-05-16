var myClass = "class";
var myInfo = {
    name: "Hung Nguyen",
    age: 18,
    address: "thanh hoa",
    "my-birthday": "24-08-2001", // cach khai bao key co  ky tu -
    [myClass]: "CT4A",
    // khai báo một function trong object
    getName: function() {
        return this.name;
    },
};
myInfo.email = "hungdim2001@gmai.com"; // them mot key va value cho object
myInfo["my-school"] = "act";
var myKey = " address";
console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo[myKey]); // truyền dưới dạng biến
console.log(myInfo["age"]); // cach 2
console.log(myInfo.class);
//cách xoá key và value trong object
delete myInfo.class;
console.log(myInfo);
console.log(myInfo.getName());