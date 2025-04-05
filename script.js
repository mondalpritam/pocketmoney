let cartCount = 0;
let cartItems = [];

function addToCart(itemName, price) {
    cartCount++;
    cartItems.push({ name: itemName, price: price });
    document.getElementById('cart-count').textContent = cartCount;
    alert(`${itemName} added to cart! Total items: ${cartCount}`);
}