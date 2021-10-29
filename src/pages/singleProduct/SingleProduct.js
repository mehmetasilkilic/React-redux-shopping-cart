import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../../assets/utilities/requestMethods'
import './singleProduct.scss'
import { addProduct } from "../../redux/cartRedux"
import { useDispatch } from "react-redux";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const SingleProduct = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [size, setSize] = useState("");

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id)
                setProduct(res.data);
            } catch { }
        };
        getProduct()
    }, [id]);

    const handleQuantity = type => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, size }));
    };

    return (
        <div className="singleProduct">
            <div className="imgContainer">
                <img src={product.img} alt={product.title} />
            </div>
            <div className="infoContainer">
                <h1>{product.title}</h1>
                <p>
                    {product.desc}
                </p>
                <span>$ {product.price}</span>
                <div className="filterContainer">
                    <span>Size</span>
                    <select onChange={e => setSize(e.target.value)}>
                        {product.availableSizes?.map((s) => (
                            <option key={s}>{s}</option>
                        ))}
                    </select>
                </div>
                <div className="addContainer">
                    <div className="amountContainer">
                        <RemoveIcon onClick={() => handleQuantity("dec")} />
                        <span>{quantity}</span>
                        <AddIcon onClick={() => handleQuantity("inc")} />
                    </div>
                    <button onClick={handleClick}>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
