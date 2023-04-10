import React from 'react';
import './TransparentIconButton.less';

interface TransparentIconButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const TransparentIconButton = React.forwardRef<HTMLButtonElement, TransparentIconButtonProps>(({ onClick, children }, ref) => {
  return (
    <button ref={ref} className="transparentIconButton" type="button" onClick={onClick}>
      {children}
    </button>
  )
});

export default TransparentIconButton;
