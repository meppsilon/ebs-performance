import * as React from 'react';
import { Link } from 'gatsby';

import logo from '../img/ebs-logo.jpg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-black text-white md:px-20 md:py-12 px-6 py-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-6">
            <img src={logo} alt="EBS Performance" style={{ height: '8em' }} />
          </div>
          <div className="md:flex">
            <div className="flex flex-col mb-6 md:w-1/3 md:mb-0">
              <div className="uppercase text-lg font-bold mb-4">Hours</div>
              <div className="uppercase mb-3">Mon - Fri: 5AM - 10PM</div>
              <div className="uppercase mb-3">Sat - Sun: 7AM - 8PM</div>
            </div>
            <div className="flex flex-col mb-6 md:w-1/3">
              <div className="uppercase text-lg font-bold mb-4">
                Contact Info
              </div>
              <div className="mb-3">1111 Baker St, Costa Mesa, CA 92626</div>
              <div className="mb-3">(555) 555-555</div>
              <div className="mb-3">
                <a
                  href="mailto:info@ebsperformance.com"
                  className="hover:underline font-semibold"
                >
                  info@ebsperformance.com
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-6 md:w-1/3">
              <div className="uppercase text-lg font-bold mb-4">Pages</div>
              <Link className="mb-3 hover:underline font-semibold" to="/about">
                About
              </Link>
              <Link
                className="mb-3 hover:underline font-semibold"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="mb-6">
            <a
              href="https://www.instagram.com/ebs.performance"
              className="flex items-center text-xl mr-3"
            >
              <i className="fa fa-instagram text-white" aria-hidden="true" />
            </a>
          </div>
          <div className="text-sm font-light">© 2021, EBS Performance, LLC</div>
        </div>
      </footer>
    );
  }
};

export default Footer;
