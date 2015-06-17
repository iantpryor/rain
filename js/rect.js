function Rect() {
  this.x = (640 - 30);
  this.y = (480 - 30);
  this.velocity = 0;
  this.veleftright = 0;
};

Rect.prototype.draw = function(context) {
  context.rect(this.x, this.y, 30, 30);]
  context.stroke();
};

Rect.prototype.update = function() {
  if (this.y < 0) {
    this.velocity = 1;
  } else if (this.y > 450) {
    this.velocity = -1;
  }
  
  if(player.input.left == true){
    this.veleftright = 5;
    if(player.input.jump == true){
      this.veleftright += 5;
    }
  }else if(player.input.right == true){
    this.veleftright = -5;
    if(player.input.jump == true){
      this.veleftright -= 5;
    }
  }else{
    this.veleftright = 0;
  }
  
  this.y += this.velocity;
  this.x += this.veleftright;
};
