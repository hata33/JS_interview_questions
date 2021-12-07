// let person = new Object();
// person.name = 'Nicholas';
// person.age = 29;
// person.job = 'programmer'
// person.sayName = function () {
//   console.log(this.name);
// };

// let person1 = {
//   name: "Nicholas",
//   age: 29,
//   job: 'Software Engineer',
//   sayName () {
//     console.log(this.name);
//   }
// }

// let person = {};
// Object.defineProperty(person, "name", {
//   writable: false,
//   value: "Nicholas"
// });
// console.log(person.name);
// person.name = "Greg";
// console.log(person.name)  // Nichalas

// ######
// let person = {}
// Object.defineProperty(person, "name", {
//   configurable: false,
//   value: "hata gbd"
// })
// console.log(person.name);
// delete person.name;
// console.log(person.name);

// ######
// let book = {
//   year: 2017,
//   edition: 1
// };
// Object.defineProperty(book, "year", {
//   get () {
//     return this.year_;
//   },
//   set (newValue) {
//     if (newValue > 2017) {
//       this.year_ = newValue;
//       this.edition += newValue -2017;
//     }
//   }
// })
// book.year = 2018;
// console.log(book.edition);

// #########
// let book = {};
// Object.defineProperty(book, {
//   year_: {
//     value: 2017
//   },
//   edition: {
//     value: 1
//   },
//   year: {
//     get () {
//       return this.year_;
//     },
//     set (newValue) {
//       if (newValue > 2017) {
//         this.year_ = newValue;
//         this.deition += newValue - 2017;
//       }
//     }
//   }
// });
// book.year = 2018;
// console.log(book.edition);

// 读取属性的特性
// let book = {};
// Object.defineProperties(book, {
//   year_: {
//     value: 2017
//   },

//   edition: {
//     value: 1
//   },
//   year: {
//     get: function () {
//       return this.year_;
//     },
//     set: function () {
//       if (newValue > 2017) {
//         this.year_ = newvalue;
//         this.edition += newValue - 2017;
//       }
//     }
//   }
// })

// let descriptor_ = Object.getOwnPropertyDescriptor(book, "year_");
// console.log(descriptor_.value);
// console.log(descriptor_.configurable);
// console.log(typeof descriptor_.get);
// let descriptor = Object.getOwnPropertyDescriptor(book, "year");
// console.log(descriptor.value);
// console.log(descriptor.enumerable);
// console.log(typeof descriptor.get);

// let student = { name: "xiaoming" }
// let stu = Object.getOwnPropertyDescriptor(student, "name");
// console.log(stu.value);
// console.log(stu.configurable);

// console.log(Object.getOwnPropertyDescriptors(book))
// {
// year_: {
//   value: 2017,
//     writable: false,
//       enumerable: false,
//         configurable: false
// },
// edition: { value: 1, writable: false, enumerable: false, configurable: false },
// year: {
//   get: [Function: get],
//     set: [Function: set],
//       enumerable: false,
//         configurable: false
// }
// }

// 合并对象
// let src = { a: 1, b: 2 }
// let dest = {}
// let result = Object.assign(dest, src)
// console.log(dest)
// console.log(dest === result)
// console.log(dest !== src)

/**
 * 多个源对象
 */
// console.log(dest);
// var dest = {}
// result = Object.assign(dest, { a: 'gakki' }, { b: 'hata' })
// console.log(result)

/**
 * 获取函数与设置函数
 */
// dest = {
//   set a (val) {
//     console.log(`Invoked dest setter with param ${val}`)
//   }
// }
// src = {
//   get a () {
//     console.log('Invoked src getter')
//     return 'foo'
//   }
// };

// Object.assign(dest, src);
// console.log(dest);
// Invoked src getter
// Invoked dest setter with param foo
// { a: [Setter] }

/**
 * 覆盖属性
 */
// let dest, src, result;
// dest = { id: 'dest' }
// result = Object.assign(dest, { id: 'src1', a: 'foo' }, { id: 'src2', b: 'bar' });
// console.log(result)

// dest = {
//   set id (x) {
//     console.log(x)
//   }
// };

// Object.assign(dest, { id: 'first' }, { id: 'second' }, { id: 'third' });

/**
 * 对象引用
 */
// dest = {};
// src = { a: {} };
// Object.assign(dest, src);
// console.log(dest);
// console.log(dest.a === src.a)  //true

/**
 * 错误处理
 */
// dest = {}
// src = {
//   a: 'foo',
//   get b () {
//     // Object.assign() 在调用这个获取函数是会抛出错误
//     throw new Error();
//   },
//   c: 'bar',
// }
// try {
//   Object.assign(dest, src);
// } catch (e) { }
// // Object.assign()没办法回滚已完成的修改
// // 因此在抛出错误之前，目标对象上已经完成的修改会继续存在
// console.log(dest); //{ a: 'foo' }

// 对象标识及相等判定
// console.log(true === 1);
// console.log({} === {})
// console.log('2' === 2)

// console.log(+0 === -0);
// console.log(+0 === 0)
// console.log(-0 === 0)

// console.log(NaN === NaN);
// console.log(isNaN(NaN));

// function recursivelyCheckEqual (x, ...rest) {
//   console.log(rest)
//   return Object.is(x, rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest))
// }
// console.log(recursivelyCheckEqual(1, 1, 1, 1)) //true
// console.log(Object.is(NaN, NaN)) //true

/**
 * 属性值简写
 */
// let name = 'js'
// let person = {
//   name: name
// }
// console.log(person)

// function makePerson (name) {
//   return {
//     name
//   }
// }

// let person1 = makePerson('js')
// console.log(person1)

/**
 * 可计算属性
 */
// const nameKey = 'name'
// const ageKey = 'age'
// const jobKey = 'job'
// let person = {}
// person[nameKey] = 'Matt'; //使用中括号来存取属性，在括号内使用属性名的字符串形式，可以通过变量访问属性
// person[ageKey] = 27;
// person[jobKey] = 'Software engineer';
// console.log(person);
// // 有了可计算属性，可以在对象字面量中完成动态属性赋值。中括号中的属性键作为js表达式来求值：
// const nameKey1 = 'name'
// const ageKey1 = 'age'
// const jobKey1 = 'job'
// let person1 = {
//   [nameKey1]: 'Matt',
//   [ageKey1]: 27,
//   [jobKey1]: 'Software engineer',
// }
// console.log(person1)

/**
 * 方法名简写
 */
// let person = {
//   sayName: function (name) {
//     console.log(`My name is ${name}`)
//   }
// }
// person.sayName('hata')
// let person1 = {
//   sayName (name) {
//     console.log(`My name is ${name}`)
//   }
// }
// person1.sayName('hata')

/**
 * 解构赋值
 */
// let person = {
//   name: 'hata',
//   age: 22
// };
// let { name, age, height = 180 } = person;
// console.log(name, age, height) // hata 22 180

// let person = {
//   name: 'hata',
//   age: 22
// };
// let name, age, height;
// ({ name, age, height= 180 } = person)
// console.log(name, age, height) // hata 22 180

/**
 * 嵌套结构
 */
// let person = {
//   name: 'Matt',
//   age: 27,
//   job: {
//     title: 'Software engineer'
//   }
// };
// let personCopy = {};
// ({
//   name: personCopy.name,
//   age: personCopy.age,
//   job: personCopy.job
// } = person);
// // person.job.title = 'Hacker'
// console.log(person)
// console.log(personCopy);
// let { job: { title } } = person;
// console.log(title)

/**
 * 部分解构
 */
// let person = {
//   name: 'Matt',
//   age: 27
// };
// let personName, personBar, personAge;
// try {
//   ({ name: personName, foo: { bar: personBar }, age: personAge } = person);
// } catch (e) { }
// console.log(personName, personBar, personAge); // Matt undefined undefined 开始的赋值成功，而后面的赋值出错，则整个结构赋值只会完成一部分

/**
 * 参数上下文匹配
 */
// 在函数参数列表中也可以进行解构赋值
// let person = {
//   name: 'Matt',
//   age: 27
// }
// function printPerson (foo, { name, age }, bar) {
//   console.log(arguments);
//   console.log(name, age);
// }
// function printPerson2 (foo, { name: personName, age: personAge }, bar) {
//   console.log(arguments);
//   console.log(personName, personAge);
// }
// printPerson('1st', person, '2nd');
// printPerson2('1st', person, '2nd');

// [Arguments] { '0': '1st', '1': { name: 'Matt', age: 27 }, '2': '2nd' }
// Matt 27


/**
 * 创建对象
 */
// 工厂模式
// function createPerson (name, age, job) {
//   let o = new Object();
//   o.name = name;
//   o.age = age;
//   o.job = job;
//   o.sayName = function () {
//     console.log(this.name);
//   };
//   return o;
// }
// let person1 = createPerson("Nicholas", 29, "Software Engineer");
// let person2 = createPerson("Greg", 27, "Doctor");
// console.log(person2)

// 使用构造函数
// function Person (name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function () {
//     console.log(this.name);
//   };
// }
// // let person1 = new Person("Nicholas", 29, "Software Engineer");
// // let person2 = new Person("Greg", 27, "Doctor");

// // console.log(person1.constructor === Person)

// let person = new Person('hata', 22, 'Sofware Engineer');
// person.sayName();

// Person('greg', 27, "Doctor");
// global.sayName();// 没有明确 this值时，this指向全局对象

/**
 * 原型模式
 */
// function Person () { }
// // // let Person = function() { }// 函数表达式
// Person.prototype.name = 'hata';
// // Person.prototype.age = 22;
// // Person.prototype.job = 'Software Engineer';
// // Person.prototype.sayName = function () {
// //   console.log(this.name)
// // }
// // let person1 = new Person();
// // person1.sayName()

// // let person2 = new Person()
// // person2.sayName()

// // console.log(person1.sayName === person2.sayName) //true


// // function Person () { }
// console.log(typeof Person.prototype);
// console.log(Person.prototype);
// console.log(Person.prototype.constructor === Person);  //原型对象自动获得一个名为 constructor 的属性，指回与之关联的构造函数。

// console.log(Person.prototype.__proto__ === Object.prototype); // 脚本中没有访问这个[[Prototype]]特性的标准方式，但 Firefox、Safari 和 Chrome会在每个对象上暴露__proto__属性，通过这个属性可以访问对象的原型。(Object.prototype)
// console.log(Person.prototype.__proto__.constructor === Object); //对象 Object 的原型的 constructor ，指向与之关联的构造函数 (Object)
// console.log(Person.prototype.__proto__.__proto__ === null); // Object 原型的原型是 null  / 正常的原型链都会终止于 Object 的原型对象

// console.log(Person.prototype.__proto__); // 构造函数的原型的隐式原型 为 对象的原型

// let person1 = new Person(), person2 = new Person();
// /**
//  * 构造函数(Person)、原型对象（Person.prototype）和实例 (person1) 是 3 个完全不同的对象：
//  */
// console.log(person1 !== Person);
// console.log(person1 !== Person.prototype)
// console.log(Person.prototype !== Person)

// // 实例的隐式原型 为 构造函数的原型对象 
// console.log(person1.__proto__ === Person.prototype); //实例通过 __proto__ 链接到原型对象，它实际上指向隐藏特性 [[Prototype]]。 构造函数通过 prototype 属性链接到原型对象
// console.log(person1.__proto__.constructor === Person); // 实例与构造函数没有直接联系，与原型对象有直接联系

// // 同一个构造函数创建的两个实例共享同一个原型对象
// // console.log(person1.getPrototypeOf() === person2.__proto__) //true
// console.log(Object.getPrototypeOf(person1) === person2.__proto__) //true  Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。

// // instanceof 检查实例的原型链中是否包含指定构造函数的原型：
// console.log(person1 instanceof Person);
// console.log(person1 instanceof Object);
// console.log(Person.prototype instanceof Object);

// console.log(Person.prototype.isPrototypeOf(person1)) //isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。参数：object 在该对象的原型链上搜寻
// console.log(Person.prototype.isPrototypeOf(person2))

// console.log(Object.getPrototypeOf(person1) == Person.prototype); //Object.getPrototypeOf()，返回参数的内部特性[[Prototype]]的值
// console.log(Object.getPrototypeOf(person1).name); 


// let biped = {
//   numLegs: 2
// };
// let person = {
//   name: 'Matt'
// }

// Object.setPrototypeOf(person, biped) //setPrototypeOf()方法，可以向实例的私有特性[[Prototype]]写入一个新值 //影响代码性能。
// console.log(person.name)
// console.log(person.numLegs)
// console.log(Object.getPrototypeOf(person) === biped) //true


// 为了避免使用 Object.setPrototypeOf()可能造成的性能下降，可以通过Object.create()来创建一个新对象，同时为其指定原型
// let biped = {
//   numLegs: 2
// }
// let person = Object.create(biped);  // Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。也就 [[Prototype]]
// person.name = 'hata';

// console.log(person.name)
// console.log(person.numLegs)
// console.log(Object.getPrototypeOf(person) === biped);

function Person () { }
Person.prototype.name = 'hata'
Person.prototype.age = 22
Person.prototype.job = 'Software Engineer'
Person.prototype.sayName = function () {
  console.log(this.name)
}
let person1 = new Person();
let person2 = new Person();

// person1.name = 'gakki'
// console.log(person1.name) // 'gakki' 来自实例
// console.log(person2.name) //'hata' 来自原型

// delete person1.name; // 删除实例上的属性，解除了对原型上的同名属性的 '遮蔽'
// console.log(person1.name) // 'hata' 来自原型

// console.log(person1.hasOwnProperty('name')); //false //hasOwnProperty() 方法会返回一个布尔值，指示 对象自身属性 中是否具有指定的属性（也就是，是否有指定的键）。
// person1.name = 'gakki'
// console.log(person1.hasOwnProperty('name')) // true
// console.log(person2.hasOwnProperty('name')) // false
// delete person1.name;
// console.log(person1.hasOwnProperty('name')) // false

/**
 * 原型和 in 操作符
 */

// console.log('name' in person1) //在单独使用时，in 操作符会在可以通过对象访问指定属性时返回 true，无论该属性是在实例上还是在原型上。
// person1.name = "Greg";
// console.log(person1.name); // "Greg"，来自实例
// console.log(person1.hasOwnProperty("name")); // true 
// console.log("name" in person1); // true 
// console.log(person2.name); // "Nicholas"，来自原型
// console.log(person2.hasOwnProperty("name")); // false 
// console.log("name" in person2); // true 
// delete person1.name;
// console.log(person1.name); // "Nicholas"，来自原型
// console.log(person1.hasOwnProperty("name")); // false 
// console.log("name" in person1); // true 

// 确定属性是否在于原型上， 判断依据：不在自身实例上，在原型上
// function hasPrototypeProperty (object, name) {
//   return !object.hasOwnProperty(name) && (name in object);
// }

for (var prop in person1) {
  console.log("obj." + prop + " = " + person1[prop]);
}

console.log(Object.keys(Person.prototype)) //[ 'name', 'age', 'job', 'sayName' ]
console.log(Object.keys(person1.__proto__)) //[ 'name', 'age', 'job', 'sayName' ]



