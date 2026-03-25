function Products({ product }) {
  return (
    <div className="grid shadow-2xl  h-full font-serif gap-3 bg-gradient-to-l from-red-600 via-blue-500 to-green-700 rounded-4xl pl-6 pt-3">
      <h1 className="text-3xl">{product.title}</h1>
      <p><h1 className="font-bold inline">Category:</h1> {product.category}</p>
      <p><h1 className="font-bold inline">Price:</h1> ${product.price}</p>
      <p><h1 className="font-bold inline">Rating:</h1> {product.rating.rate} ({product.rating.count} reviews)</p>
      <p>{product.description}</p>
    </div>
  );
}
export default Products;
