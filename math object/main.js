var courses = [
    { id: 1, name: "Javascript", coin: 1000 },
    { id: 2, name: "PHP", coin: 1200 },
    { id: 3, name: "Dart", coin: 1400 },
    { id: 4, name: "ruby", coin: 1400 },
    { id: 5, name: "ruby", coin: 1400 },
    { id: 6, name: "ruby", coin: 1400 },
];

function callback(course, index) {
    return course.name === "ruby";
}
Array.prototype.find2 = function(callback) {
    var resultObject = {};
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            resultObject = this[i];
            return resultObject;
        }
    }
};
console.log(courses.find2(callback));