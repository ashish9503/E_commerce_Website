import React, { useContext, useEffect } from 'react'
import { useStateValue } from '../../State/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import './Checkout.css'
import { getBasketTotal } from '../../State/Reducers/reducer'
import { Link } from 'react-router-dom'
import { LoaderContext } from '../../TopBarContext/loaderContext'

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    const { setProgress } = useContext(LoaderContext)

    useEffect(() => {
        setProgress(100)
    }, [])

    return (
        <div className='checkout'>
            <div className='left'>
                <img className='advertisement' src='https://images.unsplash.com/photo-1513625047154-f390b1b0df20?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFpcnklMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D'
                    alt='adertisement' />
                <div className='checkout__user'>
                    <h3>Hello {user ? user?._delegate.email : 'Guest'}</h3>
                    <h2>Your Shopping Cart</h2>
                </div>

                {
                    basket.length === 0 ?
                        <div className='empty__note'><h2>Oops, Your cart is empty!</h2></div>
                        :
                        basket.map((item, idx) => {
                            return <CheckoutProduct key={idx + item.id} item={item} />
                        })
                }
            </div>
            <div className='right'>
                <div className='subtotal'>
                    <div className='subtotal__amount'>Subtotal ({basket.length} items): <strong>INR {getBasketTotal(basket)}</strong></div>
                    <div className='subtotal__checkbox'>
                        <input type='checkbox' />This order contains a gift
                    </div>
                    <Link to='/payment'><button className='procced__to__checkout__button'>Proceed to Checkout</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Checkout