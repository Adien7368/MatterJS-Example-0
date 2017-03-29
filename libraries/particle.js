function Particle(x,y,r,op) {
	var option = op||{};
	this.r = r;
	this.body = Bodies.circle(x,y,this.r,option);
	World.add(world,this.body);

}

Particle.prototype.show = function(){
	fill(200);
	
	//console.log(this.body);
	stroke(100,200,150);
	beginShape();
	for (var i = this.body.vertices.length - 1; i >= 0; i--) {
		var p = this.body.vertices[i];
		vertex(p.x,p.y);
	}
	endShape(CLOSE);

}