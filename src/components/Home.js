import React, { Component } from 'react';
import img1 from '../assets/images/1.jpg';


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '张三',
            age: 23,
            userInfo: {
                userName: 'Peter'
            },
            style: {
                color: 'green',
                fontSize: '20px'

            },
            list1: ['111111', '222222', '333333'],
            list2: [<p key='1'>aaaaa</p>, <p key='2'>bbbbbb</p>, <p key='3'>cccccc</p>],
            list3: [{title: '列表1'}, {title: '列表2'}, {title: '列表3'}]
        }
        this.getAge = this.getAge.bind(this)
    }
    getName(){
        alert(this.state.name)
    }
    getAge(){
        alert(this.state.age)
    }
    getUserName = () => {
        alert(this.state.userInfo.userName)
    }
    changeName = (ev) => {
        this.setState({
            name: ev.target.value
        })
    }
    changeInput = () => {
        console.log(this.refs.input.value)
    }
    render () {
        var listR = this.state.list1.map(function(value, key) {
            return (<li key={key}>{value}</li>)
        })
        return (
            <div>
              <p onClick={this.getName.bind(this)}>我的名字叫-----{this.state.name}</p>
              <p style={this.state.style} onClick={this.getAge}>我的年龄是-----{this.state.age}</p>
              <p style={{'color': 'yellow'}} onClick={this.getUserName}>我的英文名字叫--{this.state.userInfo.userName}</p>
              <label htmlFor="name">姓名</label>
              <input id="name" type="text" defaultValue={this.state.name} onChange={this.changeName.bind(this)}/>
              <input id="name" type="text" defaultValue={this.state.name} ref="input" onChange={this.changeInput}/>
              <hr />
              {/* <img src={img1} alt="de"/> */}
              {/* <img src={require('../assets/images/1.jpg')} alt="de"/> */}
              <ul>
                  {this.state.list2}
              </ul>
              <ul>
                  {listR}
              </ul>
              <ul>
                  {this.state.list3.map(function(value, key){
                      return (<li key={key}>{value.title}</li>)
                  })}
              </ul>
            </div>
        )
    }
}

export default Home;