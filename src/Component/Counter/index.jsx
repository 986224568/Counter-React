import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state={value:0}
    }

    onIncrease = () => {
        this.setState((prevState) => ({
            value : prevState.value + 1,
            
        }));
        store.dispatch(increaseCount());
    }

    onDecrease = () => {
        this.setState((prevState) => ({
            value : prevState.value - 1
        }));
        store.dispatch(decreaseCount());
    }

    static getDerivedStateFromProps(props,state) {
        if(props.count !== state.count){
            state.value =0;
            state.count = props.count;    
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