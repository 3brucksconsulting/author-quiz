import React from 'react';
import './App.css';
import './bootstrap.min.css';

const Continue = props => {
  return (
    <div className='row continue'>
      {props.show ? (
        <div className='col-11'>
          <button
            className='btn btn-primary btn-lg float-right'
            onClick={props.onContinue}
          >
            Continue
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Continue;
