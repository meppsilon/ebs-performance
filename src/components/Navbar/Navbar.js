import React from 'react';
import { Link } from 'gatsby';
import logo from '../../img/EBSprimarylogo.png';
import MenuButton from './Menu';
import SmallMenu from './SmallMenu';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
      open: false,
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      }
    );
  }

  render() {
    const { smallest } = this.props;
    const { open } = this.state;
    return (
      <nav
        className="bg-ebsBlack relative z-30 py-2 px-4"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="flex">
          <Link to="/" className="navbar-item text-white" title="Logo">
            <img
              src={logo}
              alt="EBS Performance"
              className="w-8 h-8 bg-white rounded-full"
            />
          </Link>
          {!smallest ? (
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass} flex`}
            >
              <div className="flex">
                <Link
                  className="navbar-item flex items-center no-underline"
                  to="/youth-camp"
                >
                  Youth Camp
                </Link>
                {/* <Link
                  className="navbar-item flex items-center no-underline"
                  to="/protein-powder"
                >
                  Protein Powder
                </Link> */}
                <Link
                  className="navbar-item flex items-center no-underline"
                  to="/trainers"
                >
                  Trainers
                </Link>
                <Link
                  className="navbar-item flex items-center no-underline"
                  to="/gallery"
                >
                  Gallery
                </Link>
                <Link
                  className="navbar-item flex items-center no-underline"
                  to="/about"
                >
                  About
                </Link>
                {/* <Link className="navbar-item flex items-center" to="/contact">
                  Contact
                </Link> */}
                {/* <Link className="navbar-item flex items-center" to="/bench-press">
                  Bench Press Contest
                </Link> */}
                <a
                  href="https://www.instagram.com/ebs.performance"
                  className="flex items-center mx-4 text-xl no-underline"
                >
                  <i
                    className="fab fa-instagram text-white"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          ) : (
            <MenuButton
              open={open}
              openMenu={(bool) => this.setState({ open: bool })}
            />
          )}
        </div>
        {open && (
          <SmallMenu
            sections={[
              // { title: 'Youth Camp', link: 'youth-camp' },
              // { title: 'Protein Powder', link: 'protein-powder' },
              { title: 'Trainers', link: 'trainers' },
              { title: 'Gallery', link: 'gallery' },
              { title: 'About', link: 'about' },
            ]}
            hideMenu={() => this.setState({ open: false })}
          />
        )}
      </nav>
    );
  }
};

export default Navbar;
