var score = 0;
var level = 1;
var startTime = getTime();

setActiveCanvas("cookie");
drawImageURL("https://upload.wikimedia.org/wikipedia/commons/a/ab/Chocolate_chip_cookie.jpg");

onEvent("cookie", "click", function( ) {
  processClick();
});

function processClick() {
  score++;
  level = 1 + Math.floor(score / 10);
  setProperty("scoreLabel", "text", score);
  setProperty("levelUpLabel", "text", level);
  setProperty("clicksPerSecondLabel", "text", getClicksPerSecond());
}

function getClicksPerSecond(){
  var elapsedTime = getTime() - startTime;
  var clicksPerSecond = (score / (elapsedTime / 1000));
  clicksPerSecond = clicksPerSecond.toFixed(2);
  return clicksPerSecond;
}