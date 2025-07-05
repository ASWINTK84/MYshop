import { Link } from "react-router-dom";

const Footer = ()=> {
  return (
    <footer className="bg-black  py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
      </div>

      <div className=" text-center text-sm text-gray-100 mt-8 border-t border-gray-700 pt-4">
        <div>
          <h2 className="text-lg font-semibold mb-4 "> MYshop </h2>
          <p className="text-sm">
            High quality products at the best prices. Shop with confidence.
          </p>
        </div>
        @ 2025 MYshop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;