

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product)
    }

    removeProduct(product) {
        this.products = this.products.filter(
            products =>
                products.name !== product.name)
    }

    searchProduct(productName) {
        const findProducts = this.products.filter(
            product =>
                product.name.toLowerCase().includes(productName.toLowerCase()))
        return findProducts;
    }

    getTotal() {
        const total = this.products.reduce(
            (total, product) =>
                total + product.price, 0)
        return total;
    }

    renderProducts(listOfProducts) {
        listOfProducts.forEach(product => {
            const priceUl = document.createElement("ul")
            priceUl.innerHTML = "";
            const nameLi = document.createElement("li")
            nameLi.innerHTML = "";
            nameLi.style.display = "inline"
            priceUl.innerHTML = product.name
            document.body.appendChild(priceUl)
            nameLi.innerHTML = product.price
            priceUl.appendChild(nameLi)
        });

    }


    getUser() {
        const promise = fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json())
            .then(user => {
                console.log(user);
            })
        return promise;
    }
}

const input = document.querySelector("input")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    shoppingCart.renderProducts(shoppingCart.searchProduct(input.value))
})

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("Flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
const TV = new Product("TV-screen", 4000);
shoppingCart.addProduct(TV);
const phone = new Product("iPhone", 5000);
shoppingCart.addProduct(phone);
const ipad = new Product("iPad", 5000);
shoppingCart.addProduct(ipad);




shoppingCart.getUser()
shoppingCart.renderProducts(shoppingCart.products)


