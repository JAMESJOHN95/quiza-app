import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../../DB';

function Quiz() {

  const [Index, setindex] = useState(0)
  const [questions, setquestion] = useState(data[Index])
  const [Lock, setLock] = useState(false)
  const [score, setscore] = useState(0)
  let [result, setresult] = useState(false)

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let optionarray = [option1, option2, option3, option4];

  const checkanswer = (e, ans) => {
    if (Lock === false) {
      if (questions.ans === ans) {
        e.target.classList.add("Correct")
        setLock(true)
        setscore(prev => prev + 1)
      }
      else {
        e.target.classList.add("wrong")
        setLock(true)
        optionarray[questions.ans - 1].current.classList.add('Correct')

      }
    }
  }
  const handlenext = () => {
    if (Lock === true) {

      if (Index === data.length - 1) {
        setresult(true)
        return 0
      }


      setindex(Index + 1),
        setquestion(data[Index]),
        setLock(false)
      optionarray.map((option) => {
        option.current.classList.remove("wrong")
        option.current.classList.remove("Correct")
        return null;

      })


    }
  }

const reset = ()=>{
  setindex(0);
  setquestion(data[Index]);
  setscore(0);
setLock(false);
setresult(false);

}

  console.log(questions);
  return (
    <div className='container ' style={{ height: '90vh' }}>
      <h1>Quiz App</h1>
      <hr />
      {result ? <></> : <div>
        <h2> {Index + 1} . {questions.question}</h2>
        <ul>
          <li ref={option1} onClick={(e) => { checkanswer(e, 1) }}>{`${questions.option1}`}</li>
          <li ref={option2} onClick={(e) => { checkanswer(e, 2) }}>{`${questions.option2}`}</li>
          <li ref={option3} onClick={(e) => { checkanswer(e, 3) }}>{`${questions.option3}`}</li>
          <li ref={option4} onClick={(e) => { checkanswer(e, 4) }}>{`${questions.option4}`}</li>
        </ul>
        <button  onClick={handlenext}>Next</button>
        <div className='index '>{Index + 1}of {data.length} Questions</div>
      </div>}
      {result ? <><h2 className='mt-5'>Your score {score} out of {data.length}</h2>
        <button onClick={reset}>Reset</button></> :
        <></>
      }




    </div >
  )
}

export default Quiz