import "./style.css";

const Refs = () => {
  return (
    <div className="container">
      <h2>Refs</h2>
      <p>
        Refs (далее просто «ссылки») предоставляет способ доступа к DOM-узлам
        или React-элементам, созданным в методе render(). Есть несколько хороших
        примеров использования ссылок:
      </p>
      <ul>
        <li>
          Управление фокусом, выделение текста или воспроизведение
          медиаресурсами.
        </li>
        <li>Выполнение анимаций в императивном подходе.</li>
        <li>Интеграция со сторонними библиотеками, взаимодействующие с DOM.</li>
      </ul>
      <p>
        Ссылки создаются с использованием React.createRef() и добавляются к
        React-элементам с помощью атрибута ref. Ссылки обычно присваиваются
        свойству экземпляра, когда компонент создаётся таким образом, чтобы на
        них можно было ссылаться по всему компоненту.
      </p>

      <div className="code">
        <pre>
          <code>{`class MyComponent extends React.Component {
constructor(props) {
  super(props);
  this.myRef = React.createRef();
 }
 render() {
  return <div ref={this.myRef} />;
 }
}`}</code>
        </pre>
      </div>

      <p>В функциональных компонентах используется хук useRef:</p>
      <div className="code">
        <pre>
          <code>{`import { useRef } from 'react';
 function MyComponent () {
  const refContainer = useRef(initialValue);
  return (
    <div ref={refContainer} />
  );
}`}</code>
        </pre>
      </div>
      <p>
        useRef возвращает изменяемый ref-объект, свойство <b>.current </b>которого
        инициализируется переданным аргументом (initialValue). Возвращённый
        объект будет сохраняться в течение всего времени жизни компонента.
      </p>
    </div>
  );
};
export { Refs };
