import { Link } from 'gatsby';
import React from 'react';

const Trainer = ({ name, profile, instagram }) => (
  <Link
    to={`/trainers/${name.toLowerCase().replace(/[\s\']/g, '-')}`}
    key={name}
    className="flex flex-col items-center cursor-pointer group w-40"
  >
    <img
      src={profile.publicURL}
      className="w-36 h-36 bg-white rounded-full group-hover:opacity-70 ring ring-2 ring-white mb-2 object-cover"
    />
      <div className="text-white group-hover:text-gray-300 text-center">{name}</div>
  </Link>
);

export default Trainer;
