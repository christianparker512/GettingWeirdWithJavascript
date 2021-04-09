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

var a = 1, b = '2';
console.log(a+b);

Number("3");


var a =0;
var b = false;

if (a ===b){
  console.log('They are equal!');
} else {
  console.log('Nope, not equal.');
}

function greet (name){
  console.log('Hello ' + name);

}
greet();
