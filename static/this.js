// this

/*
function foo() {
  "use strict";
  console.log(this.bar); // window in normal mode and undefined in stritmode.
}
var bar = "bar1";
var o2 = { bar: "bar2", foo: foo };
var o3 = { bar: "bar3", foo: foo };
foo(); //bar1 if not strict mode else error for undefined.
o2.foo(); //bar2
o3.foo(); //bar3

// 1 default binding:  global or undefined if strict mode.
// 2 implicit binding: object(context object) calling the function.

var o1 = {
  bar: "bar1",
  foo: function() {
    console.log(this.bar);
  }
};
var o2 = { bar: "bar2", foo: o1.foo };
var bar = "bar3";
var foo = o1.foo;

o1.foo(); //bar1
o2.foo(); //bar2
foo(); //bar3
*/
/*
function foo() {
  console.log(this.bar);
}
var bar = "bar1";
var obj = {bar : "bar2"};

foo(); //bar1
foo.call(obj); //bar2
foo.apply(); //bar1
foo.apply(obj) //bar2
// 3 explicit binding: at the call side use the caller if aplied explicitly.
*/

/*
function foo() {
  console.log(this.bar);
}
var obj = {bar: "bar"};
var obj2 = {bar: "bar2"};
var orig = foo;
foo= function() { orig.call(obj);};
foo(); //bar
foo.call(obj2); //bar
*/
/*
function bind(fn,o) {
  return function() {
    fn.call(o);
  };
}
function foo() {
  console.log(this.bar);
}
var obj = {bar: "bar"};
var obj2 = {bar: "bar2"};

//foo = bind(foo, obj);
foo = foo.bind(obj);

foo(); //bar
foo.call(obj2); //bar 
*/
// 4. hard binding. always reference the passed in call/apply/bind



/*
function foo(){
  this.baz = "baz";
  console.log(this.bar + " " + baz);
}
var bar = "bar";
var baz = new foo(); //undefined undefined //new triggres constructor call.
console.log(baz.baz);
// 1. brand new object is created.
// 2. object get linked to a different object.
// 3. brand new object will get bound as this for the function call.
// 4. if the function does not return anything then it will implicitly insert returnthis in the last statement of the method.
*/

// order of precedencs for this.

function something() {
  this.hello = "hello";
  console.log(this.hello, this.who);
}
var who = "global",foobar,bazdam,
    obj1 = {who: "obj1", something: something},
    obj2 = {who: "obj2"};

something(); // "hello" "global"
console.log(hello); // "hello" <-- OOPS!!

obj1.something(); // "hello" "obj1"
console.log(obj1.hello); // "hello"

obj1.something.call(obj2); // "hello" "obj2"
console.log(obj2.hello); // "hello"

foobar = something.bind(obj2);
foobar(); // "hello obj2"
foobar.call(obj1); // hello obj2

bazdam = new something(); // hello undefined
console.log(bazdam.hello) // hello

bazdam = new obj1.something(); // hello undefined
bazdam = new foobar(); // hello undefined


  // 1. Was function called with new? if so use that object.
  // 2. was the funciton called with call or apply or bind use the explict this passed in.
  // 3. was there an implicit binings rule . does it own or contain any context.?
  // 4. default to global object (except in strict mode it will be undefined in strict mode.)
