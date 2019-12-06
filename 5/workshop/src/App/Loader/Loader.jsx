import React from 'react';
import './Loader.css';

export default function Loader({ isLoading, local }) {
  const className = `Loader${local ? ' local' : ''}`;
  return isLoading ? <div className={className}>Loading...</div> : null;
}