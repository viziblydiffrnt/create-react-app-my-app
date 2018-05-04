import { OrdinalFrame } from 'semiotic';
import React, { Component } from 'react';

class SemioticVisChart extends Component {
	render() {

		const axis = {
			orient: "left",
			tickFormat: d => d,
			label: {
				name: "axis label",
				position: { anchor: "middle" },
				locationDistance: 40
			}
		}

		const data = [{"funnelKey":"#00a2ce","stepName":"visits","stepValue":1000},{"funnelKey":"#00a2ce","stepName":"registration","stepValue":900},{"funnelKey":"#00a2ce","stepName":"mop","stepValue":500}]
  
		return (

			<div className="outer-div">
				<div className="inner-div">
					<OrdinalFrame
						size={[ 600,600 ]}
						data={data}
						axis={axis}
						rExtent={{
							onChange: d => {
								this.setState({ rExtent: d })
							}
						}}
						oExtent={{
							onChange: d => {
								this.setState({ oExtent: d })
							}
						}}
						projection={'vertical'}
						type={'bar'}
        
        
        
						oLabel={true}
						oPadding={20}
						oAccessor={d => d.stepName}
						rAccessor={'stepValue'}
        
						style={d => {return { fill: d.funnelKey, stroke: 'black' }}}
						hoverAnnotation={true}
        
						margin={{ left: 55, top: 0, bottom: 50, right: 0 }}
        
					/>
				</div>
			</div>
		);
	}
}

export default SemioticVisChart;