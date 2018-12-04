const Receipt = require("./receipt");

class ReceiptGenerator {
    static generate({
        items,
        total,
        taxes
    }) {
        return new Receipt(...arguments);
    }
}

module.exports = ReceiptGenerator