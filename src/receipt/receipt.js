class Receipt {
    constructor(items = [] /* CartItem[] */ , taxes /* number */ , total /* number */ ) {
        this.items = items;
        this.taxes = taxes;
        this.total = total;
    }

    /**
     * Prints to the console
     */
    print(out) {
        this.items.forEach(item => out(item.toString()));

        out("Sales taxes:", this.taxes);
        out("Total sales:", this.total);
    }
}

module.exports = Receipt