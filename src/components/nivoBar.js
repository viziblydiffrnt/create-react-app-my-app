import React, { Component } from 'react';
import { ResponsiveBar } from '../../node_modules/nivo/lib/components/charts/bar';

export default class NivoBar extends Component {
	render() {
		return(
			<ResponsiveBar
				data={[
                    {
                        "country": "US",
                        "state":"CA",
                        "hot dog": 191,
                        "hot dogColor": "hsl(253, 70%, 50%)",
                        "burger": 50,
                        "burgerColor": "hsl(124, 70%, 50%)",
                        "sandwich": 117,
                        "sandwichColor": "hsl(179, 70%, 50%)",
                        "kebab": 179,
                        "kebabColor": "hsl(57, 70%, 50%)",
                        "fries": 7,
                        "friesColor": "hsl(1, 70%, 50%)",
                        "donut": 120,
                        "donutColor": "hsl(333, 70%, 50%)"
                      }
                      ,
                      {
                        "country": "US",
                        "state":"NY",
                        "hot dog": 19,
                        "hot dogColor": "hsl(253, 70%, 50%)",
                        "burger": 25,
                        "burgerColor": "hsl(124, 70%, 50%)",
                        "sandwich": 11,
                        "sandwichColor": "hsl(179, 70%, 50%)",
                        "kebab": 17,
                        "kebabColor": "hsl(57, 70%, 50%)",
                        "fries": 70,
                        "friesColor": "hsl(1, 70%, 50%)",
                        "donut": 12,
                        "donutColor": "hsl(333, 70%, 50%)"
                      }
				]}
				keys={[
					"hot dog",
					"burger",
					"sandwich",
					"kebab",
					"fries",
					"donut"
				]}
				indexBy="state"
				margin={{
					"top": 50,
					"right": 130,
					"bottom": 50,
					"left": 60
				}}
				padding={0.3}
				colors="nivo"
				colorBy="id"
				defs={[
					{
						"id": "dots",
						"type": "patternDots",
						"background": "inherit",
						"color": "#38bcb2",
						"size": 4,
						"padding": 1,
						"stagger": true
					},
					{
						"id": "lines",
						"type": "patternLines",
						"background": "inherit",
						"color": "#eed312",
						"rotation": -45,
						"lineWidth": 6,
						"spacing": 10
					}
				]}
				borderColor="inherit:darker(1.6)"
				axisBottom={{
					"orient": "bottom",
					"tickSize": 5,
					"tickPadding": 5,
					"tickRotation": 0,
					// "legend": "country",
					"legendPosition": "center",
					"legendOffset": 36
				}}
				axisLeft={{
					"orient": "left",
					"tickSize": 5,
					"tickPadding": 5,
					"tickRotation": 0,
					"legend": "food",
					"legendPosition": "center",
					"legendOffset": -40
				}}
				labelSkipWidth={12}
				labelSkipHeight={12}
				labelTextColor="inherit:darker(1.6)"
				animate={true}
				motionStiffness={90}
				motionDamping={15}
				legends={[
					{
						"dataFrom": "keys",
						"anchor": "bottom-right",
						"direction": "column",
						"translateX": 120,
						"itemWidth": 100,
						"itemHeight": 20,
						"itemsSpacing": 2,
						"symbolSize": 20
					}
				]}
			/>
		);
	}
}