import React, {Component} from 'react';
import PropTypes from 'prop-types'

class MyName extends Component {
    static defaultProps = {     //부모 컴포넌트
        name : '기본이름',
        // age : '숫자'
    }
    static propTypes = {        //부모 컴포넌트
        name : PropTypes.string,
        age : PropTypes.number.isRequired
    }


    constructor(props){ //컴포넌트 생성자 함수, 컴포넌트가 새로 만들어질 때마다 이 함수가 호출된다.
        super(props);
        this.state = {
            number : 28
        }
    }

    render() {
        return (
            <div>
             안녕하세요 제이름은 <p>{this.props.name}</p> 입니다.

                제 나이는 <p>{this.props.age}</p>

                숫자 : <b>{this.state.number}</b>

                <p><button onClick={() => {
                    this.setState({
                        number:this.state.number + 1
                    });
                }
                }>더하기</button></p>
            </div>
        );
    }
}

export default MyName;