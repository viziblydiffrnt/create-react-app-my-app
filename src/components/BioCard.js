import React, { Component } from "react";
import { Card, Icon, Avatar, Button} from 'antd';

const { Meta } = Card;

class BioCard extends Component{
	render() {
		return(
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
					description={<a href="https://viziblydiffrnt.github.io" target="_blank" rel="noopener noreferrer">Check out my page at viziblydiffrnt.github.io</a>}
				/>
			</Card> 
		);
	}
}

export default BioCard;