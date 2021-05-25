import React, { useState, useEffect, useRef } from 'react';
import { formatTime } from '../utils';

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep,time }) => {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();
  
    useEffect(() => {
      const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
      if(findCheckedInput) {
        findCheckedInput.checked = false;
      }
    }, [data]);
  
    const changeHandler = (e) => {
      setSelected(e.target.value);
      if(error) {
        setError('');
      }
    }
    
    const nextClickHandler = (e) => {
      if(selected === '') {
        return setError('Please select one option!');
      }
      onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
      setSelected('');
      if(activeQuestion < numberOfQuestions - 1) {
        onSetActiveQuestion(activeQuestion + 1);
      }
      else
      {
        onSetStep(3);
      }
      time=0;
    }

    return(
        <div className="Home-container">
          {formatTime(time)}
            <div>
                <h2>{data.question}</h2>
                <div className="control" ref={radiosWrapper}>
                {data.choices.map((choice, i) => (
                    <label className="radio " key={i}>
                        <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                        {choice}
                    </label>
                ))}
                <button className="Home-btn" onClick={nextClickHandler}>Next</button>
          </div>
            </div>
        </div>
    );
};


export default Question;