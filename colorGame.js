var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
	//Mode buttons event listeners
	setupModeButton();
	setupSquares();
	reset();

}

function setupModeButton() {
	for (var i=0; i<modeButton.length; i++) {
		modeButton[i].addEventListener("click", function() {
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected"); 
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

			reset();
		});
	}
}

function setupSquares() {
	for(var i=0; i<squares.length; i++) {

		// Add click listeners to squares
		squares[i].addEventListener("click", function() {
			// Grab color of the clicked square
			var clickedColor = this.style.backgroundColor;
			// Compare color to picked color
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				h1.style.backgroundColor = clickedColor;
				changeColor(clickedColor);		
				resetButton.textContent = "Play Again?";
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "TryAgain!";
			}

		});
	}
}

function reset() {
	//Generate all new colors
	colors = generateRandomColors(numSquares);
	//Pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	//Change colors of squares
	resetButton.textContent = "New Colors";
	message.textContent = ""; 
	for (var i=0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	//Change the background of h1 to initial color
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function() {

	reset();

});




function changeColor(color) {
	// Loop through all the squares
	for (var i=0; i<squares.length; i++) {
		// Change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// Make an array
	var arr = []
	
	for (var i=0; i<num; i++) {
		// Get random color and push into array
		arr.push(randomColor()) 
	}
	// Return the array
	return arr;
}

function randomColor() {
	//Pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//Pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//Pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}


// easyBtn.addEventListener("click", function() {
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i=0; i<squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function() {
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares= 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i=0; i<squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });
