(function(){

    var Raindrops = function() {

        var convert = function(num) {
            result = divBy(num, 3) ? 'Pling' : '';
            result += divBy(num, 5) ? 'Plang' : '';
            result += divBy(num, 7) ? 'Plong' : '';

            return result.length == 0 ? String(num) : result;
        };

        function divBy(num, divisor) {
            return num % divisor == 0;
        };

        return {
            convert : convert
        };
    };

    module.exports = Raindrops;

})();
