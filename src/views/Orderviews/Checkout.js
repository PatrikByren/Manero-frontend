import React from 'react'
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead'
import InputSingel from '../../components/individuals/InputSingel';


const Checkout = () => {
    return (
        <div>
            <br />
            <div className='ilonasmedia2'>
                <BackArrowMiddleHead content="Checkout" />
                <div className="flex-grow-1 border-top border-2 my-3" />
                <div className='one-order'>
                    <div className='flex-container'>
                        <div>My order</div>
                    </div>
                </div>

                <div className='border' />
                <div className='paymentmeth'>
                    <div className='flex-container'>
                        <div className='undertitle'>tröja</div>
                        <div className='undertitle'>1 x pris</div>
                    </div>
                    <div className='flex-container'>
                        <div className='undertitle'>tröja</div>
                        <div className='undertitle'>1 x pris</div>
                    </div>
                    <div className='flex-container'>
                         <div className='undertitle'>Discount</div> {/*om de finns promocode */}
                        <div className='undertitle'>-pris</div>
                    </div>
                    <div className='flex-container'>
                        <div className='undertitle'>Delivery</div>
                        <div className='undertitle FREE'>Free</div>
                    </div>

                </div>
                <div className='border' />

                <div className='one-order'>
                    <div className='flex-container'>
                        <div>Shipping details</div>
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

                    </div>
                    <div className='flex-container'>
                        <div className='undertitle'>
                            7741 **** **** 6644
                        </div>
                    </div>
                </div>
                <div className='border' />
                <br />

                <div className='inputcontainer'>
                    <div className='text-center' >
                        <InputSingel
                            placeholder="Enter your comment"
                            nameid="review"
                            name="COMMENT"
                            type="text"
                        />
                    </div>
                </div>
                <button className='basebtn'>
                    CONFIRM ORDER
                </button>
            </div>

        </div>
    )
}

export default Checkout
