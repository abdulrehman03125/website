import React, { useState } from 'react';

// Dummy Components for each tab
const FarmerComponent = () => <div className="mt-4 p-4 bg-white shadow rounded">👨‍🌾 Farmer Component</div>;
const DealerComponent = () => <div className="mt-4 p-4 bg-white shadow rounded">🏪 Dealer Component</div>;
const TransporterComponent = () => <div className="mt-4 p-4 bg-white shadow rounded">🚛 Transporter Component</div>;
const RiderComponent = () => <div className="mt-4 p-4 bg-white shadow rounded">🏍️ Rider Component</div>;

const UserTypeSelector = () => {
  const [selected, setSelected] = useState('Farmers');

  const tabs = ['Farmers', 'Dealers', 'Transporters', 'Riders'];

  const renderComponent = () => {
    switch (selected) {
      case 'Farmers':
        return <FarmerComponent />;
      case 'Dealers':
        return <DealerComponent />;
      case 'Transporters':
        return <TransporterComponent />;
      case 'Riders':
        return <RiderComponent />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="bg-green-50 p-1 inline-flex rounded-full shadow-sm">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setSelected(tab)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
              selected === tab
                ? 'bg-green-500 text-white shadow'
                : 'text-gray-700 hover:bg-green-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Render selected component below */}
      {renderComponent()}
    </div>
  );
};

export default UserTypeSelector;
