import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
        {value => {
            const {id,company,img,info,price,title,inCart} 
            = value.detailProduct;
            return(
                <div className="container py-5">
                    {/*Title*/}
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    {/*Produkt info*/}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <img src={img} className="img-fluid" alt="produkt"/>
                        </div>
                        {/*Produkt text*/}
                        <div className="col-10 mx-auto col-md-6 my-3">
                                {/*Produkt Name*/}
                            <h2>Produktname: {title}</h2>  
                                {/*Produkt Hersteller*/}
                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                made by: 
                                <span className="text-uppercase">
                                {company}
                                </span>
                            </h4>
                            {/*Produkt Preis*/}
                            <h4 className="text-blue">
                                <strong>
                                    Preis : 
                                    <span>
                                        CHF
                                    </span>
                                    {price}
                                </strong>
                            </h4>
                            {/*Produkt Beschreibung*/}
                            <p className=" font-weight-bold mt-3 mb-0">
                            Beschreibung:
                            </p>
                            <p className="text-muted lead">
                                {info}
                            </p>
                            {/*Buttons*/}
                            <div>
                                <Link to="/">
                                <ButtonContainer>
                                    zurück zur Produktliste
                                </ButtonContainer>
                                </Link>
                                <ButtonContainer cart 
                                disabled={inCart?true:false}
                                onClick={()=>{
                                    value.addToCart(id);
                                    value.openModal(id);
                                
                                }}>
                                    {inCart?"Im Warenkorb" : "In den Warenkorb"}
                                </ButtonContainer>
                            </div>
                        </div>    
                    </div>
                </div>
            )
            }
        }
        </ProductConsumer>
        );
    }
}
