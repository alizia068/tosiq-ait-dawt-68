import React from "react";
import noImg from "../assets/no-img.png";
import { GrGlobe, GrMapLocation } from "react-icons/gr";

const UserCard = ({ user }) => {
  return (
    <div className="rounded-lg bg-white p-3 w-full">
      <div className="flex items-start ">
        <div>
          <img src={noImg} className="h-28 w-36 object-cover rounded-lg" />
        </div>
        <div className="ml-3 w-full ">
          <div className="flex justify-between">
            <div>
              <span className="block line-clamp-1">{user.name}</span>
              <small className="block mt-1">{user.email}</small>
            </div>
            <div className="text-gray-400 text-[11px]">@{user.username}</div>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            <div>
                <GrMapLocation className="inline -mt-1 mr-3"/> {user.address.city}
            </div>
            <div>
                <GrGlobe className="inline -mt-1 mr-3"/> {user.website}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
