const products = [
  {
    id: '1',
    name: 'waterbottle',
    price: '$2'
  },
  {
    id: '2',
    name: 'Banana',
    price: '$1'
  },
  {
    id: '3',
    name: 'Monitor',
    price: '$200'
  },
  {
    id: '4',
    name: 'Laptop',
    price: '$1400'
  }
];

export default (req, res) => {
  res.status(200).json(products);
}