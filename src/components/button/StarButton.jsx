import React from 'react';
import './StarButton.css'
import { Link } from 'react-router-dom';
const StarButton = ({children,route}) => {
  return (
    <Link to={`/${route}`} className='Link text-sm md:text-base lg:text-xl  py-1 px-5 md:py-2 md:px-6'>
      {children}
      <div className="star-1">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 784.11 815.53"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'optimizeQuality',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }}
          version="1.1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            className="fil0"
          ></path>
        </svg>
      </div>
      <div className="star-2">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 784.11 815.53"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'optimizeQuality',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }}
          version="1.1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            className="fil0"
          ></path>
        </svg>
      </div>
      <div className="star-3">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 784.11 815.53"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'optimizeQuality',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }}
          version="1.1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            className="fil0"
          ></path>
        </svg>
      </div>
      <div className="star-4">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 784.11 815.53"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'optimizeQuality',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }}
          version="1.1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            className="fil0"
          ></path>
        </svg>
      </div>
      <div className="star-5">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 784.11 815.53"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'optimizeQuality',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }}
          version="1.1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            className="fil0"
          ></path>
        </svg>
      </div>
      <div className="star-6">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 784.11 815.53"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'optimizeQuality',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }}
          version="1.1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            className="fil0"
          ></path>
        </svg>
      </div>
    </Link>
  );
};

export default StarButton;
