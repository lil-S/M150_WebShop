import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">

                < div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Produkte</p>
                </div>
                < div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Produktname</p>
                </div>
                < div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Preis</p>
                </div>
                < div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Menge</p>
                </div>
                < div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Entfernen</p>
                </div>
                < div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Total</p>
                </div>
            </div>
        </div>
    )
}
