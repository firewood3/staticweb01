// [[Call]], [[Construct]], non-constructor
function foo() {}
const bar = function () {};

const baz = {
  x: function () {}
};

console.log(new foo())
console.log(new bar());
console.log(new baz.x());

const arrow = () => {};

// console.log(new arrow());
const obj = {
  /*x: () => {

  }*/
  // x() {}
}
// console.log(new obj.x());
