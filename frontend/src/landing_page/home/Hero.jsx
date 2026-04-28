import React from 'react'

function Hero() {
    return ( 
        <div className='container-fluid mb-5' style={{padding: "38px 230px"}}>
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className='mb-5 mx-auto' style={{maxWidth: "1150px"}} />
                <h1 className='mt-5'>Invert in everything</h1>
                <p className='fs-4'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "15%", margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Hero;