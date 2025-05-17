import React from "react";
import { Table, Input, Button, Pagination, Dropdown, Menu } from "antd";
import { Search } from "lucide-react";

const { Search: AntSearch } = Input;

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Product Name",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Unit",
    dataIndex: "unit",
    key: "unit",
  },
  {
    title: "Pickup/Delivery",
    dataIndex: "delivery",
    key: "delivery",
  },
  {
    title: "Threshold Alert",
    dataIndex: "threshold",
    key: "threshold",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="edit">Edit</Menu.Item>
            <Menu.Item key="delete">Delete</Menu.Item>
          </Menu>
        }
        trigger={["click"]}
      >
        <Button className="border-none shadow-none">...</Button>
      </Dropdown>
    ),
  },
];

const data = [
  { id: 1, product: "Urea", brand: "IFFCO", category: "Nitrogen", price: "Rs. 2864", stock: 200, unit: "Kg", delivery: "Both", threshold: 50 },
  { id: 2, product: "Urea", brand: "IFFCO", category: "Nitrogen", price: "Rs. 2864", stock: 220, unit: "Kg", delivery: "Both", threshold: 20 },
  { id: 3, product: "Urea", brand: "IFFCO", category: "Nitrogen", price: "Rs. 2864", stock: 500, unit: "Kg", delivery: "Both", threshold: 80 },
  { id: 4, product: "Urea", brand: "IFFCO", category: "Nitrogen", price: "Rs. 2864", stock: 300, unit: "Kg", delivery: "Both", threshold: 100 },
  { id: 5, product: "Urea", brand: "IFFCO", category: "Nitrogen", price: "Rs. 2864", stock: 700, unit: "Kg", delivery: "Both", threshold: 30 },
  { id: 6, product: "Urea", brand: "IFFCO", category: "Nitrogen", price: "Rs. 2864", stock: 200, unit: "Kg", delivery: "Both", threshold: 70 },
  { id: 7, product: "Urea", brand: "IFFCO", category: "Nitrogen", price: "Rs. 2864", stock: 900, unit: "Kg", delivery: "Both", threshold: 30 },
  { id: 8, product: "Urea", brand: "IFFCO", category: "Nitrogen", price: "Rs. 2864", stock: 200, unit: "Kg", delivery: "Both", threshold: 70 },
];

export default function ProductsTable() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Products</h1>
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <Input className="w-60" prefix={<Search className="text-gray-400 w-4 h-4" />} placeholder="Search" />
        <Button>State</Button>
        <Button>District</Button>
        <Button>Area</Button>
        <Button type="primary">Import</Button>
        <Button>Export</Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="id"
        className="border rounded-lg"
      />
      <div className="flex justify-between items-center mt-4">
        <Button className="px-4">Previous</Button>
        <Pagination defaultCurrent={1} total={100} pageSize={10} showSizeChanger={false} />
        <Button className="px-4">Next</Button>
      </div>
    </div>
  );
}
