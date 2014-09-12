/*
 *  hellop5js
 *  2014.09.12
 *
 */


// -----------------------------------------------------------------------------
// Properties
// -----------------------------------------------------------------------------

var particles = [];



// -----------------------------------------------------------------------------
// Methods
// -----------------------------------------------------------------------------

function runPSystem (){
  for (var i = 0; i < particles.length;i++) {
    particles[i].run();
  }
};

function particle (x, y, w, h){
 this.x = x;
 this.y = y;
 this.w = w;
 this.h = h;
 this.rotation = 0;

 this.display = function(){
    stroke(0);// black stroke in HEX
    push();// set the matrix so it is always centered
    translate(this.x, this.y);// push it to our position
    rectMode(CENTER);// we want the rect to be centered
    rotate(radians(this.rotation));// rotate it takes radians as arg
    rect(0, 0, this.w, this.h);// draw the particle
    pop();// push the matrix back
 };
 this.turn = function(){
  this.rotation++;
 };
 this.move = function(){
    var _x = this.x;// get the current value x
    var _y = this.y;// get the current value y
    _x += random(-1, 1);// change it
    _y += random(-1, 1);// change it
    this.x = constrain(_x, 0, displayWidth);// constrain it to the screen
    this.y = constrain(_y, 0, displayHeight);// constrain it to the screen
 };
 this.update = function(){
  this.turn();
  this.move();
 };
 this.run = function(){
  this.display();
  this.update();
 };
}
function cls() {
  rectMode(CORNER);
  noStroke();
  rect(0, 0, width, height);
}
//
// Setup
//
function setup() {
  createCanvas(displayWidth, displayHeight);
}

//
// Draw
//
function draw() {
  cls();
  runPSystem();
}



// -----------------------------------------------------------------------------
// Events
// -----------------------------------------------------------------------------

//
// Keyboard
//
// function keyPressed() {
// }

// //
// // Mouse
// //
function mousePressed() {
  particles.push(new particle(mouseX,mouseY,10,10));
}

// function mouseDragged() {
// };

// function mouseReleased() {
// };

// //
// // Touch
// //
// function touchStarted() {
// };

// function touchMoved() {
// };

// function touchEnded() {
// };

// //
// // Drag & Drop
// //
// function onDrop(event) {
// };

