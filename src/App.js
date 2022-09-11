import logo from './logo.svg';
import './App.css';

import {CSSTransition} from 'react-transition-group';
function App() {
  const captionVisible = true

  return (
    <div className="App">
      <div className='wrap'>
        {/* <CSSTransition
            in={captionVisible}
            timeout={500}
            mountOnEnter
            unmountOnExit
            classNames="circle"
          > */}
          <h1 className="caption">
            Your data is important
          </h1>
        {/* </CSSTransition> */}
      </div> 
    </div>
  );
}

export default App;
