import './Cart.css';
import { Link } from 'react-router-dom';
import { UseCart } from '../../../Context/Cartcontext';
import PropTypes from 'prop-types';

const Cart = (props) => {
    const { handleAddCart } = UseCart();

    const addToCart = () => {
        const product = {
            id: props.id,
            thumbnail: props.thumbnail,
            title: props.title,
            price: props.price,
            description: props.description,
            author: props.author,
            category: props.category,
            year: props.year,
            quantity: 1,
        };
        handleAddCart(product);
    };

    return (
        <div className="cart">
            <div className="thumb">
                <Link key={props.id} to={`/product/${props.id}`}>
                    <img src={props.thumbnail} alt={props.title} />
                </Link>
                <div className="overplay">
                    <button onClick={addToCart}>Add To Cart</button>
                </div>
            </div>
            <div className="content">
                <Link key={props.id} to={`/product/${props.id}`}>
                    <h5 className="title">{props.title}</h5>
                    <p className="price">$ {props.price}</p>
                    <p className="author">Author: <span>{props.author}</span></p>
                    <p className="genres">Genres: <span>{props.category}</span></p>
                    <p className="release">Release: <span>{props.year}</span></p>
                    <div className="rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                </Link>
            </div>
        </div>
    );
};

Cart.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    status: PropTypes.string,
};

export default Cart;
