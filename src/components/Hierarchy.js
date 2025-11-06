import { Component } from "react";

class Hierarchy extends Component{
    constructor(props){
        super(props);
        console.log("Hierarchy Constructor")
    }

    componentDidMount(){
        console.log("Heirarchy Mount")
    }

    render(){
        console.log("Hierarchy Render")
        return(
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default Hierarchy;
