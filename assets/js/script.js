//!Here are the HTML elements:
const amPrevBtn = document.getElementById("amPrevBtn");
const amNextBtn = document.getElementById("amNextBtn");
const amPic = document.getElementById("amPic");
const psProj1 = document.getElementById("psProj1");
const psProj2 = document.getElementById("psProj2");
//*buttons for the JS games. "javascript section GameName Btn"
const jssATBtn = document.getElementById("jssATBtn");
const jssRxnBtn = document.getElementById("jssRxnBtn");
const jssCASBtn = document.getElementById("jssCASBtn");
const jssHS = document.getElementById("jssHS");


//!About Me Section

// // TODO: Make the previous/next button rotate through the images
//TODO: Make the Project images go full screen on click
//TODO: 

const imageArray = [
    "assets/img/picsOfMe/1.jpeg",
    "assets/img/picsOfMe/2.jpeg",
    "assets/img/picsOfMe/3.jpeg",
    "assets/img/picsOfMe/4.jpeg",
    "assets/img/picsOfMe/5.jpeg"    
];

let imageIndex = 0; 

amPrevBtn.addEventListener("click", function(){
    imageIndex == 0 ? imageIndex = 4 : imageIndex--;
    amPic.setAttribute("src", imageArray[imageIndex]);
});
amNextBtn.addEventListener("click", function(){
    imageIndex == 4 ? imageIndex = 0 : imageIndex++;
    amPic.setAttribute("src", imageArray[imageIndex]);
});


//!High Score Section

//TODO: make the high score depending on which game you have
//TODO: populate the list depending on the game



//!Game Section
//TODO: make the games change based on button press on selecting game

//?Aim Trainer
//TODO: Make a hard/medium/easy mode
//TODO: make a button/box that the user has to click on, and each success will increase their counter by 1 
//TODO: have the boxes appear according to a time interval, disappear if they're not hit, disappear if they're never hit, etc 
//TODO: update the HS page with the top scores hit

//?Reaction Time
//TODO: Make a button that will turn green at a random time, which the user has to press
//TODO: on press, log the time it took in ms to the high score
//TODO: make a replay button that will relaunch the game

//?Chan + me Game
//*may import on a separate JS file after it's done