function Body(x,y,w,h,op) {
	var option = op||{};

	this.body = Bodies.rectangle(x,y,w,h,option);
	World.add(world,this.body);

}

Body.prototype.show = function(){
	fill(255);
	//console.log(this.body);
	beginShape();
	for (var i = this.body.vertices.length - 1; i >= 0; i--) {
		var p = this.body.vertices[i];
		vertex(p.x,p.y);
	}
	endShape(CLOSE);

}