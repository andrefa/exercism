var Hamming = function() {};

Hamming.prototype.compute = function(a,b) {
    if (a.length != b.length)
        throw new Error('DNA strands must be of equal length.');

    var diff = 0;

    for(var i=0;i<a.length;i++)
        diff += a.charAt(i) != b.charAt(i) ? 1 : 0;

    return diff;
};

module.exports = Hamming;
