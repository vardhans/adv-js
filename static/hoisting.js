


/*
//Test Hoisting
a;
b;
var a = b;
var b = 2;
console.log(b); 2
console.log(a); error


console.log(a(1)); //39
function a(foo){
  if(foo > 20) return foo;
  return b(foo+2);
}
function b(foo){
  return c(foo) + 1;
}
function c(foo){
  return a(foo*2);
}

function foo(bar) {
  if(bar) {
    console.log(baz);
    let baz = bar;
  }
}
foo("bar");

function foo(bar) {
  if(bar) {
    console.log(baz);
    var baz = bar;
  }
}
foo("bar");
*/
