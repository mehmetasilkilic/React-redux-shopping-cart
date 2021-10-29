import React, { useEffect, useState } from 'react';
import './cart.scss';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../assets/utilities/requestMethods"
import { useHistory } from "react-router";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {

    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory()

    const onToken = token => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                history.push("/success", {
                    stripeData: res.data,
                    products: cart,
                });
            } catch { }
        };
        stripeToken && cart.total >= 1 && makeRequest();
    }, [stripeToken, cart.total, history, cart]);

    return (
        <div className="cart">
            <h1>YOUR BAG</h1>
            <div className="top">
                <button>CONTINUE SHOPPING</button>
                <button type="filled">CHECKOUT NOW</button>
            </div>
            <div className="bottom">
                <div className="info">
                    {cart.products.map(product => (
                        <div className="cartProduct">
                            <div className="productDetail">
                                <img src={product.img} alt="" />
                                <div className="details">
                                    <span className="productName">
                                        <b>Product:</b> {product.title}
                                    </span>
                                    <span className="productId">
                                        <b>ID:</b> {product._id}
                                    </span>
                                    <span className="productSize">
                                        <b>Size:</b> {product.size}
                                    </span>
                                </div>
                            </div>
                            <div className="priceDetail">
                                <div className="productAmountContainer">
                                    <RemoveIcon />
                                    <div className="productAmount">{product.quantity}</div>
                                    <AddIcon />
                                </div>
                                <div className="productPrice">$ {product.price * product.quantity}</div>
                            </div>
                        </div>
                    ))
                    }
                </div>
                <div className="summary">
                    <h2>ORDER SUMMARY</h2>
                    <div className="summaryItem">
                        <span>Subtotal</span>
                        <span>$ {cart.total}</span>
                    </div>
                    <div className="summaryItem">
                        <span>Estimated Shipping</span>
                        <span>$ 5.90</span>
                    </div>
                    <div className="summaryItem">
                        <span>Shipping Discount</span>
                        <span>$ -5.90</span>
                    </div>
                    <div className="summaryItem" type="total">
                        <span>Total</span>
                        <span>$ {cart.total}</span>
                    </div>
                    <StripeCheckout
                        name="Brand."
                        image="https://images.unsplash.com/photo-1525373612132-b3e820b87cea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
                        billingAddress
                        shippingAddress
                        description={`Your total is $ ${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <button>CHECKOUT NOW</button>
                    </StripeCheckout>
                </div>
            </div>
        </div>
    )
}

export default Cart
