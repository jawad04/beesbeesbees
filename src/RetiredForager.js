var RetiredForagerBee = function() {
	Grub.call(this);
	ForagerBee.call(this);
	this.age = 40;
	this.job = 'gamble';
	this.canFly = false;
	this.color = 'grey';


};

RetiredForagerBee.prototype = Object.create(Grub.prototype);
RetiredForagerBee.prototype.forage = function() {
	return "I am too old, let me play cards instead";
}
RetiredForagerBee.prototype.gamble = function(value) {
	this.treasureChest.push(value);
}
RetiredForagerBee.prototype.constructor = RetiredForagerBee;


