function Square () {
  this.square = $("<div></div>").css("position", "fixed")
                                .css("opacity", 0);
  $("#background").append(this.square);
  this.size = "30px";

  this.square.click(this.fadeOut.bind(this));

  this.animate();
}

Square.prototype.animate = function () {
  let lifeTime = this.getLifeTime();
  let creationDelay = this.getCreationDelay();
  let self = this;

  setTimeout(function () {
    self.fadeIn();
    setTimeout(function () {
      self.fadeOut();
      return self.animate();
    }, lifeTime)
  }, creationDelay);
}

Square.prototype.getLeftPosition = function () {
  return Math.floor(Math.random() * window.innerWidth + 1);
};

Square.prototype.getTopPosition = function () {
  return Math.floor(Math.random() * window.innerHeight + 1);
};

Square.prototype.getCreationDelay = function () {
  return Math.random() * 10000 + 2000;
}

Square.prototype.getLifeTime = function () {
  return Math.random() * 15000 + 5000;
};

Square.prototype.getSize = function () {
  // returns random number between 30 and 60px
  return Math.floor(Math.random() * 30 + 30);
};

Square.prototype.getColor = function () {
  let colors = ["#69D2E7", "#A7DBD8", "#F38630", "#FA6900"];
  return colors[Math.floor(Math.random() * colors.length)];
}

Square.prototype.fadeIn = function () {
  this.square.css("left", this.getLeftPosition())
             .css("top", this.getTopPosition())
             .css("background-color", this.getColor())
             .css("height", this.size)
             .css("width", this.size)
             .css("z-index", 1);
  this.square.fadeTo(600, 1);
};

Square.prototype.fadeOut = function (callback) {
  this.square.fadeTo(600, 0);
};

for (let i = 0; i < 15; i++) {
  new Square();
}
