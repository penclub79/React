import React, {Component} from 'react';

class EventPractice extends Component {

    state = {
        message:''
    }
    //임의 메서드 만들기
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        //this를 정의 하기 위해서 bind('묶다')해 주어야 한다.
        //이 작업을 하지않으면 this를 부를때 undefined가 된다.
    }

    handleChange(e){
        this.setState({
            message:e.target.value
        });
    }

    handleClick(e){
        alert(this.state.message);
        this.setState({
            message:''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;