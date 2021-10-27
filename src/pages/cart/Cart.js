import React from 'react'
import './cart.scss'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Cart = () => {
    return (
        <div className="cart">
            <h1>YOUR BAG</h1>
            <div className="top">
                <button>CONTINUE SHOPPING</button>
                <span>Shopping Bag(2)</span>
                <button type="filled">CHECKOUT NOW</button>
            </div>
            <div className="bottom">
                <div className="info">
                    <div className="cartProduct">
                        <div className="productDetail">
                            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                            <div className="details">
                                <span className="productName">
                                    <b>Product:</b> JESSIE THUNDER SHOES
                                </span>
                                <span className="productId">
                                    <b>ID:</b> 93813718293
                                </span>
                                <span className="productSize">
                                    <b>Size:</b> 37.5
                                </span>
                            </div>
                        </div>
                        <div className="priceDetail">
                            <div className="productAmountContainer">
                                <RemoveIcon />
                                <div className="productAmount">2</div>
                                <AddIcon />
                            </div>
                            <div className="productPrice">$ 30</div>
                        </div>
                    </div>
                    <div className="cartProduct">
                        <div className="productDetail">
                            <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                            <div className="details">
                                <span className="productName">
                                    <b>Product:</b> HAKURA T-SHIRT
                                </span>
                                <span className="productId">
                                    <b>ID:</b> 93813718293
                                </span>
                                <span className="productSize">
                                    <b>Size:</b> M
                                </span>
                            </div>
                        </div>
                        <div className="priceDetail">
                            <div className="productAmountContainer">
                                <RemoveIcon />
                                <div className="productAmount">1</div>
                                <AddIcon />
                            </div>
                            <div className="productPrice">$ 20</div>
                        </div>
                    </div>
                </div>
                <div className="summary">
                    <h2>ORDER SUMMARY</h2>
                    <div className="summaryItem">
                        <span>Subtotal</span>
                        <span>$ 80</span>
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
                        <span>$ 80</span>
                    </div>
                    <button>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
