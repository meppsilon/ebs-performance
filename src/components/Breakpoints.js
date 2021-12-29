import React, { Component } from 'react';
import PropTypes from 'prop-types';

const camelToDash = (str) =>
  str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);

const formatMediaQuery = (query) => {
  let mediaQuery = '';
  const features = Object.keys(query);
  features.forEach((feature, index) => {
    let size = query[feature];
    const formattedFeature = camelToDash(feature);
    if (typeof size === 'number') {
      size = `${size}px`;
    }
    mediaQuery += `(${formattedFeature}: ${size})`;
    if (index < features.length - 1) {
      mediaQuery += ' and ';
    }
  });
  return mediaQuery;
};

const propTypes = {
  children: PropTypes.object.isRequired,
  breakpoints: PropTypes.array,
  updateSettings: PropTypes.bool,
  settings: PropTypes.object,
};

const defaultProps = {
  breakpoints: [],
  updateSettings: true,
  settings: {},
};

class Breakpoints extends Component {
  state = {
    currentBreakpoint: null,
  };

  componentDidMount() {
    const { breakpoints } = this.props;
    console.log('break points');
    if (breakpoints) {
      const sortedBreakpointList = breakpoints.sort(
        (a, b) => a.breakpoint - b.breakpoint
      );
      this.sortedBreakpointList = sortedBreakpointList;
      this.registerBreakpoints();
    }
  }

  createHandler = (query, breakpoint) => {
    window.matchMedia(query).addListener((e) => {
      if (e.matches) {
        this.setState({ currentBreakpoint: breakpoint });
      }
    });
  };

  initialQueryCheck = (query, breakpoint) => {
    if (window.matchMedia(query).matches) {
      this.setState({ currentBreakpoint: breakpoint });
    }
  };

  handleQuery = (query, breakpoint) => {
    this.initialQueryCheck(query, breakpoint);
    this.createHandler(query, breakpoint);
  };

  registerBreakpoints = () => {
    const breakpoints = this.sortedBreakpointList.map(
      (breakpointObj) => breakpointObj.breakpoint
    );

    breakpoints.forEach((breakpoint, index) => {
      let bQuery;
      if (index === breakpoints.length - 1) {
        bQuery = formatMediaQuery({ minWidth: breakpoint });
      } else {
        bQuery = formatMediaQuery({
          minWidth: breakpoints[index],
          maxWidth: breakpoints[index + 1],
        });
      }
      this.handleQuery(bQuery, breakpoint);
    });

    // Register media query for default/smallest size
    const defaultQuery = formatMediaQuery({ maxWidth: breakpoints[0] });

    this.handleQuery(defaultQuery, null);
  };

  overrideSettings = (i) => {
    const breakks = this.sortedBreakpointList.slice(0, i + 1);
    return breakks.reduce(
      (acc, curr) => Object.assign({}, acc, curr),
      this.props.settings
    );
  };

  updateSettings = () => {
    let settings = this.props.settings;
    if (this.props.updateSettings) {
      if (this.state.currentBreakpoint) {
        const index = this.sortedBreakpointList.findIndex(
          (breakk) => breakk.breakpoint === this.state.currentBreakpoint
        );
        settings = this.overrideSettings(index);
      }
    }
    return settings;
  };

  render() {
    const settings = this.updateSettings();
    const newProps = {
      currentBreakpoint: this.state.currentBreakpoint,
      ...settings,
    };
    const { children } = this.props;
    console.log('breakpoints');
    const newChildren = children(newProps);
    return newChildren;
  }
}

Breakpoints.propTypes = propTypes;

Breakpoints.defaultProps = defaultProps;

export default Breakpoints;
