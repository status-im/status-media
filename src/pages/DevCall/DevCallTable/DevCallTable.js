import React from "react";
import Table from "antd/lib/table";

import Button from "antd/lib/button";

const DevCallTable = ({ devCallData }) => {
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
      title: "Date (YYYY-MM-DD)",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "Notes",
      key: "notes",
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
    window.open(currentEvent.notes, "_blank")
  };

  const handleWatchAction = currentEvent => {
    console.log(currentEvent)
    window.open(currentEvent.url, "_blank")
  };

  return <Table dataSource={devCallData} columns={tableColumns} pagination={false}/>;
};

export { DevCallTable };
