import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import noImg from "../assets/no-img.png";
import { GrGlobe, GrMail, GrMapLocation, GrPhone } from "react-icons/gr";
import { ALL_USER_API } from "../resources/api";

const TeamDetails = () => {
  const [teamMember, setTeam] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getTeam = async () => {
      const response = await fetch(ALL_USER_API + id);
      const member = await response.json();
      if (!member) {
        console.log("No team member found");
      } else {
        setTeam(member);
        setLoading(false);
      }
    };

    getTeam();
  });

  return (
    <div>
      <Navbar />
      <div className="p-5 bg-white/50 m-5 rounded-lg">
        <div className="rounded-lg bg-white p-3">
          <div className="flex justify-center">
            <img src={noImg} className="rounded-full h-36 w-36" alt="" />
          </div>
          <div className="text-4xl text-center">{teamMember.name}</div>
          <div className="lowercase text-purple-500 text-xl text-center">
            @{teamMember.username}
          </div>
        </div>
        <div className="gap-4 flex items-start justify-between">
          <div className="w-full">
            <div className="mt-4">Personal</div>
            <div className="rounded-lg bg-white p-3">
              <div className="text-sm text-gray-500">
                <div>
                   <GrMail className="inline -mt-1 mr-3" />{" "} {teamMember.email}
                </div>
                <div className="">
                  <GrPhone className="inline -mt-1 mr-3" />{" "} @{teamMember.phone}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="mt-4">Business</div>
            <div className="rounded-lg bg-white p-3">
              <div className="text-sm text-gray-500">
                <div>
                  <GrMapLocation className="inline -mt-1 mr-3" />{" "}
                  {teamMember.address?.city}
                </div>
                <div>
                  <GrGlobe className="inline -mt-1 mr-3" /> {teamMember.website}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
