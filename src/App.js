import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route 
  } from 'react-router-dom';



import './reset.css'
import './App.css';
import Layout from './components/layout/layout';
import SignIn from './components/singIn/index';
import SignUp from './components/singUp/index';
function App() {
  return (
    <div className="App">
     <Router>
      <Layout>
        <Switch>
          <Route path='/sing-up'>
            <SignUp />
          </Route>
          <Route path='/'>
            <SignIn />
          </Route>
        </Switch>
      </Layout>   
    </Router>
    </div>
  );
}

export default App;
