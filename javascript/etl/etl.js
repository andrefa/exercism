var ETL = function(){};

ETL.prototype.transform = function(old) {
    newObj = {};

    Object.keys(old).forEach(function(key) {
        if (old[key] instanceof Array) {
            old[key].forEach(function(value) {
                addAt(newObj, value, key);
            });
        } else {
            addAt(newObj, old[key], key);
        }
    });
    
    return newObj;
};

function addAt(obj, key, value) {
    obj[newKey(key)] = Number(value);
}

function newKey(str) {
    return String(str).toLowerCase();
};

module.exports = ETL;
