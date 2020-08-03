import React from 'react';
import Counter from '../Counter'

class CounterGroup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {size:0, total:0};
    }

    handleResize = (event) => {
        this.setState({
            size: !event.target.value ? 0 : parseInt(event.target.value)>=0 ?  parseInt(event.target.value): 0,
            total: 0
        })
        
    }

    handleOnIncreate = () => {
        this.setState((prevState) => ({
            total : prevState.total + 1
        }));
    }

    handleOnDecreate = () =>{
        this.setState((prevState) => ({
            total : prevState.total - 1
        }));
    }

    render() {
        const initArray = [...Array(this.state.size).keys()];

        return (
            <div>
                <label>
                    Group Size:
                    <input onBlur={this.handleResize} defaultValue={0}></input>
                </label><br></br>
                <label>
                    Total Number: {this.state.total}
                </label>
                    {
                        initArray.map(key => <Counter onIncrease={this.handleOnIncreate} onDecrease={this.handleOnDecreate} key = {key} groupSize={this.state.size} />)
                    }
            </div>
        );
    }
}

export default CounterGroup;