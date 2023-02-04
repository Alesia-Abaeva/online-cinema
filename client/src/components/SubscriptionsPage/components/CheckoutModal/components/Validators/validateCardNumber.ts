export const validateCardNumber = (number: string): boolean | PaymentSystem => {
  const visa = /^4\d{12}(?:\d{3})?$/;
  const mc = /^5[1-5]\d{14}$/;
  const amEx = /^3[47][0-9]{13}$/;

  if (visa.test(number)) {
    return 'mastercard';
  }
  if (mc.test(number)) {
    return 'visa';
  }
  if (amEx.test(number)) {
    return 'amex';
  }
  return false;
};
