import React from 'react'

function About() {
    return (
      <React.Fragment>
        <h1 style={abouStyle}>About</h1>
        <p style={abouStyle}>
          Color app is a single page react application that takes in the name of
          a color and the hexadecimal value from a user and return the color
          proprties in the user interface with random ratings.
        </p>
        <p style={abouStyle}>color app v1.1.0</p>
      </React.Fragment>
    );
}
const abouStyle = {
    textAlign: "center",
    margin: "0.5em 0"
}
export default About;
