import React, { Component } from "react";

class Display extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <section className="Display">
                <div className="Expression"><span className={`Text ${this.props.state.animate && "animate"}`}>{this.props.state.animate ? "|" : this.props.state.formattedResult}</span></div>
            </section>  
        )
    }
}

export default Display;