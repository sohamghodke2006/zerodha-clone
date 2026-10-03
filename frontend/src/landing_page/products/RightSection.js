import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-6 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className=''>
                        <a href={learnMore} style={{textDecoration: "none"}}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-6 p-5'>
                    <img src={imageURL} className='img-fluid'/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;