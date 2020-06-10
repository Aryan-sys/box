const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,370,50,50);
    box2 = new Box(200,330,50,50);
    box3 = new Box(200,280,50,50);
    box4 = new Box(300,370,50,50);
    box5 = new Box(300,330,50,50);
    box6 = new Box(300,280,50,50);

    ground1 = new Ground(200,380,400,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ground1.display();

}