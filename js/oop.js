// // Constructor Function

// class User {
//   static count = 0;

//   //Properiets ==>
//   constructor(id, userName, salary) {
//     this.id = id;
//     this.userName = userName || "Unkonown";
//     this.salary = salary < 6000 ? salary + 500 : salary;
//     User.count += 1;
//     this.msg = function () {
//       return `Hello ${this.userName} and salary is ${this.salary}`;
//     };
//   }
//   //Methods==>
//   // describe
//   msg() {
//     return `Hello ${this.userName} and salary is ${this.salary}`;
//   }
//   //update Name
//   setName(nweName) {
//     return (this.userName = nweName);
//   }
//   //get Name
//   GetName() {
//     return this.userName;
//   }

//   //static method
//   static GetMember() {
//     return `${this.count} Members Created`;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(200, "Hassan", 4000);
// let userThree = new User(300, "Mahmoud", 7000);

// console.log(userOne.salary + " $");
// console.log(userTwo.salary + " $");
// console.log(userThree.salary + " $");

// console.log(userOne.msg());
// console.log(userOne.msg());

// console.log(userOne.userName);
// userOne.setName("Osama Elzero");
// console.log(userOne.userName);

// console.log(userOne.GetName());

// console.log(User.GetMember());

// ###################################################################################################################
// inheritance

// class Admin extends User {
//   constructor(id, userName, salary, permation) {
//     super(id, userName, salary);
//     this.p = permation;
//   }
// }

// let adminOne = new Admin(79, "hazem", 5000, 1);

// console.log(adminOne.id);
// console.log(adminOne.p);
// console.log(adminOne.msg());
// console.log(adminOne.GetName());
// ###################################################################################################################3
//Encapsulation
/*
- help to hide Implementation and details of data and gurads it form illegal access . 
- help to achieve the goal or target without revealing details of data.
- reduce human errors .
- make the app more flexible and manageable .
- simplifies the app .
- make the app more security.

*/
// class Person {
//   #sal;
//   constructor(id, us, salary) {
//     this.i = id;
//     this.u = us;
//     this.#sal = salary;
//   }
//   getSal() {
//     return parseInt(this.#sal);
//   }
// }

// let personOne = new Person(100, "Mahmoud", "10000 E.L");
// console.log(personOne.getSal() * 0.3);

// class Gender extends Person {
//   constructor(id, us, salary, voice) {
//     super(id, us, salary);
//     this.v = voice;
//   }
// }
// let man = new Gender(101, "ahmed", 15000, "hard");
// console.log(man.u);
// console.log(man.getSal() * 0.3);

// ###################################################################################################################3
//Prototype

// let user = "The Boot";
// //add a new method  into Prototype builtin of js and use it
// String.prototype.addDotBF = function (params) {
//   return `.${this}.`;
// };

// console.log(user.addDotBF()); // result =>  .the Boot.

// ###################################################################################################################3
//Object meta data

// const myObj = {
//   a: 1,
//   b: 2,
// };

// &&&&&&&&&&&&&&&&&&&&&&&
//redefine one property
// Object.defineProperty(myObj, "c", {
//   writable: true,
//   enumerable: true,
//   configruable: true,
//   value: 3,
// });

// console.log(myObj);
// for (let i in myObj) {
//   console.log(i, myObj[i]);
// }

// &&&&&&&&&&&&&&&&&&&&&&&
//redefine multiple property

// Object.defineProperties(myObj, {
//   c: {
//     value: 3,
//     configurable: true,
//   },
//   d: {
//     value: 4,
//     configurable: true,
//   },
// });

// console.log(myObj);
// console.log(Object.getOwnPropertyDescriptor(myObj, "c"));
// console.log(Object.getOwnPropertyDescriptors(myObj));
