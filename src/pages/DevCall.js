import React, { Component } from 'react'
import DevCallSection from "./DevCall/DevCallSection/DevCallSection";
import 'antd/lib/button/style/index.css';
import 'antd/lib/menu/style/index.css';
import 'antd/lib/dropdown/style/index.css';
import 'antd/lib/icon/style/index.css';
import 'antd/lib/table/style/index.css';
import 'antd/lib/tag/style/index.css';
import 'antd/lib/input/style/index.css';


class DevCall extends Component {
  render() {
    return (
      <div style={{marginBottom: '150px'}}>
         <DevCallSection />
      </div>
    )
  }
}

export default DevCall
