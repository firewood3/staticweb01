function Robot () {
  this.name = '111'
  // console.log(this)
  const name = 'hong';

  return {
    name: 'james',
    sayName: function () {
      console.log(this) // {name:james,sayName:function,sayName2:function}
      console.log(name) // hong
      console.log(this.name) // james
    },
    sayName2: ()=> {
      console.log(this) // global
      console.log(name) // hong
      console.log(this.name) // 111
    }
  }
}

const robot = Robot();
robot.sayName();
robot.sayName2();
console.log(name) // 111
