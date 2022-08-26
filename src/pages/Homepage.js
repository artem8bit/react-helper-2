import { FullscreenOutlined } from "@ant-design/icons";
import "./style.css";
import mainmenu from "../img/roadmap.png";

import { Button, Modal } from "antd";
import React, { useState } from "react";

const Homepage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="container">
      <h1>Roadmap</h1>

      {<img className="ImgStyle" src={mainmenu}></img>}
      <br></br>
      <Button onClick={() => setVisible(true)}>
        <FullscreenOutlined />
      </Button>
      <Modal
        title=""
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={"90%"}
        height={"90%"}
      >
        {<img classname="ImgModal" src={mainmenu}></img>}
      </Modal>
      <p></p>
      <p>
        <b>React</b>—JavaScript-библиотека с открытым исходным кодом для
        разработки пользовательских интерфейсов. React разрабатывается и
        поддерживается Facebook, Instagram и сообществом отдельных разработчиков
        и корпораций. React может использоваться для разработки одностраничных и
        мобильных приложений.
      </p>

      <p>
        В react используется декларативный подход, при котором достаточно
        описать, как части интерфейса приложения выглядят в разных состояниях.
        React будет своевременно их обновлять, когда данные изменяются.
        Декларативные представления делают код более предсказуемым и упрощают
        отладку.
      </p>
    </div>
  );
};

export { Homepage };
