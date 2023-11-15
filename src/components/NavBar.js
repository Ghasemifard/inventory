const NavBar = ({products}) => {
  return (
  
      <div className="h-12 flex items-center justify-center gap-x-4 bg-slate-700 mb-6">
        <h1 className="md:text-xl text-sm font-bold text-slate-300">
          Inventory App usin Tailwind and Js
        </h1>
        <span className="flex items-center justify-center w-7 h-7 bg-slate-500 rounded-full 
        border-2 border-slate-300 font-bold text-slate-300">
          {products.length}
        </span>
      </div>
    
  );
};

export default NavBar;
