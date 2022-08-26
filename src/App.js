import { Routes, Route} from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";
import { Components } from "./pages/Components";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Props } from "./pages/Props";
import { State } from "./pages/State";
import { LifeCycle } from "./pages/LifeCycle";
import { Events } from "./pages/Events";
import { Key } from "./pages/Key";
import { Refs } from "./pages/Refs";
import { AsyncRequest } from "./pages/AsyncRequest";
import { VirtualDom } from "./pages/VirtualDom";
import { Fragment } from "./pages/Fragment";
import { UseEffect } from "./pages/UseEffect";
import { Router } from "./pages/Router";
import { Context } from "./pages/Context";
import { Form } from "./pages/Form";
import { ReactMemo } from "./pages/ReactMemo";
import {InlineMenu} from "./components/InlineMenu"
import 'antd/dist/antd.css';



function App() {
  return (
    <>
   
      <Routes>
        <Route Route path='/' element={<InlineMenu/>}>
        <Route index element={<Homepage />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="components" element={<Components />}></Route>
        <Route path="props" element={<Props />}></Route>
        <Route path="state" element={<State />}></Route>
        <Route path="lifecycle" element={<LifeCycle />}></Route>
        <Route path="events" element={<Events />}></Route>
        <Route path="key" element={< Key/>}></Route>
        <Route path="refs" element={<Refs />}></Route>
        <Route path="async" element={<AsyncRequest />}></Route>
        <Route path="virtualdom" element={<VirtualDom/>}></Route>
        <Route path="fragment" element={<Fragment />}></Route>
        <Route path="useeffect" element={<UseEffect />}></Route>
        <Route path="router" element={<Router />}></Route>
        <Route path="context" element={<Context />}></Route>
        <Route path="form" element={<Form />}></Route>
        <Route path="memo" element={<ReactMemo />}></Route>
        <Route path="*" element={<Notfoundpage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
