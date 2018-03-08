/* definition
  Clouser is when a function "remembers" its lexical scope
  even when the function is executed outside that lexical scope.
*/
//  ex1
function foo(){
  var bar = "bar";
  function baz(){
    console.log(bar);
  }
  bam(baz);
}
function bam(baz) {
  baz(); // logs bar -> fact that baz can carry the scope of foo into bam is clouser.
}
foo();

// ex2

function foo(){
  var bar = "bar";
  return function() {
    console.log(bar);
  }
}
function bam() {
  foo()(); //bar
}
bam();

// ex3

function foo(){
  var bar = "bar";
  setTimeout(function() {
    console.log(bar);
  }, 1000);
}
foo();

// ex closure on shared scope.
function foo(){
  var bar = 0;
  setTimeout(function() {
    console.log(bar++);
  }, 100);
  setTimeout(function(){
    console.log(bar++);
  }, 200);
}
foo(); // 0 1


// ex closure on shared scope.
function foo(){
  var bar = 0;
  setTimeout(function() {
    baz = 1
    console.log(bar++);
    setTimeout(function(){
      console.log(bar+baz);
    }, 200);
  }, 100);
}
foo(); // 0 2

// clouser loops
for( var i= 1; i<=5; i++){
  setTimeout(function(){
    console.log("i: " + i);
  }, i*1000);
} // prints 6..!! same every time.


//fix for above
for( var i= 1; i<=5; i++){
  (function(i){
    setTimeout(function(){
      console.log("i: " + i);
    }, i*1000);
  })(i);
}

// closure loops + block scoping.
for( let i= 1; i<=5; i++){
  setTimeout(function(){
    console.log("i: " + i);
  }, i*1000);
} 
// this is not a clouser coz its not transporting function out.
var foo = (function() {
  var o = {bar : "bar"};
  return {obj: o}
})();
console.log(foo.obj.bar); // bar

//closure clasic module pattern.
/* definition for classic module.
  1. There must be an outer function that gets executed, doesnot have to be a IIFE
  2. There must be one or more internal funcitons returned from that function call. 
      inner function that has closure over the inner private scope.
*/
var foo = (function (){
  var o = { bar : "bar"};
  return {
    bar : function() {
      console.log(o.bar);
    }
  };
})();
foo.bar(); //bar

// modified module pattern.
var foo = (function () {
  var publicApi = {
    bar: function() {
      publicApi.baz();
    },
    baz: function() {
      console.log("baz");
    }
  };
  return publicApi;
})();
foo.bar(); //bar

//moduren module pattern require is doing like this.
define("foo", function(){
  var o = { bar : "bar"};
  return {
    bar : function() {
      console.log(o.bar);
    }
  }; 
});

/*
//es6 module pattern
var o = { bar : "bar"};

export function bar() {
  console.log(o.bar);
} 

import bar from 'foo';
bar();
*/
