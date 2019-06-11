//컴포넌트에 해당하는 코드들이다.
//JSX를 사용하려면, 꼭 React를 import해야한다.
//컴포넌트 만드는 방법
//1. class를 통해서 만드는것.
//2. 함수를 통해서 만드는것. -> 나중에 알아보자.
//컴포넌트를 불러 올때, import하여 불러온다.
import React, {Component} from 'react';
import MyName from './MyName';
import Counter from './Counter';
import EventPractice from './EventPractice';


class App extends Component {

  render() {
    //var는 함수단위
    //let, const는 블록단위
    let name = '변수1'
    const style = {
      backgroundColor: 'black',
      padding: '40px',
      color: 'white',
      fontSize: '12px'
    };

    return (
        <div style={style}>
          <div>
            {name}
            <MyName name="변수2" age={555555555}/>
            <Counter></Counter>
          </div>
          <div>
          bye
          </div>
          <EventPractice/>
        </div>
    );
  }
}

export default App;
