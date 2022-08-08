import React from 'react';

const Trainer = ({ name, profile, instagram, onClick }) => (
  <div
    key={name}
    className="flex flex-col items-center mx-4 cursor-pointer"
    onClick={onClick}
  >
    <img src={profile.publicURL} className="w-24 h-24 bg-white rounded-full" />
    <div className="mt-4 font-semibold">{name}</div>
    <div className="text-sm font-light">@{instagram}</div>
  </div>
);

export default Trainer;
