var School = function(){
    this._db = {};
};

School.prototype.add = function(name, grade) {
    if(!this._db[String(grade)])
        this._db[String(grade)] = [];

    sortedInsert(this._db[String(grade)], name);
};

School.prototype.roster = function() {
    return this._db;
};

School.prototype.grade = function(grade) {
    return this._db[String(grade)] ? this._db[String(grade)] : [];
};


function sortedInsert(array, value) {
    var low = 0;
    var high = array.length;

    while (low < high) {
        var mid = (low + high) >>> 1;

        if (array[mid] < value)
            low = mid + 1;
        else
            high = mid;
    }
    array.splice(low, 0, value);
}

module.exports = School;
