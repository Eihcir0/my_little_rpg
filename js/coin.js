const Moveable = require('./moveable.js');

class Coin extends Moveable {
  constructor(obj) {
    super(obj);
    this.value = obj.value;
    this.animationOn = false;
    this.pos = obj.pos;
    this.automover = false;
    this.dying = false;
    this.facing = "N";
    this.name = "COIN";
    this.width = 32;
    this.height = 32;

    this.speed = 0;
    this.Maxspeed = 0;
    this.animSet = 0;
    this.spriteYoffset = 0;
    this.animFrame = 0;
    this.animNumFrames = 8;
    this.animDelay = 50;
    this.animTimer = 0;
    this.imageReady = false;
    this.image = new Image();
    this.image.src =
    "./images/spinning_coin_gold.png";
    this.image.onload = () => (this.imageReady = true);
    this.sound = new Audio('./images/349281__adam-n__coin-on-coins-05.wav');


  }

  updateAnim(elapsed) {

  if (this.dying || this.blinking) {
    this.animTimer += elapsed;
    if (this.animTimer >= this.animDelay) {
      this.animTimer = 0;
      if (this.blinking) {this.blinking -= 1;}
      if (this.dying) {

      ++this.animFrame;
      this.pos[1] -= 3;
      if (this.animFrame >= this.animNumFrames) {
          this.done = true;}
      }
    }
  }
}






} //end class

module.exports = Coin;
