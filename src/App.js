import React, { Component } from 'react';
import logo from './logo.svg';
import { Card, Icon, Avatar, Button, Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, VerticalGridLines, XAxis, YAxis, HorizontalGridLines } from 'react-vis';

const { Header, Sider, Content} = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;


class App extends Component {
  render() {


    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];

    return (
      <div className="App">

  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">React-Vis</Menu.Item>
        <Menu.Item key="2">Tableau JS</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={300} style={{ background: '#fff' }}>
      <Card 
              hoverable
              className="Card-Title" 
              style={{ width:300}}
              cover= {<img alt="cover" src="https://viziblydiffrnt.github.io/assets/images/viz_dif_header.jpg"/>}
              actions={[
                <Button href="https://twitter.com/ViziblyDiffrnt" ghost target="_blank">
                  <Icon type="twitter" style={{color:'#0084b4'}}/>
                </Button>,

                <Button href="https://github.com/viziblydiffrnt" ghost target="_blank">
                  <Icon type="github" style={{color:'#000'}}/>
                </Button>,

                <Button href="https://www.linkedin.com/in/markajacobson/" ghost target="_blank">
                  <Icon type="linkedin" style={{color:'#0077B5'}}/>
                </Button>
                ]}
            >
            <Meta 
              avatar={<Avatar src="https://viziblydiffrnt.github.io/assets/images/about.JPG"/>}
              title="Mark Jacobson"
              description={<a href="https://viziblydiffrnt.github.io" target="_blank">Check out my page at viziblydiffrnt.github.io</a>}
              />
            </Card> 
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
        <div>
              <XYPlot height={500} width={500}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis/>
                <YAxis/>
                <LineSeries data={data}/>
                </XYPlot>
            </div>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  </div>
    );
  }
}

export default App;



