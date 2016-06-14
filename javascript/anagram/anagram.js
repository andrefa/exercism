var Anagram = function(text) {
    this.original = lower(text);
    this.ordered = order(text);
};

Anagram.prototype.matches = function() {
    var words = extractArgs(arguments);
    var match = [];

    words.forEach(function(word) {
        if (this.ordered === order(word) && this.original !== lower(word)) match.push(word);
    }, this);

    return match;
};

var lower = function(str) {
    return str.toLowerCase();
}

var order = function(str) {
    return lower(str).split('').sort().join('');
}

var extractArgs = function(args) {
    if (args.length === 1 && args[0] instanceof Array)
        return args[0];

    var words = [];
    for(var i = 0;i<args.length; i++){
        words.push(args[i]);
    }
    return words;
}

module.exports = Anagram;
