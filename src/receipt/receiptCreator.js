const Receipt = require("./receipt");

class ReceiptCreator {
    static create(
        items,
        total,
        taxes
    ) {
        return new Receipt(items, total, taxes);
    }
}

module.exports = ReceiptCreator