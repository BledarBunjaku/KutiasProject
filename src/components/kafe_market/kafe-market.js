import React from 'react'
import Header from '../Home/Header/header'
import './kafe-market.css'
import Caffe from '../Images/caffe.png'
import Market from '../Images/market.png'
import Break from '../Images/pauza.png'
import { Link } from "react-router-dom";


const KafeMarket = ({ userState }) => {
    const button = 'VAZHDO   >'
    return (
        <div className='container'>
            <Header userState={userState} />
            <div>
                <div className='order-category'>
                    <div className='form-order-category'>
                        <form>
                            <input className='order-name' type="text" name="email" placeholder="Emri i Porosisë" />
                            <input className='order-time' type="text" name="password" placeholder="Cakto kohën kur përfundon porosia" />
                        </form>
                    </div>
                    <div className='article-orders-content__title'><p>Cakto kategorinë</p></div>
                    <div className='article-orders-content'>
                        <div className='article-caffe'>
                            <div className='article-caffe__content'>
                                <div><img src={Caffe} alt='img' /></div>
                                <div><p>KAFE</p></div>
                            </div>
                        </div>
                        <div className='article-market'>
                            <div className='article-market__content'>
                                <div><img src={Market} alt='img' /></div>
                                <div><p>MARKET</p></div>
                            </div>
                        </div>
                        <div className='article-break'>
                            <div className='article-break__content'>
                                <div><img src={Break} alt='img' /></div>
                                <div><p>PAUZA</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='next-page'>
                <div className=' next-page__btn'>
                    <Link to='/kafeporosia'>{button}</Link>
                </div>
            </div>
        </div >
    )
}

export default KafeMarket;