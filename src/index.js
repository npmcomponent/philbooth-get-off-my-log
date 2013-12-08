(function (globals) {
    'use strict'

    var functions, methods;
    
    functions = {
        initialise: initialise
    };

    exportFunctions();
    
    function initialise (origin, logger) {
        var methodName, result = {};
    
        for (methodName in methods) {
            if (methods.hasOwnProperty(methodName)) {
                result[methodName] = methods[methodName].bind(null, logger || console.log.bind(console), origin);
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
    
    function write (level, logger, origin, message) {
        logger([
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

    function exportFunctions () {
        if (typeof define === 'function' && define.amd) {
            define(function () {
                return functions;
            });
        } else if (typeof module !== 'undefined' && module !== null) {
            module.exports = functions;
        } else {
            globals.log = functions;
        }
    }
}(this));

