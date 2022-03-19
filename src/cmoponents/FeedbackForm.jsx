import { React, useContext, useState, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
  const [text, settext] = useState('')
  const [btndisabled, setBtndisabled] = useState(true)
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtndisabled(false)
      settext(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (text === '') {
      setBtndisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtndisabled(true)
      setMessage('Please enter at least 10 characters')
    } else {
      setMessage(null)
      setBtndisabled(false)
    }

    settext(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      settext('')
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How Would You Rate Your Service with Us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            value={text}
            placeholder='Write a review'
          />
          <Button type='submit' isDisabled={btndisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
