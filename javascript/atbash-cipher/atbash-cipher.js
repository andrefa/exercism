(function(){

    const alph = 'abcdefghijklmnopqrstuvwxyz';
    const rev = alph.split('').reverse();

    var encode = function(word) {
        var clean = word.replace(/[^a-z0-9]/gi, '').toLowerCase().split('');

        return clean.reduce((last, curr, index) => {
            return last + (curr.match(/[a-z]/) ? (rev[alph.indexOf(curr)]) : curr) + ((index+1)%5==0 && index>0 ? ' ' : '');
        }, '').trim();
    };

    module.exports = {
        encode : encode
    };

})();
