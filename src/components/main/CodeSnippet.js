import React from 'react';
import {
  Button,
  Fade
} from 'react-bootstrap'
import axios from 'axios'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { githubGist } from 'react-syntax-highlighter/dist/styles'


export default class Example extends React.Component {
  constructor(props){
    super(props)
    this.state = {} 
  }

  componentWillMount() {
    axios.get(`https://raw.githubusercontent.com/ubbn/react-router-examples/master/src/components/example/${this.props.fileName}`)
      .then(response =>(
      this.setState({
        code: response.data
      })
    ))
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          { this.state.open ? 'Hide code' : 'Show code'}
        </Button>
        <Fade in={this.state.open}>
          <div>
          <SyntaxHighlighter language='javascript' style={githubGist}>
            {!!this.state.code ? this.state.code : 'Loading...'}
          </SyntaxHighlighter>
          </div>
        </Fade>
      </div>
    );
  }
}
