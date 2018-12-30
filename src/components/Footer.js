import React, { Component } from 'react';

class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '尾部子组件'
        }
    }
    render() {
        return(
            <div>
                {this.state.title}
            </div>
        )
    }
}

export default Footer