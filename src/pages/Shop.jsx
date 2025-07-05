import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

export default function Shop() {
  const {filteredProducts,categories,selectedCategory,setSelectedCategory,sortOrder,setSortOrder,loading,searchTerm,setSearchTerm,} = useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  const itemsPerPage = 9;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setShowMobileFilters(false);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setCurrentPage(1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading) return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-2" />
        <p className="text-sm text-gray-600">Please wait...</p>
      </div>
    </div> )
  

  return (
    <div className="min-h-screen p-4 bg-zinc-900 font-mono" >
      {/* Mobile  */}
      <div className="md:hidden mb-4 flex justify-between items-center text-white ">
        <h2 className="text-xl font-bold">Shop</h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
         <FiFilter className="text-lg" /> {showMobileFilters ? "Hide Filters" : " Show Filters"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 ">
        {/* Filter */}
        {(showMobileFilters || window.innerWidth >= 768) && (
          <aside className="w-full md:w-64 p-4 bg-black text-white  rounded shadow-md ">
            <h2 className="text-xl font-semibold mb-4"> Filters</h2>

            {/* Category  */}
            <div className="mb-6">
              <label className="block font-medium mb-1">Category</label>
  
              {/* Mobile  */}
              <select
                className="w-full border px-3 py-2 rounded md:hidden "
                value={selectedCategory || ""}
                onChange={(e) =>
                  handleCategoryChange(e.target.value === "" ? null : e.target.value)
                }
              >
                <option value="" >All</option>
                {categories.map((category, index) => (
                  <option key={index} value={category} className="text-black">
                    {category.toUpperCase()}
                  </option>
                ))}
              </select>

              {/* Desktop Category */}
              <ul className="hidden md:block space-y-2 mt-2">
                <li>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="category"
                      checked={!selectedCategory}
                      onChange={() => handleCategoryChange(null)}
                      className="accent-blue-600"
                    />
                    <span className="text-sm font-medium">All</span>
                  </label>
                </li>
                {categories.map((category, index) => (
                  <li key={index}>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => handleCategoryChange(category)}
                        className="accent-blue-600"
                      />
                      <span className="text-sm">{category.toUpperCase()}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sort price  */}
            <div className="mb-6 ">
              <label className="block font-medium mb-1">Sort By Price</label>
              <select
                className="w-full border px-3 py-2 rounded "
                value={sortOrder}
                onChange={handleSortChange}
              >
                <option className="text-black" value="" >Default</option>
                <option className="text-black" value="lowToHigh">Price: Low to High</option>
                <option className="text-black" value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </aside>
        )}

        {/* Product Area */}
        <main className="flex-1 justify-items-center">

          {/* Search */}
          <div className="w-full flex justify-center align-items-center px-4 py-3 mb-4 ">
            <FaSearch className="text-2xl text-white mx-2" />
            <input
              type="text"
              placeholder={"Search by product name..."  }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-zinc-900 bg-zinc-100  w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {currentItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>


          {/* Pagination */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded bg-gray-200 disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 border rounded ${page === currentPage ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded bg-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
