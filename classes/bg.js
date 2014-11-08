function Bg(context) {
	this.x = 0;
	this.y = 0;
	this.img = null;
	this.ctx = context;
}

Bg.prototype.draw = function () {
	var me = this;
	if (!me.img) {
		var img = new Image();
		img.src = "./assets/bg.png";
		img.onload = function () {
			me.img = this;
			me.width = this.width;
			me.ctx.drawImage(this, 0, 0, img.width, img.height, me.x, 0, img.width, img.height);
		}
	} else {
		me.ctx.drawImage(me.img, 0, 0, me.img.width, me.img.height, me.x, 0, me.img.width, me.img.height);
	}
}
