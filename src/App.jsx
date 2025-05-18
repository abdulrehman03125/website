
import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from "./pages/DashboardLayout"
import DashboardHome from './pages/DashboardHome';
import UserManagement from './pages/dashboard/UserManagement';
import ProductsTable from './pages/dashboard/ProductsTable';
import BrandsCategories from './pages/dashboard/BrandsCategories';
import OrdersTable from './pages/dashboard/OrdersTable';
import TransporterManagement from './pages/dashboard/TransporterManagement';
function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="UserManagement" element={<UserManagement />} />
          <Route path="Products" element={<ProductsTable />} />
          <Route path="BrandsCategories" element={<BrandsCategories />} />
          <Route path="OrdersTable" element={<OrdersTable/>} />
          <Route path="TransporterManagement" element={<TransporterManagement/>} />
          <Route path="Payments" element={<h1>Payments</h1>} />
          {/* Add more routes as needed */}
        </Route>

      </Routes>
    </>
  )
}

export default App
