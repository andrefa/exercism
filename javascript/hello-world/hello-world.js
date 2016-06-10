var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
    return 'Hello, ' + (input ? input : 'World') + '!';
};

module.exports = HelloWorld;
