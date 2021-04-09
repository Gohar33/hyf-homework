const priceUl = document.createElement("ul")
const container = document.getElementById("container")
const h2 = document.createElement("h2")

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

    getTotal() {
        const total = this.products.reduce(
            (total, product) =>
                total + product.price, 0)
        return total;
    }

    searchProduct(productName) {
        const findProducts = this.products.filter(
            product =>
                product.name.toLowerCase().includes(productName.toLowerCase()))

        return findProducts;

    }



    renderProducts(listOfProducts) {

        listOfProducts.forEach(product => {
            const nameLi = document.createElement("li")
            nameLi.innerHTML = `${product.name} - ${product.price}`
            nameLi.style.listStyleType = "none"
            priceUl.appendChild(nameLi)

        });

        container.appendChild(priceUl)

        h2.innerHTML = `Total -${this.getTotal()}`
        container.appendChild(h2)

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
    priceUl.innerHTML = "";
    shoppingCart.renderProducts
        (shoppingCart.searchProduct(input.value))

})

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("Flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
const TV = new Product("TV-screen ", 4000);
shoppingCart.addProduct(TV);
const phone = new Product("iPhone ", 5000);
shoppingCart.addProduct(phone);
const ipad = new Product("iPad ", 5000);
shoppingCart.addProduct(ipad);
const laptop = new Product("laptop ", 5000);
shoppingCart.addProduct(laptop);


shoppingCart.removeProduct(flatscreen)


//shoppingCart.getTotal()

shoppingCart.getUser()
shoppingCart.renderProducts(shoppingCart.products)


