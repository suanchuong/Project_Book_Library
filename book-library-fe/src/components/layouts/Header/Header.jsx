import { Container, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UseCart } from '../../../Context/Cartcontext';
import './Header.css';
import Logo from '../../../assets/img/logo.png';
import Search from '../../../helpers/Search';

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const { cart, handleQuantity } = UseCart();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalSpent = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

    const handleSearchClose = () => setShowSearch(false);
    const handleSearchShow = () => setShowSearch(true);
    const handleCartClose = () => setShowCart(false);
    const handleCartShow = () => setShowCart(true);

    return (
        <div className="header">
            {/* Header Main */}
            <div className="header-icon-search">
                <Button onClick={handleSearchShow} className="me-2">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
            </div>

            <div className="header-logo">
                <img src={Logo} alt="logo" />
            </div>


            <div className="header-icon-shopping">
                <div className="thumb">
                    <Button onClick={handleCartShow} className="me-2">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Button>
                    <Offcanvas show={showCart} onHide={handleCartClose} placement="end" className="offcanvas-custom">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Your Shopping Cart</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {cart.length > 0 ? (
                                <>
                                    {cart.map(item => (
                                        <div className='shop' key={item._id}>
                                            <div className="shop-left">
                                                <img src={item.thumbnail} alt='' />
                                                <Button className='remove' onClick={() => handleQuantity(item._id, 'delete')}>Remove</Button>
                                            </div>
                                            <div className="shop-right">
                                                <h3>{item.title}</h3>
                                                <h5>Author: {item.author}</h5>
                                                <h6>Category: {item.category}</h6>                                                
                                                <p className='price'>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                                                <div className="quantity-control">
                                                    <Button className='quantity-input' onClick={() => handleQuantity(item._id, 'minus')}>-</Button>
                                                    <span className="quantity">{item.quantity}</span>
                                                    <Button className='quantity-input' onClick={() => handleQuantity(item._id, 'plus')}>+</Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="total-spent">
                                        <h5>Total Spent: </h5>
                                        <p>${totalSpent}</p>
                                    </div>

                                    {/* <div className="cart-buttons">
                                        <Link
                                            to="/shopping"
                                            className="view-cart"
                                            onClick={handleCartClose}
                                        >
                                            VIEW CART
                                        </Link>
                                        <Link
                                            to="/checkout"
                                            className="buy"
                                            onClick={handleCartClose}
                                        >
                                            BUY NOW
                                        </Link>
                                    </div> */}
                                </>
                            ) : (
                                <p>Your cart is empty.</p>
                            )}
                        </Offcanvas.Body>
                    </Offcanvas>
                    <div className="quantity-cart">
                        <p>{totalItems}</p>
                    </div>
                </div>
            </div>

            {/* Offcanvas search */}
            <Offcanvas show={showSearch} onHide={handleSearchClose} placement="start" className="offcanvas-custom">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Search</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="key-search">
                    <Search />
                </Offcanvas.Body>
            </Offcanvas>

            {/* Header Top */}
            <Container>
                <div className="header-top">
                    <div className="header-top-left">
                        <p>Follow us:</p>
                        <ul className="social">
                            <li><i className="fa-brands fa-facebook"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-youtube"></i></li>
                            <li><i className="fa-brands fa-tiktok"></i></li>
                        </ul>
                    </div>

                    <div className="header-top-right">
                        <button className="sign-in">Sign In</button>
                        <button className="sign-up">Sign Up</button>
                    </div>
                </div>
            </Container>

            {/* Header Bottom */}
            <Container>
                <div className="header-bottom">
                    <ul className="header-bottom-left">
                        <li><Link to='/'><span>Home</span></Link></li>
                        <li><Link to={`/product`}><span>Category</span></Link>
                            <ul className="dropdown">
                                <li>Author</li>
                                <li>Genres</li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="header-bottom-right">
                        <li><span>About Us</span></li>
                        <li><span>Contacts</span></li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Header;
