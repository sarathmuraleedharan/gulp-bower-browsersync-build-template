'use strict';

var fs = require('fs');

module.exports =  {
    endsWith : endsWith,
    parseVersion : parseVersion,
    isLintFixed : isLintFixed
}

function endsWith(str, suffix) {
    return str.indexOf('/', str.length - suffix.length) !== -1;
};

var parseString = require('xml2js').parseString;
function parseVersion() {
    var version ='1.0';
    return version;
}


function isLintFixed(file) {
	// Has ESLint fixed the file contents?
	return file.eslint !== null && file.eslint.fixed;
}
