import React, { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";
import { MoonLoader } from "react-spinners";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { ALL_USER_API } from "../resources/api";
const Team = () => {
  const [team, setTeam] = useState([]);
  const [filter, setFilter] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTeam = async () => {
      const response = await fetch(ALL_USER_API);
      const teamList = await response.json();
      if (teamList.length == 0) {
        console.log("No team found");
      } else {
        setTeam(teamList);
        setLoading(false);
      }
    };

    getTeam();
  });

  const filterData = () => {
    let filterTeam = team.filter((teamMember) => {
      return searchText == teamMember.name
    });
    setFilter(filterTeam);
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="p-5 bg-white/50 m-5 rounded-lg">
          <div className="flex justify-between items-center">
            <div>My Team</div>
            <div>
              <input
                value={searchText}
                onKeyUp={filterData}
                onChange={(e) => setSearchText(e.target.value)}
                className="bg-white py-1 px-3 rounded focus:outline-amber-500 shadow"
                type="text"
                placeholder="Search here"
              />
            </div>
          </div>
          <div className="mt-3">
            {loading ? (
              <div>
                Loading <MoonLoader />
              </div>
            ) : team.length > 0 ? (
              <div className="grid grid-cols-12 gap-3">
                {searchText !== ""
                  ? filter.map((team, i) => {
                      return (
                        <div
                          key={i}
                          className="lg:col-span-4 md:col-span-4        sm:col-span-6 max-sm:col-span-12"
                        >
                          <NavLink to={`/team/${team.id}`}>
                            <TeamCard team={team} />
                          </NavLink>
                        </div>
                      );
                    })
                  : team.map((team, i) => {
                      return (
                        <div
                          key={i}
                          className="lg:col-span-4 md:col-span-4 sm:col-span-6 max-sm:col-span-12"
                        >
                          <NavLink to={`/team/${team.id}`}>
                            <TeamCard team={team} />
                          </NavLink>
                        </div>
                      );
                    })}
              </div>
            ) : (
              "Data not found"
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
