const Receipt = require("../receipt/receipt");
const CartItem = require("./cartItem");
const ReceiptCreator = require("../receipt/receiptCreator")
const Rounder = require("../util/rounder");

/**
 * Cart class
 */
class Cart {
    constructor() {
        this.items = []
    }

    /**
     * Adds a product and its quantity to the cart
     * 
     * @param {Product} product 
     * @param {number} quantity
     * @returns {void}
     */
    add(product /* Product */ , qty = 1 /* number */ ) {
        this.items.push(
            new CartItem(product, qty)
        );
    }

    /**
     *  Gets the total amount of the cart, tax included
     * 
     * @returns {string}
     */
    getTotalAmount() {
        return Rounder.format(
            this.items.map(p => p.getTotalAmount())
            .reduce((prev, curr) => prev + curr)
        );
    }

    /**
     * Gets the total amount of taxes of the cart
     * 
     * @returns {string}
     */
    getTaxesAmount() {
        return Rounder.format(
            this.items.map(p => p.getTaxesAmount())
            .reduce((prev, curr) => prev + curr)
        );
    }

    /**
     * Finalize order
     * 
     * @returns {Receipt}
     */
    purchase() {
        return ReceiptCreator.create(
            this.items,
            this.getTaxesAmount(),
            this.getTotalAmount()
        );
    }
}

module.exports = Cart