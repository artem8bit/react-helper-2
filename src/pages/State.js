import { useState } from "react";
import "./style.css";

const State = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
        <h2>State</h2>
      <p>
        {" "}
        <b>State</b> в React – это объект JS, позволяющий отслеживать данные{" "}
        <b>компонента</b>. Состояние компонента может меняться. Смена состояния
        компонента зависит от функциональности приложения. Изменения могут
        основываться на ответе от пользователя, новых сообщениях с сервера,
        ответа сети и т.д.
      </p>

      <p>
        Состояние компонента должно быть приватным для компонента и
        контролироваться им. Изменения состояния компонента необходимо делать{" "}
        <b>внутри компонента</b> – инициализация и обновление состояния
        компонента.
      </p>

      <div className="code">
        <pre>
          <code>{`
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: 'johndoe' }
    }
    render() {
        return (
            <div> { this.state.username } </div>
        )
    }
}`}</code>
        </pre>
      </div>

      <p>
        Единственный допустимый способ обновления состояния компонента – через
        setState().
      </p>
      <p className="red">
          <b>
            !!! Нельзя менять состояние: this.state.username='Mark'
          </b>
        </p>
      <p>Первый способ изменить state:</p>
      <div className="code">
        <pre>
          <code>{`
 this.setState({username:'Mark'});
`}</code>
        </pre>
      </div>
      <p>Второй способ изменить state:</p>
      <div className="code">
        <pre>
          <code>{`
 this.setState(() => ({ username: 'Mark' }))
`}</code>
        </pre>
      </div>
      <p>
        В функциональных компонентах state создается с помощью хука
        <b> useState()</b>. Чтобы воспользоваться им, необходимо импортировать
        useState из 'react':
      </p>
      <div className="code">
        <pre>
          <code>{`
import {useState} from 'react';
`}</code>
        </pre>
      </div>

      <p>
        Хук useState() принимается в качестве параметра первоначальное значение
        для переменной, а возвращает массив, содержащий переменную и функцию,
        которая изменяет эту переменную. При объявлении state часто используют
        деструктурирующее присваивание:
      </p>

      <div className="code">
        <pre>
          <code>{`
 const [name, setName] = useState('Mark');
`}</code>
        </pre>
      </div>

      <div className="count">
        <button
          className="mui-btn mui-btn--fab mui-btn--primary"
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
        <p className="counter">
          <b>Сounter:</b> {count}
        </p>
        <button
          className="mui-btn mui-btn--fab mui-btn--primary"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
      </div>

      <p>
        Выше приведен пример работы со state - счётчик, который изменяется при
        нажатии на кнопку. Код имеет следующий вид:
      </p>
      <div className="code">
        <pre>
          <code>{`
 function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div className="count">
         <button className="count__btn" onClick={() => setCount(count - 1)}>-1</button>
         <p>Счётчик: {count}</p>
         <button className="count__btn" onClick={() => setCount(count + 1)}>+1</button>
      </div>
    );
}
`}</code>
        </pre>
      </div>
   
    </div>
    
  );
};
export { State };

  