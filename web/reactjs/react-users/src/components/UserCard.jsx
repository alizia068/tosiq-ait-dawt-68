import React from 'react'
import noImg from '../assets/images/no-picture.jpg'
const UserCard = ({user}) => {
  return (
    <div className="border-t-4 border-teal-500 rounded bg-white shadow-xs p-4 w-full text-center">
          <div className="center-item">
            <img className="profile-img object-center" src={user.profile ? user.profile : noImg } alt="" />
          </div>
          <span className="block text-lg">{user.name}</span>
          <span className="-mt-1 block text-xs text-slate-500">{user.userName}</span>
          <div className="mt-3 center-item">
            <button className="text-gray-800 block rounded-full border border-gray-400 px-2 py-1">
              Following
            </button>
          </div>
        </div>
  )
}

export default UserCard
