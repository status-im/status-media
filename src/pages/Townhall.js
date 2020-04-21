import React, { Component } from 'react'
import TownhallSection from "./Townhall/TownhallSection/TownhallSection";
import 'antd/lib/button/style/index.css';
import 'antd/lib/menu/style/index.css';
import 'antd/lib/dropdown/style/index.css';
import 'antd/lib/icon/style/index.css';
import 'antd/lib/table/style/index.css';
import 'antd/lib/tag/style/index.css';
import 'antd/lib/input/style/index.css';


class Townhall extends Component {
  render() {
    return (
      <div style={{marginBottom: '150px'}}>
         <TownhallSection />
      </div>
    )
  }
}

export default Townhall
