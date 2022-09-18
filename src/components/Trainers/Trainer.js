import { Link } from 'gatsby';
import React from 'react';

const Trainer = ({ name, profile, instagram, onClick }) => (
  <Link
    to={`/trainers/${name.toLowerCase().replace(' ', '-')}`}
    key={name}
    className="flex flex-col items-center mx-4 my-4 cursor-pointer group relative"
    onClick={onClick}
  >
    <img src={profile.publicURL} className="w-36 h-36 bg-white rounded-sm" />
    <div className="hidden group-hover:flex absolute w-full h-full bg-ebsBlack opacity-30 items-center justify-center text-white">{name}</div>
  </Link>
);

export default Trainer;
