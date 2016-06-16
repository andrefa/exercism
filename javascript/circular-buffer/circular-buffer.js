(function(){

    var circularBuffer = function(initialSize) {

        var buffer = {
            _size : initialSize
        };

        buffer.clear = function() {
            buffer._empty = true;
            buffer._startIndex = 0;
            buffer._currentIndex = 0;
            buffer._buff = Array(this._size);
        };

        buffer.read = function() {
            if (buffer._empty)
                throw new bufferEmptyException();

            var result = buffer._buff[buffer._startIndex];
            buffer._startIndex = incrementCounter(buffer._startIndex);

            if (buffer._startIndex === buffer._currentIndex) {
                buffer._empty = true;
            }

            return result;
        };

        buffer.write = function(data) {
            if (isBufferFull())
                throw new bufferFullException();

            writeData(data);
        };

        buffer.forceWrite = function(data) {
            if (isBufferFull())
                buffer._startIndex = incrementCounter(buffer._startIndex);

            writeData(data);
        };

        function writeData(data) {
            if (!data)
                return;

            buffer._buff[buffer._currentIndex] = data;

            buffer._empty = false;
            buffer._currentIndex = incrementCounter(buffer._currentIndex);
        };

        function incrementCounter(counter) {
            return (counter + 1) % buffer._size;
        }

        function isBufferFull() {
            return !buffer._empty && buffer._startIndex === buffer._currentIndex
        }
        buffer.clear();

        return buffer;
    };

    var bufferEmptyException = function(){};
    var bufferFullException = function(){};

    module.exports.circularBuffer = circularBuffer;
    module.exports.bufferEmptyException = bufferEmptyException;
    module.exports.bufferFullException = bufferFullException;

})();
