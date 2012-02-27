// Lesson 1, Example 2 - A Function is an Object

// create a basic function
var add_excitement = function(str) {
	alert(str + '!');
};

// add a property to the add_excitement function
// NOTE: this is for example only, don't do this in practice
add_excitement.foo = "bar";

console.log(add_excitement.foo); // "bar"