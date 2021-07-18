import React, { Component } from 'react'
import StarRating from './StarRating';

export class Color extends Component {

    bg = ()=>{
      const hex = this.props.color.hex
      return {
        backgroundColor: `${hex}`
      }
    }

    render() {
     const {title,hex,ratings} = this.props.color;
        return (
          <div className="color">
            <div className="color-card" style={this.bg()}></div>
            <div className="color-info">
              <li>Title: {title}</li>
              <li>Hex: {hex}</li>
              <StarRating ratings={ratings} />
              <div className="actions">
                <span onClick={() => this.props.del(this.props.index)}>x</span>
              </div>
            </div>
          </div>
        );
    }
}


export default Color
