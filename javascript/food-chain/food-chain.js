var FoodChain = function() {

};

FoodChain.prototype.verses = function(from, to) {
    to = !to ? 8 : to;
    return this.verse(from)
        + (from < (to) ? '\n' + this.verses(from+1,to) : '\n');
};

FoodChain.prototype.verse = function(idx) {
    var vals = songData[idx-1];

    return 'I know an old lady who swallowed a ' + vals.animal + '.\n'
                + (vals.text  ? vals.text + '\n' : '')
                + whatWasSwallowed(idx);
};

function whatWasSwallowed(idx) {
    if (songData[idx-1].final === true)
        return '';

    var swallowed = '';
    for (var i=idx-1;i>0;i--) {
        swallowed += ('She swallowed the ' + songData[i].animal + ' to catch the ' + songData[i-1].animal) + ( songData[i].complement ? songData[i].complement : '') + '.\n';
    }
    swallowed += 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    return swallowed;
}

var songData = [
    {animal : 'fly'},
    {animal : 'spider', text : 'It wriggled and jiggled and tickled inside her.'},
    {animal : 'bird', text : 'How absurd to swallow a bird!', complement : ' that wriggled and jiggled and tickled inside her'},
    {animal : 'cat', text : 'Imagine that, to swallow a cat!'},
    {animal : 'dog', text : 'What a hog, to swallow a dog!'},
    {animal : 'goat', text : 'Just opened her throat and swallowed a goat!'},
    {animal : 'cow', text : 'I don\'t know how she swallowed a cow!'},
    {animal : 'horse', text : 'She\'s dead, of course!', final :true},
];

module.exports = FoodChain;
