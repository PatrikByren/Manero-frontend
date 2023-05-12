import React from 'react'
import review from '../../asset/images/review.png';
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead';
import InputSingel from '../../components/individuals/InputSingel';

const SendReview = () => {
    return (
        <div className="text-center ecart">
            <BackArrowMiddleHead content="Leave a review" />
            <div className=' border-top ilonasmedia'>
                <img src={review} alt="review bild" className='cartimg' />
                <div className="line">|</div>
                <div className="title-2 text-center">
                    Please rate the quality of <br /> service for the order!
                </div>
                <div className="content text-center">
                    Your comments and suggestions help us <br /> improve the service quality better!
                </div>
   
                <input className='baseinput'  />
                <button className='basebtn '>
                    SUBMIT
                </button>
            </div>
        </div>
    )
}

export default SendReview
