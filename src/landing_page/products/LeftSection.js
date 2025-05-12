import React from 'react';
function LeftSection({imageUrl,productName,productDescription}) {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row mb-5 p-5'>
                <div className='col-6'>
                    <img src={imageUrl} alt='image'/>
                </div>
                <div className='col-1'></div>
                <div className='col-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mb-3'>
                    <a href='#' style={{textDecoration:"none"}}>Try Demo&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href='#' style={{textDecoration:"none",marginLeft:"30px"}}>Learn More&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div>
                    <a><img src='media/images/googlePlayBadge.svg'/></a>
                    <a><img src='media/images/appstoreBadge.svg' style={{marginLeft:"30px"}}/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;