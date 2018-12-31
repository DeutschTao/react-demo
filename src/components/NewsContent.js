import React, { Component } from 'react';
class NewsContent extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '头部子组件',
            data: 23,
            id: ''
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.aId)
        this.setState({
            id: this.props.match.params.aId
        })
    }
    render() {
        return(
            <div>
                <p>新闻{this.state.id}详情页</p>
            </div>
        )
    }
}


export default NewsContent