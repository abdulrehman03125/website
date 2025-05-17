import React, { useState } from "react";
import { Table, Input, Button, Dropdown, Menu, Tag } from "antd";
import { ChevronDown, MoreVertical } from "lucide-react";


const { Search } = Input;

const data = [
  {
    id: 1,
    name: "Farmer - Altaf Khan",
    phone: "+92-3123456789",
    location: "Location here",
    area: 5,
    status: "Active",
  },
  {
    id: 2,
    name: "Dealer - Allah Dita",
    phone: "+92-3123456789",
    location: "Location here",
    area: 8,
    status: "Inactive",
  },
  {
    id: 3,
    name: "Farmer - Malik Zahoor",
    phone: "+92-3123456789",
    location: "Location here",
    area: 4,
    status: "Active",
  },
  {
    id: 4,
    name: "Farmer - Shujad Khan",
    phone: "+92-3123456789",
    location: "Location here",
    area: 9,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Dealer - Agri Mart",
    phone: "+92-3123456789",
    location: "Location here",
    area: 3,
    status: "Active",
  },
  {
    id: 6,
    name: "Farmer - Sarmad Bhutta",
    phone: "+92-3123456789",
    location: "Location here",
    area: 7,
    status: "Inactive",
  },
  {
    id: 7,
    name: "Dealer - Agri Mart",
    phone: "+92-3123456789",
    location: "Location here",
    area: 3,
    status: "Active",
  },
];

const statusTag = (status) => (
  <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
);

const actionMenu = (
  <Menu>
    <Menu.Item key="1">Edit</Menu.Item>
    <Menu.Item key="2">Delete</Menu.Item>
  </Menu>
);

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Area",
    dataIndex: "area",
    key: "area",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: statusTag,
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Dropdown overlay={actionMenu} trigger={["click"]}>
        <MoreVertical className="cursor-pointer" />
      </Dropdown>
    ),
  },
];

const FarmersTable = () => {
  const [searchText, setSearchText] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <Search
          placeholder="Search"
          onSearch={setSearchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="max-w-xs"
        />
        <div className="flex gap-2">
          <Button>State <ChevronDown size={16} /></Button>
          <Button>District <ChevronDown size={16} /></Button>
          <Button>Area <ChevronDown size={16} /></Button>
          <Button type="primary" className="bg-black text-white">Import</Button>
          <Button>Export</Button>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={{ pageSize: 7 }}
      />
    </div>
  );
};

export default FarmersTable;
