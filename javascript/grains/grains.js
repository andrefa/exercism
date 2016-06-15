var BigInt = require('./big-integer');

var bigIntBase = BigInt(2);

var Grains = function() {}

Grains.prototype.square = function(val) {
    return bigIntBase.pow(val-1).toString();
};

Grains.prototype.total = function(val) {
    return bigIntBase.pow(64).subtract(1).toString();
};

module.exports = Grains;
