import { useEffect, useState } from "react";
import CategoryForm from "./components/Categories";
import NavBar from "./components/NavBar";
import ProductForm from "./components/Products";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = filterSelectedCategory(result);
    result = sortData(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue, selectedCategory]);

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };
  const selectedCategoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  };
  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const filterSearchTitle = (array) => {
    return array.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
  };
  const filterSelectedCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((product) => product.categoryId === selectedCategory);
  };
  const sortData = (array) => {
    let sorttedProducts = [...array];
    return sorttedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setProducts(savedProducts);
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  return (
    <div className="bg-slate-800 ">
      <NavBar products={products}/>
      {/* App Content  */}
      <div className="container max-w-screen-sm mx-auto p-5">
        <CategoryForm setCategories={setCategories} />
        <ProductForm categories={categories} setProducts={setProducts} />
        <Filter
          sort={sort}
          searchValue={searchValue}
          onSort={sortHandler}
          onSearch={searchHandler}
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectedCategory={selectedCategoryHandler}
        />
        <ProductList
          products={filteredProducts}
          categories={categories}
          setProducts={setProducts}
        />
      </div>
    </div>
  );
}

export default App;
