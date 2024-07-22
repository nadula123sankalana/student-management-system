// src/components/Avatar.jsx

import React from 'react';

const Avatar = ({ src, alt, size }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full ${size === 'lg' ? 'h-12 w-12' : 'h-8 w-8'}`}
    />
  );
};

export default Avatar;
