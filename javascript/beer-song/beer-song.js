var BeerSong = function() {};

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

BeerSong.prototype.sing = function(first, last) {
    return this.verse(first) + (first > (last|0) ? '\n' + this.sing(first-1,last) : '');
};

BeerSong.prototype.verse = function(idx) {
    if (idx == 0) {
        return bottlesOfBeer(0).capitalize() + wall() + ', ' + bottlesOfBeer(0) + '.\n'
                +'Go to the store and buy some more, ' + bottlesOfBeer(99) + wall() + '.\n';
    }

    return (bottlesOfBeer(idx) + wall() + ', ' + bottlesOfBeer(idx) + '.\nTake ' + (idx == 1 ? 'it' : 'one')
                + ' down and pass it around, ' + bottlesOfBeer(idx - 1) + wall() + '.\n');
}

var bottlesOfBeer = function(idx) {
    return (idx ? idx : 'no more') + ' ' + bottleWord(idx) + ' of beer';
}

var bottleWord = function(idx) {
    return idx == 1 ? 'bottle' : 'bottles';
}

var wall = function() {
    return ' on the wall';
}

module.exports = BeerSong;
