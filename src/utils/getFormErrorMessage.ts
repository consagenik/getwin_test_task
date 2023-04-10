export default function getFormErrorMessage(errorsObject: {[key: string]: any}, key: string) {
  return typeof errorsObject === 'object'
    ? errorsObject[key]
      && `* ${errorsObject[key].charAt(0).toUpperCase()}${errorsObject[
        key
      ].substring(1)}`
    : undefined;
}