import React, { Fragment } from "react";

const ProductDescription = (props) => {
    const { prod } = props;

    //    { prod !== undefined ? console.log("Hola") : console.log("fuck")}
    //     return
    return (
        <article className="item">
            <h2>{prod.brand.name} </h2>

            {prod.subcategoryId !== 2 ? (
                <Fragment>
                    <p className="mb-0">Artículo: {prod.article} </p>
                    <p className="mb-0">Color: {prod.color}</p>
                    <p className="mb-0">Numeración: {prod.numeration}</p>
                    <p className="mb-0">{prod.article + " " + prod.color}</p>
                    <p
                        className="mt-5 mx-auto"
                        style={{ width: "80%", fontSize: "20px" }}
                    >
                        Descripción: {prod.description}
                    </p>
                </Fragment>
            ) : (
                ""
            )}

            {prod.stock !== 0 ? (
                <h3 style={{ marginBottom: "3%" }}>Precio: ${prod.price}</h3>
            ) : (
                <Fragment>
                    <p>Precio: $ {prod.price}</p>
                    <h3 style={{ marginBottom: "3%" }}>SIN STOCK</h3>
                </Fragment>
            )}

            <a
                id="wsp-btn"
                href={`https://web.whatsapp.com/send?phone=542216395806&text=Hola, quería consultar por este producto: https://www.zapateriaavenida.com/detalleProducto/${prod.id}`}
                target="_blank"
                className="nav-link wsp"
                rel="noreferrer"
            >
                <button style={{fontSize:"20px", padding:"2px 15px"}}>Consultar por este producto</button>
            </a>

            {/*
             
                                        
                                        <% if (user && user.rol == 2) {%>
                                            <div>
                                            
                                            <a href="https://www.mercadopago.com.ar/tools/create" target="_blank"
                                            className="nav-link wsp">
                                            <button>
                                            Crear Link de pago
                                            </button>
                                            </a>
                                            </div>
                                            <div className="row" style="justify-content: center; margin-top: 5%;">
                                            <% if(product.subcategoryId != 2){ %>
                                                <a className="col-3"
                                                href="/admin/editarProducto/<%= product.id %>"><button>Editar</button></a>
                                                <% } else { %>
                                                    <a className="col-3"
                                                    href="/admin/editarCartera/<%= product.id %>"><button>Editar</button></a>
                                                    <% } %>
                                                    <form className="col-3" action="/admin/deleteProduct/<%= product.id %>" method="POST"
                                                    id="formDeleteProduct">
                                                    <button>Eliminar</button>
                                                    </form>
                                                    </div>
                                                    <% }  else {%>
                                                        <a id="wsp-btn"
                                                        href="https://web.whatsapp.com/send?phone=542216395806&text=Hola, quería consultar por este producto: https://www.zapateriaavenida.com/detalleProducto/<%= product.id %>"
                                                        target="_blank" className="nav-link wsp">
                                                        <button>
                                                        Consultar por este producto
                                                        </button>
                                                        </a>
                                                        
                                                    <% } %> */}
        </article>
    );
};

export default ProductDescription;
