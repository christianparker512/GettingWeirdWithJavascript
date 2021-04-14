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
 var a;

 function greet(){
   console.log('hi')
 }

 var anonymousGreet = function (){
   console.log('hi');
 }
 anonymousGreet();


 // by value
 var a = 3;
 var b;
 b = a;
 a = 2;
 console.log(a);
 console.log(b);

 // By reference (all objects(including functions));
//once you change one, you change all by reference.
 var c = {greeting: 'hi'};
 var d;
 d = c;
 c.greeting = 'hello';
 console.log(c);
 console.log(d);


 //by reference (even as parameters)
function changeGreeting(obj){
  obj.greeting = 'Hola'; //mutate
}
changeGreeting(d);
console.log(c);
console.log(d);


//equals operator sets up new memory space (new address)
c = { greeting: 'howdy'};
console.log(c);
console.log(d);

function a(){
  console.log(this);
  this.newvariable = 'hell';
}

var b = function() {
  console.log(this);
}
a();
b();
