import * as React from 'react';
import { Link } from 'gatsby';

import logo from '../img/EBSprimarylogo.png';
import americanBBLogo from '../img/american-barbell-logo.png';
import cuirimLogo from '../img/cuirim-logo.jpg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-ebsBlack text-white md:px-20 px-6 py-16 md:py-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <img
              src={logo}
              alt="EBS Performance"
              style={{ height: '8em' }}
              className="bg-white rounded-full"
            />
          </div>
          <div className="md:flex">
            <div className="flex flex-col mb-6 md:w-1/3 md:mb-0">
              <div className="uppercase text-lg font-bold mb-4">Hours</div>
              <div className="uppercase mb-3">Mon - Fri: 5AM - 9PM</div>
              <div className="uppercase mb-3">Sat - Sun: 7AM - 4PM</div>
            </div>
            <div className="flex flex-col mb-6 md:w-1/3">
              <div className="uppercase text-lg font-bold mb-4">
                Contact Info
              </div>
              <a
                href="https://maps.google.com/?q=1111 Baker St, Costa Mesa, CA 92626"
                className="mb-3 font-semibold hover:underline"
              >
                1111 Baker St, Costa Mesa, CA 92626
              </a>
              {/* <div className="mb-3">(555) 555-5555</div> */}
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
              {/* <Link
                className="mb-3 hover:underline font-semibold"
                to="/youth-camp"
              >
                Youth Camp
              </Link>
              <Link
                className="mb-3 hover:underline font-semibold"
                to="/protein-powder"
              >
                Protein Powder
              </Link> */}
              <Link className="mb-3 font-semibold" to="/trainers">
                Trainers
              </Link>
              <Link className="mb-3 font-semibold" to="/gallery">
                Gallery
              </Link>
              <Link className="mb-3 font-semibold" to="/about">
                About
              </Link>
              {/* <Link
                className="mb-3 hover:underline font-semibold"
                to="/contact"
              >
                Contact
              </Link> */}
            </div>
          </div>
          <div className="mb-6">
            <div className="text-lg font-bold uppercase mb-5">Partners</div>
            <div className="flex flex-wrap">
              <div className="mb-4">
                <img src={cuirimLogo} className="h-16" />
              </div>
              <div className="mb-4 ml-6">
                <img src={americanBBLogo} className="h-16" />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <a
              href="https://www.instagram.com/ebs.performance"
              className="flex items-center text-xl mr-3 no-underline"
            >
              <i className="fab fa-instagram text-white" aria-hidden="true" />
            </a>
          </div>
          <div className="text-sm font-light">© 2022, EBS Performance, LLC</div>
        </div>
      </footer>
    );
  }
};

export default Footer;
