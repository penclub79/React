import React, {Component} from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <form>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    // onChange는 input의 텍스트 값이 바뀔대마다 발생하는 이벤트이다.
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                    // onChange는 input의 텍스트 값이 바뀔대마다 발생하는 이벤트이다.
                />
                <div>{this.state.name} {this.state.phone}</div>
            </form>
        );
    }
}

export default PhoneForm;