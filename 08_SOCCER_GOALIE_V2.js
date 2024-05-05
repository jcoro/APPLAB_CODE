// Soccer balls will randomly appear on the screen every second for one minute. 
// Click on the ball to save it.
// If a ball is on the screen for 1 second without being clicked, it's a goal.
var counter = 0;
var goals = 0;
var saves = 0;

function createText(id, x, y, width, height, size, text){
  textLabel(id, text);
  setPosition(id, x, y, width, height);
  setProperty(id, "text-color", "white");
  setProperty(id, "text-align", "center");
  setProperty(id, "font-family", "Arial");
  setProperty(id, "background-color", "rgb(0, 0, 0, 0.25)");
  setProperty(id, "font-size", size);
}

function updateScoreboard(goals, saves) {
  setProperty("scoreboard", "text", "Goals: " + goals + " Saves: " + saves);
}

function showResults(goals, saves) {
  var savePercentage = (saves / (goals + saves)).toFixed(3);
  createText("results", 0, 300, 320, 35, 20, "Save Percentage: " + savePercentage);
}

function createBall() {
  counter++;
  var ballId = "ball" + counter;
  var ballSide = randomNumber(35,100);
  var ballXPosition = randomNumber(0, 300);
  var ballYPosition = randomNumber(0, 400);
  image(ballId, "https://upload.wikimedia.org/wikipedia/commons/a/a8/Soccerball.png");
  setPosition(ballId, ballXPosition, ballYPosition, ballSide, ballSide);
  onEvent(ballId, "click", function() {
    saves++;
    updateScoreboard(goals, saves);
    hideElement(ballId);
  });
  setTimeout(function(){
    if (!getProperty(ballId, "hidden")) {
      goals++;
      updateScoreboard(goals, saves);
    hideElement(ballId);
    }
  }, 1000);
}

createText("headline", 0, 0, 320, 50, 32, "SOCCER GOALIE");
createText("scoreboard", 0, 50, 320, 35, 24, "");
updateScoreboard(goals, saves);
setProperty("screen1", "image", "https://upload.wikimedia.org/wikipedia/commons/5/59/Soccer.Field_Transparant.png");

var oneSecondInMilliseconds = 1000;
var oneMinuteInMilliseconds = 60 * oneSecondInMilliseconds;
// setInterval() means run the createBall function every 1000 milliseconds
var createBallInterval = setInterval(createBall, oneSecondInMilliseconds);

// setTimeout() means run the callback function 
// (which stops the createBall function) after one minute.
setTimeout(function() {
  // clearInterval means stop running the createBall function
  clearInterval(createBallInterval);
  showResults(goals, saves);
}, oneMinuteInMilliseconds);