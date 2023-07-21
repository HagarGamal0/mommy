import React from "react";
import "./profile.css";
import AddProduct from "../Components/AddProduct/AddProduct";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import profileimg from "../images/profile-image/profile.jpg";
function Profile() {
  const { user } = useSelector((state) => state.UserSlice);
  const [isLoading, setIsLoading] = useState(true);
  const api = "http://localhost:4000/";

  useEffect(() => {
    // Simulating an asynchronous data fetch
    setTimeout(() => {
      setIsLoading(false);
    }, 20);
    console.log(user);
  }, []);

  // Render a loading state while waiting for the data
  if (isLoading) {
    return "";
  }

  return (
    <>
      <div className="profileheader">
        <h5 className="profile_name">{user?.name}</h5>
        <div>
          <div className="profileimage">
            <img src={profileimg} alt="" />
          </div>
        </div>
      </div>
      <div className=" mt-5 row gx-0">
        <div className="col-lg-2 ">
          <div className="card mb-4 profile_card ">
            <div className="card-body text-center shadow  bg-white rounded ">
              <p className="text-muted mb-4">{}</p>
              <div className="d-flex flex-column gap-2">
                {user?.role === "seller" ? (
                  ""
                ) : (
                  <>
                    <NavLink
                      to="/profile/babies"
                      className=" btn btn-outline-warning  btn-block profile_card-btn "
                    >
                      اطفالي
                    </NavLink>
                    <NavLink
                      to="/profile/myorders"
                      className=" btn btn-outline-warning  btn-block profile_card-btn "
                    >
                      طلباتي
                    </NavLink>
                    <NavLink
                      to="/profile/todo"
                      className=" btn btn-outline-warning  btn-block  profile_card-btn "
                    >
                      قائمة المهام{" "}
                    </NavLink>
                  </>
                )}
                <NavLink
                  to="/profile/info"
                  className=" btn btn-outline-warning  btn-block profile_card-btn "
                >
                  معلوماتي{" "}
                </NavLink>
                <NavLink
                  to="/profile/edit"
                  className=" btn btn-outline-warning  btn-block profile_card-btn text-light"
                >
                  تعديل البيانات{" "}
                </NavLink>
                {user.role === "seller" ? (
                  <>
                    <NavLink
                      to="/profile/products"
                      className=" btn btn-outline-warning  btn-block text-black profile_card-btn"
                    >
                      منتجاتي{" "}
                    </NavLink>
                    <AddProduct />
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default Profile;
