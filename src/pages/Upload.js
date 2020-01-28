import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

const input = `
## This is a header
<br>
# And this is a paragraph

hi there
`

class Upload extends Component {
  render() {
    return (
      <div style={{ textAlign: 'left'}}>
        <ReactMarkdown 
          source={input}
          escapeHtml={false}
        />
      </div>
    )
  }
}

export default Upload
