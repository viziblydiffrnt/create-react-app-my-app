import React, { Component } from 'react';

// Theme Components from Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import app_theme from './app_theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// JS Based Data Viz Examples
import Victory from '../components/Victory';
import TableauTest from '../components/tableauReact';

// Layout Components from Material UIz
// import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { Card, CardActions, CardMedia, CardHeader, CardText } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Paper from 'material-ui/Paper';

// Pulling icons from Ant because Material Icons don't import correctly
import { Icon } from 'antd';
import { Layout, Menu } from 'antd';


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
				<CardActions style={{padding: "15px 0px"}}>
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
				</CardActions>
			</Card>
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
            } else if (this.state.current.includes("js-vis")) {
                console.log(this.state.current);
                return(
					<Victory/>
                );
            } else if (this.state.current.includes("tableau-vis")) {
                console.log(this.state.current);
                return(
					<TableauTest/>
                );
            }
        }
        return(AppContent());
    }

	render() {
		return(
			<MuiThemeProvider muiTheme={getMuiTheme(app_theme)}>
				<div>
					{/* <AppBar
						title={<p>{<ReactLogo/>}Experimenting with React.js</p>}
						showMenuIconButton={false}
					/> */}
					<Drawer docked={true}>
						<BioCard/>
						<Divider/>
						<br/>
						<Menu
							theme="light"
							mode="vertical-right"
							// inlineIndent={0}
							defaultSelectedKeys={['3']}
							style={{ lineHeight: '24px', textAlign: 'left'}}
							onClick={this.handleClick}
							selectedKeys={[this.state.current]}
						>
							<Menu.Item key="vizibly-diffrnt">
								<Icon type="code" style={{fontSize: 28}}/>
								Vizibly Diffrnt
							</Menu.Item>
							<Menu.Item key="js-vis">
								<Icon type="area-chart" style={{fontSize: 28}}/>
								Javascript Visualization
							</Menu.Item>
							<Menu.Item key="tableau-vis">
								<Icon type="dot-chart" style={{fontSize: 28}}/>
								Tableau Embedded
							</Menu.Item>
						</Menu>
					</Drawer>
					<Layout style={{ padding: '30px 30px 30px 120px'}}>
						<Paper style={paperStyle} zDepth={3}>
							{this.selectContent()}
						</Paper>
					</Layout>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default AppLayout;