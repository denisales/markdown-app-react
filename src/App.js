import React, { Component } from 'react';
import MarkdownEditor from './components/markdown-editor'
import marked from 'marked'
import hljs from 'highlight.js'
import './App.css'

marked.setOptions({
  highlight: function(code) {
    return hljs.highlightAuto(code).value
  }
})

class App extends Component {

  constructor() {
    super()

    this.state = {
      value: ''
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleChange = (e) => {
      this.setState({ value: e.target.value })
    }
  }

  render() {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
      />
    )
  }
}

export default App;
