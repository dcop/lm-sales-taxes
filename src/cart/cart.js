const Receipt = require("../receipt/receipt");
const CartItem = require("./cartItem");
const ReceiptCreator = require("../receipt/receiptCreator")
const Rounder = require("../util/rounder");
const Operation = require("../util/operation")

/**
 * Cart class
 */
class Cart {

    /**
     * Creates new instance of Cart
     */
    constructor() {
        this.items = []
    }

    /**
     * Adds a product and its quantity to the cart
     * 
     * @param {Product} product product to add to cart
     * @param {number} [quantity=1] how many of the same product
     * @returns {void}
     */
    add(product, qty = 1) {
        this.items.push(
            new CartItem(product, qty)
        );
    }

    /**
     *  Gets the total amount of the cart, tax included
     * 
     * @returns {number}
     */
    getTotalAmount() {
        return this.items
            .map(p => p.getTotalAmount())
            .reduce(Operation.sum)
    }

    /**
     * Gets the total amount of taxes of the cart
     * 
     * @returns {number}
     */
    getTaxesAmount() {
        return Rounder.round(this.items
            .map(p => p.getTaxesAmount())
            .reduce(Operation.sum)
        )
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