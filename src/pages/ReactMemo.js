import "./style.css";

const ReactMemo = () => {
  return (
    <div className="container">
      <h2>ReactMemo</h2>
      <div className="code">
        <pre>
          <code>{`const MyComponent = React.memo(function MyComponent(props) {
/* рендер с использованием пропсов */
});`}</code>
        </pre>
      </div>
      <p>
        React.memo — это компонент высшего порядка. Компонент высшего порядка —
        это функция, которая принимает компонент и возвращает новый компонент.
        Если ваш компонент всегда рендерит одно и то же при неменяющихся
        пропсах, вы можете обернуть его в вызов React.memo для повышения
        производительности в некоторых случаях, мемоизируя тем самым результат.
        Это значит, что React будет использовать результат последнего рендера,
        избегая повторного рендеринга. React.memo затрагивает только изменения
        пропсов. Если функциональный компонент обёрнут в React.memo и использует
        useState, useReducer или useContext, он будет повторно рендериться при
        изменении состояния или контекста. По умолчанию он поверхностно
        сравнивает вложенные объекты в объекте props. Если вы хотите
        контролировать сравнение, вы можете передать свою функцию сравнения в
        качестве второго аргумента.
      </p>
      <div className="code">
        <pre>
          <code>{`function MyComponent(props) {
  /* рендер с использованием пропсов */
}
function areEqual(prevProps, nextProps) {
  /*
  возвращает true, если nextProps рендерит
  тот же результат что и prevProps,
  иначе возвращает false
  */
}
export default React.memo(MyComponent, areEqual);`}</code>
        </pre>
      </div>
      <p>
        Этот метод предназначен только для оптимизации производительности.
        Аналогом в классовых компонентах выступает метод shouldComponentUpdate()
      </p>
      <div className="code">
        <pre>
          <code>{` shouldComponentUpdate(nextProps, nextState) {
return !shallowEqual (nextProps, this.props) ||
  !shallowEqual (nextState, this.state);
}`}</code>
        </pre>
      </div>
    </div>
  );
};
export { ReactMemo };

/* <div className="code">
<pre>
  <code>{`
  
  `}</code>
</pre>
</div> */
