const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let result = {};

    for (const domain of domains) {
        let dns = "";
        let parts = domain.split('.').reverse();

        for (const part of parts) {
            dns += '.' + part;
            result[dns] = result[dns] !== undefined ? result[dns] + 1 : 1;
        }
    }

    return result;
}

module.exports = {
    getDNSStats
};
