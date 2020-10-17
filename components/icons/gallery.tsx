import React from 'react';

export const Gallery = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="2.5" width="15" height="15" stroke="#8194C7" strokeWidth="1.25" strokeLinecap="round" />
    <path d="M7.08301 8.33337C7.77336 8.33337 8.33301 7.77373 8.33301 7.08337C8.33301 6.39302 7.77336 5.83337 7.08301 5.83337C6.39265 5.83337 5.83301 6.39302 5.83301 7.08337C5.83301 7.77373 6.39265 8.33337 7.08301 8.33337Z" stroke="#8194C7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.5003 12.5L13.3337 8.33337L4.16699 17.5" stroke="#8194C7" strokeWidth="1.25" strokeLinecap="round" />
  </svg>
);
