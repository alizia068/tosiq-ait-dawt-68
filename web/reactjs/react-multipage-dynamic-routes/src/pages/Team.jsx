import React, { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";
import { MoonLoader } from 'react-spinners'
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { ALL_USER_API } from "../resources/api";
const Team = () => {
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getTeam = async () => {
      const response = await fetch(ALL_USER_API)
      const teamList = await response.json();
      if (teamList.length == 0) {
        console.log("No team found")
      } else {
        setTeam(teamList)
        setLoading(false)
      }
    }

    getTeam()
  })

  return (
    <>
      <div>
        <Navbar />
        <div className='p-5 bg-white/50 m-5 rounded-lg'>
          <div>My Team</div>
          <div className="mt-3">
            {loading ? <div>Loading <MoonLoader /></div> :
              team.length > 0 ?
                <div className="grid grid-cols-12 gap-3">
                  {team.map((team, i) => {
                    return (
                      <div key={i} className="col-span-4">
                        <NavLink to={`/team/${team.id}`}>
                          <TeamCard team={team} />
                        </NavLink>
                      </div>
                    )
                  })}
                </div> :
                <div><i>No team found</i></div>
            }
          </div>
        </div>
      </div>
    </>
  )
};

export default Team;
