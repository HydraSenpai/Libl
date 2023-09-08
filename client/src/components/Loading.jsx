import React from 'react';

const Loading = ({ center }) => {
  return (
    <div
      className={center ? 'loading loading-center-horizontal' : 'loading'}
    ></div>
  );
};

export default Loading;
