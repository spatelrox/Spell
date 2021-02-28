var letterA,letterB,letterC,letterD,letterE,letterF,letterG,letterH,letterI,letterJ,letterK,letterL,letterM,letterN,letterO,letterP,letterQ,letterR,letterS,letterT,letterU,letterV,letterW,letterX,letterY,letterZ;

var gameBackground, gameBackgroundIMG, homeBackground, homeBackgroundIMG;

var playerCount;

var player, form, game;

var database;

var gameState = 0;

function preload(){
  gameBackground = loadImage("Images/game background.jpg")
  homeBackground = loadImage("Images/background image.webp")


  letterA = loadImage("Images/letter A.png")
  letterB = loadImage("Images/letter B.png")
  letterC = loadImage("Images/letter C.png")
  letterD = loadImage("Images/letter D.png")
  letterE = loadImage("Images/letter E.png")
  letterF = loadImage("Images/letter F.png")
  letterG = loadImage("Images/letter G.png")
  letterH = loadImage("Images/letter H.png")
  letterI = loadImage("Images/letter I.png")
  letterJ = loadImage("Images/letter J.png")
  letterK = loadImage("Images/letter K.png")
  letterL = loadImage("Images/letter L.png")
  letterM = loadImage("Images/letter M.png")
  letterN = loadImage("Images/letter N.png")
  letterO = loadImage("Images/letter O.png")
  letterP = loadImage("Images/letter P.png")
  letterQ = loadImage("Images/letter Q.png")
  letterR = loadImage("Images/letter R.png")
  letterS = loadImage("Images/letter S.png")
  letterT = loadImage("Images/letter T.png")
  letterU = loadImage("Images/letter U.png")
  letterV = loadImage("Images/letter V.png")
  letterW = loadImage("Images/letter W.png")
  letterX = loadImage("Images/letter X.png")
  letterY = loadImage("Images/letter Y.png")
  letterZ = loadImage("Images/letter Z.png")
}

function setup() {
  database = firebase.database()
  createCanvas(displayWidth - 20, displayHeight - 20);

  if(gameState === 0){
    //background(gameBackground)

    game = new Game()
    game.getState()
    game.start()
  }

}

function draw() {
  //background(homeBackground); 
  
  drawSprites();
}