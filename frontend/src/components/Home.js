import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import "../Style/Home.css";
const Home = () => {
    return (
        <>
            <Header />
            <Footer />
            <h1 class="name">Our Services</h1>
            <Link to='/customers'>
                <div class="card"  >
                    <img  src={require('../assets/cutomers.png')} alt=''></img>
                    <h2>View Customers</h2>
                </div>
            </Link>
            <Link to='/customers'>
                <div class="card2">
                    <img src={require('../assets/tranfer.png')} alt=''></img>
                    <h2>Transfer Money</h2>
                </div>
            </Link>
            <Link to='/trans'>
                <div class="card3">
                    <img src={require('../assets/transHistory.png')} alt=''></img>
                    <h2>view Transactions</h2>
                </div>
            </Link>
       
        </>
    )
}

export default Home