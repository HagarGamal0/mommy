import { useRef, React, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../images/main/logo4.gif";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../Redux/Slices/UserSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.UserSlice.isLoggedIn);
  const user = useSelector((state) => state.UserSlice.user);
  const cartItems = useSelector((state) => state.ProductSlice.cartItems) || [];
  const navigate = useNavigate();
  const [total, setTotal] = useState(null);
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  const totalItems = cartItems.reduce((count, product) => {
    return count + product.quantity;
  }, 0);

  useEffect(() => {
    setTotal(totalItems);
  }, [totalItems]);
  return (
    <header className="container-fluid shadow-lg">
      <div className="container">
        <NavLink to="home" className="logo">
          <img src={Logo} alt="logo" />
        </NavLink>
        <nav ref={navRef}>
          <NavLink to="home" className="links">
            الرئيسية
          </NavLink>
          {isLoggedIn && user.role === "mother" ? (
            <NavLink to="profile/babies" className="links">
              صفحتك
            </NavLink>
          ) : (
            isLoggedIn?
            <NavLink to="profile/info" className="links">
            صفحتك
          </NavLink> :""
          )}
          {!user || user.role === "mother" ? (
            <>
              <NavLink to="products" className="links" >
                تسوقي
              </NavLink>
              <NavLink to="blog" className="links">
                مجتمعنا
              </NavLink>
            </>
          ) : (
            ""
          )}

          <NavLink to="about" className="links">
            عنا
          </NavLink>

          {isLoggedIn ? (
            <>
              <span className="profile-name links">
                {" "}
                أهلاً {user.name || ""}
                <span className="profile-droplist">
                  <span
                    onClick={() => {
                      if(user.role === "mother"){
                        navigate("profile/babies");
                      }else{
                        navigate("profile/info");
                      }
                    }}
                  >
                    <ion-icon name="person-circle-outline"></ion-icon> حسابي{" "}
                  </span>
                  {user.role !== "seller" ? (
                    <span>
                      <ion-icon name="heart-outline"></ion-icon> قائمة الامنيات
                    </span>
                  ) : (
                    ""
                  )}

                  <span
                    onClick={() => {
                      dispatch(logOut());
                      navigate("login");
                    }}
                    className=""
                  >
                    <ion-icon name="log-out-outline"></ion-icon> تسجيل الخروج
                  </span>
                </span>
              </span>
            </>
          ) : (
            <>
              <NavLink to="register" className="links register-btn">
                التسجيل
              </NavLink>
              <NavLink to="login" className="links login-btn">
                دخول
              </NavLink>
            </>
          )}
          {isLoggedIn && user.role !== "seller" ? (
            <NavLink to="cart" className="links cart-button">
              عربة التسوق
              <span className="cart-icon-container">
                <ion-icon name="cart-outline"></ion-icon>
                {cartItems.length > 0 ? (
                  <span className="cart-number">{total}</span>
                ) : (
                  ""
                )}
              </span>
            </NavLink>
          ) : (
            ""
          )}

          <button className="nav-btn nav-btn-close" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}