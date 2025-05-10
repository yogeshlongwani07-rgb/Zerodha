import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg' alt='largestBroker'/>
                </div>
                <div className='col-6'>
                    <h1 className='mb-5'>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clinets contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                    <img src='media/images/pressLogos.png' alt='pressLogos' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;