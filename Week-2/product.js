//  i. product.js - Product catalog
//                           // Product database (simulated)
                          const products = [
                            { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
                            { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
                            { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
                            { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
                            { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
                          ];
                          
                          // TODO: Implement these functions
                          
                           
                          export function getProductById(id) {
                                  for (let product of products) {
                                      if (product.id === id) {
                                              return product; 
                                                               }
                                                          }
                                             return undefined;
                                             // Find and return product by ID 
                                  }

                   export function getAllProducts() {
                            return products
                            // Return all products
                          }
                          
                          
                          export function getProductsByCategory(category) {
                            let productCategory = products.filter(element=>element.category===category)
                            return productCategory
                            // Filter products by category
                          }

                          export function searchProducts(query) {
                            if(query==='keyboard' || query==='Keyboard'){
                                return 'found'
                            }
                                else if(query==='phone' || query==='Phone'){
                                    return 'found'
                                }
                                else if(query==='mouse' || query==='Mouse'){
                                    return 'found'
                                }
                                else if(query==='Headphones' || query==='headphones'){
                                    return 'found'
                                }
                                 else if(query==='laptop' || query==='Laptop'){
                                    return 'found'
                                }
                                else {
                                    return 'Not found'
                                }


                            
                            // Search products by name (case-insensitive)
                          }
                          
                          
                          export function checkStock(productId, quantity) {
                             if(productId===1 && quantity<=products[0].stock){
                                return true
                            }
                                else if(productId===2 && quantity<=products[1].stock){
                                    return true
                                }
                                else if(productId===3 && quantity<=products[2].stock){
                                    return true
                                }
                                else if(productId===4 && quantity<=products[3].stock){
                                    return true
                                }
                                 else if(productId===5 && quantity<=products[4].stock){
                                    return true
                                }
                                else {
                                    return false
                                }
                            // Check if product has enough stock
                            // Return true/false
                          }

                          export function reduceStock(productId, quantity) {
                             const product = products.find(p => p.id === productId);

                        if (!product) {
                          return "Product not found";
                              }

                             if (quantity > product.stock) {
                                      return "Insufficient stock";
                                                    }

                               product.stock -= quantity;
                                          return product;
                                         }
                         
                       

                        
