var score = 0;

setActiveCanvas("cookie");
drawImageURL("https://upload.wikimedia.org/wikipedia/commons/a/ab/Chocolate_chip_cookie.jpg");

onEvent("cookie", "click", function( ) {
  score++;
  setProperty("scoreLabel", "text", score);
});