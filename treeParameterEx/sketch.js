/*Step 1: Create your shape in a custom function

The original function was
function tree() {
  fill(80,30,20);
  rect(200,320,20,60);
  fill(20,130,5);
  triangle(180,320,210,240,240,320);
}

/* Step 2: Add x parameter
- To customize the x-location of the tree, add an x parameter to the function declaration. 
- Choose an "achor point" that serve as the point that defines the location of the tree. In this example, we chose the top point of the triangle to define the location of each tree. Therefore, x is passed to the traingle function in place for the 3rd argument: 210 
function tree(x) {
  fill(80,30,20);
  rect(200,320,20,60);
  fill(20,130,5);
  triangle(180, 320, x, 240, 240, 320);
  }
*/

/* Step 3: Create numerical expressions for each shape that also has an argument for the x-coordinate.

- Each numerical expression must be relative to the original value for x: 210 therefore since we orginally had 
rect(200, 320, 20, 60)

We can modify the x-argument (200) to x - 10 so it reads 
rect(x - 10, 320, 20, 60) 

- We do the same for the x1 and x3 parameters in 
triangle(180, 320, x, 240, 240, 320) to 
triangle(x - 30, 320, x, 240, x + 30, 320)

function tree(x) {
  fill(80,30,20);
  rect(x - 10, 320, 20, 60);
  fill(20,130,5);
  triangle(x - 30, 320, x, 240, x + 30, 320);
  }
  
/* Step 4: Add a y parameter to the function declaration, identify the y-coordinate anchor point and create numerical expressions for each shape that also has an argument for the y-coordinate. 

The anchor point is y = 240 since the 4th argument in the triangle function is for the y-coordinate of the top point of the tree. All other y-coordinates are adjusted according to the numbers that appear in their place (relative to y = 240)

Original: triangle(x - 30, 320, x, 240, x - 20, 320);

Modified: triangle(x - 30, y + 80, x, y, x - 20, y + 80);

Original: rect(x - 10, y + 80, 20, 60);

Modified: triangle(x - 30, y + 80, x, y, x - 20, y + 80);

function tree(x) {
  fill(80,30,20);
  rect(x - 10, y + 80, 20, 60);
  fill(20,130,5);
  triangle(x - 30, y + 80, x, y, x - 30, y + 80);
}
*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //tree that follows mouse
  tree(mouseX, mouseY);
}

function tree(x, y) {
  fill(80,30,20);
  rect(x - 10, y + 80, 20, 60);
  fill(20,130,5);
  triangle(x - 30, y + 80, x, y, x + 30, y + 80);
}

