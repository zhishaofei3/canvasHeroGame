function Hero(context) {
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.scaleX = 0.4;
	this.scaleY = 0.4;
	this.isJump = false;
	this.img = null;
	this.ctx = context;
}

Hero.prototype.jump = function () {
	var me = this;
	var targetYTop = 50;
	var targetYBottom = 250;
	var vy = 0;
	var easing = 0.05;
	if (!me.isJump) {
		me.isJump = true;
		(function upFrame() {
			vy = (targetYTop - me.y) * easing;
			me.y += vy;
			if (Math.floor(me.y) <= targetYTop) {
				window.cancelRequestAnimationFrame(upFrame);
				(function downFrame() {
					vy = (targetYBottom - me.y) * easing;
					me.y += vy;
					if (Math.ceil(me.y) >= 250) {
						me.y = 250;
						me.isJump = false;
						window.cancelRequestAnimationFrame(downFrame);
					} else {
						window.requestAnimationFrame(downFrame, me.ctx);
					}
				})();
			} else {
				window.requestAnimationFrame(upFrame, me.ctx);
			}
		})();
	}
}

Hero.prototype.draw = function () {
	var me = this;
	if (!me.img) {
		var img = new Image();
		img.src = "./assets/hero.png";
		img.onload = function () {
			me.img = this;
			me.width = this.width;
			me.height = this.height;
			me.ctx.drawImage(this, 0, 0, img.width, img.height, me.x, me.y, img.width * me.scaleX, img.height * me.scaleY);
		}
	} else {
		me.ctx.drawImage(me.img, 0, 0, me.img.width, me.img.height, me.x, me.y, me.img.width * me.scaleX, me.img.height * me.scaleY);
	}
}
