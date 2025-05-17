import React from 'react';
import { ShoppingCart, Tractor, Users, Truck, Car, User } from 'lucide-react';
import { Badge } from 'antd';

const cardData = [
  {
    title: 'Total Customers',
    value: 450,
    icon: <ShoppingCart className="text-green-500" size={24} />,
  },
  {
    title: 'Farmer',
    value: 150,
    icon: <Tractor className="text-green-500" size={24} />,
  },
  {
    title: 'Dealers',
    value: 300,
    icon: <Users className="text-green-500" size={24} />,
  },
  {
    title: 'Total Transporter',
    value: 400,
    icon: (
      <Badge dot>
        <ShoppingCart className="text-green-500" size={24} />
      </Badge>
    ),
  },
  {
    title: 'Total Vehicles',
    value: 400,
    icon: <Car className="text-green-500" size={24} />,
  },
  {
    title: 'Total Riders',
    value: 200,
    icon: <User className="text-green-500" size={24} />,
  },
];

const DashboardCardsa = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
      {cardData.map((card, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center p-2 border rounded-lg shadow-sm bg-white"
        >
          <div>
            <p className="text-sm text-gray-500">{card.title}</p>
            <p className="text-xl font-bold">{card.value}</p>
          </div>
          <div className="bg-green-50 p-2 rounded-lg">
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCardsa;
