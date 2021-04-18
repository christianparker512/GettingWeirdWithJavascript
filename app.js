// var a = 'Hello World';
//
// function b(){
//  console.log('Called b!');
// }
//
// b();
// console.log(a);

// var a = "defined";
// console.log(a);
//
// if (a === undefined) {
//   console.log('a is undefined!');
// }
// else {
//   console.log ('a is defined');
// }

// function b(){
//   console.log('Called b!');
// }
// b();
// console.log(a);
// var a = 'Hello World!';
// console.log(a);


// function b() {
//
//   console.log(myVar);
// }
//
// function a(){
//   var myVar =2;
//   console.log(myVar);
//   b();
// }
// var myVar =1;
// console.log(myVar);
// a();
// console.log(myVar);


//long running function
// function waitThreeSeconds(){
//   var ms = 3000 + new Date().getTime();
//   while (new Date() <ms){}
//   console.log('finished function');
// }
// function clickHandler(){
//   console.log('clickevent!');
// }
// //listen for the click event
// document.addEventListener('click', clickHandler);
//
// waitThreeSeconds();
// console.log('finished execution');

var a = 3+4;
console.log(a);
//
// // prefix noation
// +3 5;
// //postfix notation
// 3 5+;

var a = 3 + 4 * 5;
console.log(a);

var d = 2, e = 3, f = 5;
d = e = f;
console.log(d);
console.log(e);
console.log(f);
// These will all be 5 do to associativity.

// var a = 1, b = '2';
// console.log(a+b);
//
// Number("3");
//
//
// var a =0;
// var b = false;
//
// if (a ===b){
//   console.log('They are equal!');
// } else {
//   console.log('Nope, not equal.');
// }
//
// function greet (name){
//   console.log('Hello ' + name);
//
// }
// greet();

// console.log(libraryName);

var person = new Object();
// Setting the firstname property using brackets
person ["firstname"] = "Christian";
person ["lastname"] = "Parker";

var firstNameProperty = "firstname";
console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main street";
person.address.city = "San Antonio";
person.address.state = "Texas";

console.log(person["address"]["state"]);

// object literals
// This is the same as a new object
// var person = {};
// console.log(person);
//
// var Christian = {
//   firstname: 'Christian',
//   lastname: 'Parker',
//   address: {
//     street: '111 Main Street',
//     city: 'San Antonio',
//     state: 'Texas'
//   }
// };
//
// console.log(person);
//
// function greet (person){
//   console.log ('Hi ' + person.firstname);
//
// }
// greet(Christian);
// greet({firstname: 'Lisa', lastname: 'Parker'});
//
// Christian.address2 = {
//   street: ' 333 Second Street'
// }
//
//
// var salutations = 'Hello!';
// var salutations = 'Hola!';
// console.log(salutations);
//
// var english = {};
// var spanish = {};
//
// english.salutations = 'Hello!';
// spanish.saluations = 'Hola';
// console.log(english);
// console.log(spanish);
//
// var english = {
//   greetings: {
//     basic: 'Hello!'
//   }
// };
// var spanish = {
//   greetings: {
//     basic: 'Hola!'
//   }
// };
// // JSON - javascript object Notation and object literals
//
// var objectLiteral = {
//   firstname: 'Lisa',
//   lastname: 'Parker'
// }
// console.log(objectLiteral);
//
//
// var objectLiteral2 = {
//   firstName: 'Christian',
//   isAProgrammer: true
// }
// console.log(JSON.stringify(objectLiteral2));

// var jsonValue = JSON.parse ('{
//     "firstname": "Christian",
//     "isAProgrammer: true"}');
// // //
// console.log(jsonValue);


// function greet (){
//   console.log('hi');
// }
// greet.language ="english";
// console.log(greet);
//  var a;
//
//  function greet(){
//    console.log('hi')
//  }
//
//  var anonymousGreet = function (){
//    console.log('hi');
//  }
//  anonymousGreet();


 // by value
//  var a = 3;
//  var b;
//  b = a;
//  a = 2;
//  console.log(a);
//  console.log(b);
//
//  // By reference (all objects(including functions));
// //once you change one, you change all by reference.
//  var c = {greeting: 'hi'};
//  var d;
//  d = c;
//  c.greeting = 'hello';
//  console.log(c);
//  console.log(d);
//
//
//  //by reference (even as parameters)
// function changeGreeting(obj){
//   obj.greeting = 'Hola'; //mutate
// }
// changeGreeting(d);
// console.log(c);
// console.log(d);
//
//
// //equals operator sets up new memory space (new address)
// c = { greeting: 'howdy'};
// console.log(c);
// console.log(d);

// function a(){
//   console.log(this);
//   this.newvariable = 'hello';
// }
//
// var b = function() {
//   console.log(this);
// }
// a();
// console.log(newvariable);
// b();
// var c = {
//   name: 'The c object',
//   log: function(){
//     var self = this;
//
//     self.name = 'Updated c object';
//     console.log(self);
//
//     var setname = function(newname){
//       self.name = newname;
//     }
//     setname('Updated again! The c object');
//     console.log(self);
//   }
// }
// c.log();

var arr = [
  1,
  false,
  {
    name: 'Christian',
    address: '46 westerleigh'
  },
  function(name){
  var greeting = 'Hello';
  console.log(greeting + name);
  },
  "Hello"
];
console.log(arr);
arr[3](arr[2].name);

function greet(firstname, lastname, language){

  language = language || 'en';

  if (arguments.length === 0){
    console.log('Missing parameters!');
    console.log('--------------');
    return;
  }

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log('arg 0: ' + arguments [0]);
  console.log('---------------');
}
greet();
greet('Quincy');
greet('Quincy', 'parker');
greet('Quincy', 'parker', 'dog');


function greet2 (firstname, lastname, language){
  language = language || 'en';

  if (language === 'en') {
    console.log('Hello ' + firstname + ' ' + lastname);
  }
  if (language === 'es') {
    console.log('Hola ' + firstname + ' ' + lastname);
  }
}
function greetEnglish(firstname, lastname){
  greet2(firstname, lastname, 'en');
}
function greetSpanish(firstname, lastname){
  greet2(firstname, lastname, 'es');
}
greetEnglish('John', 'Doe', 'en');
greetSpanish('Cristian', 'Parker', 'es');


function getPerson(){
  return {
    firstname: 'Christian'
  }
}
console.log(getPerson());


var firstname, lastname, language;

var person = {
  firstname: 'Christian',
  lastname: 'Parker is Creative'
}
console.log(person);

//function statement
function greet3(name){
  console.log('Hello ' + name);
}
greet3('Chris');

//using a function literal
var greetFunct = function(name){
  console.log('Hello ' + name);
};
greetFunct('Chris');

//Immediate invoked functional expression
var greetin4 = function(name){
  console.log('Hello '+ name);
}
greetin4();

var firstname = "Christian";
(function(name){

  var greeting = 'Inside IIFE: Hello';
  console.log(greet + ' ' + name);
}(firstname));

function buildFunctions() {

  var arr = [];

  for (var i = 0; i < 3; i++) {

    arr.push(
      function() {
        console.log(i);
      }
    )
  }

  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

//This bucket will post in the console the value of i as it loops through the for loop.
function buildFunctions2() {

  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        }
      }(i))
    )

  }

  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

function sayHiLater(){
  var greeting = 'Hi!';
  setTimeout(function() {
    console.log(greeting);
  }, 3000);
}
sayHiLater();

// jQuery uses function expressions and first class functions

// $("button").click(function(){

// });

// function tellMeWhenDone(callback){
//   var a = 1000;
//   var b = 2000;
//
//   callback();
// }
// tellMeWhenDone(function(){
//   alert('I am Done!');
// });
//
// var person = {
//   firstname: 'Christian',
//   lastname: 'parker',
//   getFullName: function() {
//
//     var fullname = this.firstname + ' ' + this.lastname;
//     return fullname;
//
//   }
// }
//
// var logName = function(lang1, lang2) {
//
//   console.log('Logged: ' + this.getFullName());
//   console.log('Arguments: ' + lang1 + ' ' + lang2);
//   console.log('-----------');
//
// }
//
// var logPersonName = logName.bind(person);
// logPersonName('en');
//
// logName.call(person, 'en', 'es');
// logName.apply(person, ['en', 'es']);
//
// (function(lang1, lang2) {
//
//   console.log('Logged: ' + this.getFullName());
//   console.log('Arguments: ' + lang1 + ' ' + lang2);
//   console.log('-----------');
//
// }).apply(person, ['es', 'en']);
//
// // function borrowing
// var person2 = {
//   firstname: 'Lisa',
//   lastname: 'Parker'
// }
//
// console.log(person.getFullName.apply(person2));
//
// // function currying
// function multiply(a, b) {
//   return a*b;
// }
//
// var multipleByTwo = multiply.bind(this, 2);
// console.log(multipleByTwo(4));
//
// var multipleByThree = multiply.bind(this, 3);
// console.log(multipleByThree(4))
//
//
// //functional programming
// var arr1=[1,2,3];
// console.log(arr1);
//
// var arr2 = [];
// for (var i=0; i <arr1.length; i++) {
//   arr2.push(arr1[i] *2);
//
// }
// console.log(arr2);
//
// function mapForEach(arr, fn) {
//
//   var newArr = [];
//   for (var i=0; i < arr.length; i++) {
//     newArr.push(
//       fn(arr[i])
//     )
//   };
//
//   return newArr;
// }
//
// var arr1 = [1,2,3];
// console.log(arr1);
//
//
// var arr2 = mapForEach(arr1, function(item) {
//   return item * 2;
// });
// console.log(arr2);
//
//
// var arr3 = mapForEach(arr1, function(item) {
//   return item > 2;
// });
// console.log(arr3);
//
//
// var checkPastLimit = function(limiter, item) {
//   return item > limiter;
// }
// var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
// console.log(arr4);
//
//
// var checkPastLimitSimplified = function(limiter) {
//   return function(limiter, item) {
//     return item > limiter;
//   }.bind(this, limiter);
// };
//
// var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
// console.log(arr5);
//
//
// var person = {
//   firstname: "default",
//   lastname: "default",
//   getFullName: function(){
//     return this.firstname + ' ' + this.lastname;
//   }
// }
//
// var christian = {
//   firstname: 'Christian',
//   lastname: 'Parker'
// }
//
// //Don't do this ever! for demo purposes only
// christian.__proto__ = person;
// console.log(christian.getFullName());
// console.log(christian.firstname);
//
// var lisa = {
//   firstname: 'Lisa'
// }
//
// lisa.__proto__ = person;
// console.log(lisa.getFullName());
//
// for (var prop in christian) {
//   if( christian.hasOwnProperty(prop)){
//   console.log(prop + ': ' + christian[prop]);
// }
// }
//
function People(firstname, lastname){
  console.log(this);
  this.firstname = firstname
  this.lastname = lastname;
  console.log('This function is invoked');
}

var vince = new People('vince', 'parker');
console.log(vince);

var baxter = new People('baxter', 'parker');
console.log(baxter);

var a = new Number(3);

Array.prototype.myCustomerFeature = "cool!";
var arr = ['chris', 'quincy', 'baxter'];
for (var prop in arr) {
  console.log(prop + ": " + arr[prop]);
}

var personperson = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function(){
    return 'Hi ' + this.firstname;
  }
}

var christian = Object.create(personperson);
christian.firstname = "Christian";
christian.lastname = "Parker";
console.log(christian);

// polyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
        + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return 'Hi ' + this.firstname;
  }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);

//typeof

var l = 3;
console.log(typeof l);

var m = "hello";
console.log(typeof m);

var n = {};
console.log(typeof n);

var o = [];
console.log(typeof o);
console.log(Object.prototype.toString.call(o));

function Student(name){
  this.name=name;
}
var p = new Student ('Pia');
console.log(typeof p);
console.log(p instanceof Student);

console.log(typeof undefined);
console.log(typeof null);

var z = function(){};
console.log(typeof z);


var q = $("ul.people li");
console.log(q);

var g = G$('Christian', 'Parker');

g.greet().setLang('es').greet(true).log();
