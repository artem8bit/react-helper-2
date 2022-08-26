import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {Navigation} from './Navigation'
import './inlinemenu.css'
import { NavLink, Outlet } from "react-router-dom";
const { Header, Sider, Content} = Layout;

const InlineMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: <NavLink to="/">Home</NavLink>,
            },
            {
              key: '2',
              icon: <Navigation/>,
              label: <NavLink to="/components">Components</NavLink>,
            },
            {
              key: '3',
              icon: <Navigation/>,
              label: <NavLink to="/props">Props</NavLink>,
            },{
              key: '4',
              icon: <Navigation/>,
              label: <NavLink to="/state">State</NavLink>,
            },{
              key: '5',
              icon: <Navigation/>,
              label: <NavLink to="/lifecycle">Lifecycle</NavLink>,
            },{
              key: '6',
              icon: <Navigation/>,
              label: <NavLink to="/events">Events</NavLink>,
            },{
              key: '7',
              icon: <Navigation/>,
              label: <NavLink to="/key">Key</NavLink> ,
            },{
              key: '8',
              icon: <Navigation/>,
              label: <NavLink to="/refs">Refs</NavLink>,
            },{
              key: '9',
              icon: <Navigation/>,
              label: <NavLink to="/async">Async request</NavLink>,
            },{
              key: '10',
              icon: <Navigation/>,
              label: <NavLink to="/virtualdom">Virtual DOM</NavLink>,
            },{
              key: '11',
              icon: <Navigation/>,
              label: <NavLink to="/fragment">Fragment</NavLink>,
            },{
              key: '12',
              icon: <Navigation/>,
              label: <NavLink to="/useeffect">UseEffect</NavLink>,
            },{
              key: '13',
              icon: <Navigation/>,
              label: <NavLink to="/router">Router</NavLink>,
            },{
              key: '14',
              icon: <Navigation/>,
              label: <NavLink to="/context">Context</NavLink>,
            },{
              key: '15',
              icon: <Navigation/>,
              label: <NavLink to="/form">Form</NavLink>,
            },{
              key: '16',
              icon: <Navigation/>,
              label: <NavLink to="/memo">React.memo</NavLink>,
            },{

  
              key: '17',
              icon: <Navigation/>,
              label: <NavLink to="/about">About</NavLink>,
            },
          ]}
        />
      
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            margin: '1%',
            color:'green',
            
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
     
        <Content
          className="site-layout-background"
          style={{
            margin: '1%',
            padding: ' 0',
            minHeight: 280,
          }}
        >
        
        <div className='content'><Outlet/></div>
        </Content>
        
      </Layout>
    </Layout>
  );
};


export {InlineMenu};

















