import React from "react";
import tableau from "tableau-api";

class Tableau extends React.Component{
	initTableau() {
		const vizUrl = 'https://public.tableau.com/views/NYYSeasons3/NYYSeasons?:embed=y&:display_count=yes';

		const options = {
			hideTabs: true,
			width: "1200px",
			height: "800px",
			onFirstInteractive: () => {
				console.log("it worked");
			}
		};
		this.viz = new window.tableau.Viz(this.container, vizUrl, options);
	}

	render() {
        return <div 
            ref={c => (this.container=c)}
			// style={{position: "absolute", left:-275, top:-375}}
            />;
	}

	componentDidMount() {
		this.initTableau();
	}
}

class TableauTest extends React.Component {
	render() {
		return(
            <Tableau/>
		);
	}
}

export default TableauTest;