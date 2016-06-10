var Year = function(year) {
    this.y = year;
};

Year.prototype.isLeap = function() {
    return divisibleBy(this.y,4) ? ( divisibleBy(this.y, 100) ? divisibleBy(this.y, 400) : true ) : false;
};

function divisibleBy(a,b) {
    return (a % b == 0)
}

module.exports = Year;
