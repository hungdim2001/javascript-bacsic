let showMessage = (message) => {
  console.log(message);
};
showMessage("hello word");
// return object
const sum = (a,b) => ({
  a: a,
  b: b,
});
console.log(sum('hello word',2));