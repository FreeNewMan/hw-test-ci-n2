import sortHeroList from '../hero';

const inList = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

const outList = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];
  
describe('Cписок героев ', () => {
  test('Проверка сортировки', () => {
    const result = sortHeroList(inList);   
    expect(result).toEqual(outList);
  });
});