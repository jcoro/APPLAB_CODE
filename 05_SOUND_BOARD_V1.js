var xValue = 90;
var yValue = 100;

textLabel("headline", "SOUND BOARD");
setPosition("headline", 55, 30, 300, 50);
setProperty("headline", "text-color", "white");
setProperty("headline", "font-family", "Arial");
setProperty("headline", "font-size", 24);

var buttonArray = ["amazing", "hungry", "hello"];


function createButton(text, x, y) {
  button(text, text.toUpperCase());
  setPosition(text, x, y, 135, 55);
  setProperty(text, "background-color",  rgb(176,188,202,0.90));
  setProperty(text,"font-family","Arial");
  setProperty(text, "text-color", "black");
}

for (var i = 0; i < buttonArray.length; i++){
  createButton(buttonArray[i], xValue, yValue);
  yValue += 65;
}

onEvent("amazing", "click", function(){
  playSound("sound://category_human/character_kimberly_amazing_1.mp3");
});

onEvent("hungry", "click", function(){
  playSound("sound://category_human/character_kimberly_i'm_hungry_1.mp3");
});

onEvent("hello", "click", function(){
  playSound("sound://category_human/character_kimberly_hello_1.mp3");
});