import React, { useState } from 'react';
import { Table, Pagination, Checkbox, Tag } from 'antd';
import { 
  Truck, 
  CheckCircle, 
  Clock, 
  Package,
  User,
  FileText,
  ShoppingCart
} from 'lucide-react';

const OrdersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Sample data - replace with your actual data source
  const orders = [
    {
      key: '1',
      orderId: 'OB012345',
      buyerType: 'Farmer',
      buyerName: 'Ali Hamza',
      products: [
        { name: 'Urea', quantity: 3 },
        { name: 'DAP', quantity: 2 }
      ],
      totalPayment: 'Rs. 5000',
      invoice: 'Rs. 4500',
      rider: 'Mohain',
      status: 'Delivered',
      startDate: '24-02-2025',
      dueDate: '24-02-2025'
    },
    {
      key: '2',
      orderId: 'OB012345',
      buyerType: 'Dealer',
      buyerName: 'Jamahed Ahmad',
      products: [
        { name: 'Urea', quantity: 3 },
        { name: 'DAP', quantity: 2 }
      ],
      totalPayment: 'Rs. 5000',
      invoice: 'Rs. 4500',
      rider: 'Mohain',
      status: 'Pending',
      startDate: '02-03-2025',
      dueDate: '02-03-2025'
    },
    {
      key: '3',
      orderId: 'OB012345',
      buyerType: 'Dealer',
      buyerName: 'Rana Farooq',
      products: [
        { name: 'Urea', quantity: 3 },
        { name: 'DAP', quantity: 2 }
      ],
      totalPayment: 'Rs. 5000',
      invoice: 'Rs. 4500',
      rider: 'Mohain',
      status: 'Out for delivery',
      startDate: '04-03-2025',
      dueDate: '04-03-2025'
    },
    {
      key: '4',
      orderId: 'OB012345',
      buyerType: 'Farmer',
      buyerName: 'Sharjhel Khan',
      products: [
        { name: 'Urea', quantity: 3 },
        { name: 'DAP', quantity: 2 }
      ],
      totalPayment: 'Rs. 5000',
      invoice: 'Rs. 4500',
      rider: 'Mohain',
      status: 'Completed',
      startDate: '12-03-2025',
      dueDate: '12-03-2025'
    },
    {
      key: '5',
      orderId: 'OB012345',
      buyerType: 'Dealer',
      buyerName: 'Javed Hussain',
      products: [
        { name: 'Urea', quantity: 3 },
        { name: 'DAP', quantity: 2 }
      ],
      totalPayment: 'Rs. 5000',
      invoice: 'Rs. 4500',
      rider: 'Mohain',
      status: 'Out for delivery',
      startDate: '08-03-2025',
      dueDate: '08-03-2025'
    },
    {
      key: '6',
      orderId: 'OB012345',
      buyerType: 'Farmer',
      buyerName: 'Jamahed Ahmad',
      products: [
        { name: 'Urea', quantity: 3 },
        { name: 'DAP', quantity: 2 }
      ],
      totalPayment: 'Rs. 5000',
      invoice: 'Rs. 4500',
      rider: 'Mohain',
      status: 'Completed',
      startDate: '08-03-2025',
      dueDate: '08-03-2025'
    },
    {
      key: '7',
      orderId: 'OB012345',
      buyerType: 'Farmer',
      buyerName: 'Rana Farooq',
      products: [
        { name: 'Urea', quantity: 3 },
        { name: 'DAP', quantity: 2 }
      ],
      totalPayment: 'Rs. 5000',
      invoice: 'Rs. 4500',
      rider: 'Mohain',
      status: 'Completed',
      startDate: '08-03-2025',
      dueDate: '08-03-2025'
    },
    {
      key: '8',
      orderId: 'OB012345',
      buyerType: 'Dealer',
      buyerName: 'Sharjhel Khan',
      products: [
        { name: 'Urea', quantity: 3 },
        { name: 'DAP', quantity: 2 }
      ],
      totalPayment: 'Rs. 5000',
      invoice: 'Rs. 4500',
      rider: 'Mohain',
      status: 'Pending',
      startDate: '08-03-2025',
      dueDate: '08-03-2025'
    },
    {
      key: '9',
      orderId: 'OB012345',
      buyerType: 'Farmer',
      buyerName: 'Jamahed Ahmad',
      products: [
        { name: 'Urea', quantity: 3 },
        { name: 'DAP', quantity: 2 }
      ],
      totalPayment: 'Rs. 5000',
      invoice: 'Rs. 4500',
      rider: 'Mohain',
      status: 'Out for delivery',
      startDate: '08-03-2025',
      dueDate: '08-03-2025'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
      case 'Completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'Out for delivery':
        return <Truck className="w-4 h-4 text-blue-500" />;
      default:
        return <Package className="w-4 h-4 text-gray-500" />;
    }
  };

  const getBuyerTypeIcon = (type) => {
    return type === 'Farmer' 
      ? <User className="w-4 h-4 text-green-600" /> 
      : <ShoppingCart className="w-4 h-4 text-blue-600" />;
  };

  const columns = [
    {
      title: '',
      dataIndex: 'key',
      key: 'selection',
      width: 50,
      render: (text) => <Checkbox />,
    },
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
      sorter: (a, b) => a.orderId.localeCompare(b.orderId),
    },
    {
      title: 'Buyer Type',
      dataIndex: 'buyerType',
      key: 'buyerType',
      render: (text, record) => (
        <div className="flex items-center gap-2">
          {getBuyerTypeIcon(text)}
          <span>{text}</span>
        </div>
      ),
      sorter: (a, b) => a.buyerType.localeCompare(b.buyerType),
    },
    {
      title: 'Buyer Name',
      dataIndex: 'buyerName',
      key: 'buyerName',
      sorter: (a, b) => a.buyerName.localeCompare(b.buyerName),
    },
    {
      title: 'Products',
      dataIndex: 'products',
      key: 'products',
      render: (products) => (
        <div>
          {products.map((product, index) => (
            <div key={index} className="text-sm">
              {product.name} (Qty: {product.quantity})
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'Total Payment',
      dataIndex: 'totalPayment',
      key: 'totalPayment',
      sorter: (a, b) => parseFloat(a.totalPayment.replace('Rs. ', '')) - parseFloat(b.totalPayment.replace('Rs. ', '')),
    },
    {
      title: 'Invoice',
      dataIndex: 'invoice',
      key: 'invoice',
      render: (text) => (
        <div className="flex items-center gap-1">
          <FileText className="w-4 h-4 text-gray-500" />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Rider',
      dataIndex: 'rider',
      key: 'rider',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <div className="flex items-center gap-2">
          {getStatusIcon(text)}
          <Tag 
            color={
              text === 'Completed' || text === 'Delivered' ? 'green' : 
              text === 'Pending' ? 'orange' : 
              text === 'Out for delivery' ? 'blue' : 'default'
            }
          >
            {text}
          </Tag>
        </div>
      ),
      filters: [
        { text: 'Completed', value: 'Completed' },
        { text: 'Delivered', value: 'Delivered' },
        { text: 'Pending', value: 'Pending' },
        { text: 'Out for delivery', value: 'Out for delivery' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      sorter: (a, b) => new Date(a.startDate) - new Date(b.startDate),
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      sorter: (a, b) => new Date(a.dueDate) - new Date(b.dueDate),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <button className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
            View
          </button>
          <button className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded hover:bg-green-200">
            Edit
          </button>
        </div>
      ),
    },
  ];

  // Calculate current page data
  const currentData = orders.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
   <div>
    <h1 className="text-2xl font-bold text-gray-800">Order Management</h1> <br/>
    <h3> View and Manage Orders</h3>
     <div className="p-6 bg-white rounded-lg ">
        
      <div className="mb-6">
        {/* <h1 className="text-2xl font-bold text-gray-800">Orders</h1> */}
      </div>
      
      <Table 
        columns={columns} 
        dataSource={currentData} 
        pagination={false}
        className="w-full"
        scroll={{ x: true }}
      />
      
      <div className="flex justify-end mt-4">
        <Pagination
          current={currentPage}
          total={orders.length}
          pageSize={pageSize}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
          className="ant-pagination"
        />
      </div>
    </div>
   </div>
  );
};

export default OrdersTable;