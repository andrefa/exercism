const CHARS_LENGTH = 2;
const CHARS_OFFSET = 65;
const CHARS_LIM = 26;

var HISTORY = [];

var Robot = function(){
    this.reset();
};

Robot.prototype.reset = function() {
    this.name = generateName();
}

function generateName() {
    var generated = gen();

    while (HISTORY.indexOf(generated) !== -1) {
        generated = gen();
    }

    HISTORY.push(generated);
    return generated;
};

function gen() {
    return rand(CHARS_LENGTH, CHARS_OFFSET, CHARS_LIM) + ('00' + Math.floor(Math.random() * 999)).slice(-3);
}

function rand(len, offset, lim) {
    return (len) ? String.fromCharCode(Math.floor(Math.random() * lim) + offset) + rand(len-1, offset, lim) : '';
}

module.exports = Robot;
