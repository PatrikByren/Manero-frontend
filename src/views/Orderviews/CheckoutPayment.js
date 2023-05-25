import React from 'react'
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead'


const CheckoutPayment = () => {
    return (
        <div>
            <br />
            <div className='ilonasmedia2'>
                <BackArrowMiddleHead content="Payment method" />
                <div className='border' />
                <div className='one-order'>
                    <div className='flex-container'>
                        <div>Credit Cards</div>
                    </div>
                </div>
                <div className='border' />
                <div className='paymentmeth'>
                    <div className='flex-container'>
                        <div className='undertitle'>7741 **** **** 6644</div>
                    </div>
                    <label>
                        <input
                            type="radio"
                            name="option"
                            value="option1"
                        />
                    </label>
                </div>
                <div className='border' />
                <div className='paymentmeth'>
                    <div className='flex-container'>
                        <div className='undertitle'>7674 **** **** 1884</div>
                    </div>
                    <label>
                        <input
                            type="radio"
                            name="option"
                            value="option1"
                        />
                    </label>
                </div>
                <div className='border' />

                <div className='one-order'>
                    <div className='flex-container'>
                        <div>Swish</div>
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value="option2"
                            />
                        </label>
                    </div>
                </div>
                <div className='border' />
                <div className='one-order'>
                    <div className='flex-container'>
                        <div>Direct Payment</div>
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value="option3"
                            />
                        </label>
                    </div>
                </div>

                <div className='border' />
                <div className='one-order'>
                    <div className='flex-container'>
                        <div>Klarna</div>
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value="option4"
                            />
                        </label>
                    </div>
                </div>
                <div className='border' />
                <br />

            </div>
        </div>
    )
}

export default CheckoutPayment
