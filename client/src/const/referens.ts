export const REFERENC = {
  ABOUT: 'ABOUT',
  PROMO: 'PROMO',
  DEVELOPERS: 'DEVELOPERS',
  PARENS: 'PARENS',
  QUESTIONS: 'FIND',
} as const;

export const REFERENC_TITLE: Record<ReferenceTypes | string, string> = {
  [REFERENC.ABOUT]: 'Что такое RS FILMS',
  [REFERENC.PROMO]: 'Как получить доступ к фильмам',
  [REFERENC.QUESTIONS]: 'Все ли фильмы есть в приложении ',
  [REFERENC.PARENS]: 'Родительский котроль ',
  [REFERENC.DEVELOPERS]: 'Разработчики',
};

export const REFERENC_DESCRIP: Record<ReferenceTypes, string> = {
  [REFERENC.ABOUT]: 'RS FILMS - это приложение для просмотра фильмов, сериалов, мультфильмов и всего прочего',
  [REFERENC.PROMO]: 'Необходимо оформить подписку ПРЕМИУМ. В личном профиле - вкладка - подписки.',
  [REFERENC.DEVELOPERS]: 'Данный раздел находится в разработке)))',
  [REFERENC.PARENS]:
    'Родительский контроль - это режим работы приложения, обеспечивающий доспут вашему ребенка до контента, подходяшего ему по возрасту. Родительский котроль доступен на тарифе ПРЕМИУМ',
  [REFERENC.QUESTIONS]: 'К сожалению нет, мы ограничены функциональностью нашей API',
};
