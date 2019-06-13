import React, {Component} from 'react';
import TodoItem from './TodoItem';


class ItemList extends Component {

    //최적화
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    //업데이트에 영향을 끼치는 조건을 return 해주면 된다.
    //todos 값이 바뀔때마다 리렌더링 하면 되니까 this.props.todos와 nextProps.todos를 비교해서 이 값이 다를때만
    //리렌더링하게 설정하면 된다.

    render() {
        const { todos, onToggle, onRemove } = this.props;

        //이 컴포넌트는 3가지의 props를 받게 된다.
        //1. todos: todo객체들이 들어있는 배열
        //2. onToggle:체크박스를 키고 끄는 함수
        //3. onRemove: 아이템을 삭제시키는 함수
        const todoList = todos.map(
            ({id, text, checked}) =>(
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default ItemList;