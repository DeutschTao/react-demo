import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class User extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log(this.props.routes)
    }

    render() {
        return(
            <div>
                <h1>User页面</h1>
                <div>
                    <div>
                        <Link to='/user/'> 用户内容 </Link>
                        <Link to='/user/info'> 用户信息 </Link>  
                    </div>
                    <div>
                        {
                            this.props.routes.map((route, key) => {
                                return <Route key={key} exact path={route.path} component={route.component} />
                            })
                        }
                        {/* <Route exact path="/user/" component={Main} />
                        <Route path="/user/info" component={Info} /> */}
                    </div>
                </div>
            </div>
        )
    }
}


export default User