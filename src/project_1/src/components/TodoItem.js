import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    //최적화
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    //체크가 될때마다 업데이트 되야한다.

    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        //총 5가지의 props를 전달받게 된다.
        //text : todo내용
        //checked : 체크박스 상태
        //id : todo의 고유 아이디
        //onToggle : 체크박스를 키고 끄는 함수
        //onRemove : 아이템을 삭제시키는 함수

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onRemove(id)}
                }>x</div>
                <div className={`todo-text $ {checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div> )
                }
            </div>
        );
    }
}

export default TodoItem;