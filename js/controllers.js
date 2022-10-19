"use strict";

angular
  .module("personalPortfolioApp")

  .controller("personalPortfolioController", function ($scope) {
    //holds all of the project information
    //I have both the project and tech info here for easier maintenance
    $scope.projectsArr = [
      {
        title: "Slack Chatbot",
        technologies: ["Javascript"],
        createDateMonth: "09",
        createDateYear: "2020",
        thumbnail: "img/portfolio/DeweyChatbot.jpg",
        shortDesc:
          "A natural language processing Slack Chatbot used to automate IT tasks and questions",
        longDesc:
          "This Slack bot was written using the Slack BoltJS library for NodeJS along with integrations with Amazon Lex. Here we have mapped Utterances or natural language phrases such as "I want to create a case" to intent such as create_case. From there the chatbot was setup with many integrations to systems including Salesforce, Dropbox, O365 to create cases, show statuses, or direct users to knowledge base articles for issues.",
      },
      {
        title: "Auto Clicker",
        technologies: ["Python"],
        createDateMonth: "09",
        createDateYear: "2013",
        thumbnail: "img/portfolio/AutoClicker.jpg",
        shortDesc:
          "A program to mimic keyboard and mouse to automate tasks that had no API",
        longDesc:
          "This utility was created so I could script specific mundane tasks into automated sequences. The goal was simple, create a way to script simple tasks without any type of api given by the program itself. This uses the win32 modules for python to save x and y coordinates of the screen of where to click next. After creating a simple clicking scenario, I created this utility to help me record my actions more quickly and put it into it's own scenario. Code will be given upon request.",
      },
      {
        title: "Horse Race",
        technologies: ["Python"],
        createDateMonth: "11",
        createDateYear: "2014",
        thumbnail: "img/portfolio/HorseRace.jpg",
        shortDesc: "A protoype game created using pygame",
        longDesc:
          "This game was created using python and the pygame module. The game uses the random function to generate each horses movement. Once a horse reaches the finish line, the game will check what horse you chose and tell you that you either won or lost and allow you to play again. This was to be a prototype for a similar game that I plan to create for android. Code will be given upon request.",
      },
      {
        title: "Multiplication Form",
        technologies: ["HTML", "Javascript", "JQuery"],
        createDateMonth: "10",
        createDateYear: "2015",
        thumbnail: "img/portfolio/MultForm.jpg",
        shortDesc: "A multiplication table creator",
        longDesc:
          "This project was made for a html and javascript course at the University of Massachusetts Lowell. The goal was to create a form for a person to enter a range of numbers and generate its multiplication table from it. Further more I was able to add code that would allow the user to see the row and column highlighted when hovering over a cell.",
      },
      {
        title: "Admissions Web App",
        technologies: [
          "HTML",
          "Javascript",
          "Salesforce",
          "AngularJS",
          "NodeJS",
        ],
        createDateMonth: "08",
        createDateYear: "2017",
        thumbnail: "img/portfolio/AdmissionsApp.png",
        shortDesc: "A prototype for the Umass Admissions application",
        longDesc:
          "This project was created to get a sense of how we could rewrite the current admissions web application that was currently using PeopleSoft. I used NodeJS to run the server as well as the rest api into what we wanted to integrate with which was salesforce. All the routing and logic was done on the front end using Angularjs.",
      },
      {
        title: "Self Service Forms",
        technologies: ["HTML", "Javascript", "AngularJS", "NodeJS"],
        createDateMonth: "08",
        createDateYear: "2016",
        thumbnail: "img/portfolio/SelfServiceForms.png",
        shortDesc:
          "Forms created that empowered users to update our Document Imaging system",
        longDesc:
          "These forms were created in order to move a lot of the operation support from my team to the individual Campuses all using our single Document Imaging system. The forms for example would allow them to add users, document types, and even create a basic full workflow all while enforcing our naming conventions and other standards. These all integrated with the Document Imaging Systems REST API.",
      },
      {
        title: "Document Imports",
        technologies: ["HTML", "Javascript", "AngularJS", "NodeJS", "RabbitMQ"],
        createDateMonth: "11",
        createDateYear: "2017",
        thumbnail: "img/portfolio/Imports.png",
        shortDesc:
          "Updated the Umass imports process for the Document Imaging system",
        longDesc:
          "This form/process was created to speed up and modernize the imports process for the Umass Document Imaging system. The new process leveraged RabbitMQ and smaller NodeJS programs to take a zip file of multiPage TIFF images, unziped, parsed the index keys csv, and created the documents. Using this process we could easily scale out the processes by adding more instances of the program.",
      },
      {
        title: "This Site!",
        technologies: ["HTML", "Javascript", "AngularJS"],
        createDateMonth: "02",
        createDateYear: "2018",
        thumbnail: "img/portfolio/ThisSite.png",
        shortDesc: "Personal Portfolio",
        longDesc:
          "This was created to replace my old site which was derived from a template and hard to maintain. I wanted to use my newly aquired AngularJS to make editting and maintaining projects easier for me. Credit to bootswatch.com for the UI styles.",
      },
    ];

    //Used to display the progress bars to a language/framework
    //skill out of 100 percent
    $scope.technologiesArr = [
      {
        name: "Javascript",
        skill: "90",
      },
      {
        name: "Python",
        skill: "75",
      },
      {
        name: "AngularJS",
        skill: "75",
      },
      {
        name: "NodeJS",
        skill: "80",
      },
      {
        name: "Java",
        skill: "70",
      },
      {
        name: "C#",
        skill: "70",
      },
    ];

    //starts off all projects will only show the short description
    //This will toggle on the front end by a button on the proj card
    $scope.longDescShow = false;

    //starts filter to be nothing
    $scope.filterVal = "";

    //used to filter the projects
    $scope.isInArray = function (value, array) {
      return array.indexOf(value) > -1;
    };
  });
