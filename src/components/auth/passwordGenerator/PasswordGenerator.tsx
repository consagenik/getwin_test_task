import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './PasswordGenerator.less';
import { TransparentIconButton } from '../..';
import { CopyIcon, RestartIcon } from '../../../assets/icons';

interface PasswordGeneratorProps {
  applyGeneratedPassword: (value: string) => void;
}

function generatePassword(passwordLength: number) {
  const numberChars = "0123456789";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghiklmnopqrstuvwxyz";
  const allChars = numberChars + upperChars + lowerChars;
  let randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray = randPasswordArray.fill(allChars, 3);
  return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const PasswordGenerator = React.forwardRef<HTMLDivElement, PasswordGeneratorProps>(({ applyGeneratedPassword }, ref) => {
  const { t } = useTranslation();
  const [generatedPassword, setGeneratedPassword] = useState<string>('');

  useEffect(() => {
    setGeneratedPassword(generatePassword(10));
  }, [])

  function copyGeneratedPassword() {
    navigator.clipboard.writeText(generatedPassword);
  }

  function regeneratePassword() {
    setGeneratedPassword(generatePassword(10));
  }

  return (
    <div ref={ref} className="passwordGenerator">
      <div className="generatePasswordWrapped">
        <span>{generatedPassword}</span>
        <div className="buttonsWrapper">
          <TransparentIconButton onClick={copyGeneratedPassword}>
            <CopyIcon />
          </TransparentIconButton>
          <TransparentIconButton onClick={regeneratePassword}>
            <RestartIcon />
          </TransparentIconButton>
        </div>
      </div>
      <button className="applyGeneratedPassword" type="button" onClick={() => applyGeneratedPassword(generatedPassword)}>
        {t("apply_generated_password")}
      </button>
    </div>
  )
});

export default PasswordGenerator;
