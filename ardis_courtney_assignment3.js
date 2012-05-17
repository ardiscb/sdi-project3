/*
Author: Courtney Ardis
Term: 1205
Date: May 17, 2012
Assignment: Deliverable 3
*/

/////////
//Start//
/////////

//Global variables

var person = function(name, dept, age){
	var name = "My name is " + name;
	var dept = "I work in the " + dept + " department.";
	var age = "I am " + age + " years old.";
	//Method: Function
	this.age = function(){
		return age;
	};
	//Method: Procedure
	this.tickets = function(){
		console.log("");
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
*/
/*
//Number function that tests ... with number an array arguments
var numFunction = function(hardwareTeam, number){
	//For loop
	for (var name in hardwareTeam){
		//Local variable
		var person = console.log(name + " is working");
		//Array return
		return person;
		//Nested loop
		for(n = 0; n > possibleTickets.length; n++){
			//Number return
			return number;
		};
	};
};
/*
//Boolean function that tests ... with boolean arguments
var boolFunction = function(boolean){
	//While loop
	while(){
		//Math
		Math.floor(this + that);

	};
	//Boolean return
	return boolean;
};
*/
//String function that tests whether the user has a problem and initiates the first question.
var stringFunction = function(problem, ticket){
	//Local variable
	//Conditional
	if(problem === "no"){
		prompt("Are you sure you don't have a problem? Answer \"yes\" or \"no \".");
		return problem;
	};
	if(problem === "yes"){
		console.log("We will get to your problem in the order it has been received.");
		//Nested Conditional
		if(ticket = 0){
			ticket = possibleTickets.tickets.question[i];
			//Object return
			return ticket;
		};
	} else {
		var message = "Do you have a problem? Answer \"yes\" or \"no \".";
		//String return
		return message;

	};
	
};

/*
//Returned Values
console.log(message);
console.log(dept);
console.log(age);
*/

//Outputs
//console.log this.something (procedure)
var me = new person("Courtney", "USS", 21);
console.log(me.getName() + " " + me.getDept() + " " + me.age());
//numFunction(9, 1);
stringFunction("yes", 0);
//set Department

//////////
//Finish//
//////////

