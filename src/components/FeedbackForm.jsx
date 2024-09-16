import Card from "./shared/Card"
import { useContext, useState, useEffect } from "react"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackForm() {
  const[text, setText] = useState('');
  const[rating, setRating] = useState(1);
  const[isDisabled, setIsDisabled] = useState(true);
  const[message, setMessage] = useState('');

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

  useEffect(()=>{
    if(feedbackEdit.edit == true){
      setIsDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  },[feedbackEdit]);
  const hanldeTextChange = (e) => {
    if(text === ''){
        setIsDisabled(true);
        setMessage(null);
    }else if(text !== '' && text.trim().length <= 10){
        setIsDisabled(true);
        setMessage('Text Lenght should be at least 10 characters');
    }else{
        setIsDisabled(false);
        setMessage(null);
    }
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      if(text.trim().length > 10){
        const newFeedback = {
          rating,
          text
        }
        if(feedbackEdit.edit == true){
          updateFeedback(feedbackEdit.item.id, newFeedback);
        }else{
          console.log(newFeedback);
          addFeedback(newFeedback);
        }
        setText('');
      }
  }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect rating={rating} select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input type="text" onChange={hanldeTextChange} value={text} placeholder="Write a review" />
                <Button type='submit' isDisabled={isDisabled}>Send</Button>
            </div>
        </form>
        {message && <div className='message'>{ message }</div>}
    </Card>
  );
}
export default FeedbackForm;