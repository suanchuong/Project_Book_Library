import './Newsletter.css';
import { Container } from 'react-bootstrap';

const Newsletter = () => {
    return (
        <div className="newsletter">
            <Container>
                <div className="title-news">
                    <h1>Join Our Newsletter</h1>
                    <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                    <div className="input-news">
                        <input type="email" placeholder='Enter your email.....' className='custom-input'/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Newsletter;