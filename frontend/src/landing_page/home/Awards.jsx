import React from 'react';

function Awards() {
    return (  
        <div className="container-fluid mt-5" style={{padding: "0px 230px"}}>
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5 fs-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul className='fs-5'>
                                <li><p>Future and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className='fs-5'>
                                <li><p>Stock & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" style={{width: "90%"}} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Awards;