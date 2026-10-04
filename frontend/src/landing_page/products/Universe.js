import React from 'react';

function Universe() {
    const imgStyle = {
        width: '200px',
        height: '60px',
        objectFit: 'contain',
    };

    return (
        <div className='container'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/smallcaseLogo.png' alt='Smallcase' style={imgStyle} />
                    <p className='text-muted'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/streakLogo.png' alt='Streak' style={imgStyle} />
                    <p className='text-muted'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/sensibullLogo.svg' alt='Sensibull' style={imgStyle} />
                    <p className='text-muted'>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/zerodhaFundhouse.png' alt='Zerodha Fundhouse' style={imgStyle} />
                    <p className='text-muted'>Asset management</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/goldenpiLogo.png' alt='Goldenpi' style={imgStyle} />
                    <p className='text-muted'>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/dittoLogo.png' alt='Ditto' style={imgStyle} />
                    <p className='text-muted'>Insurance</p>
                </div>
            </div>
        </div>
    );
}

export default Universe;