let bocas=['👅','👄','🫦'];
let p1
let p=[];
function setup(){
  createCanvas(400, 400);
  for (let i=0; i<30; i++){
    p[i]=new Pajaro (width,random(height),ceil(random(-1,2)));
  }
  //p1=new Pajaro(width,100,ceil(random(0,2)));
}

function draw(){
  background(255)
  for (let i=0; i<p.length; i++) {
    p[i].show();
    p[i].move();
  }
  //p1.show();
  //p1.move();
  }

class Pajaro {
  
  constructor(x,y,rb){
    this.x=x;
    this.y=y;
    this.rab=rb;
  }
  move(){
    this.x=this.x-1;
    if (this.x<-325){
    this.x=width;
  }
  }
  show(){
    scale(0.5);
    push();
    fill('#e21001');
    translate(this.x,10);
    triangle(0,200,100,150,100,200);
    ellipseMode(CORNER);
    fill('#ffcc00');
    ellipse(100,140,150,75);
    fill('#e21001');
    triangle(234,200,275,150,275,200);
    triangle(234,200,300,150,300,200);
    textSize(30);
    text('👀',140,160);
    text(bocas[this.rab],140,200);
    pop();
  }
  
}