import React from 'react'
import { NavLink } from 'react-router-dom';
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead'
import InputSingel from '../../components/individuals/InputSingel';


const Checkout = () => {
    return (
        <div>
            <br />
            <div className='ilonasmedia2'>
                <BackArrowMiddleHead content="Checkout" />
                <div className='border' />
                <div className='one-order'>
                    <div className='flex-container'>
                        <div>My order</div>
                    </div>
                </div>

                <div className='border' />
                <div className='one-order orderstuff'>
                    <div className='flex-container'>
                        <div className='smallerletters'>tröja</div>
                        <div className='smallerletters'>1 x pris</div>
                    </div>
                    <div className='flex-container'>
                        <div className='smallerletters'>tröja</div>
                        <div className='smallerletters'>1 x pris</div>
                    </div>
                    <div className='flex-container'>
                        <div className='smallerletters'>Discount</div> {/*om de finns promocode */}
                        <div className='smallerletters'>-pris</div>
                    </div>
                    <div className='flex-container'>
                        <div className='smallerletters'>Delivery</div>
                        <div className='smallerletters FREE'>Free</div>
                    </div>
                </div>

                <div className='border' />

                <div className='one-order'>
                    <div className='flex-container'>
                        <div>Shipping details</div>
                        <NavLink to="/checkout/shipping">
                            <i class="fa-solid fa-chevron-right" style={{ color: "black" }}></i>
                        </NavLink>
                    </div>
                    <div className='flex-container'>
                        <div className='undertitle'>
                            Stockholmsvägen 1, 12 345
                        </div>
                    </div>
                </div>
                <div className='border' />
                <div className='one-order'>
                    <div className='flex-container'>
                        <div>Payment Methods</div>
                        <div className='arrow-icon'>
                            <NavLink to="/checkout/payment">
                                <i class="fa-solid fa-chevron-right" style={{ color: "black" }}></i>
                            </NavLink>
                        </div>
                    </div>
                    <div className='flex-container'>
                        <div className='undertitle'>
                            7741 **** **** 6644
                        </div>
                    </div>
                </div>
                <div className='border'/>
                <br/>

                <div className='inputcontainer '>
                    <div className='text-center'>
                        <InputSingel
                            placeholder="Enter your comment"
                            nameid="review"
                            name="COMMENT"
                            type="text"
                            style="height: 140px;" 
                        />
                    </div>
                </div>

                <button className='basebtn checkoutbtn'>
                    CONFIRM ORDER
                </button>
            </div>

        </div>
    )
}

export default Checkout
