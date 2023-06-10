import React from 'react';

import "../Style/Footer.css";

const Header = () => {
  return (
    <header>
        <div className='column1'>
      <div className='left'>
        <h1>The Spark Bank</h1>
          
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            <br/>sed doeiusmod tempor incididunt ut labore et dolore
            <br/> magna aliqua. Ut enim ad minim veniam, quis
            <br/>ex ea commodo consequat</p>
          </div>
        
         <div className='centered'>
              <h1>About Us
                </h1> <ol>
                    <li>Careers</li>
                    <li>Terms & Conditions</li>
                     <li>Privacy Policy</li>
                     <li>Help Center</li>
                 </ol>
        </div> 
        <div className='right'>
            <h1>Contant  Us</h1> 
                <ol>
                    <li>50 north Whatever , Gwalior,MP</li>
                    <li>Email:BhavnaRathore@gmail.com</li>
                    <li>(+91) 1111-333-444</li>
                     
                 </ol>
        </div>  
       </div>
    </header>
  );

  };

export default Header;
