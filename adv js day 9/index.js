function getData(){
    fetch('https://fakestoreapi.com/products')
    .then((resp) => resp.json()) 
    .then((data) => {
        data.forEach((product) => {
            let output = `
            <div class="product-grid">
                <img src="${product.image}" alt="image">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <h4>${product.price}</h4>
                <span>${product.category}</span>
            </div>
            `;
            document.getElementById('productContainer').innerHTML += output;
        })
    })
    .catch((eror) => {
        console.log(error);
        document.getElementById('productContainer').innerHTML = 'Products Unavailable';
    })
}
getData();
// note that the first '.then' above gets the response from the api and then turn it into a json data so then the second '.then' takes the json data and do whatever you want.
// we use 'return' word if the object bracket is there else we don't. Note you also call the function outside so it can be triggered as you're not using a button etc.



