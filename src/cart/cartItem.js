const Rounder = require("../util/rounder");

/* export */
class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;

        this.name = this.product.name;
        this.taxes = Rounder.round(this.product.price * this.product.tax);
        this.taxedPrice = Rounder.format(this.taxes + this.product.price);
    }

    /**
     * Gets the total taxes of this item
     * 
      @returns {number}
     */
    getTaxesAmount() {
        return this.taxes * this.quantity
    }

    /**
     * Gets the total price of the item, taxes included
     * 
     * @returns {number}
     */
    getTotalAmount() {
        return this.quantity * this.taxedPrice;
    }

    /**
     * String representation
     */
    toString() {
        return [this.quantity, this.name + ":", Rounder.format(this.getTotalAmount())].join(" ")
    }
}

module.exports = CartItem