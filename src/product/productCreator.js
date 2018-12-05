const Product = require("./product");
const TaxCalculator = require("../tax/taxCalculator");

/**
 * Factory for product
 */
class ProductCreator {

    /**
     * 
     * @param {string} name 
     * @param {number} price 
     * @param {boolean} imported 
     * @param {ProductType} type 
     */
    static create(name, price, imported, type) {
        return new Product(name, price, imported, type, TaxCalculator.getTaxesFor({
            imported,
            type
        }))
    }
}

module.exports = ProductCreator