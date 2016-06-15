
(function(){

    var values = {
        1 : 'AEIOULNRST',
        2 : 'DG',
        3 : 'BCMP',
        4 : 'FHVWY',
        5 : 'K',
        8 : 'JX',
        10 : 'QZ'
    };

    var score = function(words) {
        if (!words || !words.length)
            return 0;

        return Object.keys(values).reduce((total, key) => {
            var matches = words.match(new RegExp('['+values[key]+']','gi'));
            return total += matches ? (matches.length * key) : 0;
        }, 0);
    };

    module.exports = score;

})();
