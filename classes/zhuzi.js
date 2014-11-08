function ZhuZi(context) {
	this.width = Math.floor(15 * Math.random()) + 5;
	this.height = Math.floor(100 * Math.random()) + 100;
	this.x = context.canvas.clientWidth - 100;
	this.y = context.canvas.clientHeight - this.height;
	this.ctx = context;
	this.color = utils.parseColor(parseInt("0xffffff") * Math.random());
	this.count = 0;
}

ZhuZi.prototype.draw = function () {
	var me = this;
	if (me.count++ >= 40) {
		me.color = utils.parseColor(parseInt("0xffffff") * Math.random());
		me.count = 0;
	}
	me.ctx.fillStyle = me.color;
	me.ctx.fillRect(me.x, me.y, me.width, me.height);
}
