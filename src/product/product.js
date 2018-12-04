/**
 * Product class
 */
class Product {

    /**
     * 
     * @param {string} name 
     * @param {number} price 
     * @param {boolean} imported 
     * @param {ProductType} type 
     * @param {number} tax
     */
    constructor(name, price, imported, type, tax) {
        this.name = name;
        this.price = price;
        this.imported = imported;
        this.type = type;
        this.tax = tax;
    }
}

module.exports = Product