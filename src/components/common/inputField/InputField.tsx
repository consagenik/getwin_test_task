import { useEffect, useRef, useState } from 'react';
import { ErrorMessage, useFormikContext } from 'formik';
import { Input } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';

import './InputField.less';
import FormErrorMessage from '../formErrorMessage/FormErrorMessage';
import { PasswordVisibleIcon, PasswordInvisibleIcon, ErrorMessageIcon } from '../../../assets/images';
import { KeyIcon } from '../../../assets/icons';
import { CustomErrorMessage, PasswordGenerator, TransparentIconButton } from '../..';
import { useClickOutside } from '../../../hooks';

interface InputFieldProps {
  name: string;
  value: string | number | undefined;
  placeholder: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (key: string, value: string) => void;
  error?: string | undefined;
  label?: string;
  onKeyUp?: () => void;
  type?: string;
  children?: any;
  size?: SizeType;
  showGeneratePasswordButton?: boolean;
  handleGeneratedPassword?: (value: string) => void;
}

export default function InputField({
  name,
  placeholder,
  label,
  error,
  value,
  onChange,
  onKeyUp,
  type,
  children,
  size,
  showGeneratePasswordButton,
  handleGeneratedPassword,
}: InputFieldProps) {
  const { errors, touched } = useFormikContext();

  const [fieldIsActive, setFieldIsActive] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordGenerator, setShowPasswordGenerator] = useState<boolean>(false);

  const handleGeneratorButtonRef = useRef<HTMLButtonElement>(null);
  const generatorRef = useRef<HTMLDivElement>(null);

  useClickOutside(generatorRef, () => setShowPasswordGenerator(false), handleGeneratorButtonRef.current);

  function handleFocus() {
    setFieldIsActive(true);
  }

  function handleBlur() {
    setFieldIsActive(false);
  }

  function getFieldClassName() {
    return fieldIsActive ? value ? 'inputField inputFieldFilled' : 'inputField inputFieldActive' : 'inputField';
  }

  function applyGeneratedPassword(value: string) {
    if (handleGeneratedPassword) {
      handleGeneratedPassword(value);
    }
    setShowPasswordGenerator(false);
  }

  return (
    <div className="inputField">
      <label htmlFor={name}>
        {label && <label htmlFor={name}>{label}</label>}
        <div className="inputWrap">
          <div className="inputContainer">
            <div className={getFieldClassName()}>
              <Input
                size={size || "large"}
                id={name}
                type={showPassword ? 'text' : (type || 'text')}
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(name, event.target.value)}
                onKeyUp={onKeyUp}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="field"
              />
              <div className="fieldButtons">
                {type === 'password' && (showGeneratePasswordButton && (
                  <TransparentIconButton ref={handleGeneratorButtonRef} onClick={() => setShowPasswordGenerator(!showPasswordGenerator)}>
                    <KeyIcon {...(showPasswordGenerator ? {color: "#4E5AF2"} : {})} />
                  </TransparentIconButton>
                ))}
                {type === 'password' && (
                  <TransparentIconButton onClick={() => setShowPassword(!showPassword)}>
                    <img src={showPassword ? PasswordVisibleIcon : PasswordInvisibleIcon} alt={showPassword ? "Hide password" : "Show password"} />
                  </TransparentIconButton>
                )}
              </div>
              {showPasswordGenerator && (
                <PasswordGenerator ref={generatorRef} applyGeneratedPassword={applyGeneratedPassword} />
              )}
            </div>
            <CustomErrorMessage
              backendError={error}
              // @ts-ignore
              formikError={!error ? errors[name] : undefined}
              // @ts-ignore
              formikTouched={!error ? touched[name] : undefined}
              formikName={name}
            />
          </div>
          <div className="childrenContainer">
            {children}
          </div>
        </div>
      </label>
    </div>
  );
}
