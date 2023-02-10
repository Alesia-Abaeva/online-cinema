export interface Iitem {
  id: string;
  img: string;
  displayedTitle: string;
  url: string;
  rating?: string;
}

export const genresData: Iitem[] = [
  {
    id: 'anime',
    displayedTitle: 'Аниме',
    url: '/collection/anime',
    img: 'https://avatars.mds.yandex.net/get-ott/1534341/2a000001843864cc7034123a70c2335705ec/720x360',
  },
  {
    id: 'triller',
    displayedTitle: 'Триллеры',
    url: '/collection/triller',
    img: 'https://avatars.mds.yandex.net/get-ott/239697/2a00000184388fae65f740ea391765d55e4f/720x360',
  },
  {
    id: 'fantasy',
    displayedTitle: 'Фэнтези',
    url: '/collection/fantasy',
    img: 'https://avatars.mds.yandex.net/get-ott/1652588/2a0000018438661c1d5d9534909bb30d0a26/720x360',
  },
  {
    id: 'action-movie',
    displayedTitle: 'Боевики',
    url: '/collection/action-movie',
    img: 'https://avatars.mds.yandex.net/get-ott/1534341/2a000001843847ce092f99de54ec03f9908f/720x360',
  },
  {
    id: 'comedy',
    displayedTitle: 'Комедии',
    url: '/collection/comedy',
    img: 'https://avatars.mds.yandex.net/get-ott/223007/2a0000018438302568b271ccc82563762fda/720x360',
  },
  {
    id: 'fiction',
    displayedTitle: 'Фантастика',
    url: '/collection/fiction',
    img: 'https://avatars.mds.yandex.net/get-ott/1534341/2a000001843844c85b8b9074853af40c5f51/720x360',
  },
  {
    id: 'detective',
    displayedTitle: 'Детективы',
    url: '/collection/detective',
    img: 'https://avatars.mds.yandex.net/get-ott/1534341/2a0000018438799210583ef1dd416bad351a/720x360',
  },
  {
    id: 'melodrama',
    displayedTitle: 'Мелодрамы',
    url: '/collection/melodrama',
    img: 'https://avatars.mds.yandex.net/get-ott/1534341/2a00000184387ced83a0309d9dbd841184f9/720x360',
  },
  {
    id: 'criminal',
    displayedTitle: 'Криминальные',
    url: '/collection/criminal',
    img: 'https://avatars.mds.yandex.net/get-ott/374297/2a000001843888a15f3b7d0e8712c608e238/720x360',
  },
  {
    id: 'adventure',
    displayedTitle: 'Приключения',
    url: '/collection/adventure',
    img: 'https://avatars.mds.yandex.net/get-ott/2439731/2a000001843865926b014c8f0d542b7c3205/720x360',
  },
];
