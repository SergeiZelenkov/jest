import calculateTotal from '../calculate';

test('basic test', () => {
  const result = 4;
  expect(result).toBe(4);
});

test('calclulateTotal sum without discount', () => {
  const list = [
    {
      id: 456,
      name: 'Mumu',
      count: 3,
      price: 400,
    },
    {
      id: 77,
      name: 'JaveScript',
      count: 1,
      price: 1300,
    },
  ];
  const result = calculateTotal(list);
  expect(result).toBeCloseTo(2500);
});

test('calclulateTotal sum with discount', () => {
  const list = [
    {
      id: 456,
      name: 'Mumu',
      count: 3,
      price: 401,
    },
    {
      id: 77,
      name: 'JaveScript',
      count: 1,
      price: 1300,
    },
  ];
  const result = calculateTotal(list, true);
  expect(result).toBeCloseTo(2230.173);
});
