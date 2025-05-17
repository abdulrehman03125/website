import React from 'react';
import { Card, Col, Row } from 'antd';
import {
  ShoppingCart,
  CheckCircle,
  Clock,
  Loader,
  Users,
  Tractor,
  Car,
  User,
} from 'lucide-react';
import { Badge } from 'antd';

const cards = [
  { label: 'Total Orders', value: 850, icon: <ShoppingCart size={20} /> },
  { label: 'Orders Delivered', value: 700, icon: <CheckCircle size={20} /> },
  { label: 'Pending Orders', value: 50, icon: <Clock size={20} /> },
  {
    label: 'Orders Underprocess',
    value: 20,
    icon: <Loader size={20} className="animate-spin" />,
  },
  { label: 'Total DAP', value: 850, icon: <ShoppingCart size={20} /> },
  { label: 'Total Urea', value: 750, icon: <CheckCircle size={20} /> },
  { label: 'Total NP', value: 84, icon: <CheckCircle size={20} /> },
  { label: 'Total SOP', value: 200, icon: <CheckCircle size={20} /> },
  { label: 'Booking Stock', value: 72, icon: <Users size={20} /> },
  { label: 'Available Stock', value: 120, icon: <Users size={20} /> },
  { label: 'Total Stock', value: 192, icon: <ShoppingCart size={20} /> },
  { label: 'Sold Stock', value: 100, icon: <ShoppingCart size={20} /> },
];

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

const DashboardCards = () => {
  return (
    <div className="p-4 bg-[#f0f2f5] min-h-screen">
      <Row gutter={[16, 16]}>
        {cards.map((card, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card bordered className="hover:shadow-md transition-all">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-gray-500 text-sm">{card.label}</div>
                  <div className="text-2xl font-semibold">{card.value}</div>
                </div>
                <div className="bg-green-100 text-green-600 p-2 rounded">
                  {card.icon}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Extra cards below the AntD cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-6">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-white"
          >
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <p className="text-xl font-bold">{card.value}</p>
            </div>
            <div className="bg-green-50 p-2 rounded-lg">{card.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
