import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { MdShoppingCart } from "react-icons/md";


const Navb = () => {
  const { categories, setSelectedCategory, searchTerm, setSearchTerm } = useContext(ProductContext);

  return (
    <div className="w-full font-serif">
      <Navbar expand="md"  variant="dark" className="shadow bg-black" >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold ">
          <MdShoppingCart className="text-3xl" />
            <h1 >MYshop</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto gap-3">
              <Link to="/" className="nav-link text-white">Home</Link>
              <Link to="/shop" className="nav-link text-white">Shop</Link>
              <Link to="/shop" className="nav-link text-white">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navb;
