import React, { Component } from 'react';
import logo from '../logo.svg';

// Theme Components from Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import app_theme from './app_theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ReactVisChart from '../components/ReactVis';

// Layout Components from Material UIz
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { Card, CardActions, CardMedia, CardHeader, CardText } from 'material-ui/Card';
// import Avatar from 'material-ui/Avatar';
// import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Paper from 'material-ui/Paper';

// Pulling icons from Ant because Material Icons don't import correctly
import { Icon } from 'antd';
import { Layout, Menu } from 'antd';

const { Content } = Layout;

const style = {
	marginRight: 20,
};

const paperStyle = {
	height: 800,
	width: 1200,
	marginLeft: 250,
	textAlign: 'center',
	display: 'inline-block',
};

class BioCard extends Component {
	render() {
		return(
			<Card>
				<CardMedia>
					<img alt="cover" src="https://viziblydiffrnt.github.io/assets/images/viz_dif_header.jpg"/>
				</CardMedia>
				<CardHeader
					title="Mark Jacobson"
					avatar="https://viziblydiffrnt.github.io/assets/images/about.JPG">
				</CardHeader>
				<CardText>Check out my page {<a target="_blank" rel="noopener noreferrer" href="https://viziblydiffrnt.github.io">https://viziblydiffrnt.github.io</a>} </CardText>
				<CardActions>
					<FloatingActionButton 
						mini={true}
						style={style} 
						href="https://twitter.com/ViziblyDiffrnt"
						target="_blank"
						backgroundColor={"#fffff"}>
						<Icon type="twitter" style={{color:'#0084b4'}}/>
					</FloatingActionButton>

					<FloatingActionButton 
						mini={true} 
						style={style} 
						href="https://github.com/viziblydiffrnt"
						target="_blank"
						backgroundColor={"#fffff"}>
						<Icon type="github" style={{color:'#000'}}/>
					</FloatingActionButton>

					<FloatingActionButton 
						mini={true} 
						style={style} 
						href="https://linkedin.com/in/markajacobson"
						target="_blank"
						backgroundColor={"#fffff"}>
						<Icon type="linkedin" style={{color:'#0077B5'}}/>
					</FloatingActionButton>

					{/* <Icon type="twitter" style={{color:'#0084b4'}}/>
					<Icon type="github" style={{color:'#000'}}/>
					<Icon type="linkedin" style={{color:'#0077B5'}}/> */}
				</CardActions>
			</Card>
		);
	}
}

class ReactLogo extends Component {
	render() {
		return(
			<img src={logo} className="App-logo" alt="logo"/>
		);
	}
}

class AppLayout extends Component {

	state = {
        current: 'vizibly-diffrnt',
    }

    handleClick = (e) => {
        console.log('click', e);

        this.setState({
            current: e.key,
        });
    }

    selectContent() {
        const AppContent = () => {
            if (this.state.current.includes("vizibly-diffrnt")) {
                console.log(this.state.current);
                return(<iframe title="vizibly-diffrnt" src="https://viziblydiffrnt.github.io/about/" width="1200" height="800"/>
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
			<MuiThemeProvider muiTheme={getMuiTheme(app_theme)}>
				<div>
					<AppBar
						title={<p>{<ReactLogo/>}Experimenting with React.js</p>}
						showMenuIconButton={false}
                        
					/>
					<Drawer docked={true}>
						<BioCard/>
					</Drawer>
					<Layout style={{ padding: '30px 30px 30px 120px'}}>
						<Paper style={paperStyle} zDepth={3}>
							{/* <ReactVisChart className="center-chart"/> */}
							{this.selectContent()}
						</Paper>
					</Layout>
					<br/>
					<div>
					<Menu
						theme="light"
						mode="horizontal"
						defaultSelectedKeys={['3']}
						style={{ lineHeight: '24px', marginLeft: 725 }}
						onClick={this.handleClick}
						selectedKeys={[this.state.current]}
					>
						<Menu.Item key="vizibly-diffrnt">
						<Icon type="code" style={{fontSize: 28}}/>Vizibly Diffrnt
						</Menu.Item>
						<Menu.Item key="react-vis">
						<Icon type="area-chart" style={{fontSize: 28}}/>
						React-Vis
						</Menu.Item>
						<Menu.Item key="tableau-vis">
						<Icon type="dot-chart" style={{fontSize: 28}}/>
						Tableau JS
						</Menu.Item>
					</Menu>
						</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default AppLayout;