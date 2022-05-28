import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs'
import NotFound from './Pages/Shared/NotFound/NotFound'
import Footer from './Pages/Shared/Footer/Footer';
import Order from './Pages/Order/Order';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Log In/Login';
import Signup from './Pages/Signup/Signup';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders';
import Users from './Pages/Dashboard/Users';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManagaProducts from './Pages/Dashboard/ManageProducts';
import RequireAdmin from './Pages/Shared/RequireAdmin/RequireAdmin';
import Payment from './Pages/Dashboard/Payment';
import Portfolio from './Portfolio/Portfolio';
import ResetPassword from './Pages/Log In/ResetPassword';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/blog' element={<Blogs></Blogs>}></Route>

        <Route path='/order/:id' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>}>
        </Route>

        {/* NESTED ROUTE IN DASHBOARD STARTS */}
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>}>
          </Route>
          <Route path='manageorder' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageproduct' element={<ManagaProducts></ManagaProducts>}></Route>
        </Route>
        {/* NESTED ROUTE IN DASHBOARD ENDS */}

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>

        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
