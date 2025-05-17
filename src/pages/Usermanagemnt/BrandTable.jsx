import React, { useState } from 'react';
import { Table } from 'antd';
import { Edit, Trash2, Plus, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const BrandTable = () => {
  // Sample data - in a real app, this would come from an API
  const allData = [
    { key: '1', id: 1, brandName: 'IFFCO' },
    { key: '2', id: 2, brandName: 'IFFCO' },
    { key: '3', id: 3, brandName: 'IFFCO' },
    { key: '4', id: 4, brandName: 'IFFCO' },
    { key: '5', id: 5, brandName: 'IFFCO' },
    { key: '6', id: 6, brandName: 'IFFCO' },
    { key: '7', id: 7, brandName: 'IFFCO' },
    { key: '8', id: 8, brandName: 'IFFCO' },
    { key: '9', id: 9, brandName: 'IFFCO' },
    { key: '10', id: 10, brandName: 'IFFCO' },
    { key: '11', id: 11, brandName: 'IFFCO' },
    { key: '12', id: 12, brandName: 'IFFCO' },
    { key: '13', id: 13, brandName: 'IFFCO' },
    { key: '14', id: 14, brandName: 'IFFCO' },
    { key: '15', id: 15, brandName: 'IFFCO' },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  
  // Calculate paginated data
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = allData.slice(startIndex, endIndex);
  const totalItems = allData.length;

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      align: 'center',
    },
    {
      title: 'Brand Name',
      dataIndex: 'brandName',
      key: 'brandName',
      align: 'center',
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 120,
      align: 'center',
      render: (_, record) => (
        <div className="flex justify-center space-x-2">
          <button className="text-blue-500 hover:text-blue-700">
            <Edit size={16} />
          </button>
          <button className="text-red-500 hover:text-red-700">
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  // Handle page change
  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    if (size) setPageSize(size);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Brands</h2>
        <button className="flex items-center px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          <Plus size={16} className="mr-1" />
          Add Brand
        </button>
      </div>
      
      <Table 
        dataSource={paginatedData} 
        columns={columns} 
        pagination={false}
        bordered
        className="w-full"
      />
      
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <span className="mb-2 sm:mb-0">
          Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} entries
        </span>
        
        <div className="flex items-center space-x-2">
          <select
            value={pageSize}
            onChange={(e) => handlePageChange(1, parseInt(e.target.value))}
            className="border rounded px-2 py-1 text-sm"
          >
            {[5, 10, 15, 20].map(size => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
          
          <button 
            onClick={() => handlePageChange(1, pageSize)}
            disabled={currentPage === 1}
            className="p-1 border rounded disabled:opacity-50"
          >
            <ChevronsLeft size={16} />
          </button>
          
          <button 
            onClick={() => handlePageChange(currentPage - 1, pageSize)}
            disabled={currentPage === 1}
            className="p-1 border rounded disabled:opacity-50"
          >
            <ChevronLeft size={16} />
          </button>
          
          <span className="px-2">
            Page {currentPage} of {Math.ceil(totalItems / pageSize)}
          </span>
          
          <button 
            onClick={() => handlePageChange(currentPage + 1, pageSize)}
            disabled={currentPage === Math.ceil(totalItems / pageSize)}
            className="p-1 border rounded disabled:opacity-50"
          >
            <ChevronRight size={16} />
          </button>
          
          <button 
            onClick={() => handlePageChange(Math.ceil(totalItems / pageSize), pageSize)}
            disabled={currentPage === Math.ceil(totalItems / pageSize)}
            className="p-1 border rounded disabled:opacity-50"
          >
            <ChevronsRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandTable;