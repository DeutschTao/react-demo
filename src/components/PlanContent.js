import React, { Component } from 'react';
import url from 'url';
class PlanContent extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: ''
        }
    }
    componentDidMount() {
        this.setState({
            id: url.parse(this.props.location.search, true).query.aId
        })
        console.log(url.parse(this.props.location.search, true).query.aId)
        
    }
    render() {
        return(
            <div>
                <p>规划{this.state.id}详情页</p>
            </div>
        )
    }
}


export default PlanContent