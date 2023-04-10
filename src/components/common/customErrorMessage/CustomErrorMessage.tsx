import { ErrorMessage } from 'formik';

import './CustomErrorMessage.less';
import { ErrorMessageIcon } from '../../../assets/images';
import { FormErrorMessage } from '../..';

interface CustomErrorMessageProps {
  backendError?: string;
  formikError?: any;
  formikTouched?: any;
  formikName?: string;
}

export default function CustomErrorMessage({ backendError, formikError, formikTouched, formikName }: CustomErrorMessageProps) {
  return (
    <div className="formErrorContainer">
      {backendError && (
        <div className="errorMessage">
          <img src={ErrorMessageIcon} alt="Error icon" />
          <span>{backendError}</span>
        </div>
      )}

      {formikError && formikTouched && (
        <div className="errorMessage">
          <img src={ErrorMessageIcon} alt="Error icon" />
          {formikName && <ErrorMessage name={formikName} component={FormErrorMessage} />}
        </div>
      )}
    </div>
  )
}
