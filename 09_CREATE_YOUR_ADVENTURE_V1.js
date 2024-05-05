var backgrounds = [
    "https://images.unsplash.com/photo-1613728964229-03bd6189bdad",
    "https://images.unsplash.com/photo-1568503445916-aad26dad82ea",
    "https://images.unsplash.com/photo-1591975602426-0a6c13954c42",
    "https://images.unsplash.com/photo-1632944511358-0753f3f61283",
    "https://images.unsplash.com/photo-1506147854445-5a3f534191f8",
    "https://images.unsplash.com/photo-1579772991680-1194ef83d407",
    "https://images.unsplash.com/photo-1623674558653-ed6bd1fc4b14",
];

var screen1Buttons = ["Screen 1 Button 1", "Screen 1 Button 2"];
var screen2Buttons = ["Screen 2 Button 1", "Screen 2 Button 2"];
var screen3Buttons = ["Screen 3 Button 1", "Screen 3 Button 2"];
var buttonsArray = [screen1Buttons, screen2Buttons, screen3Buttons];

var screen1Story ="Screen 1 Story";
var screen2Story ="Screen 2 Story";
var screen3Story ="Screen 3 Story";
var screen4Story ="Screen 4 Story";
var screen5Story ="Screen 5 Story";
var screen6Story ="Screen 6 Story";
var screen7Story ="Screen 7 Story";
var storyArray = [
    screen1Story, 
    screen2Story, 
    screen3Story, 
    screen4Story, 
    screen5Story, 
    screen6Story, 
    screen7Story
];

function makeButton(buttonId, screenId, text, x, y, width, height) {
  button(buttonId, text);
  setPosition(buttonId, x, y, width, height);
  setProperty(buttonId, "background-color", "rgb(176, 188, 202, 0.90)");
  setProperty(buttonId, "font-family", "Arial");
  setProperty(buttonId, "text-color", "black");
  onEvent(buttonId, "click", function() {
    setScreen(screenId);
  });
}

function showStory(screenNumber, story){
  var storyId = "story" + screenNumber;
  textLabel(storyId, story);
  setProperty(storyId, "font-family", "Arial");
  setProperty(storyId, "background-color", rgb(255, 255, 255, 0.75));
}

function makeScreen(screenNumber){
  var screenId = "screen" + screenNumber;
  setScreen(screenId);
  // Show background on each screen
  setProperty(screenId, "image", backgrounds[screenNumber - 1]);
  // Show story for each screen
  var story = storyArray[screenNumber - 1];
  showStory(screenNumber, story);
  // SOLUTION 1: Create Choice Buttons on screens 1, 2, and 3
  if(screenNumber < 4){
    var xValue = 15;
    var yValue = 350;
    var buttons = buttonsArray[screenNumber - 1];
    for (var i = 0; i < buttons.length; i++){
      var buttonId;
      if (i == 0){
        buttonId = screenNumber * 2;
      } else {
        buttonId = (screenNumber * 2) + 1;
      }
      makeButton(buttonId + "", "screen" + buttonId, buttons[i], xValue, yValue, 125, 50);
      xValue += 175;
    }
  }
}

// Make screens 1 through 7
for (var i = 1; i <= 7 ; i++){
  makeScreen(i);
}
setScreen("screen1");