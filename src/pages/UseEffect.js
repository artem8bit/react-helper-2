import "./style.css";

const UseEffect= () => {
  return (
    <div className="container">
      <h2>UseEffect</h2>
      <p>Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.</p>
      <div className="code">
<pre>
  <code>{`import {useEffect} from 'react';`}</code>
</pre>
</div>
<p>Хук позволяет использовать 3 метода жизненного цикла:</p>
<ul>
  <li>componentDidMount()</li>
  <li>componentDidUpdate(prevProps, prevState)</li>
  <li>componentWillUnmount()</li>
</ul>
<p>UseEffect принимает в качестве первого параметра функцию, в качестве второго - [ ] (аналог componentDidMount).</p>
<div className="code">
<pre>
  <code>{`useEffect ( () => { }, [])`}</code>
</pre>
</div>
<p>UseEffect принимает в качестве первого параметра функцию, в качестве второго - массив с зависимостью (или несколькими) (аналог componentDidUpdate).</p>
<div className="code">
<pre>
  <code>{`useEffect ( () => { }, [name])`}</code>
</pre>
</div>

<p>UseEffect принимает в качестве первого параметра функцию, второго параметра - нет (аналог componentDidMount + componentDidUpdate).</p>
<div className="code">
<pre>
  <code>{`useEffect ( () => { } )`}</code>
</pre>
</div>
<p>UseEffect принимает в качестве первого параметра функцию, которая возвращает другую функцию (аналог componentWillUnmount).</p>
<div className="code">
<pre>
  <code>{`useEffect ( () => {
 return () => {};
})`}</code>
</pre>
</div>
    </div>
  );
};
export { UseEffect };

/* <div className="code">
<pre>
  <code>{`
  
  `}</code>
</pre>
</div> */
