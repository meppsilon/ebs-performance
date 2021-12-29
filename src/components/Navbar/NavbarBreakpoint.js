import React from 'react';
import Breakpoints from '../Breakpoints';
import { md } from '../../utils/screenSizes';
import Navbar from './Navbar';

const NavbarBreakpoint = props => (
  <Breakpoints
    settings={{ smallest: true }}
    breakpoints={[
      {
        breakpoint: md,
        smallest: false,
      },
    ]}
  >
    {({ smallest }) => <Navbar smallest={smallest} {...props} />}
  </Breakpoints>
);

export default NavbarBreakpoint;
