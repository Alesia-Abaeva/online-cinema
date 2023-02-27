import { getPersonsWithJob } from 'src/components/FilmPage/Handlers/film-data-formaters';

describe('getPersonsWithJob', () => {
  const personData = [
    {
      id: 1,
      name: 'alex',
      enName: 'lorem',
      photo: 'assets/img/avatar.svg',
      enProfession: 'actor',
      description: 'best actor',
    },
    {
      id: 2,
      name: 'lex',
      enName: 'lorem',
      photo: 'assets/img/avatar.svg',
      enProfession: 'actor',
      description: 'best actor',
    },
    {
      id: 3,
      name: 'max',
      enName: 'lorem',
      photo: 'assets/img/avatar.svg',
      enProfession: 'director',
      description: 'best director',
    },
    {
      id: 4,
      name: '',
      enName: 'lorem',
      photo: 'assets/img/avatar.svg',
      enProfession: 'director',
      description: 'best director',
    },
  ];

  it('should be an array', () => {
    expect(getPersonsWithJob(personData, 'actor')).toBeInstanceOf(Array);
  });

  it('should return an objects array with certain person profession ', () => {
    expect(getPersonsWithJob(personData, 'actor')).toEqual([
      {
        id: 1,
        name: 'alex',
        enName: 'lorem',
        photo: 'assets/img/avatar.svg',
        enProfession: 'actor',
        description: 'best actor',
      },
      {
        id: 2,
        name: 'lex',
        enName: 'lorem',
        photo: 'assets/img/avatar.svg',
        enProfession: 'actor',
        description: 'best actor',
      },
    ]);
    expect(getPersonsWithJob(personData, 'director')).toEqual([
      {
        id: 3,
        name: 'max',
        enName: 'lorem',
        photo: 'assets/img/avatar.svg',
        enProfession: 'director',
        description: 'best director',
      },
    ]);
  });
});
