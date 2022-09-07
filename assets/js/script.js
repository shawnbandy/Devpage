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
const jssHSID = document.getElementById("jssHSID");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "gray";
ctx.fillRect(0, 0, canvas.width, canvas.height)



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
jssATBtn.addEventListener("click", () =>{
    jssHSID.textContent = "Aim Trainer High Score"
    displayDifficulty()
})
jssCASBtn.addEventListener("click", () =>{
    jssHSID.textContent = "Placeholder"
})
jssRxnBtn.addEventListener("click", () =>{
    jssHSID.textContent = "Reaction"
})
//TODO: populate the list depending on the game



//!Game Section
//TODO: make the games change based on button press on selecting game

//?Aim Trainer

//TODO: Make a hard/medium/easy mode

const displayDifficulty = () => {
//*x,y,w,h
    ctx.fillStyle = "green";
    ctx.fillRect(55, 50, 45, 30);
    ctx.fillStyle = "yellow";
    ctx.fillRect(125, 50, 45, 30);
    ctx.fillStyle = "red";
    ctx.fillRect(195, 50, 45, 30);

}


//*height is 150, width is 300
//*canvas coordinates: TL: .5/.5, TR: 966/.5, BL: .5/482, BR: 966/482

//*!going to have to make this return x and y so we can use it for multiple things
const getMousePosition = function(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };

}


canvas.addEventListener("mousedown", function(e){
        let mousePosition = getMousePosition(canvas, e);
        console.log(mousePosition.x + " " + mousePosition.y)
        selectDifficulty(mousePosition.x, mousePosition.y)
    });




const selectDifficulty = (x, y) => {
    let difficulty;
    if (x >= 178 && x <= 322 && y >= 162 && y <= 258){
        difficulty = "easy";
    } else if (x >= 404 && x <= 545 && y >= 162 && y <= 258){
        difficulty = "medium";
    } else if (x >= 629 && x <= 770 && y >= 162 && y <= 258){
        difficulty = "hard";
    } else { return }
    console.log(difficulty)


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const aimTrainerGame = new PlayAimTrainer(.5, 966, .5, 482)
    switch (difficulty){
        case "easy":
            aimTrainerGame.easyMode(150, 100)
            break;
        case "medium":
            console.log("medium");
            break;
        case "hard":
            console.log("hard");
            break;
        default: 
            break;
    }
    
}

class PlayAimTrainer{

    constructor(minX, maxX, minY, maxY){
        this.minX = minX
        this.maxX = maxX
        this.minY = minY
        this.maxY = maxY
    }

    generateBox(color, boxHeight, boxWidth){
        this.boxHeight = boxHeight;
        this.boxWidth = boxWidth;
        this.color = color;
        //*randomly generate the starting point for the box to display
        let startingX = Math.floor(Math.random() * (this.maxX - this.boxWidth));
        let startingY = Math.floor(Math.random() * (this.maxY - this.boxHeight));


        ctx.fillStyle = this.color;
        ctx.fillRect(startingX, startingY, this.boxWidth, this.boxHeight)
    }

    easyMode(boxHeight, boxWidth){
        this.boxHeight = boxHeight
        this.boxWidth = boxWidth
        let timer = 20;
        while (timer == 0){
            this.generateBox("green", this.boxHeight, this.boxWidth)
        }
    }

}

//TODO: make a button/box that the user has to click on, and each success will increase their counter by 1 
//TODO: have the boxes appear according to a time interval, disappear if they're not hit, disappear if they're never hit, etc 
//TODO: update the HS page with the top scores hit

//?Reaction Time
//TODO: Make a button that will turn green at a random time, which the user has to press
//TODO: on press, log the time it took in ms to the high score
//TODO: make a replay button that will relaunch the game

//?Chan + me Game
//*may import on a separate JS file after it's done


displayDifficulty()