document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElem = button.parentElement;
            const productName = productElem.querySelector('h3').innerText;
            const productPrice = parseFloat(productElem.dataset.price);
            
            cartItems.push({ name: productName, price: productPrice });
            updateCart();
        });
    });
    
    function updateCart() {
        cartItemsList.innerHTML = '';
        let totalPrice = 0;
        
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.innerText = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(li);
            totalPrice += item.price;
        });
        
        totalPriceElem.innerText = totalPrice.toFixed(2);
    }
});
