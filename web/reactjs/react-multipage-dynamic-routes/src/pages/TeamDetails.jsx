import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import noImg from '../assets/no-img.png'
import { GrGlobe, GrMapLocation } from 'react-icons/gr'
import { ALL_USER_API } from '../resources/api'

const TeamDetails = () => {
    const [teamMember, setTeam] = useState({})
    const [loading, setLoading] = useState(true)
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const getTeam = async () => {
          const response = await fetch(ALL_USER_API + id)
          const member = await response.json();
          if (!member) {
            console.log("No team member found")
          } else {
            setTeam(member)
            setLoading(false)
            console.log("data: "+ teamMember)
          }
        }
    
        getTeam()
      })

    return (
        <div>
        <Navbar />
        <div className='p-5 bg-white/50 m-5 rounded-lg'>
            <div className="rounded-lg bg-white p-3 w-[400px]">
                <div className="flex items-start ">
                <div>
                    <img src={noImg} className="h-28 w-36 object-cover rounded-lg" />
                </div>
                <div className="ml-3 w-full ">
                    <div className="flex justify-between">
                    <div>
                        <span className="block line-clamp-1">{teamMember.name}</span>
                        <small className="block mt-1">{teamMember.email}</small>
                    </div>
                    <div className="text-gray-400 text-[11px]">@{teamMember.username}</div>
                    </div>
                    <div className="mt-6 text-sm text-gray-500">
                    <div>
                        <GrMapLocation className="inline -mt-1 mr-3"/> {Object.entries(teamMember.address.city)}
                    </div>
                    <div>
                        <GrGlobe className="inline -mt-1 mr-3"/> {teamMember.website}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TeamDetails
