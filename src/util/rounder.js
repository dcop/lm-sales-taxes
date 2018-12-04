class Rounder {
    /**
     * The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains
     * (np/100 rounded up to the nearest 0.05) amount of sales tax.
     * 
     * @param {number} amount 
     * @returns {number}
     */
    static round(amount /* number */ ) {
        return parseFloat(this.format((Math.ceil(amount * 20) / 20)));
    }

    /**
     * Return the same number as string with 2 decimal points
     * 
     * @param {number} amount 
     * @returns {string}
     */
    static format(amount /* number */ ) {
        return (amount).toFixed(2);
    }
}

module.exports = Rounder