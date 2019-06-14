import React, {Component} from 'react';

class Counter extends Component {
    state = {
        number:0
    }

    //동적 함수1
    handleIncreate = () => {
        this.setState({
            number : this.state.number + 1
        })
    }

    //동적 함수2
    handleDecreate = () => {
        this.setState({
            number:this.state.number - 1
        })
    }




    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number} </div>
                <button onClick={this.handleDecreate}>-</button>
                <button onClick={this.handleIncreate}>+</button>
            </div>
        );
    }
}

export default Counter;