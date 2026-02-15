import React from 'react';

function Input({guess,handleInputChange,onSubmit}) {

  return <div>
    <form className='guess-input-wrapper' onSubmit={onSubmit}>
    
      <label className='guess-input'>Enter guess:</label>
      <input className='guess-input' value={guess} onChange={handleInputChange}></input>
    </form>
  </div>;
}

export default Input;
