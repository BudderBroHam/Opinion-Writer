var feelingx = 10;
var feelingy = 150;
var feelingwidth = 150;
var feelingheight = 50;
var feelingtabstate = 'tab'
var feelingbutton;
var openingsentences;
var body;
var check = [0,0,0];
 //exciting = 1   suprising = 2   sad = 3   worried = 4    funny = 5    interesting = 6    angry = 7;







//vars for textboxes
var textbox, textbox2, textbox3, nounbutton, verbbutton, topic, writebutton;

function setup() {
 createCanvas(1280, 720);
 background(80,120,120)
 createElement('h2', 'What happened in your article?').position(20, 5);
 
 //textbox
 textbox = createInput();
 textbox.position(20, 80);
 //submit button
 nounbutton = createButton('submit');
 nounbutton.position(textbox.x + textbox.width, 80);
 nounbutton.mousePressed(nsubmit);
 //text
 createElement('h3', 'Noun').position(25, 40);
 //textbox2
 textbox2 = createInput();
 textbox2.position(250, 80);
 //submit button
 verbbutton = createButton('submit');
 verbbutton.position(textbox2.x + textbox2.width, 80);
 verbbutton.mousePressed(vsubmit);
 //text
 createElement('h3', 'Verb').position(250, 40);
 //textbox3
 textbox2 = createInput();
 textbox2.position(250, 80);
 
 //verb text
 createElement('h3', 'Verb').position(250, 40);
 //write button
  writebutton = createButton('Write Now');
  writebutton.position(10 , 200);
  writebutton.mousePressed(write);
 

 textAlign(CENTER);
 textSize(50);
 //feeling button
  feelingbutton = createSelect();
  feelingbutton.position(10, 150);
  feelingbutton.option('Feeling');
  feelingbutton.option('exciting');
  feelingbutton.option('suprising');
  feelingbutton.option('sad');
  feelingbutton.option('worried');
  feelingbutton.option('funny');
  feelingbutton.option('interesting');
  feelingbutton.option('angry');
  feelingbutton.changed(setfeeling);
}

function nsubmit() {
 str; noun = textbox.value();
 check[0] = 1
}

function vsubmit() {
 str; verb = textbox2.value();
 check[1] = 1
}

function setfeeling() {
 check[2] = 1
 var feeling = feelingbutton.value();
 conclusions = ["Those were my thoughts about this story.",
  "Those were my thoughts about this article.",
  "Those were my thoughts on this article.",
  "That was my opinion about this event.",
  "That was my opinion about this event.",
  "That was my opinion on this article.",
  "That is what I thought about this story.",
  "That is what I thought about this event."]
 //exciting
 if(feeling == "exciting"){
  openingsentences = ["I think that this event is very exciting. ", 
  "This article makes me feel excited. ", 
  "This news story is very exciting. ",
  "My opinion about this event is that it sounds exciting. "
  ];
  body = ["It's very exciting that " + noun + " " + verb + ". ", 
  "I think it's exciting that " + noun + " " + verb + ". ", 
  "It's thrilling to know that " + noun + " " + verb + ". ",
  "The fact that " + noun + " " + verb + " is really exciting. ",
  "It's exhilirating to learn that " + noun + " " + verb + ". "
  ];
 }
 //suprising
 if(feeling == "suprising"){
  openingsentences = ["I think that this event is very unexpected. ", 
  "This article makes me feel startled. ", 
  "This news story is very suprising. ",
  "My opinion about this event is that it's unexpected. "
  ];
  body = ["It's amazing that " + noun + " " + verb + ". ", 
  "I think it's stunning that " +noun + " " + verb + ". ", 
  "It's remarkable to know that " + noun + " " + verb + ". ",
  "The fact that " + noun + " " + verb + " is unexpected. ",
  "It's suprising to learn that " + noun + " " + verb + ". "
  ];
 }
 //sad
  if(feeling == "sad"){
  openingsentences = ["I think that this event is very sad. ", 
  "This article makes me feel depressed. ", 
  "This news story is very tragic. ",
  "My opinion about this event is that it's really sad. "
  ];
  body = ["It's not good that " + noun + " " + verb + ". ", 
  "I feel sorry that " + noun + " " + verb + ". ", 
  "It's sad to know that " + noun + " " + verb + ". ",
  "The fact that " + noun + " " + verb + " makes me feel down. ",
  "It's very depressing to learn that " + noun + " " + verb + ". "
  ];
 }
 //worried
  if(feeling == "worried"){
  openingsentences = ["I think that this event is very worrying. ", 
  "This article makes me troubled. ", 
  "This news story is very disturbing. ",
  "My opinion about this event is that it makes me feel anxious. "
  ];
  body = ["It makes me worried that " + noun + " " + verb + ". ", 
  "I feel scared that " + noun + " " + verb + ". ", 
  "It's frightening know that " + noun + " " + verb + ". ",
  "The fact that " + noun + " " + verb + " is concerning. ",
  "It makes me uneasy to learn that " + noun + " " + verb + ". "
  ];
 }
 //funny
  if(feeling == "funny"){
  openingsentences = ["I think that this event is very funny. ", 
  "This article makes me laugh. ", 
  "This news story is very absurb to me. ",
  "My opinion about this event is that it makes me feel anxious. "
  ];
  body = ["It makes me worried that " + noun + " " + verb + ". ", 
  "I feel scared that " + noun + " " + verb + ". ", 
  "It's frightening know that " + noun + " " + verb + ". ",
  "The fact that " + noun + " " + verb + " is concerning. ",
  "It makes me uneasy to learn that " + noun + " " + verb + ". "
  ];
 }
 //interesting
  if(feeling == "interesting"){
  openingsentences = ["I think that this event is very interesting. ", 
  "This article makes me think. ", 
  "This news story is very neat. ",
  "This news story is fascinating. ",
  "This story  is very though-provoking",
  "This event makes me interested about " + noun + ". "
  ];
  body = ["It's intriguing that " + noun + " " + verb + ". ", 
  "It's interesting that " + noun + " " + verb + ". ", 
  "It's compelling know that " + noun + " " + verb + ". ",
  "It's good to know that " + noun + " " + verb + ". ",
  "It's neat to learn that " + noun + " " + verb + ". "
  ];
 }
 
 //angry
  if(feeling == "angry"){
  openingsentences = ["This event makes me feel angry. ", 
  "This article makes me feel mad. ", 
  "This news story is very annoying. ",
  "My opinion about this event is that it makes me feel furios. "
  ];
  body = ["It makes me offended that " + noun + " " + verb + ". ", 
  "I hate that " + noun + " " + verb + ". ", 
  "It's displeasing know that " + noun + " " + verb + ". ",
  "The fact that " + noun + " " + verb + " is irritating. ",
  "It makes me bitter to learn that " + noun + " " + verb + ". "
  ];
 }
}









function mouseClicked() {
 //if click on tab open dropdown
 if (mouseX > feelingx && mouseX < feelingx + feelingwidth && mouseY > feelingy && mouseY < feelingy + feelingheight) {

  if (FeelingTab == loadImage("images/Feeling Tab.png")); {
   feelingtabstate = 'dropdown'
   FeelingTab = loadImage("images/Feeling DropDown.png");
   image(FeelingTab, feelingx, 200);
  }
 }
 
}

function write() {
  fill(80,120,120)
  stroke(80,120, 120)
  rect(500, 75, 200, 50)
  fill(0)
  textAlign(LEFT);
  if (check[0] == 1 && check[1] == 1 && check[2] == 1) {
   stroke(0)
   print("0")
   body = shuffle(body);
   var openingsentence = random(openingsentences);
   var conclusion = random(conclusions);
   createElement('h3', openingsentence + body[0] + body[1] + body[2] + body[3] + body[4] + conclusion).position(200, 150, 500, 720);
  }
  if (check[0] == 0 ) {
   textSize(12);
   text("You forgot a noun you dumb dumb", 500, 100)
  }
  if (check[1] == 0 ) {
   textSize(12);
   text("You forgot a verb you dumb dumb", 500, 112)
  }
  if (check[2] == 0 ) {
   textSize(12);
   text("You forgot a feeling you dumb dumb", 500, 124)
  }
  }
 
function draw() {

}