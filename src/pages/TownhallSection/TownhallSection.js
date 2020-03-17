import React, { Component } from "react";
import { connect } from 'react-redux'
import styles from "./style.module.css";
import { TownhallTable } from "../TownhallTable";
import { TitleSearch } from "../TitleSearch";

const townhallData = [
  {
    key: 1,
    title: "Town Hall #43 - September 30, 2019",
    date: "2019-09-30",
    slides: "https://github.com/status-im/townhall-archive/blob/master/190930%20-%20Town%20Hall.pdf",
    url: "https://youtu.be/LngpqzHSIqk?list=PLbrz7IuP1hrgu-NlZEaxatGS5slTkhZ0N"
  },
  {
    key: 2,
    title: "Town Hall #45 - October 14, 2019",
    date: "2019-10-14",
    slides: "https://github.com/status-im/townhall-archive/blob/master/191014%20-%20Town%20Hall.pdf",
    url: "https://youtu.be/uCsmLv49SFQ?list=PLbrz7IuP1hrgu-NlZEaxatGS5slTkhZ0N"
  },
  {
    key: 3,
    title: "Town Hall #46 - October 28, 2019",
    date: "2019-10-28",
    slides: "https://github.com/status-im/townhall-archive/blob/master/191028%20-%20Town%20Hall.pdf",
    url: "https://youtu.be/PMS8TttD7oU"
  },
  {
    key: 4,
    title: "Town Hall #47 - November 11, 2019",
    date: "2019-11-11",
    slides: "https://github.com/status-im/townhall-archive/blob/master/191111%20-%20Town%20Hall.pdf",
    url: "https://youtu.be/aZarpT8ck4g?list=PLbrz7IuP1hrgu-NlZEaxatGS5slTkhZ0N"
  },
  {
    key: 5,
    title: "Town Hall #48 - November 25, 2019",
    date: "2019-11-25",
    slides: "https://github.com/status-im/townhall-archive/blob/master/192511%20-%20Town%20Hall.pdf",
    url: "https://youtu.be/3989pAN_1dY?list=PLbrz7IuP1hrgu-NlZEaxatGS5slTkhZ0N"
  },
  {
    key: 6,
    title: "Town Hall End of Year: December 9, 2019",
    date: "2019-12-09",
    slides: "https://github.com/status-im/townhall-archive/blob/master/191209%20-%20Town%20Hall.pdf",
    url: "https://youtu.be/_Mpc3dVNPmw?list=PLbrz7IuP1hrgu-NlZEaxatGS5slTkhZ0N"
  },
  {
    key: 7,
    title: "Town Hall # 49 - January 20, 2020",
    date: "2020-01-20",
    slides: "https://github.com/status-im/townhall-archive/blob/master/200120%20-%20Town%20Hall.pdf",
    url: "https://youtu.be/e9m_lDeKBRc"
  },
  {
    key: 8,
    title: "Town Hall # 50 February 3, 2020 ",
    date: "2020-02-03",
    slides: "https://github.com/status-im/townhall-archive/blob/master/200203%20-%20Town%20Hall.pdf",
    url: "https://youtu.be/3JW-2ESF2qo"
  },
  {
    key: 9,
    title: "Town Hall # 51 February 17, 2020 ",
    date: "2020-02-17",
    slides: "https://github.com/status-im/townhall-archive/blob/master/200217%20-%20Town%20Hall.pdf",
    url: "https://youtu.be/rx_N6L8UQkY"
  },
  {
    key: 10,
    title: "Town Hall # 52 March 2, 2020 ",
    date: "2020-03-02",
    slides: "https://github.com/status-im/townhall-archive/blob/master/200302%20-%20Town%20Hall.pdf",
    url: "https://youtu.be/tj3T1GBrb4g"
  },
  {
    key: 11,
    title: "Town Hall # 53 March 16, 2020",
    date: "2020-03-16",
    slides: "https://github.com/status-im/townhall-archive/blob/master/200316%20-%20Town%20Hall.pdf",
    url: "https://youtu.be/kU89y-y_yiI"
  },
];

class TownhallSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      townhallData
    };
  }

  handleFilter = key => {
    const selected = parseInt(key);
    if (selected === 3) {
      return this.setState({
        townhallData
      });
    }

    const statusMap = {
      1: "complete",
      2: "inProgress"
    };

    const selectedStatus = statusMap[selected];

    const filteredEvents = townhallData.filter(
      ({ status }) => status === selectedStatus
    );
    this.setState({
      townhallData: filteredEvents
    });
  };

  handleSearch = searchText => {
    const filteredEvents = townhallData.filter(({ title }) => {
      return title.includes(searchText);
    });

    this.setState({
      townhallData: filteredEvents
    });
  };

  render() {
    const { theme } = this.props;
    return (
      <section className={styles.container}>
        <header className={styles.header}>
          <h1 className={`townhall-title ${theme}`}>Status Town Hall Meetings</h1>
          <TitleSearch onSearch={this.handleSearch} className="townhall-title-search" />
          </header>
          <TownhallTable townhallData={this.state.townhallData} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.settings.theme
})

export default connect(
  mapStateToProps,
)( TownhallSection )
