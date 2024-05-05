// Soccer balls will randomly appear on the screen every second for one minute. 
// Click on the ball to save it.
// If a ball is on the screen for 1 second without being clicked, it's a goal.
var counter = 0;
var goals = 0;
var saves = 0;

function updateScoreboard(goals, saves) {
  setProperty("scoreboard", "text", "Goals: " + goals + " Saves: " + saves);
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

textLabel("headline", "SOCCER GOALIE");
setPosition("headline", 0, 0, 320, 50);
setProperty("headline", "text-color", "white");
setProperty("headline", "text-align", "center");
setProperty("headline", "font-family", "Arial");
setProperty("headline", "background-color", "rgb(0, 0, 0, 0.25)");
setProperty("headline", "font-size", 32);

textLabel("scoreboard", "");
setPosition("scoreboard", 0, 50, 320, 35);
setProperty("scoreboard", "text-color", "white");
setProperty("scoreboard", "text-align", "center");
setProperty("scoreboard", "font-family", "Arial");
setProperty("scoreboard", "background-color", "rgb(0, 0, 0, 0.25)");
setProperty("scoreboard", "font-size", 24);

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
}, oneMinuteInMilliseconds);