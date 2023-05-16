import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom';
import Review from '../../asset/images/review.png';
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead';
import InputSingel from '../../components/individuals/InputSingel';

const SendReview = () => {
    // const [inputReview, setInputReview] = useState("");
    // const history = useHistory();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Skicka review:n till nästa sida
    //     history.push(`/result/${inputReview}`);
    // };

    // const handleChange = (e) => {
    //     setInputReview(e.target.value);
    // };

    return (
        <div className="text-center ecart">
            <BackArrowMiddleHead content="Leave a review" />
            <div className='border-top ilonasmedia'>
                <img src={Review} alt="review bild" className='cartimg' />
                <div className="line">|</div>
                <div className="title-2 text-center">
                    Please rate the quality of <br /> service for the order!
                </div>

                <div className="content text-center">
                    Your comments and suggestions help us <br /> improve the service quality better!
                </div>
                <br />

                {/* <form onSubmit={handleSubmit}> */}
                    <div className='inputcontainer leave-comment'>
                        <div className='text-center' >
                            <InputSingel
                                placeholder="Enter your comment"
                                nameid="review"
                                name="COMMENT"
                                type="text"
                                // onChange={handleChange}
                                // value={inputReview}
                                // setValue={setInputReview} 
                                />
                        </div>
                    </div>

                <button type="submit" className='basebtn '>
                    SUBMIT
                </button>
                {/* </form> */}
            </div>
        </div>
    )
}

export default SendReview