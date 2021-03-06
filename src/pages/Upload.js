import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './markdown/code-block'

import '../css/markdown.css'

const input = `
# Publish your Status Podcasts!

Follow the steps below to make your podcast public.

<br/>

## How can I publish my Status podcasts?
* Create a podcast channel on SoundCloud, iTunes, SimpleCast, or any platform supporting [RSS](https://en.wikipedia.org/wiki/RSS).
* Below are instructions for [SoundCloud](https://soundcloud.com/).
  - Create a podcast and set up your podcast's [RSS feed](https://help.soundcloud.com/hc/en-us/articles/115003570048-Setting-up-your-podcast-s-RSS-feed).
  - [Add tracks](https://help.soundcloud.com/hc/en-us/articles/115003451347) to the RSS feed.
  - Send the URL of your RSS Feed to \`jinho@status.im\` (e.g., https://feeds.soundcloud.com/users/soundcloud:users:741837922/sounds.rss).
  - The RSS should contain at least 1 episode.

<br/>

## I want to submit a pull request adding my podcasts to this website

* You can submit a pull request to this [repository](https://github.com/status-im/status-media) in accordance with the format below.

\`\`\`js
# src/data/podcasts.js

export const podcasts = [
  {
    category: 'general',
    name: 'Everything Status',
    link: 'https://feeds.soundcloud.com/users/soundcloud:users:741837922/sounds.rss',
    img:
      '{img URL}',
    featured: []
  },
  ...
\`\`\`

<br/>

## Known issues

- There is an issue with playing HTML5 audio on iOS. It doesn't work in the background mode and cannot control the volume.
- Doesn't work in IE

<br/>
<br/>

# Contact us

- Status: https://join.status.im/chat/public/status

- Discord: https://discord.gg/TtyPAWm

- Email: jinho@status.im

<br/>
<br/>
<br/>
<br/>
<br/>
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
