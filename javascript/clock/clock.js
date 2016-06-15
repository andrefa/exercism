(function(){

    const MINUTES = 60;
    const HOURS = 24;

    function normalizeHour(hour,min) {
        hour += (~~(min/MINUTES));
        hour += (min < 0 && min % MINUTES !== 0 ? -1 : 0);
        return normalize(hour, HOURS);
    };

    function normalize(num,mod) {
        if (num < 0 && num % mod !== 0)
            return mod + (num % mod);
        return num % mod;
    };

    function format(num) {
        return ('00' + num).slice(-2);
    };

    var at = function(hour, min) {

        var clock = {};

        clock.plus = function(min) {
            setClock(clock._hour, min + clock._min);
            return clock;
        };

        clock.minus = function(min) {
            return clock.plus(-min);
        };

        clock.valueOf = function() {
            return (clock._hour * MINUTES) + clock._min;
        };

        clock.equals = function (other) {
            return +clock === +other;
        };

        clock.toString = function() {
            return [
                format(clock._hour),
                format(clock._min)
            ].join(':');
        };

        function setClock(hour,min) {
            clock._hour = normalizeHour(hour,min);
            clock._min = normalize(min, MINUTES);
        };

        setClock(hour, min|0);

        return clock;
    };

    exports.at = at;

})();
