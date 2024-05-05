var backgrounds = [
    "https://images.unsplash.com/photo-1613728964229-03bd6189bdad",
    "https://images.unsplash.com/photo-1568503445916-aad26dad82ea",
    "https://images.unsplash.com/photo-1591975602426-0a6c13954c42",
    "https://images.unsplash.com/photo-1632944511358-0753f3f61283",
    "https://images.unsplash.com/photo-1506147854445-5a3f534191f8",
    "https://images.unsplash.com/photo-1579772991680-1194ef83d407",
    "https://images.unsplash.com/photo-1623674558653-ed6bd1fc4b14",
];

var screen1Buttons = ["Toward Temple", "Away From Temple"];
var screen2Buttons = ["Left Tunnel", "Right Tunnel"];
var screen3Buttons = ["East", "West"];
var buttonsArray = [screen1Buttons, screen2Buttons, screen3Buttons];

var screen1Story = [{
        voice: "male",
        script: "As you look out over the landscape, you think that all of your hard work may soon pay off.  It's every archaeologist's dream to discover what you and your team hope to find at Saqqara - an Egyptian tomb untouched for over 4,000 years.  Just then, you hear a ruckus coming from the direction of the nearby temple.  You hear someone yell:"
    },
    {
        voice: "female",
        script: "Stop! Thief!"

    },
    {
        voice: "male",
        script: "You remember that ancient temples like these are notorious for attracting robbers and thieves. You could go and see what all the commotion is about, or you could make yourself scarce. Which way do you go?"
    }
];
var screen2Story = [{
        voice: "male",
        script: "You make your way towards the temple.  Though the commotion has died down, a mysterious figure approaches.  She looks around and whispers,"
    },
    {
        voice: "female",
        script: "I know of a secret passage to undiscovered tombs."
    },
    {
        voice: "male",
        script: "She gestures towards two tunnels carved into the stone nearby."
    },
    {
        voice: "female",
        script: "If you choose wisely, the correct tunnel will take you directly to the tomb you seek.  If you choose poorly, you'll end up alone in the middle of the harsh Egyptian desert."
    },
    {
        voice: "male",
        script: "Which tunnel will you take? "
    }
];
var screen3Story = [{
        voice: "male",
        script: "You make your way away from the commotion. In your haste, you bump into a young woman mapping out the grounds around the Pyramid of Djoser. Excuse me, you say. "
    },
    {
        voice: "female",
        script: "That's okay.  I'm Alice, a student at Cairo University.  My research tells me that there's hundreds of kilometers of tunnels under the Pyramid.  The builders made them complicated to discourage tomb robbers.  I'm searching for the Serapeum of Saqqara - the Ancient Egyptian burial place of sacred bulls.  The Egyptians believed that the bulls would become immortal in the afterlife.  I've got a route narrowed down.  I've found the Avenue of The Sphinxes, but I don't know whether to head East or West.  Do you have any insights?"
    },
    {
        voice: "male",
        script: "In which direction should you move from the Avenue of the Sphinxes?"
    }
];
var screen4Story = [{
    voice: "male",
    script: "You take the tunnel on the left.  After what seems like an eternity, the tunnel opens into a giant room.  You light a lamp.  In a flash of light you see that hieroglyphs line the walls, and there, in the center sits a sarcophagus unseen and untouched for millennia.  Success!  This discovery is more than you could ever have dreamed for on your archaeological trip to Egypt."
}];
var screen5Story = [{
    voice: "male",
    script: "You take the tunnel on the right. After what seems like an eternity, you notice a light up ahead.  Your heart sinks.  As the light brightens, you emerge to see nothing but endless sand in every direction.  You wonder how you'll be able to make the trip back to Cairo. "
}];
var screen6Story = [{
        voice: "male",
        script: "You head East.  After traveling for what seems like eternity.  You notice a light up ahead. You poke your head from the tunnel and are greeted by a friendly camel.  Alice laughs."
    },
    {
        voice: "female",
        script: "Well, it's not the Serapeum of Saqqara, but at least we have ourselves transportation back to Cairo."
    }
];
var screen7Story = [{
        voice: "male",
        script: "You head West. After traveling for what seems like eternity, you come upon a tomb with a large sarcophagus. Alice shouts:"
    },
    {
        voice: "female",
        script: "Success!  One of the Serapeum of Saqqara!"
    },
    {
        voice: "male",
        script: "While not the ancient Pharoah you were originally searching for, you know that this find is a successful ending to your archeological trip to Egypt."
    }
];

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
        playAudio(screenId);
    });
}

function showStory(screenNumber, story) {
    var storyId = "story" + screenNumber;
    var storyText = "";
    for (var i = 0; i < story.length; i++) {
        storyText += story[i].script;
        storyText += " ";
    }
    textLabel(storyId, storyText);
    setProperty(storyId, "font-family", "Arial");
    setProperty(storyId, "background-color", rgb(255, 255, 255, 0.75));
}

function playAudio(screenId) {
    var screenNumber = +screenId.substring(6);
    var story = storyArray[screenNumber - 1];
    for (var i = 0; i < story.length; i++) {
        playSpeech(story[i].script, story[i].voice, "English (UK)");
    }
}

function makeScreen(screenNumber) {
    var screenId = "screen" + screenNumber;
    setScreen(screenId);
    // Show background on each screen
    setProperty(screenId, "image", backgrounds[screenNumber - 1]);
    // Show story for each screen
    var story = storyArray[screenNumber - 1];
    showStory(screenNumber, story);
    if (screenNumber < 4) {
        var xValue = 10;
        var yValue = 325;
        var buttons = buttonsArray[screenNumber - 1];
        for (var i = 0; i < buttons.length; i++) {
            var buttonId;
            if (i == 0) {
                buttonId = screenNumber * 2;
            } else {
                buttonId = (screenNumber * 2) + 1;
            }
            makeButton(buttonId + "", "screen" + buttonId, buttons[i], xValue, yValue, 125, 50);
            xValue += 175;
        }
    }
    // SOLUTION 1: Create Back buttons for pages 2, 3, 4, 5, 6, and 7
    if (screenNumber != 1) {
        var parent = Math.floor(screenNumber / 2);
        var backButtonId = "BackButton" + screenNumber;
        makeButton(backButtonId, "screen" + parent, "BACK", 110, 400, 100, 50);
    }
}

// Make screens 1 through 7
for (var i = 1; i <= 7; i++) {
    makeScreen(i);
}
setScreen("screen1");
// Create a start button so audio can start in browser
button("startButton", "START AUDIO");
setPosition("startButton", 110, 400, 100, 25);
setProperty("startButton", "background-color", "rgb(176, 188, 202, 0.90)");
setProperty("startButton", "font-family", "Arial");
setProperty("startButton", "font-size", 9);
setProperty("startButton", "text-color", "black");
onEvent("startButton", "click", function(){
  playAudio("screen1");
});