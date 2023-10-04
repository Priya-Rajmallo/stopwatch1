import react from 'react';

function BtnDisplayComponents(props) {
  return (
    <div>
        {(props.status === 0)?
         <button className="stopwatch-btn stopwatch-btn-gre" 
         onClick={props.start}>Start</button> :""
        }
         {(props.status === 1)?
         <div>
            <button className="stopwatch-btn stopwatch-btn-red" 
                   onClick={props.stop}>Stop</button>
            <button className="stopwatch-btn stopwatch-btn-yel" 
                   onClick={props.reset}>Resate</button>   
         </div> :""
        }

        {(props.status === 0)?
         <button className="stopwatch-btn stopwatch-btn-gre" 
         onClick={props.start}>Start</button> :""
        }
         {(props.status === 2)?
         <div>
            <button className="stopwatch-btn stopwatch-btn-red" 
                   onClick={props.resume}>Pause</button>
            <button className="stopwatch-btn stopwatch-btn-yel" 
                   onClick={props.reset}>Resate</button>   
         </div> :""
        }
   
    </div>
  );
}

export default BtnDisplayComponents;
