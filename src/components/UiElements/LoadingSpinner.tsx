import React from 'react';
import './LoadingSpinner.scss';

interface LoadingSpinnerProps {
  asOverlay?: boolean;
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = (props) => {
  return (
    <div className={`${props.asOverlay && 'loading-spinner__overlay'}`} style={{ zIndex: 500 }}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
