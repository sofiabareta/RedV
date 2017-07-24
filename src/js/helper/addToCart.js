let cart = $('.cart');
let cont = 0;

function addToCart() {
    cont++;
    cart.dataset.qtty = cont;
}