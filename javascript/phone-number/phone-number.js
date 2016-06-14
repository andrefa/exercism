var PhoneNumber = function(num){
    var cleanNumber = num.replace(/[^0-9]/g,'');
    this.phoneNumber = (cleanNumber.length === 11 && cleanNumber.charAt(0) == 1) ? cleanNumber.slice(1) : cleanNumber.length === 10 ? cleanNumber : '0000000000';
}

PhoneNumber.prototype.number = function() {
    return this.phoneNumber;
}

PhoneNumber.prototype.areaCode = function() {
    return this.phoneNumber.substr(0,3);
}

PhoneNumber.prototype.toString = function() {
    return '(' + this.areaCode() + ') '
            + this.number().slice(3,6) + '-'
            + this.number().slice(6);
}

module.exports = PhoneNumber;
