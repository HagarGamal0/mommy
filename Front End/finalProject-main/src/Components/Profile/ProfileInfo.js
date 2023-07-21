import React from "react";
import { useSelector } from "react-redux";

function ProfileInfo() {
  const user = useSelector((state) => state.UserSlice.user);

  return (
    <div className="col-lg-9">
      <div className="profile-info ">
        <div className="container">
          <div className="card mb-4">
            <div className="card-body shadow  bg-white rounded">
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">الاسم :</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.name}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">الايميل : </p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.email}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">الهاتف :</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">0{user.phone}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">العنوان :</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.address}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">العمر :</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{user.age}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
