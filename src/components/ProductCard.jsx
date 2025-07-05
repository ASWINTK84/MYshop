import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

const ProductCard =({ product })=> {

console.log("ProductCard", product);

  const originalPrice = product.price;
  const discount = product.discountPercentage

  const hasDiscount = discount && discount > 0;
  const discountedPrice = hasDiscount>0 ? (originalPrice * (1 - discount / 100)).toFixed(2) : originalPrice;

  return (
    <div className="" >
      <Link to={`/product/${product.id}`} className="text-decoration-none text-center " >
        <Card style={{ width: '18rem', minHeight: '500px', boxShadow:"5px 5px 20px" ,  }} className=" transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg "  >
          <Card.Img src={product.thumbnail}   alt={product.title}  style={{ height: "260px" }}/>
          <Card.Body>
            <Card.Title className="text-lg fw-bold mb-2" >{product.title}</Card.Title>
            <Card.Text className="mb-2">
              {hasDiscount ? (
                <div >
                  <span className="text-danger fw-bold me-2">₹{discountedPrice}</span>
                  <span className="text-muted text-decoration-line-through me-2 ">₹{originalPrice}</span>
                  <span className="text-white text-xs p-1.5 rounded-xl bg-success">{discount.toFixed(0)}% OFF</span>
                </div>
              ) : (
                <span className="fw-bold">₹{originalPrice}</span>
              )}
            </Card.Text>
           <Card.Text>
                <div >
                    {'⭐'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating))}
                    <small className="text-muted ms-2">({product.rating})</small>
                </div>
                </Card.Text>

            <Button variant="primary" className="w-100 rounded-pill">Buy Now</Button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}
export default ProductCard;
