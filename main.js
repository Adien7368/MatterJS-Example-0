//module aliases

var Engine = Matter.Engine,
	World = Matter.World,
	Bodies = Matter.Bodies,
	Constraint = Matter.Constraint,
	MouseConstraint = Matter.MouseConstraint,
	Mouse = Matter.Mouse;
 

var engine,world,particles=[],boundaries=[],size_of_particles=13;
var p1,p2;
var mConstraint;//,worldBodies;


function setup(){
	var canvas = createCanvas(600,500);
	//console.log(canvas);
	background(51);
	engine = Engine.create();
	world = engine.world;
	boundaries.push(new Body(width/2,height,width,10,{isStatic:true}));
	for(var i = 0; i<size_of_particles; ++i)
	particles.push(new Particle(200+10*i,20+20*i,10,{isStatic:!i}));
	
	for(var i = 0; i<size_of_particles-1 ; ++i)
	addConstriant({
		bodyA : particles[i].body,
		bodyB : particles[i+1].body,
		length : 25
	});
	

	var canvasMouse = Mouse.create(canvas.elt);
	canvasMouse.pixelRatio = pixelDensity(); 

	var options = {
		mouse : canvasMouse
	};
	
	//console.log(canvasMouse);
	
	mConstraint = MouseConstraint.create(engine,options);
	//console.log(mConstraint);
	
	//console.log(engine.world);
	addToWorld(mConstraint);
	//console.log(engine.world);
	///worldBodies = Matter.Composite.allBodies(engine.world);
}

function addConstriant(option){
	addToWorld(new Constraint.create(option));
}

function addToWorld(object){
	World.add(world,object);
}


//function mouseDragged(){
//	particles.push(new Body(mouseX,mouseY,30,30));
//}


function draw(){
background(51);
//console.log(mConstraint.mouse.button);
//MouseConstraint.update(mConstraint,worldBodies);
Engine.update(engine);
for (var i = particles.length - 1; i >= 0; i--) {
	var p = particles[i];
	p.show();
}

if(mConstraint.body){
	stroke(0,255,0,100);

	strokeWeight(4);
	var alpa = mConstraint.body.position;
	var pos = mConstraint.constraint.pointA;
	var p = mConstraint.constraint.pointB;
	//ellipse(pos.x,pos.y,40,40);

	line(pos.x,pos.y,alpa.x+p.x,alpa.y+p.y);
	strokeWeight(1);
}


}