import React from "react";
import { Input } from "antd";

const Search = Input.Search;

export const TitleSearch = ({ onSearch, ...props }) => (
  <div {...props}>
    <Search
      placeholder="Enter Title"
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  </div>
);
