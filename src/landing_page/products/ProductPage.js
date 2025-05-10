import React from 'react';
import Hero from './Hero';
import LeftSection from "./LeftSection";
import Universe from "./Universe";
import RightSection from "./RightSection";
function ProductPage() {
    return ( 
        <div>
            <Hero/>
            <LeftSection/>
            <RightSection/>
            <Universe/>
        </div>
     );
}

export default ProductPage;