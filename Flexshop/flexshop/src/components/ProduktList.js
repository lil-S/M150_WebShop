import React, { Component } from 'react'
import Produkt from "./Produkt";
import Title from './Title';
import {ProductConsumer} from '../context';

export default class ProduktList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Unsere"  title="Produkte" />
                        <div className="row">
                            <ProductConsumer>
                                {
                                    value => {
                                        return value.products.map(product =>{
                                            return <Produkt key={product.id} 
                                            product={product}/>;
                                        
                                        })
                                    }
                                }
                            </ProductConsumer>
                        </div>
                    </div>

                </div>
            </React.Fragment>
            //    <Produkt/>
            
        )
    }
}
