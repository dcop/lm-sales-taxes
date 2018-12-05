const Cart = require('./src/cart/cart')
const ProductType = require('./src/product/productType')
const ProductCreator = require('./src/product/productCreator')

// print writing to the console or document
const out = (...params) => {
    document.writeln(params.join(' ') + '<br/>')
};

// Convenient method
const test = (items = [], n) => {
    const cart = new Cart();

    items.forEach(prod => {
        cart.add(prod)
    });

    out("<br/>=============== OUTPUT " + n + " ===============")
    cart.purchase().print(out);
}

// debug on browser
testCase1();
testCase2();
testCase3();

function testCase1() {
    out("<br/>=============== INPUT 1 ===============")
    out("1 book at 12.49")
    out("1 music CD at 14.99")
    out("1 chocolate bar at 0.85")

    test([
        ProductCreator.create("book", 12.49, false, ProductType.BOOK),
        ProductCreator.create("music CD", 14.99, false, ProductType.OTHER),
        ProductCreator.create("chocolate bar", 0.85, false, ProductType.FOOD)
    ], 1)
}

function testCase2() {
    out("<br/>=============== INPUT 2 ===============")
    out("1 imported box of chocolates at 10.00")
    out("1 imported bottle of perfume at 47.50")

    test([
        ProductCreator.create("imported box of chocolates", 10.00, true, ProductType.FOOD),
        ProductCreator.create("imported bottle of perfume", 47.50, true, ProductType.OTHER)
    ], 2)
}

function testCase3() {
    out("<br/>=============== INPUT 3 ===============")
    out("1 imported bottle of perfume at 27.99")
    out("1 bottle of perfume at 18.99")
    out("1 packet of headache pills at 9.75")
    out("1 box of imported chocolates at 11.25")

    // const cart = new Cart();

    test([
        ProductCreator.create("imported bottle of perfume", 27.99, true, ProductType.OTHER),
        ProductCreator.create("bottle of perfume", 18.99, false, ProductType.OTHER),
        ProductCreator.create("packet of headache pills", 9.75, false, ProductType.MEDICAL),
        ProductCreator.create("imported box of chocolates", 11.25, true, ProductType.FOOD)
    ], 3)
}