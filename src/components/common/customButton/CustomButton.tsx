import { ReactNode } from 'react';

import './CustomButton.less';
import { Button } from 'antd';
import { ButtonType } from 'antd/es/button';

interface CustomButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: ButtonType | undefined;
  isLoading?: boolean;
  isError?: boolean;
  disabled?: boolean,
}

export default function CustomButton({
  children,
  onClick,
  type,
  isLoading,
  isError,
  disabled,
}: CustomButtonProps) {
  return (
    <div className="customButtonWrapper">
      <Button shape="round" type={type} onClick={onClick} disabled={isLoading || disabled} className={disabled ? "customButton disabled" : "customButton"}>
        {children}
      </Button>
    </div>
  );
}
