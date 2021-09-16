import React, { Component } from "react";
import Header from "./Header";
import Display from "./Display";
import CalcKeys from "./CalcKeys";


class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            "formattedResult": "",
            "operand": "",
            "text": "",
            "firstValue": 0,
            "operator": null,
            "prevValue": null,
            "secondVale": null,
            "animate": true,
            "isDecimal": false
        }
        this.handleOperator = this.handleOperator.bind(this);
        this.handleOperand = this.handleOperand.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleEval = this.handleEval.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
    }
    handleEval() {
        if (this.state.firstValue) {
            this.setState((prev) => {
                const result = this.evalExpr(prev.firstValue, prev.operator, prev.operand)
                let formattedResult = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                if (`${result}`.length > 11) {
                    formattedResult = parseFloat(result).toExponential(6).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    console.log(result, formattedResult)
                }
                return {
                    "firstValue": null,
                    "operator": null,
                    "formattedResult": formattedResult,
                    "operand": result,
                    "text": ""
                }
            })
        console.log(this.state.operand)

        }
    }
    handleDel(e) {
        const newText = `${this.state.formattedResult}`.slice(0,-1);
        this.setState((prev) => {
            return {
                "formattedResult": newText.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                "operand": parseFloat(newText.replace(",", "")),
                "animate": false,
                "text": newText,
                "prevValue": prev.firstValue
            }
        })
    }
    handleReset() {
        this.setState((prev) => {
            return {
                "operand": "",
                "formattedResult": "",
                "text": "",
                "firstValue": 0,
                "operator": null,
                "prevValue": null,
                "animate": true,
            }
        })        
    }
    handleOperand(e) {
        const text = this.state.text + e.target.textContent;
        this.setState((prev) => {
            return {
                "operand": text.toString().substring(0,11),
                "formattedResult": text.toString().substring(0,11).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                "animate": false,
                "text": text,
                "prevValue": prev.firstValue
            }
        })
    }
    handleDecimal(e) {
        const text = this.state.text + e.target.textContent;
        if(!this.state.operand.includes(".")) {
            this.setState((prev) => {
                return {
                    "operand": text,
                    "formattedResult": text.toString().substring(0,11).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    "text": text
                }
            })
        }
    }
    handleOperator(e) {
        const operator = e.target.textContent;
        if (this.state.firstValue && !this.state.prevValue ) {
            this.setState((prev) => {
                return {
                    "operator": operator,
                }
            })
        }
        if (this.state.firstValue && this.state.prevValue && this.state.operand) {
            this.setState((prev) => {
                const result = this.evalExpr(prev.firstValue, prev.operator, prev.operand)
                let formattedResult = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                if (`${result}`.length > 11) {
                    formattedResult = parseFloat(result).toExponential(6).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
                    return {
                    "firstValue": result,
                    "operator": operator,
                    "operand": result,
                    "formattedResult": formattedResult,
                    "secondValue": prev.operand,
                    "prevValue": null,
                    "text": ""
                }
            })
        }
        if(!this.state.firstValue) {
            this.setState((prev) => {
                return {
                    "firstValue": prev.operand,
                    "operator": operator,
                    "prevValue": null,
                    "text": "",
                }
            })
        }
    }
    evalExpr(a,o,b) {
        const operators = {
            "+": { operation: (a, b) => a + b },
            "-": { operation: (a, b) => a - b },
            "x": { operation: (a, b) => a * b },
            "/": { operation: (a, b) => a / b },
        }
        return operators[o].operation(parseFloat(a),parseFloat(b));
    }
    render() {
        return (
           <div className="Calculator">
               <Header 
               appTheme={this.props.appTheme}
               />
               <Display 
               state={this.state}
               />
               <CalcKeys 
               handleOperator={this.handleOperator}
               handleOperand={this.handleOperand}
               handleDecimal={this.handleDecimal}
               handleDel={this.handleDel}
               handleReset={this.handleReset}
               handleEval={this.handleEval}
               />
           </div>
        )
    }
}

export default Calculator;
