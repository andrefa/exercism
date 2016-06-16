(function(){

    var primeFactorFor = function(prime) {
        var factors = [];

        var divisor = 2;
        while(prime !== 1) {
            if (prime % divisor === 0) {
                prime /= divisor;
                factors.push(divisor);
            } else {
                divisor++;
            }
        }

        return factors;
    }

    module.exports = {
        'for' : primeFactorFor
    };

})();
