
(function(){

    var parse = function(words) {
        return words.match(/[A-Z]+[a-z]*|[a-z]+/g).reduce(function(result, val){
            return result += val.charAt(0).toUpperCase();
        },'');
    };

    module.exports = {
        parse : parse
    };

})();
