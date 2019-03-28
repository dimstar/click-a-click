import React, { Component } from 'react';// eslint-disable-line

class Listitem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            upsidedown: false,
        };
    }

    buildImageStyle = (image_item) => {
        let style = {
            backgroundImage: `url("${image_item.img}")`,
            minWidth: '230px',
            minHeight: '230px',
            transform: (this.state.upsidedown) ? 'rotate(180deg)': '',
            filter: (this.state.upsidedown) ? 'invert(100%)': '',
        }
        return style;
    }

    upsideDown = (in_upsidedown) => (in_upsidedown) ? 'upside-down' : '';
    
    componentDidUpdate(){
        setTimeout(()=>{
            if(this.props.upsidedown !== this.state.upsidedown){
                this.setState({upsidedown: this.props.upsidedown});
            }
        }, 300);
        
        console.log('listitem prop', this.props.upsidedown);
        console.log('listitme state', this.state.upsidedown);
    }

    render(){
        console.log(this.state)
        return (
            <div className="list-wrapper row w-100">
                {this.props.images.map( ( curr_image, i ) => {
                    return <div 
                            onClick={this.props.makeGuess} 
                            id={curr_image.id} 
                            key={curr_image.id} 
                            className={`card col-md-3 col-sm-2 col-xs-1`} 
                            style={this.buildImageStyle(curr_image)}
                          ></div>
                })}
            </div>
        )
    }
}

export default Listitem;