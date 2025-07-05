import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-700 ">
        
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-gray-900 font-mono">
          Discover. Shop. Enjoy.
        </h1>
        <p className="text-gray-600 text-md mb-8">
          Explore our latest collection of fashion, electronics, beauty, and more.
        </p>
        <Link
          to="/shop"
          className=" inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
            style={{ textDecoration: "none" }}
       >
          Browse Products
        </Link>
      </section>

      
      {/* facilities */}
      <section className="bg-zinc-400 py-14">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3463/3463294.png"
              alt="Shipping"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
            <p className="text-gray-600 text-sm">On all orders above ₹499</p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/929/929430.png"
              alt="Support"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">We're here for you anytime</p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="Secure"
              className="h-16 mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
            <p className="text-gray-600 text-sm">100% safe and encrypted</p>
          </div>
        </div>
      </section>

     
    </div>
  );
}
