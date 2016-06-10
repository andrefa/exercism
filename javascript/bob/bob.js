var Bob = function() {};

Bob.prototype.hey = function(text) {
    if (isYell(text))
        return answers.YELL;

    if (isQuestion(text))
        return answers.QUESTION;

    return isNotBlank(text) ? answers.ELSE : answers.EMPTY;
};

var answers = {
    'QUESTION' : 'Sure.',
    'YELL' : 'Whoa, chill out!',
    'EMPTY' : 'Fine. Be that way!',
    'ELSE' : 'Whatever.'
};

var isQuestion = function(text) {
    return text.endsWith('?');
}

var isYell = function(text) {
    return text.match('^([^a-zà-ÿ]*[A-ZÀ-Ý][^a-zà-ÿ]*)+$');
}

var isNotBlank = function(text) {
    return text.trim().length;
}

module.exports = Bob;
