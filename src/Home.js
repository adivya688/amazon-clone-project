import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
        <div className="home__container">
        <img className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-NGU5NjdkODIt-w3000._CB406119060_.jpg" alt=""/>
        </div>
        <div className="home__row">
         <Product id="AAA1" 
           title="All New, Made for Amazon, featuring The Mandalorian: The Child, Stand for Amazon Echo Dot (3rd Gen)" 
           price={24.99} 
           image="https://m.media-amazon.com/images/I/51ffTH3F8WL._AC_UY545_FMwebp_QL65_.jpg"
           rating={3}
           />
         <Product id="AAA2" 
           title="Hygenix 3ply Disposable Face Masks BFE/PFE 99% Filter Tested by Nelson Labs USA (Pack of 50 Pcs)" 
           price={18.69} 
           image="https://m.media-amazon.com/images/I/51NF7-RjX9L._AC_SR480,480_.jpg"
           rating={2} />
        
        </div> 
        <div className="home__row">
        <Product id="AAA3" title="The $100 Startup: Reinvent the Way You Make a Living, Do What You Love, and Create a New Future Hardcover – Illustrated"
        price={15.69}
        image="https://images-na.ssl-images-amazon.com/images/I/51MKq40o71L._SX328_BO1,204,203,200_.jpg"
        rating={4}

        />
        <Product id="AAA4" 
        title="Caavo Control Center Smart Remote and Home Theater Hub with Voice Control - Pay As You Go Plan"
        price={133.69}
        image="https://images-na.ssl-images-amazon.com/images/I/71gbBTT0UuL._AC_SL1500_.jpg"
        rating={3}
        />
        <Product id="AAA5" 
        title="Mastering Machine Learning Algorithms: Expert techniques for implementing popular machine learning algorithms, fine-tuning your models, and understanding how they work, 2nd Edition"
        price="35.99"
        image="https://m.media-amazon.com/images/I/51vs2-DX6-L._BG0,0,0,0_FMpng_AC_SY480_SX480_.jpg"
        rating={5}
        />
        
        </div> 
        <div className="home__row">
        <Product id="AAA6" 

        title="Mastering Kali Linux for Advanced Penetration Testing: Secure your network with Kali Linux - the ultimate white hat hackers' toolkit, 2nd Edition"
        price="31.19"
        image="https://m.media-amazon.com/images/I/51JAZ26GzsL._BG0,0,0,0_FMpng_AC_SY480_SX480_.jpg"
        rating={4}
        
        />
        
        </div> 
        </div>
    )
}

export default Home
