import React from 'react';

import './SubmitButton.less';
import { Button } from 'antd';

interface SubmitButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isLoading?: boolean;
  isError?: boolean;
  disabled?: boolean,
}

export default function SubmitButton({
  text,
  onClick,
  type,
  isLoading,
  isError,
  disabled,
}: SubmitButtonProps) {
  return (
    <div className="submitButtonWrapper">
      <Button htmlType="submit" shape="round" type="primary" onClick={onClick} disabled={isLoading || disabled} className={disabled ? "submitButton disabled" : "submitButton"}>
        {text}
      </Button>
    </div>
  );
}
