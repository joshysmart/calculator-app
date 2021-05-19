import React, { Component } from "react";


class CalcKeys extends Component {
    constructor() {
        super();
        this.state={}
    }
    render() {
        return (
            <section className="CalcKeys">
                <div className="KeysCont">
                    <button className="Key NumberSeven" onClick={this.props.handleOperand}>7</button>
                    <button className="Key NumberEight" onClick={this.props.handleOperand}>8</button>
                    <button className="Key NumberNine" onClick={this.props.handleOperand}>9</button>
                    <button className="Key DelKey" onClick={this.props.handleDel}>Del</button>
                    <button className="Key NumberFour" onClick={this.props.handleOperand}>4</button>
                    <button className="Key NumberFive" onClick={this.props.handleOperand}>5</button>
                    <button className="Key NumberSix" onClick={this.props.handleOperand}>6</button>
                    <button className="Key PlusKey" onClick={this.props.handleOperator}>+</button>
                    <button className="Key NumberOne" onClick={this.props.handleOperand}>1</button>
                    <button className="Key NumberTwo" onClick={this.props.handleOperand}>2</button>
                    <button className="Key NumberThree" onClick={this.props.handleOperand}>3</button>
                    <button className="Key MinusKey" onClick={this.props.handleOperator}>-</button>
                    <button className="Key DecimalKey" onClick={this.props.handleDecimal}>.</button>
                    <button className="Key NumberZero" onClick={this.props.handleOperand}>0</button>
                    <button className="Key DivisionKey" onClick={this.props.handleOperator}>/</button>
                    <button className="Key TimesKey" onClick={this.props.handleOperator}>x</button>
                    <button className="Key ResetKey" onClick={this.props.handleReset}>Reset</button>
                    <button className="Key EqualsKey" onClick={this.props.handleEval}>=</button>
                </div>
            </section>
        )
    }
}

export default CalcKeys;