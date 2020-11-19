import React from 'react'

class Cell extends React.Component {
  costructor(props){
    super(props)
    this.state = {
      color: this.props.value
          
    }
  
  render = () => {
    <div className = 'cell' style = {{backgroundColor: this.state.color}}
  }
  } 
}