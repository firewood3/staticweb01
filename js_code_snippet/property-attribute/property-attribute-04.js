/*
  데이터 프로퍼티와 접근자 프로퍼티

  프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.
  데이터 프로퍼티(data property): 키와 값으로 구성된 일반적인 프로퍼티다.
  접근자 프로퍼티(accessor property): 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나
  저장할 때 호출되는 접근자 함수(accessor function)으로 구성된 프로퍼티다.
 */

const obj = {
  name: 'hong',
  age: 33
};
console.log(Object.getOwnPropertyDescriptors(obj))

for (const data in obj) {
  console.log(obj[data])
  console.log(data)
}

for (const data in Object.keys(obj)) {
  console.log(Object.keys(obj)[data]);
  console.log(data);
}
console.log(Object.keys(obj));
