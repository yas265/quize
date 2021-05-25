import React from 'react';

const Start = ({ onQuizStart }) =>{
    return(
        <>
        <div className="Home-container">
            <h1>Welcome</h1>
            <p>start quize</p>
            <button className="Home-btn" onClick={ onQuizStart }>Start</button>
        </div>
        </>
    );
};

export default Start;