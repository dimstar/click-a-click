import React from 'react';// eslint-disable-line
// import moment from 'moment';

class TimeKeeper extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: props.time
        }

        this.countDown = this.countDown.bind(this);
    }

    componentDidMount(){
        setTimeout( this.countDown, 1000, this.state.time);
    };

    countDown(counter){
        counter--;
        this.setState({
            time: counter
        });
        
        return (counter > 0) ? setTimeout( this.countDown, 1000, counter) : 0;
    }

    render(){
        return <div>{this.state.time}</div>;
    }
}

export default TimeKeeper;