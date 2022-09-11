import logo from './logo.svg';
import './App.css';

import {CSSTransition} from 'react-transition-group';
function App() {
  const captionVisible = true

  return (
    <div className="App">
      <div className='wrap'>
        <CSSTransition
            in={captionVisible}
            timeout={500}
            mountOnEnter
            unmountOnExit
            classNames="circle"
          >
            <div className="circle"></div>
        </CSSTransition>
      </div> 
    </div>
  );
}

export default App;
