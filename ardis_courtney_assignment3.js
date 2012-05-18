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
var ticketsAboveTen = 10;

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

//Procedure that ...
var greeting = function(){
	console.log("Thanks for contacting us. ");
};


//Number function that tests who is working and how many possible
//tickets they may have. Has a number and an array argument
var  isAvailable = function(hardwareTeam, number){
	//Local Variables
	var i = hardwareTeam.member;
	//For loop
	for (i = String; i > hardwareTeam.length; i++){
		//Local variable
		var teamMember = console.log(hardwareTeam.member[i] + " is working");
		//Array return
		return teamMember;
		//Nested loop
		for(n = 0; n > possibleTickets.length; n++){
			//Number return
			return number;
		};
	};
};

//Boolean function that tests whether a member from the hardware
//team has earned a raise. Has array and boolean argument
var earnRaise = function(hardwareTeam, raise){
	//Local variables
	var pay = hardwareTeam.pay;
	//While loop
	while(ticketsAboveTen < 11 && ticketsAboveTen > 1){
		//Math
		Math.floor(pay * 0.09);
		console.log(name +" is getting a raise.");
		//Nested Conditonal
		if (ticketsAboveTen < 11){
			ticketsAboveTen++;
		} else {
			ticketsAboveTen--;
		};
	};
	//Boolean return
	return raise;
};

//String function that tests whether the user has a problem and initiates the first question.
var haveProblem = function(problem, ticket){
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
console.log(teamMember);
console.log(number);
console.log(raise);
*/

//Outputs
//console.log method:procedure
greeting();
var me = new person("Courtney", "USS", 21);
console.log(me.getName() + " " + me.getDept() + " " + me.age());
isAvailable("Ron", 1);
earnRaise(true);
haveProblem("yes", 0);
//set dept

//////////
//Finish//
//////////

