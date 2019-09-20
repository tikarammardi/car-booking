module.exports = app => {
  app.get('/json', (req, res) => {
    res.send(drivers);
  });
};

const drivers = [
  {
    id: 0,
    name: 'Carson Byers',
    price: 15
  },
  {
    id: 1,
    name: 'Chaker Hangover',
    price: 18
  },
  {
    id: 2,
    name: 'Baker Simmons',
    price: 20
  }
];
