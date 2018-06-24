import React, { Component } from 'react';
import { connect } from 'react-redux'
import MemeItem from './MemeItem'
import MyMemes from './MyMemes'
import { Form , FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      memeLimit: 10,
      text0: '',
      text1: ''
    }
  }
  render() {
    return (
      <div>
        <h1><u>Welcome to the Meme Generator!</u></h1>
        <MyMemes />
        <h4><i>Write Some Text</i></h4>
        <Form inline>
          <FormGroup>
            <ControlLabel>Top</ControlLabel>
            {' '}
            <FormControl type="text" onChange={event => this.setState({text0: event.target.value})}>

            </FormControl>
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Bottom</ControlLabel>
            {' '}
            <FormControl type="text" onChange={event => this.setState({text1: event.target.value})}>

            </FormControl>
          </FormGroup>
        </Form>
        {this.props.memes.slice(0,this.state.memeLimit).map((item,index) => {
          return(
              <MemeItem key={index} meme={item} text0={this.state.text0} text1={this.state.text1}/>
            )
        })}
        {this.props.memes.length > this.state.memeLimit?<div className="meme-button" onClick={() => this.setState({ memeLimit: this.state.memeLimit + 10})}>
          load 10 more memes...
        </div>:null}
      </div>
    );
  }
}
function mapStatetext0rops(state){
  return state;
}

export default connect(mapStatetext0rops,null)(App);
