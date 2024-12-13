/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Sphere3D from '../components/sphere-3d/sphere-3d';

export default {
  title: 'Components/Sphere3D',
  component: Sphere3D,
  argTypes: {
  },
};

function Template(args) {
  return (
    <div
      style={{
        width: '400px',
        height: '400px',
      }}
    >
      <Sphere3D {...args} />
    </div>
  );
}

export const Primary = Template.bind({});

Primary.args = {
};
