const TransportersHeader = () => (
  <div className="p-4 bg-white rounded-lg shadow-sm">
    <div className="flex justify-between mb-6">
      <h1 className="text-2xl font-semibold text-gray-800">Transporters</h1>
    </div>
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-600">State</span>
        <Select style={{ width: 100 }} placeholder="Select state">
          <Option value="all">All</Option>
          <Option value="active">Active</Option>
          <Option value="inactive">Inactive</Option>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-600">mm/dd/yyyy</span>
        <Select style={{ width: 100 }} placeholder="Select date">
          <Option value="today">Today</Option>
          <Option value="week">This Week</Option>
          <Option value="month">This Month</Option>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Buyer Type</span>
        <Select style={{ width: 100 }} placeholder="Select type">
          <Option value="all">All</Option>
          <Option value="individual">Individual</Option>
          <Option value="business">Business</Option>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-600">
          Payment Status
        </span>
        <Select style={{ width: 150 }} placeholder="Select status">
          <Option value="all">All</Option>
          <Option value="paid">Paid</Option>
          <Option value="unpaid">Unpaid</Option>
        </Select>
      </div>
      <div className="flex-1 flex justify-end gap-2">
        <Input
          placeholder="Search"
          prefix={<Search className="h-4 w-4 text-gray-400" />}
          style={{ width: 200 }}
        />
        <Button
          type="default"
          icon={<Download className="h-4 w-4" />}
          className="flex items-center gap-1"
        >
          Import
        </Button>
        <Button
          type="default"
          icon={<Upload className="h-4 w-4" />}
          className="flex items-center gap-1"
        >
          Export
        </Button>
      </div>
    </div>
  </div>
);
