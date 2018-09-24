var ForagerBee = function() {
	Grub.call(this);
	Bee.call(this);
	this.age = 10;
	this.job = 'find pollen';
	this.canFly = true;
	this.treasureChest = [];

};

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype.forage = function(value) {
	this.treasureChest.push(value);
}
ForagerBee.prototype.constructor = ForagerBee;
