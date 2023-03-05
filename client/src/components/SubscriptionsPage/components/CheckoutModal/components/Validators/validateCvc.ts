export const validateCvc = (paymentSys: string | boolean, cvc: string): boolean => {
  if (paymentSys === 'amex') return cvc.length === 4;
  return cvc.length === 3;
};
