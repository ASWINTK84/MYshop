import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState(""); 
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100")
      .then((res) => {
        const items = res.data.products;
        setProducts(items);

        const uniqueCategories = [...new Set(items.map(p => p.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch(() => {
        console.log("Failed to fetch products");
        toast.error("Failed to load products");
        setLoading(false);
      });
  }, []);

  //  filtering
  let filteredProducts = selectedCategory ? products.filter((p) => p.category === selectedCategory): [...products];

  //  sorting
 if (sortOrder === "lowToHigh") {
  filteredProducts.sort((a, b) => a.price - b.price);
} else if (sortOrder === "highToLow") {
  filteredProducts.sort((a, b) => b.price - a.price);
}

if (searchTerm.trim()) {
  filteredProducts = filteredProducts.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

  return (
    <ProductContext.Provider value={{
        products,categories,filteredProducts,selectedCategory,setSelectedCategory,sortOrder,setSortOrder,searchTerm, setSearchTerm, loading
        }}>
      {children}
    </ProductContext.Provider>
  );
};
