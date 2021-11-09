const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var cerdito, cerdito2;
var tronquito;
var tronquito2, tronquito3, tronquito4;
var pajarito1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20);
    cerdito = new cerditos(810,350);
    // pi es igual a 180°, pi/2 es igual a 90° y pi/4 es igual a 45°
    tronquito = new palitos(810, 260, 300, PI/2);
    tronquito2 = new palitos(810, 180, 300, PI/2);
    tronquito3 = new palitos(760, 120, 150, PI/7);
    tronquito4 = new palitos(870, 120, 150, -PI/7);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    box5 = new Box(810, 160, 70, 70);
    cerdito2 = new cerditos(810, 220);
    pajarito1 = new pajarito(100, 100);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    cerdito.display();
    tronquito.display();
    tronquito2.display();
    tronquito3.display();
    tronquito4.display();
    box3.display();
    box4.display();
    box5.display();
    cerdito2.display();
    pajarito1.display();
}