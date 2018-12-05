const TAX = require("./tax")
const Rounder = require("../util/rounder");

class TaxCalculator {
    static getTaxesFor(product /* Product | { imported, type }*/ ) {

        // mapping is done in ProductType
        let tax = TAX[product.type];

        if (product.imported) {
            tax += TAX.IMPORTED
        }

        // JS weirdness: 0.05 + 0.1 = 0.15000000000000002
        return Rounder.format(tax);
    }
}

module.exports = TaxCalculator