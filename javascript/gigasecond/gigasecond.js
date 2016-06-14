var Gigasecond = function(birthDate) {
    this.gigasecondDate = new Date(birthDate.getTime() + Math.pow(10,12));
};

Gigasecond.prototype.date = function() {
    return this.gigasecondDate;
};

module.exports = Gigasecond;
