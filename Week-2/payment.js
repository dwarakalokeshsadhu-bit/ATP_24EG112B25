import { reduceStock } from './product.js';
                          import { getCartItems, getCartTotal, clearCart } from './cart.js';
                          import { applyDiscount } from './discount.js';
                           export function processPayment(paymentMethod, couponCode = null) {
                            // 1. Get cart items and total
                            const items = getCartItems();
                            let subtotal = getCartTotal();
                            let discount = 0;
                            let total = subtotal;   
                            // 2. Apply discount if coupon provided
                            if (couponCode) {
                                discount = applyDiscount(couponCode, subtotal);
                                total = subtotal - discount;
                            }
                            // 3. Validate payment method (card/upi/cod)
                                if (!['card', 'upi', 'cod'].includes(paymentMethod)) {  
                                    return { status: 'failed', message: 'Invalid payment method' };
                                }
                            // 4. Process payment (simulate)
                                let paymentSuccess = Math.random() < 0.9; // 90% success rate   
                            // 5. Reduce stock for all items
                            items.forEach(item => {
                                reduceStock(item.productId, item.quantity);
                            });
                            // 6. Clear cart
                            clearCart();
                            // 7. Generate order summary
                            const orderSummary = {
                                orderId: Math.floor(Math.random() * 100000),
                                items: items,
                                subtotal: subtotal,
                                discount: discount,
                                total: total,
                                paymentMethod: paymentMethod,
                                status: paymentSuccess ? 'success' : 'failed',
                                message: paymentSuccess ? 'Payment successful' : 'Payment failed'
                            };
                            return orderSummary;    
                            // Return order summary:
                            // {
                            //   orderId: ...,
                            //   items: [...],
                            //   subtotal: ...,
                            //   discount: ...,
                            //   total: ...,
                            //   paymentMethod: ...,
                            //   status: 'success/failed',
                            //   message: '...'
                            // }

                          }
                          export function validatePaymentMethod(method) {
                            // Check if method is valid (card/upi/cod)
                            const validMethods = ['card', 'upi', 'cod'];
                            return validMethods.includes(method);
                          }
                          
                          function generateOrderId() {
                            // Generate random order ID
                            return 'ORD' + Date.now();
                          }