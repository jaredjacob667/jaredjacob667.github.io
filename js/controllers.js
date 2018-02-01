'use strict';

angular.module('personalPortfolioApp')

.controller('personalPortfolioController', function($scope){

	//holds all of the project information
	//I have both the project and tech info here for easier maintenance
	$scope.projectsArr = [
							{
								"title":"Auto Clicker",
								"technologies":["Python"],
								"createDateMonth":"09",
								"createDateYear":"2013",
								"thumbnail":"img/portfolio/AutoClicker.jpg",
								"shortDesc":"A program to mimic keyboard and mouse to automate tasks that had no API.",
								"longDesc":"This utility was created so I could script specific mundane tasks into automated sequences. The goal was simple, create a way to script simple tasks without any type of api given by the program itself. This uses the win32 modules for python to save x and y coordinates of the screen of where to click next. After creating a simple clicking scenario, I created this utility to help me record my actions more quickly and put it into it's own scenario. Code will be given upon request."
							},
							{
								"title":"Horse Race",
								"technologies":["Python"],
								"createDateMonth":"11",
								"createDateYear":"2014",
								"thumbnail":"img/portfolio/HorseRace.jpg",
								"shortDesc":"A protoype game created using pygame.",
								"longDesc":"This game was created using python and the pygame module. The game uses the random function to generate each horses movement. Once a horse reaches the finish line, the game will check what horse you chose and tell you that you either won or lost and allow you to play again. This was to be a prototype for a similar game that I plan to create for android. Code will be given upon request."
							},
							{
								"title":"Multiplication Form",
								"technologies":["HTML", "Javascript", "JQuery"],
								"createDateMonth":"10",
								"createDateYear":"2015",
								"thumbnail":"img/portfolio/MultForm.jpg",
								"shortDesc":"A multiplication table creator.",
								"longDesc":"This project was made for a html and javascript course at the University of Massachusetts Lowell. The goal was to create a form for a person to enter a range of numbers and generate its multiplication table from it. Further more I was able to add code that would allow the user to see the row and column highlighted when hovering over a cell."
							}
						];

	//Used to display the progress bars to a language/framework
	//skill out of 100 percent
	$scope.technologiesArr = [
								{
									"name":"Python",
									"skill":"85"
								},
								{
									"name":"Javascript",
									"skill":"90"
								},
								{
									"name":"AngularJS",
									"skill":"75"
								},	
								{
									"name":"NodeJS",
									"skill":"70"
								}		
							 ];
	
	//starts off all projects will only show the short description
	//This will toggle on the front end by a button on the proj card					
	$scope.longDescShow = false;

	//starts filter to be nothing
	$scope.filterVal = ''

	//used to filter the projects
	$scope.isInArray = function(value, array) {
  		return array.indexOf(value) > -1;
	}


})

;