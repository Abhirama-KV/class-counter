import { Component } from "react";

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    handleIncrease = () => {
        this.setState(
            {count : this.state.count + 1}
        )
        console.log(this.state)
    }

    handleDecrease = () => {
        this.setState( 
          {  count : this.state.count - 1}
        )
        console.log(this.state.count)
    }

    render(){
        return (
            <div style={{margin:"1rem"}}>
                
               <h1 >Counter App</h1> 
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleIncrease}>Increment</button>
                <button onClick={this.handleDecrease}>Decrement</button>
            </div>
        )
    }
}