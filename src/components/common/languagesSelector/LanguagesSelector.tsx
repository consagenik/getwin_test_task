import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './LanguagesSelector.less';
import { ArrowDownIcon } from '../../../assets/images';
import { languages } from './data';

export default function LanguagesSelector() {
  const { i18n } = useTranslation();

  const [languagesListOpened, setLanguagesListOpened] = useState<boolean>(false);

  function changeLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  return (
    <div className="select">
      {languagesListOpened && (
        <div className="selectContent">
          {languages.map((language) => {
            return <button type="button" onClick={() => changeLanguage(language.key)}>{language.label}</button>;
          })}
        </div>
      )}

      <button
        className="selectButton"
        type="button"
        onClick={() => setLanguagesListOpened(!languagesListOpened)}
      >
        <span>{languages.find((lang) => lang.key === i18n.language)?.shortLabel || languages[0].shortLabel}</span>
        <img className={languagesListOpened ? "arrowDown opened" : "arrowDown"} src={ArrowDownIcon} alt="Open languages list" />
      </button>
    </div>
  )
}
