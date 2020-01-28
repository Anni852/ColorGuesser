var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messegeDisplay = document.querySelector("#messege");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons()
{
    for (var i=0; i<modeButtons.length; i++)
    {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares=3 : numSquares=6;
            reset();
        })
    }
}
function setUpSquares()
{
    for (var i = 0; i < square.length; i++) {
        square[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messegeDisplay.textContent = "Correct!";
                changeColors(pickedColor);
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messegeDisplay.textContent = "Try Again";
            }
        })
    }
}


function reset()
{
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messegeDisplay.textContent = "";
    for (var i = 0; i < square.length; i++) {
        if(colors[i])
        {
            square[i].style.display = "block";
            square[i].style.background = colors[i];
        }
        else
        {
            square[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors"
}
resetButton.addEventListener("click", function () {
    reset();
});

function changeColors(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
