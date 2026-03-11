import { getProductById, checkStock } from './product.js';

let cartItems = [];

export function addToCart(productId, quantity) {
    // 1. Get product
    const product = getProductById(productId);
    if (!product) {
        return "Product not found";
    }

    // 2. Check stock
    if (!checkStock(productId, quantity)) {
        return "Insufficient stock";
    }

    // 3. Check if product already in cart
    const cartItem = cartItems.find(item => item.productId === productId);

    if (cartItem) {
        cartItem.quantity += quantity; // ACTUAL update
        return "Cart quantity updated";
    } else {
        cartItems.push({ productId, quantity });
        return "Product added to cart";
    }
}
addToCart(1,6)
addToCart(2,3)
export function removeFromCart(productId) {
    for(let i=0;i<cartItems.length;i++) {
        if(cartItems[i].productId === productId) {
            cartItems.splice(i,1)
            return "Product removed from cart"
        }
    }
                            // Remove product from cart
    return "Product not found in cart";
}
 export function updateQuantity(productId, newQuantity) {
    
    // 2. Check stock
    if (!checkStock(productId, newQuantity)) {
        return "Insufficient stock";
    }
     const cartItem = cartItems.find(item => item.productId === productId);

     if (cartItem) {
        cartItem.quantity += newQuantity; // ACTUAL update
        return "Cart quantity updated";
    } 
                         // Update quantity of product in cart
                        // Check stock before updating
  }
   export function getCartItems() {
    return cartItems.map(item => {
        const product = getProductById(item.productId);

        return {
            productId: item.productId,
            name: product?.name,
            price: product?.price,
            quantity: item.quantity,
            total: product?.price * item.quantity
        };
    });
}
 export function getCartTotal() {
    return cartItems.reduce((total, item) => {
        const product = getProductById(item.productId);

        if (!product) return total;

        return total + (product.price * item.quantity);
    }, 0);
}
 export function clearCart() {
                           
    // Empty the cart
    cartItems.length = 0;
    return "Cart cleared";
                          }
                        
                          
                          