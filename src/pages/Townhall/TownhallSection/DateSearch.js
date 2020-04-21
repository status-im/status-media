import React from "react";
import { Input } from "antd";

const { Search } = Input;

export const DateSearch = ({ onSearch, ...props }) => (
  <div {...props}>
    <Search
      placeholder="Enter Date"
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  </div>
);
