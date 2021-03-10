import React from 'react'
import './product.css'


function produkti({ orderState }) {
    return <div className='product'>
        <div className='name'>
            <p>{orderState[0].emri}</p>
        </div>
        <div className='product-name'>
            {orderState[0].americano > 0 ? <div><p>{orderState[0].americano}x Amerikane</p></div> : null}
            {orderState[0].macchiato > 0 ? <div><p>{orderState[0].macchiato}x Macchiato</p></div> : null}
            {orderState[0].espresso > 0 ? <div><p>{orderState[0].espresso}x Espresso</p></div> : null}
        </div>
        <div className='product-cash'>
            <p>{orderState[0].cash} Eur</p>
        </div>
        <div className='product-change'>
            <p>{(orderState[0].cash - orderState[0].totalPrice).toFixed(2)}Eur</p>
        </div>
    </div>

}

export default produkti