import React, { Component } from "react";

class Header extends Component {
    constructor() {
        super();
        this.state = {}
        this.keyOne = React.createRef();
        this.keyTwo = React.createRef();
        this.keyThree = React.createRef();
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(e) {
        const nodes = [this.keyOne, this.keyTwo, this.keyThree];
        nodes.forEach(node => node.current.classList.remove("CurrentTheme"));
        e.target.classList.add("CurrentTheme");
        const theme = e.target.dataset.theme;
        this.props.appTheme.current.className = "App";
        this.props.appTheme.current.classList.add(theme);
    }
    render() {
        return (
            <header className="Header">
                <div className="Logo">
                    <h1>calc</h1>
                </div>
                <div className="Themes">
                    <div className="ThemeText">
                        <p>Theme</p>
                    </div>
                    <div className="ToggleThemes">
                        <div className="Toggle">
                            <div className="ToggleKey KeyOne CurrentTheme" data-theme="ThemeOne" onClick={this.handleClick} ref={this.keyOne}></div>
                            <div className="ToggleKey KeyTwo" data-theme="ThemeTwo" onClick={this.handleClick} ref={this.keyTwo}></div>
                            <div className="ToggleKey KeyThree" data-theme="ThemeThree" onClick={this.handleClick} ref={this.keyThree}></div>
                        </div>
                    </div>
                </div>
          </header>

        )
    }
}

export default Header;