import React from 'react';
import Counter from '../Counter';

class CounterGroup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {groupSize : 0, TotalValue : 0}
    }

    handleResize = (event) => {
        this.setState({
            value: !event.target.value ? 0 : parseInt(event.target.value) >= 0 ? parseInt(event.target.value) : 0,
            TotalValue: 0
        })
    }
    
    handleOnIncrease = () => {
        this.setState((prevState) => ({
            TotalValue : prevState.TotalValue + 1
        }));
    }

    handleOnIncrease = () => {
        this.setState((prevState) => ({
            TotalValue : prevState.TotalValue + 1
        }));
    }

    handleOnDecrease = () => {
        this.setState((prevState) => ({
            TotalValue : prevState.TotalValue - 1
        }));
    }

    render() {
        const initArray = [...Array(this.state.groupSize).keys()];
        return <div>
            <label>
                GroupSize:
                <input onBlur = {this.handleResize} defaultValue = {0}></input>
            </label>
            <br></br>
            <label>
                TotalValue : {this.state.TotalValue}
            </label>
            {
                initArray.map(key => <Counter groupSize = {this.state.groupSize} onIncrease = {this.handleOnIncrease} onDecrease = {this.handleOnDecrease} key = {key}/>)
            }
        </div>
    }

}

export default CounterGroup;