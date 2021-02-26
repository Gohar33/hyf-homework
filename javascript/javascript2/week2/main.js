console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {

    let myUl = document.getElementById("myUl");
    products.forEach(products => {
        let myLi = document.createElement("myli");
        let title = document.createElement("h1");
        let price = document.createElement("p");
        let rate = document.createElement("p");

        title.innerHTML = products.name;
        price.innerHTML = `Price: ${products.price}`;
        rate.innerHTML = `Rate: ${products.rating}`;


        myLi.appendChild(title);
        myLi.appendChild(price);
        myLi.appendChild(rate);
        myUl.appendChild(myLi);
    });
}


renderProducts(products);

// Search by product name
const input = document.getElementById("productInput");

input.addEventListener("input", (element) => {
    let productTitle = element.target.value.toLowerCase();
    let filterTitles = products.filter((product) => {
        return product.name.toLowerCase().includes(productTitle)
    });
    myUl.innerHTML = "";
    renderProducts(filterTitles)
})



// Search by maximum price 
const input2 = document.getElementById("priceInput")

input2.addEventListener("input", (price) => {
    let product = input2.value;
    let filterPrice = products.filter((productPrice) => {
        return productPrice.price < product;
    })
    myUl.innerHTML = "";
    renderProducts(filterPrice)
})







