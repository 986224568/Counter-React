import React from 'react';
import Counter from '../Counter'
import store from "../redux/store/configStore"
import {increaseCount, init} from "../redux/action/count"

class CounterGroup extends React.Component {

    constructor(props) {
        super(props)
        this.state ={value:store.getState(),size:0}
    }

    handleResize = (event) => {
        this.setState({
            size: !event.target.value ? 0 : parseInt(event.target.value)>=0 ?  parseInt(event.target.value): 0,
        })
        store.dispatch(init());
    }

    render() {
        store.subscribe(() =>{
            this.setState({
                value:store.getState()
            })
        })
        const initArray = [...Array(this.state.size).keys()];

        return (
            <div>
                <label>
                    Group Size:
                    <input onBlur={this.handleResize} defaultValue={0}></input>
                </label><br></br>
                <label>
                    Total Number: {this.state.value}
                </label>
                    {
                        initArray.map(key =><Counter count={this.state.size}   key={key}/>)
                    }
            </div>
        );
    }
}

export default CounterGroup;