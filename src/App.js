import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
import Home from './components/Home.js'
// import Form from './components/Form'
import News from './components/News.js'
// import ToDoList from './components/ToDoList'
import Plan from './components/Plan'
import NewsContent from './components/NewsContent'
import PlanContent from './components/PlanContent'




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="App-header">
            <Link to='/'> 首页 </Link>
            <Link to='/news'> 新闻 </Link>
            <Link to='/plan'> 规划 </Link>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/plan" component={Plan} />
          <Route path="/newsContent/:aId" component={NewsContent} />
          <Route path="/PlanContent" component={PlanContent} />
        </div>
      </Router>
    );
  }
}

export default App;
