'use strict'

var check, methods;

check = require('check-types');

module.exports = {
    initialise: initialise
};

function initialise (origin) {
    var methodName, result = {};

    check.verify.unemptyString(methodName);

    for (methodName in methods) {
        if (methods.hasOwnProperty(methodName)) {
            result[methodName] = methods[methodName].bind(null, origin);
        }
    }

    return result;
}

methods = {
    info: createLogMethod('INFO'),
    warn: createLogMethod('WARN'),
    error: createLogMethod('ERROR')
};

function createLogMethod (level) {
    return write.bind(null, level);
}

function write (level, origin, message) {
    console.log([
        getTimestamp(),
        level,
        origin + ':',
        message
    ].join(' '));
}

function getTimestamp () {
    var time = new Date();

    return [
        formatDate(time),
        formatTime(time)
    ].join(' ');
}

function formatDate (time) {
    return [
        1900 + time.getYear(),
        padNumber(time.getMonth() + 1),
        padNumber(time.getDate())
    ].join('-');
}

function formatTime (time) {
    return [
        padNumber(time.getHours()),
        padNumber(time.getMinutes()),
        padNumber(time.getSeconds())
    ].join(':');
}

function padNumber (number) {
    if (number < 10) {
        return '0' + number;
    }

    return number;
}

