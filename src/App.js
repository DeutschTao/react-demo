import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from './model/router.js'
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';

// import Form from './components/Form'

// import ToDoList from './components/ToDoList'

// import NewsContent from './components/NewsContent'
// import PlanContent from './components/PlanContent'





class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="App-header">
            <Link to='/'> 首页 </Link>
            <Link to='/news'> 新闻 </Link>
            <Link to='/plan'> 规划 </Link>
            <Link to='/login'> 登陆 </Link>
            <Link to='/user'> 用户 </Link>
          </header>
          {
            routes.map((route, key) => {
              if(route.exact){
                return (<Route key={key} exact path={route.path} 
                  render = {props => (
                    <route.component {...props} routes={route.routes} />
                  )}
                  />)
              } else {
                return (<Route key={key} path={route.path} 
                  render = {props => (
                    <route.component {...props} routes={route.routes} />
                  )} 
                  />)
              }
            })
          }
          {/* <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/plan" component={Plan} /> */}
          {/* <Route path="/newsContent/:aId" component={NewsContent} />
          <Route path="/PlanContent" component={PlanContent} /> */}
          {/* <Route path="/login" component={Login} />
          <Route path="/user" component={User} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
