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
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Paper from 'material-ui/Paper';

// Pulling icons from Ant because Material Icons don't import correctly
import { Icon } from 'antd';
import { Layout } from 'antd';

const { Content } = Layout;

const style = {
	marginRight: 20,
};

const paperStyle = {
    height: 800,
    width: 1200,
    margin: 20,
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


class BottomNav extends Component {

    state = {
        selectedIndex:0,
    };

    select = (index) => this.setState({
        selectedIndex: index,
    });


    render() {
        return(
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem 
                label="Vizibly Diffrnt"
                icon={<Icon type="home"/>}  
                style={{fontSize: 24}}  
                onClick={()=> {
                    this.select(0);
                    // this.renderContent();
                }}
            >
            </BottomNavigationItem>
            <BottomNavigationItem 
                label="React Vis"
                icon={<Icon type="line-chart"/>}    
                style={{fontSize: 24}}  
                onClick={()=> {
                    this.select(1);
                    // this.renderContent();
                }}
            >
            </BottomNavigationItem>
            <BottomNavigationItem 
                label="Tableau"
                icon={<Icon type="dot-chart"/>}    
                style={{fontSize: 24}}  
                onClick={()=> {
                    this.select(2);
                    // this.renderContent();
                }}
            >
            </BottomNavigationItem>
        </BottomNavigation>
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
                    <Content style={{background: "#fff", padding: 0, margin:0, minHeight:280}}>
                        {/* {this.renderContent()} */}
                        <Paper style={paperStyle} zDepth={3}/>
                    </Content>
					<BottomNav/>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default AppLayout;