//Test 1 Lexical Scope
/*
var obj = {
  a:2,
  b:3,
  c:4
};

// obj.a = obj.b +obj.c;
// obj.c = obj.b = obj.a;

with (obj) {
  a = b-c;
  d = b-a;
  d = 3;
}
console.log(obj.d);
console.log(d);
*/
/*
//Test 2 - Lexical Scope.
var bar = "bar";
function foo(str) {
  eval(str);
  console.log(bar);
}
foo("var bar = 42;");
*/

/*
//Test IIFE - Immediatly Invoked Function Expression.

var foo = "foo";
(function() {
  var foo = "foo2";
  console.log(foo);
})();
console.log(foo);

var foo = "foo";
(function bar(bar) {
  var foo = bar;
  console.log(foo);
})(foo);
console.log(foo);
*/

/*
// Test Block Scope

(function foo(){
  var bar = "bar";
  for(let i=0; i<bar.length; i++){
    console.log(bar.charAt(i));
  }
  console.log(i);
})();

(function foo(){
  var bar = "bar";
  for(var i=0; i<bar.length; i++){
    console.log(bar.charAt(i));
  }
  console.log(i);
})();
*/