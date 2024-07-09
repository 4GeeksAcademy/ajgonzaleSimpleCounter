import React, { useState, useEffect  } from 'react';

const SecondsCounter = (prop) => {
  const [seconds, setSeconds] = useState(0);
  const [secondsLabel, setSecondsLabel] = useState('000000');
  const [inputValue,setInputValue] = useState(null);
  let interval = null;
  let numero = 0;
  const [upOrDown, setUpOrDown] = useState(true);
  
  useEffect(() => {
    interval = setInterval(count, 1000);
      return () => clearInterval(interval);
  }, [seconds]);

  let count = () => {
    //upOrDown ? numero = Number(seconds) + 1 : numero = Number(seconds) - 1;
    if (seconds == 0 && !upOrDown) {
      clearInterval(interval);
      var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});      
      myModal.show();
    } else {
      setSeconds((currentSeconds) => {return upOrDownFunc(currentSeconds)});
    }   
    setSecondsLabel(String(seconds).padStart(6, '0')); 
  }

  function upOrDownFunc(currentSeconds) {
    upOrDown ? numero = Number(currentSeconds) + 1 : numero = Number(currentSeconds) - 1; 
    return numero;
  }

  function reset() {   
    setUpOrDown(true); 
    setSeconds(Number(0.0) + ' ');
  }

  function stop() {
    console.log(interval);
    clearInterval(interval);       
  }

  function resume() {
    seconds == 0 ? setSeconds(1) : setSeconds(seconds + ' ');
  }

  function countdown() {    
    setUpOrDown(false);
    setSeconds(Number(inputValue));
  }

  return <form >  
          <div>
            <div><i className="far fa-clock"></i>{secondsLabel}
            </div>
            <div className="input-group px-5">
              <input id='startAt' type="text" className="form-control" placeholder="Countdown Start at" onChange={e => setInputValue(e.target.value)} />
              <button className="btn btn-outline-secondary" type="button" onClick={ () => countdown()}>Countdown</button>
              <button className="btn btn-outline-secondary" type="button" onClick={ () => stop()}>Stop</button>
              <button className="btn btn-outline-secondary" type="button" onClick={ () => reset()}>Reset</button>
              <button className="btn btn-outline-secondary" type="button" onClick={ () => resume()}>Resume</button>       
            </div>    
          </div>
          <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Counter</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Time's up!
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </form>;
};

export default SecondsCounter;