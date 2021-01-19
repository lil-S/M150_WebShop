import React from 'react';

export default function CartItem({item,value}) {
    
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 my-auto col-lg-2">
                <img src={img} style={{width:'5rem',height:"5rem"}} className="img-fluid" alt="produkte"/>

            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">produkt : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">preis : </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        {/*Decrement*/}
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>
                            -
                        </span>
                        {/*Count*/}
                        <span className="btn btn-black mx-1">{count}</span>
                        {/*Increment*/}
                        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            {/*Löschen*/}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            {/*Total Preis*/}
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">total : </span>
                <strong>item total : CHF {total}</strong>
            </div>
        </div>
    )
}
