const animal = {walk: ()=>console.log('walk')};
const dog = {name: 'dog'};

// prototype과 set
console.log(dog.__proto);
dog.__proto = animal;
console.log(dog.__proto);

dog.__proto.walk();
