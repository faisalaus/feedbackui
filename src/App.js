import { React } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './cmoponents/Header'
import FeedbackList from './cmoponents/FeedbackList'
import FeedbackStats from './cmoponents/FeedbackStats'
import FeedbackForm from './cmoponents/FeedbackForm'

import AboutPage from './pages/AboutPage'
import AboutIconLink from './cmoponents/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'
import './index.css'

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
