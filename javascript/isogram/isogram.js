var Isogram = function(str) {
    str = str.replace(/[ -]+/g, '');
    this.isWordIsogram = true;
    for(i in str) this.isWordIsogram &= str.match(new RegExp(str[i],'gi')).length == 1
};

Isogram.prototype.isIsogram = function() {
    return !!this.isWordIsogram;
};

module.exports = Isogram;
