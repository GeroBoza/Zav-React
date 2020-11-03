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
    let url
    if (product === []) {
        prod = "Esperando..";
        mItems = ""
    } else {
        prod = product.data;
        mItems = product.menuItems
        url = product.url
        // let subId = product.data.subcategory.id
    }
    let subId
    if (prod === undefined){
        subId = "Esperando.."
    } else{
        subId = prod.subcategoryId
    }
    let cls



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
                {url === "hombre" ? <li>
                    <NavLink to="/hombre" exact>
                        <span>Hombre</span>
                    </NavLink>
                </li> : <li>
                    <NavLink to="/mujer" exact>
                        <span>Mujer</span>
                    </NavLink>
                </li>}
                {mItems !== undefined
                    ? mItems.map((item, i) => {
                        subId === item.id ? cls = "active" : cls = ""
                        
                          return (
                              <li key={i}>
                                  <NavLink to={`/${url}/${item.id}`}  className={cls}>
                                      <span>{item.name}</span>
                                  </NavLink>
                              </li>
                          );
                      })
                    : ""}
                
                
            </Header>
            <h1>Hola</h1>
        </div>
    );
};

export default ProductDetail;
