import React from 'react'
import './listaAktive.css'
import Products from './Product/product'
import Header from '../Home/Header/header'
import ProductHeader from './Product/ProductHeader/productHeader'



function ListaAktive({ userState, orderState }) {

    return <div className='container'>
        <Header userState={userState} />
        <div className='product-price-container'>
            <span className='product-wrapper'>
                <ProductHeader />
                <Products orderState={orderState} />
                {/* <Products orderState={orderState} /> */}
            </span>
            <div className='summary'>
                <div className='header-summary'>
                    SUMMARY
                </div>
                <div className='summary-item1'>{orderState[0].americano ? <span>{orderState[0].americano}x Amerikane</span> : null}</div>
                <div className='summary-item2'>{orderState[0].espresso ? <span>{orderState[0].espresso}x Espresso</span> : null}</div>
                <div className='summary-item3'>{orderState[0].macchiato ? <span>{orderState[0].macchiato}x Makiato</span> : null}</div>
                <div className='total-price'>
                    <p><span>Totali:</span> {orderState[0].totalPrice.toFixed(2)} Eur</p>
                </div>
            </div>
        </div>
    </div>
}

export default ListaAktive