const ProductList = ({ products, categories, setProducts }) => {
  // console.log(categories);
  // console.log(products);
  const findCategory = (categoryId) => {
    // console.log("categoryId is -", categoryId);
    return categories.find((category) => category.id === parseInt(categoryId))
      .title;
  };

  const deleteProduct = (productId) => {
    const filteredProducts = products.filter(
      (product) => product.id !== parseInt(productId)
    );
    setProducts(filteredProducts);
  };
  return (
    <>
      <h2 className="text-xl text-slate-300 font-bold">Product List</h2>

      <div className="product-list mb-6 overflow-x-auto">
        {products.map((product) => {
          return (
            <div
              className="flex items-center justify-between mb-2 w-full "
              key={product.id}
            >
              <span className="text-slate-400 w-80 sm:w-full truncate">{product.title}</span>
              <div className="flex items-center gap-x-3">
                <span className="text-slate-400">
                  {new Date(product.createdAt).toLocaleDateString("fa-IR")}
                </span>
                <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
                  {findCategory(product.categoryId)}
                </span>
                <span className="flex items-center justify-center w-7 h-7 bg-slate-500 rounded-full border-2 border-slate-300 text-slate-300">
                  {product.quantity}
                </span>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="delete-product border px-2 py-0.5 rounded-2xl border-red-400 text-red-400"
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
        <div className="h-20"></div>
      </div>
    </>
  );
};

export default ProductList;
