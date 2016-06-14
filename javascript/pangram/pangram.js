var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var Pangram = function(str) {
    var i=0;
    while(i < alphabet.length && str.match(new RegExp(alphabet[i++],'i')));
    this.isWordPangram = i === alphabet.length;
};

Pangram.prototype.isPangram = function() {
    return this.isWordPangram;
};

module.exports = Pangram;
