const Rounder = require("../util/rounder");
const Operation = require("../util/operation")

/**
 * Class CartItem
 */
class CartItem {

    /**
     * Creates a new instance of CartItem
     * 
     * @param {Product} product the product
     * @param {number} quantity the quantity of this product
     */
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;

        this.name = this.product.name;
        this.taxes = Rounder.round(Operation.multiply(this.product.price, this.product.tax));
        this.taxedPrice = Operation.sum(this.taxes, this.product.price);
    }

    /**
     * Gets the total taxes of this item
     * 
      @returns {number}
     */
    getTaxesAmount() {
        return Operation.multiply(this.taxes, this.quantity)
    }

    /**
     * Gets the total price of the item, taxes included
     * 
     * @returns {number}
     */
    getTotalAmount() {
        return Operation.multiply(this.taxedPrice, this.quantity);
    }

    /**
     * String representation of this cart item
     */
    toString() {
        return [
            this.quantity,
            this.name + ":",
            Rounder.format(this.getTotalAmount())
        ].join(" ")
    }
}

module.exports = CartItem