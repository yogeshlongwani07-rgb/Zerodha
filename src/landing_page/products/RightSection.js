import React from 'react';
function LeftSection({productDescription,productName,imageUrl,keyLink}) {
    return (    
        <div className='container'>
            <div className='row mb-5 mt-5 p-5'>
                <div className='col-4 mt-5'>
                    <h1  style={{paddingTop:"50px"}}>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href='#' style={{textDecoration:"none"}}>{keyLink} &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-1'></div>
                <div className='col-7'>
                    <img src={imageUrl} alt='image'  style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;