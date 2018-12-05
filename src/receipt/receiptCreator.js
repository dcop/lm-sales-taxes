const Receipt = require("./receipt");

/**
 * Factory for Receipt
 */
class ReceiptCreator {

    /**
     * Creates new receipt
     * 
     * @param {CartItem[]} items 
     * @param {number} total 
     * @param {number} taxes 
     */
    static create(
        items,
        total,
        taxes
    ) {
        return new Receipt(items, total, taxes);
    }
}

module.exports = ReceiptCreator