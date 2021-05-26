var ball;
var database;
var Locindb;
var posindb;
function setup(){
database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
Locindb = database.ref("Ball/Position");
Locindb.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("Ball/Position").set({
        x : ball.x + x , y : ball.y + y
    })
}
function readPosition(value){
  posindb = value.val();
ball.x = posindb.x;
ball.y = posindb.y;
}
