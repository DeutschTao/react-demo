import React, { Component } from 'react';

class ToDoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }
    hanldeClick = () => {
        var tempList = this.state.list;
        tempList.push(this.refs.title.value);
        this.setState({
            list: tempList
        })
        this.refs.title.value = ''
    }
    cancel = (key) => {
        var tempList = this.state.list;
        tempList.splice(key, 1);
        this.setState({
            list: tempList
        })
    }
    render(){
        return(<div>
            <input type='text'  ref="title" /> <button onClick={this.hanldeClick}>增加+</button>
            <ul>
                {this.state.list.map((value, key) => {
                    return(<li key={key}>{value}-------<button onClick={this.cancel.bind(this, key)}>删除—</button></li>)
                })}
            </ul>
        </div>)
    }
}

export default ToDoList;