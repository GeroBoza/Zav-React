import React, {useState, useEffect, Fragment } from "react";
import Header from "../Header/Header";
import { NavLink, useParams} from "react-router-dom";
import { getProductDetail } from "../../getDataFromServer";
import ProductDescription from "./ProductDescription";
import {Carousel} from 'react-bootstrap'


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
    let imgs
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
        imgs = prod.images
        // console.log(prod.images);
    }
    let cls

    console.log(prod);




    // const handleClick = (prod) => {
    //     // console.log("Hice click");
    //     setProducts([]);
    //     setTitle(prod.name);
    //     // console.log(categories);
    // };

    const mystyle = {
        backgroundColor: "rgba(255, 255, 255, 0.425)",
        borderRadius: "5px",
        paddingBottom: "20px"
      };

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
            <section id="catalogo" className="two">
            <div className="container">
                <header>
                    <h2>{prod !== undefined ? prod.subcategory.name : ""}</h2>
                </header>



                <div className="row"
                    style={mystyle}>
                    <div className="col-md-6 col-sm-12">
                        <article className="item">
                            <Carousel>
                                {imgs !== undefined ? prod.images.map(img =>{
                                    return (
                                    <Carousel.Item key={img.id}>
                                            <img 
                                            src={`https://elasticbeanstalk-sa-east-1-680693481249.s3-sa-east-1.amazonaws.com/${img.name}`}
                                                alt="Image"
                                                className="img-fluid"
                                                style={{maxWidth:"50%"}} />
                                        
                                    </Carousel.Item>)
                                        }): ""} 

                            </Carousel>
                           
                        </article>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        {prod !== undefined ? 
                            <ProductDescription prod={prod} />
                        : ""}
                    </div>

                </div>
            </div>
        </section>
        </div>
    );
};

export default ProductDetail;
