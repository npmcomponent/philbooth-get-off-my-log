!function(n){"use strict";function e(n,e){var t,o={};for(t in d)d.hasOwnProperty(t)&&(o[t]=d[t].bind(null,e||console.log.bind(console),n));return o}function t(n){return o.bind(null,n)}function o(n,e,t,o){e([i(),n,t+":",o].join(" "))}function i(){var n=new Date;return[r(n),u(n)].join(" ")}function r(n){return[1900+n.getYear(),f(n.getMonth()+1),f(n.getDate())].join("-")}function u(n){return[f(n.getHours()),f(n.getMinutes()),f(n.getSeconds())].join(":")}function f(n){return 10>n?"0"+n:n}function c(){"function"==typeof define&&define.amd?define(function(){return l}):"undefined"!=typeof module&&null!==module?module.exports=l:n.log=l}var l,d;l={initialise:e},c(),d={info:t("INFO"),warn:t("WARN"),error:t("ERROR")}}(this);