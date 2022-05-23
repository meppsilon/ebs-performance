import React from 'react';
import { Link } from 'gatsby';
import ebsTurf from '../img/ebs-turf.jpg';

const WhatWeOffer = () => (
  <section
    className="bg-ebsBlack text-white"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${ebsTurf})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="py-16 md:py-24 mx-4 md:max-w-screen-lg md:mx-auto">
      <h2 className="text-white text-3xl font-bold mb-8 text-center">
        What We Offer
      </h2>
      <div className="flex flex-wrap text-xl">
        <div className="w-full px-5 flex items-center my-4 font-light">
          <div className="w-12 text-center" style={{ minWidth: '3rem' }}>
            <i className="fas fa-expand" />
          </div>
          <div className="ml-6">5,000 square feet of weight room space</div>
        </div>
        <div className="w-full px-5 flex items-center my-4 font-light">
          <div className="w-12 text-center" style={{ minWidth: '3rem' }}>
            <i className="fas fa-dumbbell" />
          </div>
          <div className="ml-6 flex flex-wrap items-center">
            Top-of-the-line equipment, provided in partnership with
            <a
              href="https://americanbarbell.com/"
              className="ml-1 font-normal hover:underline"
            >
              American Barbell
            </a>
          </div>
        </div>
        <div className="w-full px-5 flex items-center my-4 font-light">
          <div className="w-12 text-center" style={{ minWidth: '3rem' }}>
            <i className="fas fa-user-md" />
          </div>
          <div className="ml-6 flex flex-wrap items-center">
            On-site physical therapy provided by{' '}
            <a
              href="https://cuirimsportsrecovery.com/"
              className="ml-1 font-normal hover:underline"
            >
              Cuirim Sports Recovery
            </a>
          </div>
        </div>
        <div className="w-full px-5 flex items-center my-4 font-light">
          <div className="w-12 text-center" style={{ minWidth: '3rem' }}>
            <i className="fas fa-road" />
          </div>
          <div className="ml-6">
            40 yards of outdoor field turf&nbsp;&mdash;&nbsp;
            <Link className="font-normal" to="/turf-space">
              reserve here
            </Link>
          </div>
        </div>
        <div className="w-full px-5 flex items-center my-4 font-light">
          <div className="w-12 text-center" style={{ minWidth: '3rem' }}>
            <i className="fas fa-users" />
          </div>
          <div className="ml-6">
            50 min&nbsp;
            <a className="font-normal" href="/group-fit">
              group athletic conditioning classes
            </a>
            &nbsp;for all skill levels
          </div>
        </div>
        <div className="w-full px-5 flex items-center my-4 font-light">
          <div className="w-12 text-center" style={{ minWidth: '3rem' }}>
            <i className="fas fa-umbrella-beach" />
          </div>
          <div className="ml-6">Sand-Pit</div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatWeOffer;
