import React from 'react';
import './home.css'
import OrderImg from '../Images/Group.png'
import OrderList from '../Images/lista-aktive.png'
import Header from "./Header/header"
import {
    Link
} from "react-router-dom";

function home({ userState }) {

    console.log(userState)

    return (

        <div className='container'>
            <Header userState={userState} />
            <div className='orders'>
                <Link to='/kafemarket'>
                    <div className='new-order'>
                        <div className='new-order__content'>
                            <div>
                                <img src={OrderImg} alt='thumb'></img>
                            </div>
                            <p>SHTO POROSI TE RE</p>
                        </div>
                    </div>
                </Link>
                <div className='order-list'>
                    <div className='order-list__content'>
                        <div>
                            <img src={OrderList} alt='thumb'></img>
                        </div>
                        <p>SHIKO LISTEN AKTIVE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default home