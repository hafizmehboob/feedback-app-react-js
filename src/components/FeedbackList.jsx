import {motion, AnimatePresence} from 'framer-motion';
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner';

function FeedbackList() {
    const { feedback, isLoading } = useContext(FeedbackContext);
    
    if(!isLoading && (!feedback || feedback.length === 0)){
        return <p>No Feedback Found!</p>
    }
    return isLoading ? <Spinner/> : (
    <div className='feedback-list'>
      <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
              <FeedbackItem 
                    key={item.id} 
                    item={item} 
                     />
            </motion.div>        
          ))}
        </AnimatePresence>
    </div>
  )
}

// FeedbackItem.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         rating: PropTypes.number.isRequired,
//         text: PropTypes.string.isRequire
//       })
//     ),
// }

export default FeedbackList