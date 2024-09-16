import { createContext, useState, useEffect } from 'react';
import {v4 as uuid4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
       const [isLoading, setIsLoading] = useState(true);
       const [feedback, setFeedback] = useState([]);
       const [feedbackEdit, setFeedbackEdit] = useState({
         item: {},
         edit: false
       });

    useEffect(()=>{
        fetchFeedback();
    },[]);


     // Fetch Data From JSON Server
    const fetchFeedback = async() => {
      const response = await fetch('/feedback?_sort=id&_order=desc');
      const data = await response.json();
      setFeedback(data);  
      setIsLoading(false)
    }


       // delete Feedback
       const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure, you want to delete this item?')){
          await fetch(`/feedback/${id}`, {
            method: "DELETE",
          });
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
        const updateFeedback = async (id, updItem) => {
          const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updItem),
          });
          const data = await response.json();
           setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item ));
        }

        // Add Feedback
           const addFeedback = async (newFeedback) => {
            const response = await fetch("/feedback", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newFeedback),
            });
            
            const data = await response.json();
            setFeedback([data, ...feedback]);
           }
           return <FeedbackContext.Provider value={{
                  feedback,
                  deleteFeedback,
                  addFeedback,
                  updateFeedback, 
                  editFeedback,
                  feedbackEdit,
                  isLoading
             }}>
            {children}
           </FeedbackContext.Provider>
}

export default FeedbackContext;