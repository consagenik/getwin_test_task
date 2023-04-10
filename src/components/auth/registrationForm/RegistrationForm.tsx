import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Divider } from 'antd';
import _ from 'lodash';
import {
  Form,
  Formik,
  FormikHelpers,
  FormikProps
} from 'formik';

import './RegistrationForm.less';
import { useAuthActions } from '../../../state/hooks/useActions';
import { CustomButton, InputField, SubmitButton } from '../..';
import { FormValues, initialValues, socialNetworks, validationSchema } from './data';
import { getFormErrorMessage } from '../../../utils';
import { useAppSelector } from '../../../state/hooks';

export default function RegistrationForm() {
  const { t } = useTranslation();
  const authActions = useAuthActions();
  const { isBusy } = useAppSelector((state) => state.auth);

  const [errorMessage, setErrorMessage] = useState<any>({});

  const isLoadingRef = useRef<boolean>(false);

  const fieldsList = [
    {
      name: 'email',
      placeholder: t("email_address_field_placeholder"),
      valueKey: 'email',
      label: t("email_address_field_title"),
      type: 'text',
    },
    {
      name: 'password',
      placeholder: t("password_address_field_placeholder"),
      valueKey: 'password',
      label: t("password_address_field_title"),
      type: 'password',
    },
    {
      name: 'confirmPassword',
      placeholder: t("password_confirmation_address_field_placeholder"),
      valueKey: 'confirmPassword',
      label: t("password_confirmation_address_field_title"),
      type: 'password',
    },
  ]

  useEffect(() => {
    if (!isBusy) {
      isLoadingRef.current = false;
    }
  }, [isBusy])

  function onSubmit(
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>,
  ) {
    if (!isLoadingRef.current) {
      setSubmitting(false);
      isLoadingRef.current = true;
      authActions.registerUser(values);
    }
  }

  function handleKeyUp(key: string) {
    setErrorMessage(typeof errorMessage === 'object' ? { ...errorMessage, [key]: undefined } : errorMessage);
  }

  function handleGeneratedPassword(value: string, setFieldValue: (key: string, value: string) => void) {
    setErrorMessage(typeof errorMessage === 'object' ? { ...errorMessage, password: undefined } : errorMessage);
    setFieldValue('password', value);
  }

  const renderForm = ({
    values,
    errors,
    touched,
    setFieldValue,
  }: FormikProps<FormValues>) => {
    return (
      <Form>
        <div className="formContent">
          {_.map(fieldsList, (field) => (
            <InputField
              key={field.name}
              name={field.name}
              onChange={setFieldValue}
              onKeyUp={() => handleKeyUp(field.name)}
              placeholder={field.placeholder}
              // @ts-ignore
              value={values[field.valueKey]}
              error={typeof errorMessage === 'object' ? getFormErrorMessage(errorMessage, field.valueKey) : undefined}
              label={field.label}
              type={field.type}
              showGeneratePasswordButton={field.name === 'password'}
              {...(field.name === 'password' ? { handleGeneratedPassword: (value: string) => handleGeneratedPassword(value, setFieldValue) } : {})}
            />
          ))}
  
          <SubmitButton
            isLoading={isLoadingRef.current}
            isError={touched && Object.keys(errors).length > 0}
            text={t("registration_button_text")}
            disabled={touched && Object.keys(errors).length > 0}
          />
        </div>
        {typeof errorMessage === 'string' && (<p className="extraErrorMessage">{errorMessage}</p>)}
      </Form>
    );
  };

  return (
    <div className="registrationFormWrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnBlur
        enableReinitialize
      >
        {renderForm}
      </Formik>

      <Divider style={{margin: 0}} className="divider" plain>{t("social_networks_login_description")}</Divider>

      <div className="socialNetworkButtons">
        {_.map(socialNetworks, (socialNetwork) => (
          <CustomButton key={socialNetwork.key} onClick={() => console.log(socialNetwork.url)}>
            <img src={socialNetwork.icon} alt={socialNetwork.key} />
          </CustomButton>
        ))}
      </div>
    </div>
  )
}
