const TAX = require("./tax")
const Operation = require("../util/operation");

/**
 * Class TaxCalculator 
 */
class TaxCalculator {

    /**
     * Calculate tax based on product information
     * 
     * @param {ProductType} type
     * @param {boolean} imported
     * @returns {number}
     */
    static getTaxesFor(type, imported) {
        // mapping is done in ProductType
        let tax = TAX[type /* toString()*/ ];

        if (imported) {
            tax = Operation.sum(tax, TAX.IMPORTED)
        }

        return tax;
    }
}

module.exports = TaxCalculator