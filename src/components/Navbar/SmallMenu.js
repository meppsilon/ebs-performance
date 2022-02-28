import React from 'react';
import { Link } from 'gatsby';

const convertToKebab = (str) => str.toLowerCase().replace(' ', '-');

const SmallMenu = ({ sections, hideMenu }) => (
  <div className="font-semibold text-sm">
    {sections.map((section, i) => (
      <Link
        className="text-white pr-2 block text-center menu-item cursor-pointer"
        key={`section-${convertToKebab(section.title)}-${i}`}
        onClick={hideMenu}
        to={`/${section.link}`}
      >
        {section.title}
      </Link>
    ))}
    <a
      href="https://www.instagram.com/ebs.performance"
      className="text-white pr-2 block text-center menu-item cursor-pointer"
    >
      <i
        className="fab fa-instagram text-white"
        aria-hidden="true"
      />
      {' '}
      Instagram
    </a>
  </div>
);

export default SmallMenu;
