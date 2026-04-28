import React from 'react'

function Education() {
    return ( 
          <div className="container-fluid mt-5" style={{padding: "0px 230px"}}>
            <div className="row">
                <div className="col-6">
                   <img src="media/images/education.svg" style={{width: "70%"}} alt="" />
                </div>
              
                <div className="col-6">
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p className='fs-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className="fs-5" style={{textDecoration: "none"}}>Versity <i class="fa fa-long-arrow-right"></i></a>
                    
                    <p className='fs-5 mt-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className="fs-5" style={{textDecoration: "none"}}>Trading Q&A <i class="fa fa-long-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;