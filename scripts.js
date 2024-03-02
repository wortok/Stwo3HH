document.addEventListener('DOMContentLoaded', function() {
    const productLinks = document.querySelectorAll('.product-card');

    productLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            const productId = link.getAttribute('data-id');
            localStorage.setItem('productId', productId); // Store product ID in localStorage

            window.location.href = `product.html?id=${productId}`; // Redirect to product page
        });
    });
});
