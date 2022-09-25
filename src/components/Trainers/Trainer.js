import { Link } from 'gatsby';
import React from 'react';

const Trainer = ({ name, profile }) => (
  <Link
    to={`/trainers/${name.toLowerCase().replace(' ', '-')}`}
    key={name}
    className="flex flex-col items-center mx-4 my-4 cursor-pointer group"
  >
    <img src={profile.publicURL} className="w-36 h-36 bg-white rounded-full group-hover:opacity-70" />
    <div className="text-white group-hover:text-gray-300">{name}</div>
  </Link>
);

export default Trainer;
