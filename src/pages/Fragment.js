import "./style.css";

const Fragment = () => {
 
  return (
    <div className="container">
      <h2>Fragment</h2>
      <p>
        С помощью фрагментов можно сгруппировать список дочерних элементов без
        добавления дополнительных узлов в DOM. Используем React.Fragment или
        выполняем импорт, чтобы использовать Fragment:
      </p>
      <div className="code">
        <pre>
          <code>{`import { Fragment } from 'react';`}</code>
        </pre>
      </div>
      <p>Заменяем теги div на Fragment:</p>
      <div className="code">
        <pre>
          <code>{`class ChildComponent extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Hello Child Component</h1>
      </Fragment>
    );
  }
}
  `}</code>
        </pre>
      </div>
      <p>Существует сокращенная запись (импортировать не нужно):</p>
      <div className="code">
        <pre>
          <code>{`class ChildComponent extends React.Component {
  render() {
    return (
      <>
        <h1>Hello Child Component</h1>
      </
    )
  }
}`}</code>
        </pre>
      </div>
      <p className="red"><b>Недостаток сокращенной записи: нельзя использовать атрибут key.</b></p>
    </div>
  );
};
export { Fragment };
/* <div className="code">
<pre>
  <code>{`
  
  `}</code>
</pre>
</div> */
