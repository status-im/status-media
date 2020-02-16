import React from "react";
import Table from "antd/lib/table";

import Button from "antd/lib/button";


import { actionService } from "./townhallService";

const TownhallTable = ({ townhallData }) => {
  const tableColumns = [
    {
      title: "ID",
      width: '10%',
      dataIndex: "key",
      key: "id",
      sorter: (a, b) => a.key - b.key,
      defaultSortOrder: 'descend',
    },
    {
      title: "Title",
      width: '30%',
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "Slides",
      key: "slide",
      render: (text, record) => (
        <Button type="" onClick={() => handleSlideAction(record)}>
          View
        </Button>
      )
    },
    {
      title: "Watch",
      key: "action",
      render: (text, record) => (
        <Button type="primary" onClick={() => handleWatchAction(record)}>
          Watch
        </Button>
      )
    }
  ];

  const handleSlideAction = currentEvent => {
    console.log(currentEvent)
    window.open(currentEvent.slides, "_blank")
  };

  const handleWatchAction = currentEvent => {
    console.log(currentEvent)
    window.open(currentEvent.url, "_blank")
  };

  return <Table dataSource={townhallData} columns={tableColumns} pagination={false} scroll={{ y: 400 }}/>;
};

export { TownhallTable };
