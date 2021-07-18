import React, { Component } from 'react'

class AddColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      hex: "#000000",
      ratings: 0
    };

    
    
  }
  getTitle = (e) => {
    this.setState({
      title: e.target.value,
      ratings: 2+parseInt((Math.random()*3))
    });
  };
  getHex = (e) => {
    this.setState({
      hex: e.target.value
    });
  };

  

  render() {
    return (
      <div className="form">
        <form onSubmit={(e)=>this.props.getColor(e,this.state,this.refs)}>
          <input
            type="text"
            placeholder="enter the color title"
            ref = "_title"
            value={this.state.color}
            onChange={this.getTitle}
            required
          />
          <input
            type="color"
            placeholder="enter the hex value"
            ref="_hex"
            value={this.state.hex}
            onChange={this.getHex}
            required
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddColor;
