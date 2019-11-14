// var colors=[
// 	"rgb(255, 0, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(255, 0, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(0, 255, 255)",
// ];
var numColors=6;
var colors=[];
var selectedColor;

var squares=document.querySelectorAll(".square");
var headDisplay=document.querySelector(".headings");
var messageDisplay=document.querySelector("#message");
var colorDisplay=document.getElementById("colorDisplay");
var reset=document.getElementById("reset");
var modeButtons=document.querySelectorAll(".mode");

init();
function init(){
	setUpModeButtons();
	setUpSquares();
	rst();
};

function setUpModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			
			numColors=(this.textContent==="Easy"?3:6);
			rst();
		});
	};
}

function setUpSquares(){
	for(var i=0;i<squares.length;i++){
		squares[i].addEventListener("click",function(){
			var clickedColor=this.style.backgroundColor;
			if(clickedColor===selectedColor){
				setColors(clickedColor);
				headDisplay.style.backgroundColor=clickedColor;
				messageDisplay.textContent="Correct!"
				reset.textContent="Play Again! ";
			}
			else{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again!";
			}
		});
	};
}

function rst(){
	colors=getRandomColors(numColors);
	selectedColor=selectRandomly(colors);
	colorDisplay.textContent=selectedColor;

	for(var i=0;i<squares.length;i++){
		if (colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	};
	messageDisplay.textContent="";
	reset.textContent="New Color";
	headDisplay.style.backgroundColor="steelblue";
};

reset.addEventListener("click",function(){
	rst();
});

function selectRandomly(colors){
	return colors[Math.floor(Math.random()*colors.length)];
};

function getRandomColors(num){
	var colors=[];
	for(i=0;i<num;i++){
		colors[i]="rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
	}
	return colors;
};

function setColors(color){
	for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor=color;
	}
}