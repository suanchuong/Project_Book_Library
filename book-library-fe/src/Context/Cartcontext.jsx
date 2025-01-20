import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; 

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(localStorage.getItem("BOOKS") ? JSON.parse(localStorage.getItem("BOOKS")) : []);

   //Function Add to cart 
   const handleAddToCart = (product) => {
    const newCart = [...cart];
    const checkIndex = cart.findIndex((item) => item.id === product.id);
    if(checkIndex >= 0) {
        newCart[checkIndex].quantity += product.quantity;
    } else {
        product.quantity = 1;
        newCart.push(product);
    }

    console.log('Updated cart:', newCart);
    setCart(newCart);
    localStorage.setItem("BOOKS", JSON.stringify(newCart));
   }
    
   //Function Remove cart
    const handleRemoveCart = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
        localStorage.setItem("BOOKS", JSON.stringify(newCart));
    }

    //Function quantity cart
    const handleQuantity = (booksId, type) => {
        const newCart = [...cart];
        const booksIndex = newCart.findIndex((item) => item.id === booksId);
        
        if(booksIndex !== -1) {
            if(type === 'plus') {
                newCart[booksIndex].quantity++;
            } else if(type === 'minus') {
                if(newCart[booksIndex].quantity > 1) {
                    newCart[booksIndex].quantity--;
                }
            } else if(type === 'delete') {
                newCart.splice(booksIndex, 1);
            }

            setCart(newCart);
            localStorage.setItem('BOOKS', JSON.stringify(newCart));
        }
    }

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("BOOKS");
    };

    return (
        <CartContext.Provider value={{ cart, handleAddToCart, handleQuantity, handleRemoveCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};

const UseCart = () => {
    return useContext(CartContext);
};

export { CartProvider, UseCart };
