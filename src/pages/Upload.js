import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './markdown/code-block'

import '../css/markdown.css'

const input = `
# Publish your Status Podcasts!

Follow the steps below to share your thoughts on The Status Network with others.

<br/>

## How can I publish my Status podcasts?
* Create a podcast channel on SoundCloud, iTunes, SimpleCast, or any platform supporting [RSS](https://en.wikipedia.org/wiki/RSS).
* Below are instructions for [SoundCloud](https://soundcloud.com/).
  - Create a channel and enable [RSS feed](https://help.soundcloud.com/hc/en-us/articles/115003570048-Setting-up-your-podcast-s-RSS-feed).
  - [Add tracks](https://help.soundcloud.com/hc/en-us/articles/115003451347) to your RSS feed.
  - Send the URL of your RSS Feed to \`jinho@status.im\` (e.g., http://feeds.soundcloud.com/users/soundcloud:users:741837922/sounds.rss).
  - The RSS should contain at least 1 episode.

<br/>

## I want to submit a pull request to add my podcasts

* Submit a pull request to this [repo](https://github.com/jinhojang6/status-podcast) and update your RSS as below.

\`\`\`js
# src/data/podcasts.js
export const podcasts = [
  {
    category: 'general',
    name: 'Everything Status',
    link: 'http://feeds.soundcloud.com/users/soundcloud:users:741837922/sounds.rss',
    img:
      'https://lh3.googleusercontent.com/W5mQLucviakmoHAFldUZbtFkTHw91vbcQk0w8o3woHEm9c4lpaMqi4cmY6bl3HmTSTnCxL5dvwwbDQa0eVGHrT16dhjEQmoAvg1Mk1Gjy-i3QtJjFRk1o5RxaWQ0BDfVn3oTntFF=w2400'
  },
  ...
\`\`\`

* Known issues

RSS parsing is very slow or doesn't work sometimes. We are going to add hard-coded RSS xmil files to fix this problem.

<br/>
<br/>
`


class Upload extends Component {
  render() {
    return (
      <div style={{ textAlign: 'left', margin: '1rem !important'}} className="result-pane markdown">
        <ReactMarkdown 
          className="result"
          source={input}
          escapeHtml={false}
          renderers={{code: CodeBlock}}
        />
      </div>
    )
  }
}

export default Upload
