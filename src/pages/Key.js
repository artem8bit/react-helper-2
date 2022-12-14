import "./style.css";

const Key = () => {
  return (
    <div className="container">
      <h2>Key</h2>
      <p>
        Ключи помогают React определять, какие элементы были изменены, добавлены
        или удалены. Их необходимо указывать, чтобы React мог сопоставлять
        элементы массива с течением времени:
      </p>
      <div className="code">
        <pre>
          <code>{` const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);`}</code>
        </pre>
      </div>
      <p>
        Лучший способ выбрать ключ — это использовать строку, которая будет явно
        отличать элемент списка от его соседей. Чаще всего вы будете
        использовать ID из ваших данных как ключи:
      </p>
      <div className="code">
        <pre>
          <code>{`const todoItems = todos.map((todo) =>
 <li key={todo.id}>
  {todo.text}
 </li>
);`}</code>
        </pre>
      </div>
      <p>
        Ключи нужно определять непосредственно внутри массивов. Если не указать
        ключи, в консоли увидим сообщение:{" "}
        <b>
          Warning: Each child in an array or iterator should have a unique “key”
          prop.
        </b>{" "}
        Ключи оптимизируют работу с элементами массивов, уменьшают количество
        ненужных удалений и созданий элементов. Без key механизм{" "}
        <b>reconciliation</b> сверяет компоненты попарно между текущим и новым
        VDOM. Из-за этого может происходить большое количество лишних
        перерисовок интерфейса, <b>что замедляет работу приложения.</b> Добавляя
        key, вы помогаете механизму reconciliation тем, что с key он сверяет не
        попарно, а ищет компоненты с тем же key (тег / имя компонента при этом
        учитывается) — это уменьшает количество перерисовок интерфейса.
        Обновлены/добавлены будут только те элементы, которые были изменены/не
        встречались в предыдущем дереве.
        <p className="red">
          <b>
            {" "}
            !!! Следите, чтобы не появлялись дублирующие key, при переключении
            отображения у новых данных не совпадали ключи. Это может привести к
            нежелательным сайд-эффектам, таким как анимации, или некорректной
            логике поведения элемента.
          </b>
        </p>
        Key и ref — специальные props. Они недоступны в компоненте, их нет в
        child.props. Можно получить доступ в родителе через child.key, но
        реальных областей применения для этого практически нет. Если в дочерних
        компонентах нужен key — правильным решением будет задублировать в prop
        id, например.
      </p>
    </div>
  );
};
export { Key };
