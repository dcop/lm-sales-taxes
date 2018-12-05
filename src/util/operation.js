// https://stackoverflow.com/questions/588004/is-floating-point-math-broken
const decimalPointFix = (n /* number */ ) => parseFloat((n).toFixed(2))

/**
 * Util class for basic operations with decimal points
 */
class Operation {

    /**
     * Sums two number
     * 
     * @param {number} a 
     * @param {number} b 
     * @returns {number}
     */
    static sum(a, b) {
        return decimalPointFix(a + b);
    }

    /**
     * Multiplies two numbers
     * 
     * @param {number} a 
     * @param {number} b 
     * @returns {number}
     */
    static multiply(a, b) {
        return decimalPointFix(a * b);
    }
}

module.exports = Operation