import React, {useState, useEffect } from "react";
import Header from "../Header/Header";
import { NavLink, useParams} from "react-router-dom";
import { getProductDetail } from "../../getDataFromServer";

const ProductDetail = () => {
    const {id} = useParams();

    const [product, setProduct] = useState([]);
    // const [title, setTitle] = useState("");

    useEffect(() => {
        
        const fetchProduct = async () => {
            const data = await getProductDetail(id);
            setProduct(data);
        };

        fetchProduct();
    }, [id]);

    let prod;
    let mItems
    if (product === []) {
        prod = "Esperando..";
        mItems = ""
    } else {
        prod = product.data;
        mItems = product.menuItems
    }

    // const handleClick = (prod) => {
    //     // console.log("Hice click");
    //     setProducts([]);
    //     setTitle(prod.name);
    //     // console.log(categories);
    // };

    return (
        <div id="main">
            <Header>
                <li>
                    <NavLink to="/" exact>
                        <span>Inicio</span>
                    </NavLink>
                </li>
                {mItems !== undefined ? mItems.map((item, i) => {
                    return <li key={i}>
                    <NavLink to="/mujer">
                        <span>{item.name}</span>
                    </NavLink>
                </li>
                }) : ""}
                
                
            </Header>
            <h1>Hola</h1>
        </div>
    );
};

export default ProductDetail;
