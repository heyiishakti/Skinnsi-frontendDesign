import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
import './Accordian.css'

const Accordian = () => {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
          <div className='container'>
              <h3>HOW IT WORKS</h3>
              <h1>it's not rocket science</h1>
        <h5>But it's definitely scientific and safe. Let's go step by step.</h5>
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
