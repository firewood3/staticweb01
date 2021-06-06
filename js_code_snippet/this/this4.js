function Robot() {
  this.name = 'jin';
  const name = 'hong'
  function sayName() {
    console.log(this);
    console.log(name);
    console.log(this.name);
  }

  // new가 없을때 this는 글로벌
  // new가 있을 때
  sayName();

  return {
    name: 'james',
    sayName: sayName // this는 {name:'james', sayName: function}
  }
}

const robot = Robot();
robot.sayName();
