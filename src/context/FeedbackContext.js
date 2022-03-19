import { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from the context',
      rating: 10,
    },
    {
      id: 2,
      text: 'This item is from the context 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'This item is from the context 3',
      rating: 8,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid()
    setFeedback([...feedback, newFeedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to Delete')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  //Update Feedback Item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)))
    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }

  //Edit Feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
