import React from 'react'
import "../Style/Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>  <header >
            <div class="inner-width">
                <h2 class="logo">The Sparks Bank</h2>
                <i class="menu-toggle-btn fas fa-bars"></i>
                <nav class="navigation-menu">
                    <Link to="/home">Home</Link>
                    <Link to="/customers"> Customers </Link>
                    <Link to="/trans"> Transactions</Link>
                </nav>
            </div>

            <img id="bank" src={require('../assets/img.jpg')} alt="" />
            </header>
          <div className='div'>
            <h1>Welcome to The Sparks Bank </h1>
            <div className='div1'>
                <h2>
Empowering Your Financial Journey: Secure,
 Convenient, and Personalized Banking Solutions for a Better Future.</h2>
            </div>      
            </div>     
       </>
      

    )
}

export default Header