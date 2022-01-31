import React, { useEffect } from 'react'
import { useGlobalContext } from './context'
import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'


function App() {

  const {
    waiting,
    loading,
    point,
    data,
    ind,
    num,
    modal,

    handleNextQuestion,
    trfal,
  } = useGlobalContext();
  if(loading){
    return <Loading />
  }
  if(waiting){
    return <SetupForm/> 
  }
    const rand = Math.floor(Math.random()*4);
    const {
      question,
      correct_answer,
      incorrect_answers,   
      } = data[ind];
    let answers = incorrect_answers.slice(0,rand).concat(correct_answer).concat(incorrect_answers.slice(rand,3));;
  return <main>
              {modal && <Modal/>}
              <section className='quiz'>
                <p className="correct-answers">correct answers : {point}/{num}</p>
                <article className='container'>
                  <h2 dangerouslySetInnerHTML = {{__html: question}}/>
                  <div className='btn-container'> 
                    {answers.map((item, index) => {
                      return <button 
                      className='answer-btn' 
                      key ={index}
                      onClick={()=>trfal(item===correct_answer)}
                      dangerouslySetInnerHTML = {{__html: item}}/>
                    })}
                  </div>
                </article>
                <button className="next-question"
                onClick={handleNextQuestion} >next question</button>
              </section>
         </main>
   
}

export default App
