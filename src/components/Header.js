import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '头部子组件',
            data: 23
        }
    }
    render() {
        return(
            <div>
                {this.state.title}
                <p>{this.props.title}</p>
                <p>{this.props.num}</p>
            </div>
        )
    }
}
Header.defaultProps = {
    title: '头部子组件的默认值'
}
Header.propTypes = {
    num: PropTypes.string
}

export default Header