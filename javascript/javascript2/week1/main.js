console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {

    products.forEach(products => {
        let myUl = document.getElementById("myUl");
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