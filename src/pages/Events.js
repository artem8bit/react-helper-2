import Toggle from "../components/Toggle";
import "./style.css";

const Events = () => {


  return (
    <div className="container">
      <h2>Events</h2>

      <p>
        События в React именуются в стиле{" "}
        <a href="https://ru.wikipedia.org/wiki/CamelCase" target="_blank">
          <b>camelCase</b>
        </a>
        . С JSX вы передаёте функцию как обработчик события вместо строки.
        Популярные обработчики событий: onClick, onChange Существует множество
        поддерживаемых событий:
      </p>
      <ul>
        <li>Буфер обмена: onCopy, onCut, onPaste</li>
        <li>
          Составление/ввод данных: onCompositionEnd, onCompositionStart,
          onCompositionUpdate
        </li>
        <li>Клавиатура: onKeyDown, onKeyPress, onKeyUp</li>
        <li>Фокусировка: onFocus, onBlur</li>
        <li>Форма: onChange, onInput, onSubmit</li>
        <li>
          Мышь: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd,
          onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart, onDrop,
          onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut,
          onMouseOver, onMouseUp
        </li>
        <li>Выделение: onSelect</li>
        <li>Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart</li>
        <li>UI: onScroll</li>
        <li>Колёсико мышки: onWheel</li>
        <li>
          Медиа: onAbort, onCanPlay, onCanPlayThrough, onDurationChange,
          onEmptied, onEncrypted, onEnded, onError, onLoadedData,
          onLoadedMetadata, onLoadStart, onPause, onPlay, onPlaying, onProgress,
          onRateChange, onSeeked, onSeeking, onStalled, onSuspend, onTimeUpdate,
          onVolumeChange, onWaiting
        </li>
        <li>Изображение: onLoad, onError</li>
        <li>
          Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration
        </li>
        <li>Переход: onTransitionEnd</li>
      </ul>

      <div className="code">
        <pre>
          <code>{`<button onClick={activateLasers}>
    Active
</button>`}</code>
        </pre>
      </div>
      <p>
        В React нельзя предотвратить обработчик события по умолчанию, вернув
        false. Нужно явно вызвать preventDefault:
      </p>
      <div className="code">
        <pre>
          <code>{`function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log("Отправлена форма.");
    }
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Отправить</button>
      </form>
    );
}`}</code>
        </pre>
      </div>
      <p>
        В компоненте, определённом с помощью ES6-класса, в качестве обработчика
        события обычно выступает один из методов класса. Например, этот
        компонент Toggle рендерит кнопку, которая позволяет пользователю
        переключать состояния между «Включено» и «Выключено»:
      </p>
      <div className="code">
        <pre>
          <code>{`
class Toggle extends React.Component {
constructor(props) {
  super(props);
  this.state = { isToggleOn: true };              
  // Эта привязка обязательна для работы 'this' в колбэке.
  this.handleClick = this.handleClick.bind(this);
}             
handleClick() {
  this.setState((prevState) => ({
    isToggleOn: !prevState.isToggleOn,
  }));
}              
render() {
  return (
    <button className={"toggle__btn"} onClick={this.handleClick}>
      {this.state.isToggleOn ? "Включено" : "Выключено"}
    </button>
  );
  }
}               
ReactDOM.render(<Toggle />, document.getElementById('root'));`}</code>
        </pre>
      </div>
      <p>Результат выполнения кода:</p>
      <Toggle />
      <p>Этот же код, но переписанный на функциональную компоненту:</p>
      <div className="code">
        <pre>
          <code>{`function Toggle() {
    let [isToggleOn, setIsToggleOn] = useState(true);
    function handleClick() {
      setIsToggleOn(!isToggleOn);
    }
    return (
      <button className={"toggle__btn"} onClick={() => handleClick()}>
        {isToggleOn ? "Включено" : "Выключено"}
      </button>
    );
  }`}</code>
        </pre>
      </div>
      <p>
        Внутри цикла часто нужно передать дополнительный аргумент в обработчик
        события. Например, если id — это идентификатор строки, можно
        использовать следующий вариант:
      </p>
      <div className="code">
        <pre>
          <code>{`<button onClick={(e) => deleteRow(id, e)}>Удалить строку</button>`}</code>
        </pre>
      </div>
    </div>
  );
};
export { Events };
