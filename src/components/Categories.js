import { useState } from "react";

const CategoryForm = ({setCategories}) => {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  const cancelFormHandler = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

  const addNewCategoryHandler = (e) => {
    e.preventDefault()
    const newCategory = {
      ...categoryFormData,
      createdAt: new Date().toISOString(),id:new Date().getTime()
    };
    setCategories((prevState) => [...prevState, newCategory]);
    setCategoryFormData({ title: "", description: "" });
  };
  return (
    //  Category Form
    <section>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold">Add New Category</h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={categoryFormData.title}
              id="category-title"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              Description
            </label>
            <textarea
              type="text"
              name="description"
              value={categoryFormData.description}
              id="category-description"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              onClick={cancelFormHandler}
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
              id="cancel-add-category"
            >
              Cancel
            </button>
            <button
              id="add-new-category"
              className="flex-1 border border-slate-500 bg-slate-500 text- text-slate-200 rounded-xl py-2"
              onClick={addNewCategoryHandler}
            >
              Add New Category
            </button>
          </div>
        </form>
      </div>
      <button
        onClick={() => setIsShow((prevState) => !prevState)}
        id="toggle-add-category"
        className={`text-slate-400 text-lg mb-4 font-medium ${
          isShow && "hidden"
        }`}
      >
        Add New Category?
      </button>
    </section>
  );
};

export default CategoryForm;
