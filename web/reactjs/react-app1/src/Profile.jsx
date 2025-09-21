import React from "react";
import profile from "./assets/images/profile-img.jpg";
const Profile = () => {
  return (
    <div className="border-t-4 border-teal-500 m-3 rounded bg-white shadow-xs p-4 w-[200px] text-center">
      <div className="center-item">
        <img className="profile-img object-center" src={profile} alt="" />
      </div>
      <span className="block text-lg">Sally Ramos</span>
      <span className="-mt-1 block text-xs text-slate-500">@sally_ramos</span>
      <div className="mt-3 center-item">
        <button className="text-gray-800 block rounded-full border border-gray-400 px-2 py-1">
          Following
        </button>
      </div>
    </div>
  );
};

export default Profile;
