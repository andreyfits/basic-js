const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
    let strResult = [],
        addResult = [],
        repeatTimes = (options.hasOwnProperty('repeatTimes')) ? options.repeatTimes : 1,
        separator = (options.hasOwnProperty('separator')) ? options.separator : '+',
        addition = (options.hasOwnProperty('addition')) ? `${options.addition}` : '',
        additionRepeatTimes = (options.hasOwnProperty('additionRepeatTimes')) ? options.additionRepeatTimes : 1,
        additionSeparator = (options.hasOwnProperty('additionSeparator')) ? options.additionSeparator : '|';

    for (let j = 1; j <= additionRepeatTimes; j++) {
        addResult.push(addition);
    }

    for (let i = 1; i <= repeatTimes; i++) {
        strResult.push(str + addResult.join(`${additionSeparator}`));
    }

    return strResult.join(`${separator}`);
}

module.exports = {
    repeater
};
