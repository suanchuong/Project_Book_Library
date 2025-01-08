import { Container } from 'react-bootstrap';
import './Footer.css';
import Logo from '../../../assets/img/logo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={Logo} alt="" />
                        <p>Book Library</p>
                    </div>

                    <div className="footer-desc">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta inventore aperiam iure delectus quo perferendis expedita debitis vel facilis quas ut deleniti cum, saepe illo culpa mollitia reiciendis consectetur at?</p>
                    </div>

                    <div className="footer-hotline">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                        <p>Hotline</p>
                        <p>(012) 345 6789</p>
                    </div>

                    <ul className="footer-social">
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                        <li><i className="fa-brands fa-youtube"></i></li>
                        <li><i className="fa-brands fa-tiktok"></i></li>
                    </ul>
                </div>

                <div className="footer-right">
                    <div className="footer-right-col">
                        <h5>Useful Links</h5>
                        <ul className="footer-links">
                            <li>New Books</li>
                            <li>Top Reading</li>
                            <li>Trending</li>
                            <li>New Arrivals</li>
                        </ul>
                    </div>

                    <div className="footer-right-col">
                        <h5>My Account</h5>
                        <ul className="footer-links">
                            <li>My Profile</li>
                            <li>My Order History</li>
                            <li>Shipping Info</li>
                            <li>Shopping Cart</li>
                        </ul>
                    </div>

                    <div className="footer-right-col">
                        <h5>Shop</h5>
                        <ul className="footer-links">
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                            <li>Discount</li>
                        </ul>
                    </div>

                    <div className="footer-right-col">
                        <h5>Newsletters</h5>
                        <input type="email" placeholder='Enter your email...'/>
                        <button>Send</button>
                    </div>
                </div>

                <div className="copyright">
                    <p>Copyright © 2024 Book Library. All rights reserved</p>
                    <p>Privacy & Cookie Policy | Terms of Service</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;