import { useTranslation } from "react-i18next";

import './Login.less';
import {
  BenefitsList,
  Description,
  LanguagesSelector,
  LoginForm,
  RegistrationForm,
  TabButtonsList,
  Title
} from '../../components';

export default function Login() {
  const { t } = useTranslation();

  const benefits: string[] = t("benefits", { returnObjects: true });
  const tabButtons: {key: string, label: string, children: () => JSX.Element}[] = [
    {
      label: t("login"),
      key: 'login',
      children: LoginForm
    },
    {
      label:  t("registration"),
      key: 'registration',
      children: RegistrationForm
    },
  ];

  return (
    <div className="contentWrapper">
      <div className="descriptionWrapper">
        <Title text={t("auth_title")} />
        <Description text={t("auth_description")}/>
        <BenefitsList benefits={benefits} />
      </div>

      <div className="formSection">
        <div className="formColumn">
          <TabButtonsList tabButtons={tabButtons.map((tabButton) => {
            const Node = tabButton.children;

            return {
              key: tabButton.key,
              label: tabButton.label,
              children: <Node />,
            };
          })} />
        </div>
      </div>

      <div className="selectWrapper">
        <LanguagesSelector />
      </div>
    </div>
  )
}
