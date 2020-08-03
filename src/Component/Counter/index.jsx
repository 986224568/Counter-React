import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state={value:0 , groupSize:0}
    }

    onIncrease = () => {
        this.setState((prevState) => ({
            value : prevState.value + 1,
            
        }));
        this.props.onIncrease()
    }

    onDecrease = () => {
        this.setState((prevState) => ({
            value : prevState.value - 1
        }));
        this.props.onDecrease()
    }

    static getDerivedStateFromProps(props,state) {
        if(props.groupSize !== state.groupSize) {
            return {
                value : 0,
                groupSize : props.groupSize
            }
        }
        return null;
    }

    render() {
        return (
            <div>
                <button onClick={this.onDecrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.onIncrease}>+</button>
            </div>
        );
    }
}

export default Counter;