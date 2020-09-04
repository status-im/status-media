import React, { Component } from "react";
import { connect } from 'react-redux'
import styles from "./style.module.css";
import { DevCallTable } from "../DevCallTable";
import { DateSearch } from "./DateSearch";

const devCallData = [
  {
    key: 1,
    title: "Status Core Dev Call #1 - August 6, 2018",
    date: "2018-08-06",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting01.md",
    url: "https://youtu.be/P_jo4Y39tRk"
  },
  {
    key: 2,
    title: "Status Core Dev Call #2 - August 20, 2018",
    date: "2018-08-20",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting02.md",
    url: "https://youtu.be/4r-F9SkriEo"
  },
  {
    key: 3,
    title: "Status Core Dev Call #3 - September 3, 2018",
    date: "2018-09-08",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting03.md",
    url: "https://youtu.be/Mb58gDHWFIg"
  },
  {
    key: 4,
    title: "Status Core Dev Call #4 - September 17, 2018",
    date: "2018-09-17",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting04.md",
    url: "https://youtu.be/p01rnaEc3B0"
  },
  {
    key: 5,
    title: "Status Core Dev Call #5 - October 1, 2018",
    date: "2018-10-01",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting05.md",
    url: "https://youtu.be/86vSfFnZcmA"
  },
  {
    key: 6,
    title: "Status Core Dev Call #6 - October 15, 2018",
    date: "2018-10-15",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting06.md",
    url: "https://youtu.be/YLkk3lqf_XI"
  },
  {
    key: 7,
    title: "Status Core Dev Call #7 - November 19, 2018",
    date: "2018-11-19",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting07.md",
    url: "https://youtu.be/mOeUN_T4So4"
  },
  {
    key: 8,
    title: "Status Core Dev Call #8 - December 3, 2018",
    date: "2018-12-03",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting08.md",
    url: "https://youtu.be/hTOuWU4Qpqo"
  },
  {
    key: 9,
    title: "Status Core Dev Call #9 - December 17, 2018",
    date: "2018-12-17",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting09.md",
    url: "https://youtu.be/HVylXrDBJHg"
  },
  {
    key: 10,
    title: "Status Core Dev Call #10 - January 14, 2019",
    date: "2019-01-14",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting10.md",
    url: "https://youtu.be/4vWaqa38Hrs"
  },
  {
    key: 11,
    title: "Status Core Dev Call #11 - January 28, 2019",
    date: "2019-01-28",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting11.md",
    url: "https://youtu.be/t8e3Qnhf-LU"
  },
  {
    key: 12,
    title: "Status Core Dev Call #12 - February 11, 2019",
    date: "2019-02-11",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting12.md",
    url: "https://youtu.be/M-Gbp3e_h1g"
  },
  {
    key: 13,
    title: "Status Core Dev Call #13 - February 23, 2019",
    date: "2019-02-23",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting13.md",
    url: "https://youtu.be/OpcDsFkEqpc"
  },
  {
    key: 14,
    title: "Status Core Dev Call #14 - March 11, 2019",
    date: "2019-03-11",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting14.md",
    url: "https://youtu.be/EsxP4DBGzLw"
  },
  {
    key: 15,
    title: "Status Core Dev Call #15 - March 25, 2019",
    date: "2019-03-25",
    notes: "https://github.com/status-im/pm/blob/master/notes/meeting15.md",
    url: "https://youtu.be/qgWoiKyw4VM"
  },
  {
    key: 16,
    title: "Status Core Dev Call #16 - April 8, 2019",
    date: "2019-04-08",
    notes: "https://notes.status.im/core-dev-call-16",
    url: "https://youtu.be/q48NP4pJo48"
  },
  {
    key: 28,
    title: "Status Core Dev Call #28 - Apr 20, 2020",
    date: "2020-04-28",
    notes: "https://notes.status.im/core-dev-call-28#",
    url: "https://www.youtube.com/watch?v=pvswK5dR1mc"
  },
  {
    key: 29,
    title: "Status Core Dev Call #29 - May 4, 2020",
    date: "2020-05-04",
    notes: "https://notes.status.im/core-dev-call-29-notes",
    url: "https://youtu.be/g4N_2AFVj9c"
  },
  {
    key: 30,
    title: "Status Core Dev Call #30 - May 18, 2020",
    date: "2020-05-18",
    notes: "https://notes.status.im/core-dev-call_30",
    url: "https://youtu.be/B3eqK_RvcH0"
  },
  {
    key: 31,
    title: "Status Core Dev Call #31 - June 1, 2020",
    date: "2020-06-01",
    notes: "https://notes.status.im/core-dev-call_31#",
    url: "https://youtu.be/yEKMJ1cdfRg"
  },
  {
    key: 32,
    title: "Status Core Dev Call #32 - June 15, 2020",
    date: "2020-06-15",
    notes: "https://notes.status.im/core-dev-call_32#",
    url: "https://youtu.be/EVUWyO7IzhM"
  },
  {
    key: 33,
    title: "Status Core Dev Call #33 - June 29, 2020",
    date: "2020-06-29",
    notes: "https://notes.status.im/core-dev-call_33",
    url: "https://youtu.be/czW_lvr6h7c"
  },
  {
    key: 34,
    title: "Status Core Dev Call #34 - Aug 24, 2020",
    date: "2020-08-24",
    notes: "https://notes.status.im/core-dev-call_34",
    url: "https://youtu.be/j6pmv3-q9YQ"
  },
];

class DevCallSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devCallData
    };
  }

  handleFilter = key => {
    const selected = parseInt(key);
    if (selected === 3) {
      return this.setState({
        devCallData
      });
    }

    const statusMap = {
      1: "complete",
      2: "inProgress"
    };

    const selectedStatus = statusMap[selected];

    const filteredEvents = devCallData.filter(
      ({ status }) => status === selectedStatus
    );
    this.setState({
      devCallData: filteredEvents
    });
  };

  handleSearch = searchText => {
    const filteredEvents = devCallData.filter(({ date }) => {
      return date.includes(searchText);
    });

    this.setState({
      devCallData: filteredEvents
    });
  };

  render() {
    const { theme } = this.props;
    return (
      <section className={styles.container}>
        <header className={styles.header}>
          <h1 className={`devcall-title ${theme}`}>Status Core Dev Meetings</h1>
          <DateSearch onSearch={this.handleSearch} className="devcall-title-search" />
          </header>
          <DevCallTable devCallData={this.state.devCallData} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.settings.theme
})

export default connect(
  mapStateToProps,
)( DevCallSection )
