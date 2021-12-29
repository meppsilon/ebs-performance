import React from 'react';
import { Link } from 'gatsby';

const SmallMenu = ({ sections, hideMenu }) => (
  <div className="font-semibold text-sm">
    {sections.map((title, i) => (
      <Link
        className="text-white pr-2 block text-center menu-item cursor-pointer"
        key={`section-${title.toLowerCase()}-${i}`}
        onClick={hideMenu}
        to={`/${title.toLowerCase()}`}
      >
        {title}
      </Link>
    ))}
    <a
      href="https://www.instagram.com/ebs.performance"
      className="text-white pr-2 block text-center menu-item cursor-pointer"
    >
      <i
        className="fa fa-instagram text-white"
        aria-hidden="true"
      />
      {' '}
      Instagram
    </a>
  </div>
);

export default SmallMenu;
