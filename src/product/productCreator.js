const Product = require("./product");
const TaxCalculator = require("../tax/taxCalculator");

/**
 * Factory for Product
 */
class ProductCreator {

    /**
     * Creates new instance of Product
     * 
     * @param {string} name
     * @param {number} price 
     * @param {boolean} imported 
     * @param {ProductType} type 
     */
    static create(name, price, imported, type) {
        return new Product(name,
            price,
            imported,
            type,
            TaxCalculator.getTaxesFor(
                type,
                imported
            )
        )
    }
}

module.exports = ProductCreator