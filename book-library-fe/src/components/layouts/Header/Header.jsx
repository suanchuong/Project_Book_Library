import './Header.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/logo.png';

const Header = () => {
    return (
        <div className='header'>
            {/* Header Main */}
            <div className="header-icon-search">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="header-logo">
                <img src={Logo} alt="logo" />
            </div>

            <div className="header-icon-shopping">
                <i className="fa-solid fa-cart-shopping"></i>
            </div>

            {/* Header Top */}
            <Container>
                <div className="header-top">
                    <div className="header-top-left">
                        <p>Follow us:</p>
                        <ul className='social'>
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