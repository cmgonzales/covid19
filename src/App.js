import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import Login from './component/login/login'
function App() {
  return (
     <Switch>
       <Route path = '/' component = {Login}   /> 
        </Switch>

  );
}

export default App;
