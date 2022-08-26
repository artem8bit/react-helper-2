import "./components.css";

const Components = () => {
  return (
    <div className="container">
      <h2>Components</h2>
      <p>
        Компоненты React — это многократно иcпользуемые фрагменты
        JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).
      </p>
      <p> Компоненты разделяются функциональные и классовые.</p>
      <p>Проще всего объявить React-компонент как функцию:</p>
      <div className="code">
        <pre>
          <code>
            {`function Welcome() {
            return <h1>Привет, мир! </h1>;
}`}
          </code>
        </pre>
      </div>
      <p>
        Эта функция — компонент, потому что она получает данные в одном объекте
        («пропсы») в качестве параметра и возвращает React-элемент. Мы будем
        называть такие компоненты «функциональными», так как они буквально
        являются функциями.
      </p>
      <p> Также компоненты можно определять как классы ES6:</p>
      <div className="code">
        <pre>
          <code>
            {`class Welcome extends React.Component {
                render() {
                    return <h1>Привет, мир!</h1>;
                }
            `}
          </code>
        </pre>
      </div>
      <p>
        Компонента должна себя вести как чистая функция. «Чистой» называется
        функция, которая:
      </p>

      <ul>
        <li>Для одинаковых входных данных всегда возвращает один результат.</li>
        <li>
          Не имеет побочных эффектов (то есть не изменяет внешние состояния).
        </li>
        <li>Не зависит от внешних состояний.</li>
      </ul>

      <div className="code">
        <pre>
          <code>{`
class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>;
      }
  }
    `}</code>
        </pre>
      </div>
    </div>
  );
};

export { Components };
