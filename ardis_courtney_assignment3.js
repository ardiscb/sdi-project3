/*
Author: Courtney Ardis
Term: 1205
Date: May 17, 2012
Assignment: Deliverable 3
*/

/////////
//Start//
/////////

var person = function(name, dept, age){
	var name = "My name is " + name;
	var dept = "I work in the " + dept + " department.";
	var age = "I am " + age + " years old.";
	//Method: Function
	this.age = function(){
		return age;
	};
	//Method: Procedure
	this.something = function(){
		console.log("Something");
	};
	//Method: Accessor	
	this.getName = function(){
		return name;
	};
	this.getDept = function(){
		return dept;
	};
	//Method: Mutator
	this.setDept = function(newDept){
		dept = newDept;
	};
};

/*
//Procedure that ...
var procedure = function(){
	console.log("");
};

//Number function that tests ... with number an array arguments
var numFunction = function(numTickets, employee){
	//For loop
	for(){
		//Nested loop
		for(){
	
		};
	};
};

//Boolean function that tests ... with boolean arguments
var boolFunction = function(this, that){
	//While loop
	while(){
		//Math
		Math.floor(this + that);
	};
};

//String function that tests
var stringFunction = function(string){
	//Conditional
	if(){
		//Nested Conditional
		if(){
	
		};
	} else {
	
	};
	//Return string
	return string;
};
*/

//console.log this.something (procedure)
var me = new person("Courtney", "USS", 21);
console.log(me.getName() + " " + me.getDept() + " " + me.age());
//set Department

/*
Returned Values
console.log(name);
console.log(dept);
console.log(age);
*/


