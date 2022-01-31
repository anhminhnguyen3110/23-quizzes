import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {

  const {
    num,
    check,
    handleChange,
    handleSubmit,
  } = useGlobalContext();

  return <section className='quiz quiz-small'>
    <form className='setup-form'>
      <h2>Setup Quiz</h2>
      <div className='form-control'>
        <label htmlFor='amount'>Number Of Questions</label>
        <input type='number' name='num'
               id='amount' className='form-input'
               min="1" max="50" placeholder='10'
               value={num}
               onChange={(e) => handleChange(e)}
               />
      </div>
      <div className='form-control'>
        <label htmlFor='category'>Category</label>
        <select name='cate' id='category' className='form-input' onChange={(e) => handleChange(e)}>
          <option value="sports">sports</option>
          <option value="history">history</option>
          <option value="politics">politics</option>
        </select>
      </div>
      <div className='form-control'>
        <label htmlFor='difficulty'>Select Difficulty</label>
        <select name='diff' id='difficulty' className='form-input' onChange={(e) => handleChange(e)}>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
      </div>
      {check&&<p className="error">can't generate questions, please try different options</p>}
      <button type="submit" className="submit-btn" onClick={handleSubmit}>start</button>
    </form>
  </section>
}

export default SetupForm
 