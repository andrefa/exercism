var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(a) {
    return a.length == 0 ? '' : 'CGAU'.charAt('GCTA'.indexOf(a.charAt(0))) + this.toRna(a.slice(1));
};

module.exports = DnaTranscriber;
