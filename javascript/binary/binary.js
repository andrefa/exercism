(function(){

    var Binary = function(binaryString) {
        this._binary = binaryString.match(/^[01]+$/g) ? binaryString : '0';
    };

    Binary.prototype.toDecimal = function() {
        return this._binary.split('').reverse().reduce((old, current, index) => {
            return old + (Math.pow(2,index) * Number(current));
        }, 0);
    };

    module.exports = Binary;

})();
