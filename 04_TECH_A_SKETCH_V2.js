penWidth(8);
penColor("black");
setProperty("blackPaint", "border-color", "yellow");
setProperty("blackPaint", "border-width", 5);
var penDownBoolean = true;
var turtleShowing = true;

/**
 * This function puts a yellow border around buttons that are active.
 * That's good UI/UX Design!
 */ 
function activateButton(prefix){
  // It was a color button that was clicked
  // First, set all color buttons to inactive...
  setProperty("blackPaint", "border-color", "gray");
  setProperty("blackPaint", "border-width", 1);

  setProperty("bluePaint", "border-color", "gray");
  setProperty("bluePaint", "border-width", 1);

  setProperty("greenPaint", "border-color", "gray");
  setProperty("greenPaint", "border-width", 1);

  setProperty("redPaint", "border-color", "gray");
  setProperty("redPaint", "border-width", 1);

  // Then set just the CLICKED color button to active
  setProperty(prefix + "Paint", "border-color", "yellow");
  setProperty(prefix + "Paint", "border-width", 5);
}

onEvent("upButton", "click", function( ) {
  turnTo(0);
  moveTo(getX(), getY() - 10);
});

onEvent("downButton", "click", function( ) {
  turnTo(180);
  moveTo(getX(), getY() + 10);
});

onEvent("leftButton", "click", function( ) {
  turnTo(270);
  moveTo(getX() - 10, getY());
});

onEvent("rightButton", "click", function( ) {
  turnTo(90);
  moveTo(getX() + 10, getY());
});

onEvent("blackPaint", "click", function(){
  activateButton("black");
  penColor("black");
});

onEvent("bluePaint", "click", function(){
  activateButton("blue");
  penColor("blue");
});

onEvent("greenPaint", "click", function(){
  activateButton("green");
  penColor("green");
});

onEvent("redPaint", "click", function(){
  activateButton("red");
  penColor("red");
});

onEvent("toggleTurtleButton", "click", function(){
  if (turtleShowing){
    hide();
    turtleShowing = false;
    setProperty("toggleTurtleButton", "text", "TURTLE OFF");
  } else {
    show();
    turtleShowing = true;
    setProperty("toggleTurtleButton", "text", "TURTLE ON");
  }
});

onEvent("togglePenButton", "click", function(){
  if (penDownBoolean) {
    penUp();
    penDownBoolean = false;
    setProperty("togglePenButton", "text", "PEN DOWN");
  } else {
    penDown();
    penDownBoolean = true;
    setProperty("togglePenButton", "text", "PEN UP");
  }
});