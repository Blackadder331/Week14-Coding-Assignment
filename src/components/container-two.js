import React from "react";
import Counter from "./counter";

export default class ContainerTwo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counts: {},
            highestCount: 0,
            highestCountName: ''
        };
        this.countClicks = this.countClicks.bind(this);
    }

    countClicks(name) {
        this.setState(state => {
            state.counts[name]
                ? state.counts[name] += 1
                : state.counts[name] = 1;

            if (state.counts[name] > state.highestCount) {
                state.highestCount = state.counts[name];
                state.highestCountName = name;
            }
            return state;
        });
    }

    render() {
        return (
            <div style={{ maxWidth: "400px" }}>
            <h2>Rating {this.state.highestCountName}</h2>
            <Counter 
            name="⭐" 
            count={this.state.counts.one}
            action={this.countClicks}
            />
            
            <Counter 
            name="⭐⭐" 
            count={this.state.counts.two}
            action={this.countClicks}
            />
            
            <Counter 
            name="⭐⭐⭐" 
            count={this.state.counts.three}
            action={this.countClicks}
            />
            
            <Counter 
            name="⭐⭐⭐⭐" 
            count={this.state.counts.four}
            action={this.countClicks}
            />
            
            <Counter 
            name="⭐⭐⭐⭐⭐" 
            count={this.state.counts.five}
            action={this.countClicks}
            />
            </div>
        );
    }
}