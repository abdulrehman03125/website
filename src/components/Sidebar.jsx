import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Boxes,
  Tags,
  ClipboardList,
  Truck,
  CreditCard,
  Clock,
  Bell,
  LifeBuoy,
  Settings,
  UserCircle,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState(location.pathname); // auto-activate on reload

  const menu = [
    { name: "Dashboard", icon: <LayoutDashboard />, path: "/" },
    { name: "User Management", icon: <Users />, path: "/UserManagement" },
    { name: "Products Management", icon: <Boxes />, path: "/Products" },
    { name: "Brands & Categories", icon: <Tags />, path: "/BrandsCategories" },
    { name: "Order Management", icon: <ClipboardList />, path: "/OrdersTable" },
    { name: "Manage Transporter", icon: <Truck />, path: "/TransporterManagement" },
    { name: "Payments & Transactions", icon: <CreditCard />, path: "/Payments" },
    { name: "Activity Logs", icon: <Clock />, path: "/ActivityLogs" },
  ];

  const handleClick = (item) => {
    setActive(item.path);
    navigate(item.path);
  };

  return (
    <div className="w-20 md:w-52 bg-white h-screen flex flex-col justify-between mt-4">
      <div>
        <div className="flex items-center justify-center md:justify-start p-4">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="px-4 mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-md border border-gray-200 focus:outline-none focus:ring focus:ring-green-200"
          />
        </div>
        <nav className="flex flex-col gap-1">
          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => handleClick(item)}
              className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
                active === item.path
                  ? "bg-lime-400 text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="px-4 pb-4 flex flex-col gap-2">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Bell className="w-5 h-5" />
          <span className="hidden md:inline">Notification</span>
          <span className="ml-auto  w-2 h-2 rounded-full"></span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <LifeBuoy className="w-5 h-5" />
          <span className="hidden md:inline">Support</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Settings className="w-5 h-5" />
          <span className="hidden md:inline">Settings</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600 border-t pt-3 mt-2">
          <UserCircle className="w-6 h-6" />
          <span className="hidden md:inline">Abdul Zubair</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
