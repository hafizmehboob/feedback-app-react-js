import { createContext, useState } from 'react';
import {v4 as uuid4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is Feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is Feedback item 2',
            rating: 8
        },
        {
            id: 3,
            text: 'This is Feedback item 3',
            rating: 9
        }
       ]);
       const [feedbackEdit, setFeedbackEdit] = useState({
         item: {},
         edit: false
       });
       // delete Feedback
       const deleteFeedback = (id) => {
        if(window.confirm('Are you sure, you want to delete this item?')){
          setFeedback(feedback.filter((item) => item.id !== id ));
         }
        }
        // set item to be updated
        const editFeedback = (item) => {
            setFeedbackEdit({
                item,
                edit: true
            });
        }
        // Update Feedback item
        const updateFeedback = (id, updItem) => {
           setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item ));
        }

        // Add Feedback
           const addFeedback = (newFeedback) => {
            newFeedback.id = uuid4();
            setFeedback([newFeedback, ...feedback]);
           }
    return <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,
            updateFeedback, 
            editFeedback,
            feedbackEdit
             }}>
            {children}
           </FeedbackContext.Provider>
}

export default FeedbackContext;