//  iii. discount.js - Coupon and discount logic
//                           // Available coupons
                          const coupons = {
                            'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
                            'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
                            'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
                          };
                          
                          // TODO: Implement these functions
                          
                          export function validateCoupon(couponCode, cartTotal, cartItems) {
    const coupon = coupons[couponCode];

    // 1. Check if coupon exists
    if (!coupon) {
        return {
            valid: false,
            message: "Invalid coupon code"
        };
    }

    // 2. Check minimum cart amount
    if (cartTotal < coupon.minAmount) {
        return {
            valid: false,
            message: `Minimum order amount is ${coupon.minAmount}`
        };
    }

    // 3. Check category requirement (if exists)
    if (coupon.category) {
        const hasRequiredCategory = cartItems.some(item => {
            const product = getProductById(item.productId);
            return product && product.category === coupon.category;
        });

        if (!hasRequiredCategory) {
            return {
                valid: false,
                message: `Coupon applicable only for ${coupon.category} items`
            };
        }
    }

    return {
        valid: true,
        message: "Coupon applied successfully"
    };
}
                          
                          export function calculateDiscount(couponCode, cartTotal) {
                            const coupon = coupons[couponCode];
                            if(coupon ===coupons['WELCOME10']){
                                return cartTotal * (coupon.value / 100)
                            }   else if(coupon === coupons['FLAT500']){
                                return coupon.value
                            }
                                else if(coupon === coupons['ELECTRONICS20']){       
                                    return cartTotal * (coupon.value / 100)
                                }   else {
                                    return 0
                                }
                            // Calculate discount amount based on coupon type
                            // Return discount amount
                          }
                          
                          export function applyDiscount(cartTotal, couponCode, cartItems) {
                            const coupon = coupons[couponCode]
                            if(!coupon)
                                return 0
                            // 1. Validate coupon
                            
                            // 2. If valid, calculate discount
                            // 3. Return final amount and discount details
                            // Return { 
                            //   originalTotal: ..., 
                            //   discount: ..., 
                            //   finalTotal: ...,
                            //   message: '...'
                            // }
                          }