/**
 * Util class to manage rounding and formatting of tax rate
 */
class Rounder {

    /**
     * The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains
     * (np/100 rounded up to the nearest 0.05) amount of sales tax.
     * 
     * @param {number} amount 
     * @returns {number}
     */
    static round(amount /* number */ ) {
        return parseFloat(
            this.format(
                Math.ceil(amount * 20) / 20
            )
        );
    }

    /**
     * Returns the same number as string with N
     * decimal points
     * 
     * @param {number} amount 
     * @param {number} [n=2]
     * @returns {string}
     */
    static format(amount /* number */ , n = 2) {
        return (amount).toFixed(n);
    }
}

module.exports = Rounder