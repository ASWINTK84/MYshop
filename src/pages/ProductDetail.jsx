import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // getting product details
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

   //Loading 
  if (!product) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-2" />
        <p className="text-sm text-gray-600">Please wait...</p>
      </div>
    </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 font-sans bg-zinc-900  ">
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md p-6">
         {/* Back to shop */}
        <button onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-gray-100 hover:bg-gray-400 text-gray-800 rounded-full text-sm transition-colors">
          &larr; Back
        </button>

         {/* Product details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex justify-center items-center">
                <img
                src={product.thumbnail}
                alt={product.title}
                className="rounded-lg w-full max-w-sm h-auto object-cover shadow-sm"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/E0E0E0/333333?text=No+Image'; }}
                />
            </div>

            <div className="space-y-4 ">
                <h1 className="text-2xl font-bold text-gray-900 font-serif">{product.title}</h1>
                <p className="text-gray-700 text-base font-sans">{product.description}</p>

                <div className="flex items-baseline space-x-2">
                <div className="text-2xl font-bold text-green-600">₹{product.price.toFixed(2)}</div>
                {product.discountPercentage > 0 && (
                    <span className="text-sm text-red-500 bg-red-100 px-2 py-0.5 rounded-full">
                    {product.discountPercentage}% OFF
                    </span>
                )}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-800">
                <span className="font-semibold">Rating:</span>
                <span className="text-yellow-500">{"⭐".repeat(Math.floor(product.rating))+ '☆'.repeat(5 - Math.round(product.rating))}</span>
                <span className="ml-1">{product.rating}</span>
                </div>

                <div className="grid grid-cols-2 gap-y-1 gap-x-4 text-sm text-gray-700">
                <div><span className="font-semibold">Brand:</span> {product.brand ? product.brand : "none"}</div>
                <div><span className="font-semibold">Category:</span> {product.category}</div>
                <div><span className="font-semibold">Availability:</span> {product.availabilityStatus}</div>
                <div><span className="font-semibold">Stock:</span> {product.stock}</div>
                </div>

                <hr className="border-gray-200" />

                <div className="text-xs text-gray-700 space-y-1">
                <p><span className="font-medium">Shipping:</span> {product.shippingInformation}</p>
                <p><span className="font-medium">Warranty:</span> {product.category==="groceries" ? "Not available" : product.warrantyInformation}</p>
                <p><span className="font-medium">Return:</span> {product.returnPolicy}</p>
                <p>
                    <span className="font-medium">Dimensions:</span>{" "}
                    {product.dimensions?.width}x{product.dimensions?.height}x{product.dimensions?.depth}cm
                </p>
                <p><span className="font-medium">Weight:</span> {product.weight}g</p>
                </div>

                <button  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-base font-semibold shadow-sm transition-colors">
                Add to Cart
                </button>
            </div>
            
            </div>
            
        
           {/* Reviews */}
            {product.reviews?.length > 0 && (
            <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Customer Reviews</h2>
                
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {product.reviews.map((review, index) => (
                    <div
                    key={index}
                    className="bg-white p-4 rounded shadow border border-gray-200 min-h-[180px] flex flex-col justify-between"
                    >
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-medium text-gray-800">{review.reviewerName}</p>
                        <span className="text-yellow-500 text-sm font-semibold">
                        ⭐ {review.rating} / 5
                        </span>
                    </div>
                    <p className="text-gray-600 text-sm italic mb-2 flex-1">"{review.comment}"</p>
                    <p className="text-xs text-gray-400 mt-2">
                        Reviewed on {new Date(review.date).toLocaleDateString()}
                    </p>
                    </div>
                ))}
                </div>
            </div>
            )}


      </div>
      
    </div>
  );
}