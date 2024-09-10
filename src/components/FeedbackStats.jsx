// import PropTypes from 'prop-types';
import Feedback from '../data/FeedbackData';
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

function FeedbackStats() {
   const {feedback} = useContext(FeedbackContext);
    // let result = 0;
    // let calculateReview = feedback.map((review) => {
    //         result = result + review.rating; 
    //     });
    // let average = (result > 0) ? result/feedback.length : 0;
    let average = feedback.reduce((acc, current) => {
        return acc + current.rating;
    }, 0)/feedback.length;
    average = average.toFixed(1).replace(/[.,]0$/,'');
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats