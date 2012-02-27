// Lesson 1, Example 1 - Basic Object Syntax

// this is an empty object; it has no properties
var obj1 = {};

// object with two properties: foo, num
// obj2.foo is the string "bar"
// obj2.num is the integer 3
var obj2 = {
	foo : "bar",
	num : 3
};

// change "bar" to "baz"
obj2.foo = "baz";

// object properties can be other objects, resulting in nested objects
// TODO: remove the array syntax here?
var me = {
	name : {
		first : "Chris",
		last  : "Oakman"
	},
	location : {
		name : "Houston, TX",
		lat  : 29.75961,
		lng  : -95.36270
	},
	interests : [
		"JavaScript",
		"long walks on the beach",
		"cats"
	]
};

console.log(me.name.first + " " + me.name.last); // "Chris Oakman"

console.log(me.interests[2]); // "cats"