import React, { Component } from 'react';
import Color from './Color'

class DisplayColor extends Component {
    render() {
        return <div className="color-list">{this.props.colors.map((color,i)=> <Color key={i} index={i} color={color} del={this.props.del} edit={this.props.edit}/>)}</div>
    }
}

export default DisplayColor;
