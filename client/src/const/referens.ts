export const REFERENC = {
  ABOUT: 'ABOUT',
  PROMO: 'PROMO',
  DEVELOPERS: 'DEVELOPERS',
  PARENS: 'PARENS',
  FIND: 'FIND',
} as const;

export const REFERENC_TITLE: Record<ReferenceTypes | string, string> = {
  [REFERENC.ABOUT]: 'Что такое RS FILMS',
  [REFERENC.PROMO]: 'Как ввести промокоды',
  [REFERENC.DEVELOPERS]: 'Разработчики',
  [REFERENC.PARENS]: 'Родительский контроль',
  [REFERENC.FIND]: 'Как найти фильм',
};

export const REFERENC_DESCRIP: Record<ReferenceTypes, string> = {
  [REFERENC.ABOUT]:
    '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quaerat saepe vero accusamus eos dolorum! Minima dolorum corporis quisquam fuga?',
  [REFERENC.PROMO]:
    '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quaerat saepe vero accusamus eos dolorum! Minima dolorum corporis quisquam fuga?',
  [REFERENC.DEVELOPERS]:
    '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quaerat saepe vero accusamus eos dolorum! Minima dolorum corporis quisquam fuga?',
  [REFERENC.PARENS]:
    '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quaerat saepe vero accusamus eos dolorum! Minima dolorum corporis quisquam fuga?',
  [REFERENC.FIND]:
    '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quaerat saepe vero accusamus eos dolorum! Minima dolorum corporis quisquam fuga?',
};
