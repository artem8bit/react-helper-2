import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

const LifeCycle = () => {
  return (
    <div className="container">
      <h2>LifeCycle</h2>
      <p>
        Основные методы жизненного цикла:
        <p>
          1. <b>constructor ()</b>
        </p>
        <p>Обычно в React конструкторы используются только для двух целей:</p>
      </p>
      <ul>
        <li>
          Инициализация локального состояния путем присвоения объекта
          this.state.
        </li>
        <li>Привязка методов обработчика событий к экземпляру.</li>
      </ul>
      <div className="code">
        <pre>
          <code>{`constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
}`}</code>
        </pre>
      </div>
      <p>
        2. <b>render ()</b>
      </p>
      <p>Рендеринг компонента. Отдает JSX.</p>

      <div className="code">
        <pre>
          <code>{`render () {
  return (
    <div>
        'Hello'
    </div>
  )
}`}</code>
        </pre>
      </div>
      <p>
        3. <b>componentDidMount()</b>
      </p>
      <p>
        componentDidMount() вызывается сразу после монтирования компонента в
        DOM. Используется для отправки запросов на сервер к удаленным ресурсам,
        setTimeout, обращение к DOM-элементам:
      </p>
      <div className="code">
        <pre>
          <code>{`render () {
componentDidMount() {
  this.timerID = setInterval(
   () => this.tick(),
    1000);
  )
}`}</code>
        </pre>
      </div>

      <p>
        4. <b> componentDidUpdate(prevProps, prevState)</b>
      </p>
      <p>
        Вызывается после обновления компонента. В качестве парапметров
        передаются старые значения объектов: props и state.
      </p>
      <div className="code">
        <pre>
          <code>{`componentDidUpdate(prevProps, prevState) {
if (this.props.userID !== prevProps.userID) {
 this.fetchData(this.props.userID);
   }
}`}</code>
        </pre>
      </div>

      <p>
        5. <b>componentWillUnmount()</b>
      </p>
      <p>
        Вызывается перед удалением компонента из DOM. Используется для закрытия
        асинхронных запросов, таймеров.
      </p>
      <div className="code">
        <pre>
          <code>{`componentWillUnmount() {
 console.log("The component named Header is about to be unmounted.");
}`}</code>
        </pre>
      </div>
  
      <p>
        Для использования методов жизненного цикла в функциональных компонентах
        предназначек хук  <NavLink to="/useeffect">UseEffect</NavLink>.
      </p>
    </div>
  );
};
export { LifeCycle };
