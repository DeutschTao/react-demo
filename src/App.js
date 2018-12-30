import React, { Component } from 'react';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
// import Home from './components/Home.js'
// import Form from './components/Form'
import News from './components/News.js'
// import ToDoList from './components/ToDoList'
import Plan from './components/Plan'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          app根节点
          {/* <Plan /> */}
          {/* <ToDoList /> */}
          <News />
        </header>

      </div>
    );
  }
}

export default App;
