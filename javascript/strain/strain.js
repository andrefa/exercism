(function(){

    var keep = function(arr, condition) {
        return arr.reduce((p, c) => {
            if (condition(c))
                p.push(c);
            return p;
        }, []);
    };

    var discard = function(arr, condition) {
        return keep(arr, (c) => { return !condition(c); });
    };

    module.exports = {
        keep : keep,
        discard : discard
    };

})();
