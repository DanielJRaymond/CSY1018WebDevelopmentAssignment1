document.addEventListener("DOMContentLoaded", onLoad);

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var superScript = ["st", "nd", "rd", "th"];

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

function onLoad () {
  //Get head element
  var headElement = document.getElementsByTagName("head")[0];

  //Create title
  var titleElement = document.createElement("title");

  //Create titlke icon
  var titleIcon = document.createElement("link");

  //Nav bar links
  var listElement = document.getElementsByTagName("li");
  var AnchorElement = document.getElementsByTagName("a");

  //Footer
  footerConstruct();

  //Para maker
  textCreation();

  //Get page name

  console.log(filename);
  //Add to head element
  headElement.appendChild(titleElement);
  headElement.appendChild(titleIcon);

  //edit icon attributes
  titleIcon.setAttribute("rel", "shortcut icon");
  titleIcon.setAttribute("href", "img/infinitenewsicon.png");


  //Check which current page accessed
  if (filename == "index.html") {
    //Set current page to active
    listElement[0].classList.add("active");
    AnchorElement[0].classList.add("active");
    //Set title to page name
    titleElement.innerHTML = "Home";
  }

  else if (filename == "reviews.html") {
    listElement[1].classList.add("active");
    AnchorElement[1].classList.add("active");
    titleElement.innerHTML = "Reviews";
  }

  else if (filename == "glossary.html") {
    listElement[2].classList.add("active");
    AnchorElement[2].classList.add("active");
    titleElement.innerHTML = "Glossary";
    //glossaryPage();
  }

  else if (filename == "jobs.html") {
    listElement[3].classList.add("active");
    AnchorElement[3].classList.add("active");
    titleElement.innerHTML = "Jobs";
  }

  else if (filename == "tutorials.html") {
    listElement[4].classList.add("active");
    AnchorElement[4].classList.add("active");
    titleElement.innerHTML = "Tutorials";
  }



}


function footerConstruct () {
  var d = new Date();

  var dateElement = document.getElementsByClassName("time")[0];

  dateElement.innerHTML = days[d.getDay() - 1] + "   " + d.getDate() + superScript[superChooser(d)].sup() + "   " + months[d.getMonth()] + "   " + d.getFullYear();
}

function superChooser(date) {
  var superScriptChooser;

  if (date == 1 || date == 21 || date == 31) {
    superScriptChooser = 0;
  }

  else if (date == 2 || date == 22) {
    superScriptChooser = 1;
  }

  else if (date == 3 || date == 23) {
    superScriptChooser = 2;
  }
  else {
    superScriptChooser = 3;
  }

  return superScriptChooser;
}

function textCreation () {
  var fiveSil = ["The cool summer breeze", "If only he knew",
      "The world up above", "In a grain of time", "Things unknown to us",
      "Let us all be blessed", "Can we all be saved", "He could not be saved",
      "We could do nought now", "If only they knew", "If only we knew",
      "If only she knew", "The summer breeze cools", "The world down below",
      "He did not hear her", "She did not hear him", "We did not hear them",
      "Time waits for no man", "Time waits for no one", "Heaven only knows",
      "We did not hear him", "We did not hear her"];

  var sevenSil = ["For he could not tell her why", "Endlessly he struggled through",
      "Time was not on their side now", "For he could only now see",
      "The good hand was delt to late", "Unkown to us and the world",
      "He relinquished one last breath", "The horrors that awaited",
      "All beginnings have endings", "For she could not tell him why",
      "All things must come to an end", "Fate had little time for them",
      "Through the cool winds of autumn", "They had gone but not for long",
      "Their wails and cries where not heard", "They had little time for fate",
      "To think it was all a dream", "He could not believe his eyes",
      "She could not believe her eyes", "They could not believe their eyes",
      "The things that awaited them", "The fate that awaited them",
      "For she could not tell us why", "For he could not tell us why"];

if (filename == "index.html") {
  var textAsignment = document.getElementsByClassName("poem")[0];

  textAsignment.innerHTML = fiveSil[ranNum(fiveSil)] + ' ' + '<br>' +
                          sevenSil[ranNum(sevenSil)] + ' ' + '<br>' +
                            fiveSil[ranNum(fiveSil)] + '.';
}

}

function ranNum (max) {

  return Math.floor(Math.random()*max.length);

}
