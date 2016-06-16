(function(){

    const rules = [
        { one : 'I', five : 'V', ten : 'X'},
        { one : 'X', five : 'L', ten : 'C'},
        { one : 'C', five : 'D', ten : 'M'},
        { one : 'M'}
    ];

    var toRoman = function(num) {
        return String(num).split('').reverse().reduce((word, char, i) => {
            return romanize(Number(char), rules[i]) + word;
        }, '');
    };

    function romanize(num,ref) {
        return num == 4 || num == 9 ? (ref.one + (num == 4 ? ref.five : ref.ten)) :
                (num >= 5 ? ref.five : '') + Array((num % 5) + 1).join(ref.one);
    }

    module.exports = toRoman;

})();
