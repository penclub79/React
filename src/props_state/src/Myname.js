import React, {Component} from 'react';
// import React from 'react';
// class Myname extends Component {
    // static defaultProps = {
    //     name : '내이름 적으시면 댑니다',
    //     age : '나이적으시면 댑니다'
    // } 보통 함수형 컴포넌트는 이걸로 많이 쓴다.

class Myname extends Component{
    static defaultProps = {
        name:'dgdg'
    }


}

    // render() {
    //     return (
            /*<div>*/
                /*arrow function*/

                /*props*/
                /*안녕하세요! 제이름은 <b>{this.props.name}</b>이다.*/
                /*제 나이는 <b>{this.props.age}</b>살 입니다.*/
            /*</div>*/
        // );
    // }
// }


// Myname.defaultProps = {
//     name : '내이름 적으시면 댑니다',
//     age : '나이적으시면 댑니다'
// };

export default Myname;