// let arr = ['foo', 'bar'];

// console.log(arr[Symbol.iterator]);
// let iter = arr[Symbol.iterator]();
// console.log(iter);

// let person = new Object();
// person.name = 'Nicholas';
// person.age = 29;
// person.job = 'programmer'
// person.sayName = function () {
//   console.log(this.name);
// };

let person1 = {
  name: "Nicholas",
  age: 29,
  job: 'Software Engineer',
  sayName () {
    console.log(this.name);
  }
}