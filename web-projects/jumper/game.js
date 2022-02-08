var screenWidth = screen.width;
var screenHeight = screen.height;
var containerWidth = document.getElementById("container").getBoundingClientRect().width;
var containerStartPosition = document.getElementById("container").getBoundingClientRect().x;
console.log(containerEndPosition);

var containerEndPosition = containerStartPosition + containerWidth;
function jump(){
	document.getElementById("obstacle").classList.add("obstacleRun");
	var player = document.getElementById("player");
	if(player.classList.contains("jump")){
	}
	else{
		player.classList.add("jump");
		setTimeout(function(){
			player.classList.remove("jump");
		},800);
	}
}

setInterval(function(){
	var playerWidth = document.getElementById("player").offsetWidth;
	var playerLeft = document.getElementById("player").offsetLeft;
	var playerLeftPosition = parseInt(playerWidth) + parseInt(playerLeft);
	var obstacleLeftPosition = document.getElementById("obstacle").offsetLeft;
	
	var obstacleTop = document.getElementById("obstacle").offsetTop;
	var obstacleHeight = document.getElementById("obstacle").offsetHeight;
	var playerTop = document.getElementById("player").offsetTop;
	var playerHeight = document.getElementById("player").offsetHeight;
	var playerTopPosition = parseInt(playerTop) + parseInt(playerHeight);
	var obstacleTopPosition = parseInt(obstacleTop) + parseInt(obstacleHeight);
	//console.log(obstacleTop+"obstacleTop");
	//console.log(playerTopPosition+"playerTopPosition");
	if((obstacleLeftPosition<=playerLeftPosition) && (obstacleTopPosition===playerTopPosition))
	{

		 document.getElementById("obstacle").style.left = playerLeftPosition+"px";
		 document.getElementById("obstacle").classList.remove("obstacleRun");
		// alert("lost");
		
	}
},10);