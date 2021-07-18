import React, { Component } from 'react'
import Star from "./Star";

class StarRating extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            totalStar: 5,
            totalSelected: 0
        }
    }
    

    render() {
        const {totalStar} = this.state;
        const {ratings} = this.props;
        return (
          <div>
            {[...Array(totalStar)].map((star,i) => (
              i < ratings? <Star selected={true} key={i}/> : <Star selected={false} key={i}/>
            ))}
          </div>
        );
    }
}

export default StarRating;
