import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
import './Accordian.css'

const Accordian = () => {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
          <div className='container'>
              <h1>faqs</h1>
        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default Accordian
