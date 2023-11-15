import { useState } from "react";

const ProductForm = ({ categories,setProducts }) => {
  const [productsFormData, setProductsFormData] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
  });
  const changeHandler =(e)=>{
    const {name,value}=e.target;
    setProductsFormData({...productsFormData,[name]:value})
  }

  const addNewProductHandler = (e) => {
    e.preventDefault()
    const newProduct = {
      ...productsFormData,
      createdAt: new Date().toISOString(),id:new Date().getTime()
    };
    setProducts((prevState) => [...prevState, newProduct]);
    setProductsFormData({ title: "", quantity: "",categoryId:"" });
  };

  return (
    //    Product Form
    <div className="mb-30">
      <h2 className="text-xl text-slate-300 font-bold">Add New Product</h2>
      <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
        <div>
          <label htmlFor="product-title" className="block mb-1 text-slate-400 ">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={productsFormData.title}
            id="product-title"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label
            htmlFor="product-quantity"
            className="block mb-1 text-slate-400"
          >
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={productsFormData.quantity}
            id="product-quantity"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
            onChange={changeHandler}
          ></input>
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-slate-400"
          >
            Category
          </label>
          <select
            name="categoryId"
            value={productsFormData.categoryId}
            id="product-category"
            className="bg-transparent text-slate-400 rounded-xl w-full"
            onChange={changeHandler}
          >
            <option className="bg-slate-500 text-slate-300" value="">
              select a category
            </option>
            {categories.map((category) => {
              return (
                <option
                key={category.title}
                  id={category.id}
                  className="bg-slate-500 text-slate-300"
                  value={category.id}
                >
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
          onClick={addNewProductHandler}
            id="add-new-product"
            className="flex-1 border border-slate-500 bg-slate-500 text- text-slate-200 rounded-xl py-2"
          >
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
