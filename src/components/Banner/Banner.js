import React from 'react';

function Banner({won,answer,numOfAttemps}) {

  if(!won){
    return <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  }

  return <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong> {numOfAttemps} guesses</strong>.
    </p>
  </div>;
}

export default Banner;
