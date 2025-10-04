import React from "react";
import noImg from "../assets/no-img.png";
import { GrGlobe, GrMapLocation } from "react-icons/gr";

const TeamCard = ({ team }) => {
  return (
    <div className="rounded-lg bg-white p-3 w-full">
      <div className="flex items-start ">
        <div>
          <img src={noImg} className="h-28 w-36 object-cover rounded-lg" />
        </div>
        <div className="ml-3 w-full ">
          <div className="flex justify-between">
            <div>
              <span className="block line-clamp-1">{team.name}</span>
              <small className="block mt-1">{team.email}</small>
            </div>
            <div className="text-gray-400 text-[11px]">@{team.username}</div>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            <div>
                <GrMapLocation className="inline -mt-1 mr-3"/> {team.address.city}
            </div>
            <div>
                <GrGlobe className="inline -mt-1 mr-3"/> {team.website}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
