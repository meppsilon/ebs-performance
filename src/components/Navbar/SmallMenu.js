import React from 'react';
import { Link } from 'gatsby';

const convertToKebab = (str) => str.toLowerCase().replace(' ', '-');

const SmallMenu = ({ sections, hideMenu, isA }) => (
  <div className="font-semibold text-sm">
    {sections.map((section, i) => {
      const LinkComp = isA ? 'a' : Link;
      const linkProp = isA
        ? { href: `/${section.link}` }
        : { to: `/${section.link}` };
      return (
        <LinkComp
          className="text-white pr-2 block text-center menu-item cursor-pointer no-underline"
          key={`section-${convertToKebab(section.title)}-${i}`}
          onClick={hideMenu}
          {...linkProp}
        >
          {section.title}
        </LinkComp>
      );
    })}
    <a
      href="https://www.instagram.com/ebs.performance"
      className="text-white pr-2 block text-center menu-item cursor-pointer no-underline"
    >
      <i className="fab fa-instagram text-white" aria-hidden="true" /> Instagram
    </a>
  </div>
);

export default SmallMenu;
