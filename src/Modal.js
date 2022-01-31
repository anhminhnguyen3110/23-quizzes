import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {point, num, restart} = useGlobalContext();
  return <div className='modal-container isOpen'>
  <div className='modal-content'>
    <h2>congrats!</h2>
    <p>You answered {Math.floor(point*100/num)}% of questions correctly</p>
    <button onClick={restart} className="close-btn">play again</button>
  </div>
</div>
}

export default Modal
 