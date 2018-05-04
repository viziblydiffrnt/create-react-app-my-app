import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryTooltip, VictoryLabel } from 'victory';
import { Button } from 'antd';


const data2012 = [
	{quarter: 1, earnings: 13000},
	{quarter: 2, earnings: 16500},
	{quarter: 3, earnings: 14250},
	{quarter: 4, earnings: 19000}
];
  
const data2013 = [
	{quarter: 1, earnings: 15000},
	{quarter: 2, earnings: 12500},
	{quarter: 3, earnings: 19500},
	{quarter: 4, earnings: 13000}
];
  
const data2014 = [
	{quarter: 1, earnings: 11500},
	{quarter: 2, earnings: 13250},
	{quarter: 3, earnings: 20000},
	{quarter: 4, earnings: 15500}
];
  
const data2015 = [
	{quarter: 1, earnings: 18000},
	{quarter: 2, earnings: 13250},
	{quarter: 3, earnings: 15000},
	{quarter: 4, earnings: 12000}
];


export default class Victory extends Component {

   constructor(props) {
       super(props);
       this.state = {
           isHorizontal: false,
       };
   }

    handleClick = (e) => {
        console.log('click',e);

        this.setState({
            isHorizontal: !this.state.isHorizontal,
        });
    }

	render() {
		return(
			<div className='outer-div'>
				<div className='inner-div'>
					<VictoryChart 
                        theme={VictoryTheme.material}
                        horizontal={this.state.isHorizontal}
						domainPadding={20}
					>
						<VictoryLabel text="Built Using Victory" x={175} y={30} textAnchor="middle"/>
						<VictoryAxis
                            tickValues={[1,2,3,4]}
                            dependentAxis={this.state.isHorizontal}
							tickFormat={["Q1", "Q2", "Q3", "Q4"]}
						/>
						<VictoryAxis
							dependentAxis={!this.state.isHorizontal}
							tickFormat={(x) => (`$${x / 1000}k`)}
						/>
						<VictoryStack
							colorScale={"warm"}
						>
							<VictoryBar
                                data={data2012}
								x="quarter"
                                y="earnings"
                                horizontal={this.state.isHorizontal}
                                labelComponent={<VictoryTooltip/>}
								labels={(d) => (`Q${d.x} 2012: $${d.y}`)}
								animate={{
									duration: 20,
									onLoad: {duration: 10}
								}}
							/>
							<VictoryBar
								data={data2013}
								x="quarter"
                                y="earnings"
                                horizontal={this.state.isHorizontal}
								labelComponent={<VictoryTooltip/>}
								labels={(d) => (`Q${d.x} 2013: $${d.y}`)}
								animate={{
									duration: 20,
									onLoad: {duration: 10}
								}}
							/>
							<VictoryBar
								data={data2014}
								x="quarter"
                                y="earnings"
                                horizontal={this.state.isHorizontal}
								labelComponent={<VictoryTooltip/>}
								labels={(d) => (`Q${d.x} 2014: $${d.y}`)}
								animate={{
									duration: 20,
									onLoad: {duration: 10}
								}}
							/>
							<VictoryBar
								data={data2015}
								x="quarter"
                                y="earnings"
                                horizontal={this.state.isHorizontal}
								labelComponent={<VictoryTooltip/>}
								labels={(d) => (`Q${d.x} 2015: $${d.y}`)}
								animate={{
									duration: 20,
									onLoad: {duration: 10}
								}}
							/>
						</VictoryStack>
					</VictoryChart>
					<Button onClick={this.handleClick}>Click to Change Orientation</Button>
				</div>
			</div>
		);
	}
}   