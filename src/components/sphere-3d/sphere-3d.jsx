import React from 'react';
import PropTypes from 'prop-types';
import './sphere-3d.css';

/**
 * Represents a component that displays a 3D sphere.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Sphere3D(props) {
  const {
    color = '#FEB50A',
  } = props;

  return (
    <div className="sphere-container">
      <div
        className="sphere"
        style={{
          background: `radial-gradient(circle at 50% 40%, #fcfcfc, ${color} 66%, #9b5050 100%)`,
        }}
      >
        <span className="sphere-shadow" />
      </div>
    </div>
  );
}

export default Sphere3D;

Sphere3D.propTypes = {
  /**
   * Specifies the name or hex code of the sphere.
   */
  color: PropTypes.string,
};
