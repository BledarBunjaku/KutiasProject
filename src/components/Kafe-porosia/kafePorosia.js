import React, { useState } from 'react'
import './kafePorosia.css'
import Header from '../Home/Header/header'
import Makiato from '../Images/makiato.png'
import Amerikane from '../Images/amerikane.png'
import Espresso from '../Images/espresso.png'
import Bin from '../Images/bin.png'
import ShtoProduktin from '../Images/shtoProduktin.png'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

const KafeMarket = ({ userState, orderState }) => {

    const [order, setOrder] = useState({
        macchiato: 0,
        espresso: 0,
        americano: 0,
        inputCash: 0
    })

    const [orders, setOrders] = orderState;
    const [showModal, setShowModal] = useState(false)

    const InputHandleChange = (event) => {
        const newObj = { ...order }
        newObj.inputCash = event.target.value
        setOrder({ ...newObj })
    }

    //macchiato order
    const macchiatoOrder = () => {
        const newObj = { ...order }
        newObj.macchiato += 1
        setOrder({ ...newObj })
        console.log('order', order)
    }

    const reversemacchiatoOrder = () => {
        if (order.macchiato === 0) {
            return;
        }
        const newObj = { ...order }
        newObj.macchiato -= 1
        setOrder({ ...newObj })
    }
    //espresso order

    const espressoOrder = () => {
        const newObj = { ...order }
        newObj.espresso += 1
        setOrder({ ...newObj })
    }

    const reverseespressoOrder = () => {
        if (order.espresso === 0) {
            return;
        }
        const newObj = { ...order }
        newObj.espresso -= 1
        setOrder({ ...newObj })
    }
    //americano order

    const americanoOrder = () => {
        const newObj = { ...order }
        newObj.americano += 1
        setOrder({ ...newObj })
    }

    const reverseamericanoOrder = () => {
        if (order.americano === 0) {
            return;
        }
        const newObj = { ...order }
        newObj.americano -= 1
        setOrder({ ...newObj })
    }
    //handle submit

    let totalPrice = (order.macchiato * 1) + (order.americano * 1) + (order.espresso * 0.70)

    const handleSubmit = () => {
        let newObj = {};
        newObj.macchiato = order.macchiato;
        newObj.espresso = order.espresso;
        newObj.americano = order.americano;
        newObj.emri = userState[0].name;
        newObj.cash = order.inputCash;
        newObj.totalPrice = totalPrice;
        setOrders({ ...newObj })
    }

    const handleshowModal = () => {
        setShowModal(!showModal);
    }
    return (
        <div className='container'>
            <Header userState={userState} />
            <div className='caffe-order-container'>
                <div className='choose-caffe-type'>
                    <div className='macchiato' onClick={macchiatoOrder}>
                        <div className='macchiato-image'>
                            <div><img className='caffe-image' src={Makiato} alt='img' /></div>
                        </div>
                        <div className='macchiato-content'>
                            <p>MAKIATO</p><p>1.00 euro</p>
                        </div>
                    </div>
                    <div className='americano' onClick={americanoOrder}>
                        <div className='macchiato-image'>
                            <div>< img className='caffe-image' src={Amerikane} alt='img' /></div>
                        </div>
                        <div className='macchiato-content'>
                            <p>AMERIKANE</p><p>1.00 euro</p>
                        </div>
                    </div>
                    <div className='espresso' onClick={espressoOrder} >
                        <div className='macchiato-image'>
                            <div ><img className='caffe-image' src={Espresso} alt='img' /></div>
                        </div>
                        <div className='macchiato-content'>
                            <p>ESPRESSO</p><p>0.70 euro</p>
                        </div>
                    </div>
                    <div className='add-product'>
                        <div className='add-product__content'>
                            <div>
                                <img src={ShtoProduktin} alt='img'></img>
                            </div>
                            <p>SHTO PRODUKT TË RI</p>
                        </div>
                    </div>
                </div>
                <div className='bill-container'>
                    <div className='list-order-bill'>
                        <div className='list-order-bill__name'>
                            <p>POROSIA</p>
                        </div>
                        {order.americano > 0 ?
                            <div className='list-order-bill__americano'>
                                <div className='americano-name'>
                                    <p>1. AMERIKANE</p><p>1.00 Eur</p>
                                </div>
                                <div className='americano-price'><span>x{order.americano}</span><img src={Bin} alt='img' onClick={reverseamericanoOrder}></img></div>
                            </div> : null}
                        {order.espresso > 0 ?
                            <div className='list-order-bill__americano'>
                                <div className='americano-name'>
                                    <p>2. ESPRESSO</p><p>0.70 Eur</p>
                                </div>
                                <div className='americano-price'><span>x{order.espresso}</span><img src={Bin} alt='img' onClick={reverseespressoOrder}></img></div>
                            </div> : null}
                        {order.macchiato > 0 ?
                            <div className='list-order-bill__americano'>
                                <div className='americano-name'>
                                    <p>3. MAKIATO</p><p>1.00 Eur</p>
                                </div>
                                <div className='americano-price'><span>x{order.macchiato}</span><img src={Bin} alt='img' onClick={reversemacchiatoOrder} ></img></div>
                            </div> : null}
                    </div>
                    <div className='bill-price'>
                        <p>Para te gatshme</p>
                        <div className='bill-price-cash'>
                            <input onChange={InputHandleChange} value={order.inputCash} type='number' name='number' placeholder='00.00'></input><span>Eur</span>
                        </div>
                        <div className='bill-price-change'>
                            <div><p>Kusur</p><span>{(order.inputCash - totalPrice).toFixed(2) < 0 ? 'Vlera e parave e vogel' : (order.inputCash - totalPrice).toFixed(2)} Eur</span></div>
                            <div><p>Totali i pagesës</p><span>{(totalPrice).toFixed(2)} Eur</span></div>
                        </div>
                        <div className='submit-btn'>
                            <Link onClick={handleshowModal}>PËRFUNDO POROSINË</Link>
                        </div>
                        <Modal isOpen={showModal}>
                            <p>Përfundo porosinë?</p>
                            <div className='modal-button'>
                                <button onClick={() => { setShowModal(false) }}>JO TANI</button>
                                <Link to='/listaaktive' onClick={handleSubmit}>PO VAZHDO</Link>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KafeMarket