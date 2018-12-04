const assert = require('assert');
const ProductCreator = require('../src/product/productCreator')
const Cart = require('../src/cart/cart')
const ProductType = require('../src/product/productType')

describe('Sales Taxes', () => {
    describe('Scenario 1', () => {
        const book = ProductCreator.create("book", 12.49, false, ProductType.BOOK);
        const cd = ProductCreator.create("music CD", 14.99, false, ProductType.OTHER);
        const bar = ProductCreator.create("chocolate bar", 0.85, false, ProductType.FOOD);

        const cart = new Cart();

        cart.add(book);
        cart.add(cd);
        cart.add(bar);

        const receipt = cart.purchase();

        it('should return updated prices', () => {
            assert.strictEqual(receipt.items[0].toString(), "1 book: 12.49")
            assert.strictEqual(receipt.items[1].toString(), "1 music CD: 16.49")
            assert.strictEqual(receipt.items[2].toString(), "1 chocolate bar: 0.85")
        })

        it('should return Sales taxes of 1.50', () => {
            assert.equal(receipt.taxes, 1.50)
        })

        it('should return Total of 29.83', () => {
            assert.equal(receipt.total, 29.83)
        })
    })

    describe('Scenario 2', () => {
        const box = ProductCreator.create("imported box of chocolates", 10.00, true, ProductType.FOOD);
        const perfume = ProductCreator.create("imported bottle of perfume", 47.50, true, ProductType.OTHER)

        const cart = new Cart();

        cart.add(box);
        cart.add(perfume);

        const receipt = cart.purchase();

        it('should return updated prices', () => {
            assert.strictEqual(receipt.items[0].toString(), "1 imported box of chocolates: 10.50")
            assert.strictEqual(receipt.items[1].toString(), "1 imported bottle of perfume: 54.65")
        })

        it('should return Sales taxes of 7.65', () => {
            assert.equal(receipt.taxes, 7.65)
        })

        it('should return a Total of 29.83', () => {
            assert.equal(receipt.total, 65.15)
        })
    })

    describe('Scenario 3', () => {
        const importedPerfume = ProductCreator.create("imported bottle of perfume", 27.99, true, ProductType.OTHER)
        const perfume = ProductCreator.create("bottle of perfume", 18.99, false, ProductType.OTHER)
        const pills = ProductCreator.create("packet of headache pills", 9.75, false, ProductType.MEDICAL)
        const importedChoco = ProductCreator.create("imported box of chocolates", 11.25, true, ProductType.FOOD)

        const cart = new Cart();

        cart.add(importedPerfume);
        cart.add(perfume);
        cart.add(pills)
        cart.add(importedChoco)

        const receipt = cart.purchase();

        it('should return updated prices', () => {
            assert.strictEqual(receipt.items[0].toString(), "1 imported bottle of perfume: 32.19")
            assert.strictEqual(receipt.items[1].toString(), "1 bottle of perfume: 20.89")
            assert.strictEqual(receipt.items[2].toString(), "1 packet of headache pills: 9.75")
            assert.strictEqual(receipt.items[3].toString(), "1 imported box of chocolates: 11.85")
        })

        it('should return Sales taxes of 6.70', () => {
            assert.equal(receipt.taxes, 6.70)
        })

        it('should return a Total of 74.68', () => {
            assert.equal(receipt.total, 74.68)
        })
    })
})