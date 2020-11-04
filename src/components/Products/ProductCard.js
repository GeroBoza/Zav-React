import React from "react";

import {
    // BrowserRouter as Router,
    // Route,
    // Switch,
    Link,
    // NavLink
  } from "react-router-dom";

const ProductCard = (props) => {
    const { cat, url, handler } = props;



    let img
    if (cat.image != null){
        img = "img/"+cat.image
    } else {
        img =  cat.imageppal
    }

    

    return (
        <div className="col-md-4 col-sm-12" style={{ margin: "auto" }}>
            <Link to={url} className="image fit hvr-float-shadow" onClick={()=>{handler(cat)}}>
            {/* <div style={{cursor:"pointer"}} className="image fit hvr-float-shadow" onClick={() =>{handler(cat.id)}}> */}

                <article className="item">
                    <img
                        src={
                            "https://elasticbeanstalk-sa-east-1-680693481249.s3-sa-east-1.amazonaws.com/" +
                            img
                        }
                        alt={cat.name}
                        />
                    <header>
                        {props.children}
                    </header>
                </article>
            {/* </div> */}
            </Link>
        </div>
    );
};

export default ProductCard;
