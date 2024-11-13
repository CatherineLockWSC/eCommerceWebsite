document.addEventListener("DOMContentLoaded", function() {
    fetchProducts();

    document.getElementById('search').addEventListener('input', function() {
        fetchProducts(this.value);
    });
});

function fetchProducts(query = '') {
    fetch(`fetch_products.php?query=${query}`)
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            productList.innerHTML = '';

            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <p>Category: ${product.category}</p>
                    <img src="${product.image_url}" alt="${product.name}">
                `;
                productList.appendChild(productDiv);
            });
        });
}
