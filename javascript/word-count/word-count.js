var Words = function() {};

Words.prototype.count = function(str) {
    var words = str.toLowerCase().split(/[ ,\n\t]+/);
    var result = {};

    for(i in words) {
        var current = words[i].trim();
        if (current) {
            result[current] = (isNaN(result[current]) ? 1 :  result[current] + 1);
        }
    }

    return result;
};

module.exports = Words;
