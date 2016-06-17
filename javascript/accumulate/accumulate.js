(function(){

    var accumulate = function(arr, func) {
        for (var index = 0; index < arr.length ; index++) {
            arr[index] = (func(arr[index]));
        }
        return arr;
    };

    module.exports = accumulate;

})();
