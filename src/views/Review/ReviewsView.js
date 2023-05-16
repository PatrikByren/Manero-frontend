import React from 'react'
import { useParams } from 'react-router-dom';
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead';

const Reviews = () => {
  const {inputReview}=useParams();
  return (
    <div>
      <BackArrowMiddleHead content="Leave a review" />

      <div>
      <h2>Här ska reviewsen synas:</h2>
      <p>{inputReview}</p>
    </div>

    </div>
  )
}

export default Reviews
