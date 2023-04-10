import React from 'react';

// @ts-ignore
const FormErrorMessage: React.FC = ({ children }) => (
  <div className="form-field-error">{children}</div>
);

export default FormErrorMessage;
