//WELCOME TO WAR GAME CODE!!!
//HOPE YOU FIND EVERYTHING YOU LOOKING FOR!!!



//Global values
//--------------------------------------------------------------------------------------------
var gameRunning = true;
var canvas = document.getElementById("gameCanvas")
var ctx = canvas.getContext("2d");
var tankSpeed = 3;




//Main function
//---------------------------------------------------------------------------------------------
var t = new Tank(20, 350, "green", "right");
var t2 = new Tank(1100, 350, "blue", "left");
t.loadGraphics();
t2.loadGraphics();


var gameLoop = setInterval(game, 15);





//Event listeners for input
//-----------------------------------------------------------------------------------------------

//Input for the tank 1 (left(A) and right(D))
$(document).ready(function(){
	$('canvas').css('display', 'none');
	//ON CLICK
	$(document).keydown(function(e){
		//Left P1
		if(e.keyCode == 65){	
			t.tankRight = false;
			t.tankLeft = true;
		}
		//Right P1
		if(e.keyCode == 68){
			t.tankRight = true;
			t.tankLeft = false;
		}
	});

	$(document).keyup(function(e){
		//Left P1
		if(t.tankLeft && e.keyCode == 65){	
			t.tankLeft = false;
		}
		//Right P1
		if(t.tankRight && e.keyCode == 68){
			t.tankRight = false;
		}
	});
});

//Input for the tank 2 (left(A) and right(D))
$(document).ready(function(){
	$(document).keydown(function(e){
		//Left P2
		if(e.keyCode == 37){
			t2.tankRight = false;
			t2.tankLeft = true;
		}	
		//Right P2
		if(e.keyCode == 39){
			t2.tankRight = true;
			t2.tankLeft = false;
		}
	});
	$(document).keyup(function(e){
		//Left P1
		if(t2.tankLeft && e.keyCode == 37){	
			t2.tankLeft = false;
		}
		//Right P1
		if(t2.tankRight && e.keyCode == 39){
			t2.tankRight = false;
		}
	});
});

	





//Classes Go Here!!
//----------------------------------------------------------------------------------------------------

function Helicopter(x,y,height,width,color){

	//Fields


	//Functions
}


function HeliAmmo(speed,damage,round){
	
	//Fields


	//Functions
}



function Missile(speed,damage){
	
	//Fields


	//Functions
}



function TankShot(x,y,speed,damage,angle){
	
	//Fields
	this.x = x;
	this.y = y;
	this.angle = angle;
	this.speed = speed;
	this.damage = damage;
	this.gravity = -1.1;

	//Complex properties
	this.image;
	this.velocityX = Math.cos(angle);
	this.velocityY = Math.sin(angle);

	//Functions
	this.updateShot = function(){
		this.x += this.velocityX;
		this.y += this.velocityY;
		this.velocityY += this.gravity;
		this.angle = Math.atan(this.y/this.x);
	}

	this.draw = function(){
		ctx.rotate(angle);
		ctx.drawImage()
	}
}




function Tank(x,y,color,stance){

	//Elemental properties
	this.x = x;
	this.y = y;
	this.height;
	this.width;
	this.color = color;
	this.stance = stance;

	//Complex properties
	this.tankLeft = false;
	this.tankRight = false;
	this.factor = 4;
	this.HP = 100;
	this.weaponX;		//int
	this.weaponY;		//int
	this.tankShot;		//object
	this.missile;		//object
	this.faceAlngle;	//int [0,360)
	this.shotAngle;		//int [0,360)
	this.missileAmmo;	//int [0,3]
	this.image;			//png.file
	this.type;			//int
	this.tankWeapon;	//png.file
	


	//Functions
	//Changes x and y coordinates
	this.move = function(dx,dy){
		this.x = dx;
		this.y = dy;
		if(this.tankRight){
			this.stance = "right";
		}
		if(this.tankLeft){
			this.stance = "left";
		}
	}


	//Regular shot
	this.shoot = function(){

	}

	//Missile shot
	this.shootMissile = function(){

	} 

	//Aim weapons
	this.aim = function(angle){

	}

	//Loads the spesific image combo
	this.loadGraphics = function(){
	this.image = document.getElementsByClassName("tank");
		//Pull al the tank images	
		if(this.color == "blue"){
			this.type = 0;
			//Initialize the graphics for the weapons
		}
		else if(this.color == "green"){
			this.type = 1;
			//Initialize the graphics for the weapons
		}
		else if(this.color == "pink"){
			this.type = 2;
			//Initialize the graphics for the weapons
		}
		else if(this.color = "yellow"){
			this.type = 3;
			//Initialize the graphics for the weapons
		}

		//Load the width and height based on the image and scale
		this.width = this.image[this.type].width/this.factor;
		this.height = this.image[this.type].height/this.factor;
	}

	//Draw function
	this.draw = function(){
		if(this.tankRight)
			ctx.drawImage(this.image[this.type], this.x, this.y, this.width, this.height);
		
		else if(this.tankLeft)
			ctx.drawImage(this.image[this.type+4], this.x, this.y, this.width, this.height);

		else{
			if(this.stance == "right"){
				ctx.drawImage(this.image[this.type], this.x, this.y, this.width, this.height);
			}
			else if(this.stance == "left"){
				ctx.drawImage(this.image[this.type+4], this.x, this.y, this.width, this.height);
			}
		}
	}
}



//Global functions
//-----------------------------------------------------------------------------------------------
function clearCanvas(){
	ctx.clearRect(0,0, canvas.width, canvas.height);
}

function draw(){
	clearCanvas();
	t.draw();
	t2.draw();
}

function update(){
	//Update tank 1
	if(t.tankLeft){
		t.move(t.x-tankSpeed,t.y);
	}
	else if(t.tankRight)
		t.move(t.x+tankSpeed,t.y);

	//Update tank 2
	if(t2.tankLeft){
		t2.move(t2.x-tankSpeed,t2.y);
	}
	else if(t2.tankRight)
		t2.move(t2.x+tankSpeed,t2.y);
}


function game(){
	if(gameRunning){
		update();
		draw();
	}
}
