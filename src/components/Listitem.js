import React, { Component } from 'react';// eslint-disable-line

const buildImageStyle = (image_item) => {
    let style = {
        backgroundImage: `url("${image_item.img}")`,
        minWidth: '230px',
        minHeight: '230px'
    }
    return style;
}

const upsideDown = (in_upsidedown) => (in_upsidedown) ? 'upside-down' : '';

const Listitem = function(props) {
        return (
            <div className="list-wrapper row w-100">
                {props.images.map( ( curr_image, i ) => {
                    return <div onClick={props.makeGuess} id={curr_image.id} key={curr_image.id} className={`card col-md-3 col-sm-2 col-xs-1 ${upsideDown(props.upsidedown)}`} style={buildImageStyle(curr_image)}></div>
                })}
            </div>
        )
}

export default Listitem;