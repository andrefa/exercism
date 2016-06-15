var earth = 31557600;
var scales = {
    Earth : earth,
    Mercury: 0.2408467 * earth,
    Venus: 0.61519726 * earth,
    Mars: 1.8808158 * earth,
    Jupiter: 11.862615 * earth,
    Saturn: 29.447498 * earth,
    Uranus: 84.016846 * earth,
    Neptune: 164.79132 * earth,
};

var SpaceAge = function(secs) {
    this.seconds = secs;
    Object.keys(scales).forEach(function(key){
        SpaceAge.prototype['on'+key] = new Function(' return +(this.seconds / ' + scales[key] + ' ).toFixed(2); ');
    });
};

module.exports = SpaceAge;
