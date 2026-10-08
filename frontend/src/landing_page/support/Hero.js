import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid text-white pb-5' id='supportHero'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center py-5' id='supportWrapper'>
                    <h4 className='fs-5 fw-normal m-0'>Support Portal</h4>
                    <a href='' className='text-white me-4 me-lg-5'>Track Tickets</a>
                </div>
                <div className='row mx-0 ps-3'>
                    <div className='col-12 col-md-6 col-lg-5'>
                        <h1 className='fs-3 fw-normal lh-base'>Search for an answer or browse help topics to create a ticket</h1>
                        <input
                            className='form-control fs-6 form-control-sm py-3 px-4 my-4 border-0'
                            placeholder='Eg: how do i activate F&O, why is my order getting rejected..'
                        />
                        <a href='' className='text-white d-inline-block me-3'>Track account opening</a>
                        <a href='' className='text-white d-inline-block me-3'>Track segment activation</a>
                        <a href='' className='text-white d-inline-block me-3'>Intraday margins</a>
                        <a href='' className='text-white d-inline-block'>Kite user manual</a>
                    </div>
                    <div className='col-12 col-md-6 col-lg-5 offset-lg-1 mt-5 mt-md-0'>
                        <h1 className='fs-4'>Featured</h1>
                        <ol className='ps-3'>
                            <li className='mb-3'><a href='' className='text-white'>Current Takeovers and Delisting - January 2024</a></li>
                            <li><a href='' className='text-white'>Latest Intraday leverages - MIS & CO</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Hero;