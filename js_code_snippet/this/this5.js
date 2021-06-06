function Robot() {
  this.name = 'jin'
  const name = 'hong';
  const sayName = () => {
    console.log(this)
    console.log(this.name)
  }

  // new를 빼고 함수만 호출하면 this는 글로벌
  // new를 포함하고 함수를 호출하면 this는 Robot {name:'jin'}
  sayName();


  return {
    name: 'james',
    sayName: sayName // this는 글로벌
  }
}

const robot = new Robot();
robot.sayName()
