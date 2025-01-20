import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; 

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(
        localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : []
    );

    const handleAddCart = (product) => {
        const checkIndex = cart.findIndex((item) => item._id === product._id);
        if (checkIndex >= 0) {
            const newCart = [...cart];
            newCart[checkIndex].quantity += 1;
            setCart(newCart);
            localStorage.setItem("CART", JSON.stringify(newCart));
        } else {
            console.log("Giỏ sau khi cập nhật:", newCart); 
            const newCart = [...cart, product];
            setCart(newCart);
            localStorage.setItem("CART", JSON.stringify(newCart));
        }
    };
    

    const handleRemove = (_id) => {
        const newCart = cart.filter((item) => item._id !== _id); 
        setCart(newCart);
        localStorage.setItem("CART", JSON.stringify(newCart));
    };

    const handleQuantity = (productId, type) => {
        const newCart = [...cart];
        const productIndex = newCart.findIndex((item) => item._id === productId);

        if (productIndex !== -1) {
            if (type === "plus") {
                newCart[productIndex].quantity++;
            } else if (type === "minus") {
                if (newCart[productIndex].quantity > 1) {
                    newCart[productIndex].quantity--;
                }
            } else if (type === "delete") {
                newCart.splice(productIndex, 1);
            }

            setCart(newCart);
            localStorage.setItem("CART", JSON.stringify(newCart));
        }
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("CART");
    };

    return (
        <CartContext.Provider value={{ cart, handleAddCart, handleQuantity, handleRemove, clearCart }}>
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
