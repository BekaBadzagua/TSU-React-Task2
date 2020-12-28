import React from 'react'
import Posts from './components/Posts'
import Post from './components/Post'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

function App() {

  return (
    <div className="App">
      <p>სტუდენტი: ბექა ბაძაღუა</p>
      <Switch>
        <Route path="/posts/:id" exact={true} component={Post}></Route>
        <Route path="/" exact={true} ><Posts /></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
