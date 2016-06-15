var Triangle = function(a,b,c) {
    this.a = a, this.b = b, this.c =c;
};

Triangle.prototype.kind = function() {
    if (isInvalid(this.a, this.b, this.c))
        throw new Error('invalid');

    return findKind(this.a, this.b, this.c);
};

var isInvalid = function(a,b,c) {
    return iz(a) || iz(b) || iz(c) || lt(sum(a,b),c) || lt(sum(a,c),b) || lt(sum(b,c),a);
};

var findKind = function(a,b,c) {
    if (eq(a,b) && eq(b,c))
        return 'equilateral';

    if (eq(a,b) || eq(a,c) || eq(b,c))
        return 'isosceles';

    return 'scalene';
};

var iz = function(a) { return !a; };
var sum = function(a,b) { return a + b; };
var lt = function(a,b) { return a < b; };
var eq = function(a,b) { return a === b; };

module.exports = Triangle;
