import React from 'react'
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead'


const CheckoutPayment = () => {
    return (
        <div>
            <br />
            <div className='ilonasmedia2'>
                <BackArrowMiddleHead content="Payment method" />
                <div className="flex-grow-1 border-top border-2 my-3" />
                <div className='one-order'>
                    <div className='flex-container'>
                        <div>Credit Cards</div>
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value="option1"
                            />
                        </label>
                    </div>
                </div>
                <div className="flex-grow-1 border-top border-2 my-3" />
                <div className='payment'>
                    <div className='flex-container'>
                        <div>Credit Cards</div>
                    </div>
                </div>
                <div className="flex-grow-1 border-top border-2 my-3" />
                <div className='payment'>
                    <div className='flex-container'>
                        <div>Credit Cards</div>
                    </div>
                </div>
                <div className="flex-grow-1 border-top border-2 my-3" />

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
                <div className="flex-grow-1 border-top border-2 my-3" />
                <div className='one-order'>
                    <div className='flex-container'>
                        <div>Direkt Payment</div>
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value="option3"
                            />
                        </label>
                    </div>

                </div>
                <div className="flex-grow-1 border-top border-2 my-3" />
                <div className='one-order'>
                    <div className='flex-container'>
                        <div>
                            Klarna
                        </div>
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value="option4"
                            />
                        </label>
                    </div>
                </div>
                <div className="flex-grow-1 border-top border-2 my-3" />
            </div>
        </div>
    )
}

export default CheckoutPayment
