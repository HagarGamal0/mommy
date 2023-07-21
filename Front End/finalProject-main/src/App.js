import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import Main from "./Pages/Main";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
import ProductDetails from "./Pages/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Pages/Profile";
import ProfileInfo from "./Components/Profile/ProfileInfo";
import SellerProducts from "./Components/SellerProducts/SellerProducts";
import EditInfo from "./Components/EditInfo/EditInfo";
import ShoppingCart from "./Pages/ShoppingCart";
import { getCartItems } from "./Redux/Slices/ProductSlice";
import { getUserData } from "./Redux/Slices/UserSlice";
import BlogDetails from "./Pages/BlogDetails";
import Todo from "./Components/Todo/Todo";
import Babies from "./Components/Babies/Babies";
import CheckOut from "./Pages/CheckOut";
import OrderDone from "./Components/ChecOut/OrderDone/OrderDone";
import UserOrders from "./Components/userOrders/userOrders";


function App() {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.ProductSlice.product);
  const userId = localStorage.getItem('id');
 

  useEffect(() => {
    if(userId) {
      dispatch(getUserData(userId));
      dispatch(getCartItems(userId))
    }

  }, [dispatch, userId]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Main /><Footer /></>} />
        <Route path="home" element={<><Main /><Footer /></>} />
        <Route path="products" element={<><Products /><Footer /></>} />
        <Route path={_id} element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<><Blog /><Footer /></>} />
        <Route path="blogDetails" element={<BlogDetails />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<><Profile /><Footer /></>}>
          <Route path="info" element={<ProfileInfo />} />
          <Route path="edit" element={<EditInfo />} />
          <Route path="products" element={<><SellerProducts /></>} />
          <Route path='todo' element={<Todo />}/>
          <Route path='babies' element={<Babies />}/>
          <Route  path="myorders" element={<UserOrders/>}/>
        </Route>
        <Route path="cart" element={<><ShoppingCart /><Footer /></>} /> 
        <Route path="checkout" element={<><CheckOut /><Footer /></>} />
        <Route path="orderDone" element={<OrderDone/>}/>
        {/* <Route path="*"  element={<Navigate to="404" replace={true}/>}/> */}
      
      </Routes>

      
      
    </>
  );
}
export default App;