import React from "react";
import tableau from "tableau-api";

class TableauTest extends React.Component{
    initTableau() {
        const vizUrl = "https://public.tableau.com/profile/mj.326#!/vizhome/NYYSeasons3/NYYSeasons?:embed=y&:display_count=yes";

        const options = {
            hideTabs: true,
            width: "700px",
            height: "800px",
            onFirstInteractive: () => {
                console.log("it worked");
            }
        };
        this.viz = new window.tableau.Viz(this.container, vizUrl, options);
    }

    render() {
        return <div ref={c => (this.container=c)}
        style={{position: "absolute", left:-275, top:-375}}/>;
    }

    componentDidMount() {
        this.initTableau();
    }
}

export default TableauTest;