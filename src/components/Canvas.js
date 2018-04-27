import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import BioCard from '../components/BioCard';
// import AppContent from '../components/AppContent';
import logo from '../logo.svg';
import ReactVisChart from '../components/ReactVis';
// import tableau from 'tableau-react';

const { Header, Sider, Content } = Layout;


class Canvas extends Component {

    state = {
        current: 'vizibly-diffrnt',
    }

    handleClick = (e) => {
        console.log('click', e);

        this.setState({
            current: e.key,
        });
    }

    renderContent() {
        const AppContent = () => {
            if (this.state.current.includes("vizibly-diffrnt")) {
                console.log(this.state.current);
                return(<iframe title="vizibly-diffrnt" src="https://viziblydiffrnt.github.io/about/" width="800" height="800"/>
                );
            } else if (this.state.current.includes("react-vis")) {
                console.log(this.state.current);
                return(<ReactVisChart/>
                );
            } else if (this.state.current.includes("tableau-vis")) {
                console.log(this.state.current);
                return(<div>Tableau Content Goes Here</div>
                // return(<iframe title="tableau" src="https://public.tableau.com/views/NYYSeasons3/NYYSeasons?:showVizHome=no&:embed=true" width="800" height="800"/>
                );
            }
        }
        return(AppContent());
    }

    render() {
        return(
            <Layout>
                <Header className="header">
                    {/* <div className="logo" /> */}
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['3']}
                        style={{ lineHeight: '64px' }}
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                    >
                        <Menu.Item disabled>{<img src={logo} className="App-logo" alt="logo"/>}</Menu.Item>
                        <Menu.Item key="vizibly-diffrnt">Vizibly Diffrnt</Menu.Item>
                        <Menu.Item key="react-vis">React-Vis</Menu.Item>
                        <Menu.Item key="tableau-vis">Tableau JS</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={300} style={{ background: '#fff' }}>
                        <BioCard/>
                    </Sider>
                    <Layout style={{ padding: '1px 1px 1px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.current}</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 0, margin: 0, minHeight: 280 }}>
                            {this.renderContent()}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default Canvas;