const Rounder = require('../util/rounder')

/**
 * Receipt class
 */
class Receipt {

    /**
     * Creates new instance of Receipt
     * 
     * @param {CartItem[]} items 
     * @param {number} taxes 
     * @param {number} total 
     */
    constructor(items = [], taxes, total) {
        this.items = items;
        this.taxes = taxes;
        this.total = total;
    }

    /**
     * Prints the receipt with favourite "printer"
     * 
     * @callback out
     */
    print(out) {
        this.items.forEach(item => out(item.toString()));

        out("Sales taxes:", Rounder.format(this.taxes));
        out("Total sales:", Rounder.format(this.total));
    }
}

module.exports = Receipt