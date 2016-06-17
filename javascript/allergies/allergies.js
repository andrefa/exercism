(function(){

    const items = ['eggs','peanuts','shellfish','strawberries','tomatoes','chocolate','pollen','cats'];

    var Allergies = function(score) {

        var allerg = {
            _score : score%256
        };

        allerg.list = function() {

            var have = [];
            var index = items.length;
            var score = allerg._score;

            while (--index >= 0) {
                var pow = Math.pow(2,index);
                if (score >= pow) {
                    have.push(items[index]);
                    score -= pow;
                }
            }

            return have.reverse();
        };

        allerg.allergicTo = function(allergy) {
            return allerg.list().includes(allergy);
        };

        return allerg;
    };

    module.exports = Allergies;

})();
