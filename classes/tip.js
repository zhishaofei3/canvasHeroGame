function Tip(context) {
	this.x = context.canvas.clientWidth / 2;
	this.y = context.canvas.clientHeight / 2;
	this.ctx = context;
	this.tipTxt = "";
	this.timeOutId = 0;
}

Tip.prototype.tip = function (txt) {
	var me = this;
	me.tipTxt = txt;
}

Tip.prototype.draw = function (txt) {
	var me = this;
	if (me.tipTxt == "") {
		return;
	}
	me.timeOutId = setTimeout(function () {
		me.tipTxt = "";
		me.timeOutId = 0;
	}, 2000);
	var gradient = me.ctx.createLinearGradient(0, 0, 200, 0);
	gradient.addColorStop(0, "magenta");
	gradient.addColorStop(0.5, "blue");
	gradient.addColorStop(1, "red");
	me.ctx.fillStyle = gradient;
	me.ctx.strokeStyle = "#0f0";
	me.ctx.font = "30px Verdana";
	me.ctx.textAlign = "center";
	me.ctx.fillText(me.tipTxt, me.x, me.y);
}
