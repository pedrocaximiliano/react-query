import './App.css';
import ReactQuery from './ReactQuery/ReactQuery';
import Effector from './Effector/Effector';
import React from 'react'
import { KEY } from './constants';

const App = () => {
  const [changeRequest, setChangeRequest] = React.useState()
  return (
    <div>
      <button onClick={() => setChangeRequest('react-query')}>react-query</button>
      <button onClick={() => setChangeRequest('effector')}>effector</button>
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
