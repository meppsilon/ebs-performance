import React from 'react';

const Menu = ({ open, openMenu }) => (
  <div className="flex flex-1 justify-end items-center">
    {open ? (
      <i
        className="fa fa-times fa-lg text-white cursor-pointer"
        onClick={() => openMenu(false)}
      />
    ) : (
      <i
        className="fa fa-bars fa-lg text-white cursor-pointer"
        style={{ paddingTop: '4px' }}
        onClick={() => openMenu(true)}
      />
    )}
  </div>
);

export default Menu;
