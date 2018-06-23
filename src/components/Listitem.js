import React, { Component } from 'react';// eslint-disable-line

class Listitem extends React.Component {
    constructor(props){
        super(props);
        console.log(props.images);
        this.state = {
            image_list: props.images,
            makeGuess: props.makeGuess,
        };
    }

    buildImageStyle(image_item){
        let style = {
            backgroundImage: `url("${image_item.img}")`,
            minWidth: '230px',
            minHeight: '230px'
        }
        return style;
    }

    render(){
        return (
            <div className="list-wrapper row">
                {this.state.image_list.map( ( curr_image, i )=> {
                    return <div onClick={this.state.makeGuess} id={curr_image.id} key={curr_image.id} className="card col-md-3 col-sm-2 col-xs-1" style={this.buildImageStyle(curr_image)}></div>
                })}
            </div>
        )
    }
}

export default Listitem;