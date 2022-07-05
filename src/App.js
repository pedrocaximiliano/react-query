import './App.css';
import ReactQuery from './ReactQuery/ReactQuery';
import Effector from './Effector/Effector';
import React from 'react'
import { KEY } from './constants';
import { getTodos } from "../src/Effector/store";

const App = () => {
  const [changeRequest, setChangeRequest] = React.useState()

  return (
    <div>
      <button onClick={() => setChangeRequest('react-query')}>react-query</button>
      <button onClick={() => (setChangeRequest('effector'), getTodos())}>Effector JS</button>
      {changeRequest === KEY.REACT_QUERY && (
        <ReactQuery />
      )}
      {changeRequest === KEY.EFFECTOR && (
        <Effector />
      )}
    </div>
  )

}

export default App;
