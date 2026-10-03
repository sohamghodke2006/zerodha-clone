import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src={imageURL} className='p-5'/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1 className='mt-5'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className=''>
                        <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{marginLeft: "50px", textDecoration: "none"}}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore} style={{marginLeft: "50px"}}><img src='media/images/appStoreBadge.svg'/></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;