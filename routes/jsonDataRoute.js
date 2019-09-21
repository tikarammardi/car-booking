module.exports = app => {
  app.get('/api/json', (req, res) => {
    res.send(data);
  });
};

const data = {
  car: {
    nickName: 'Vanilla',
    registrationNumber: 'HJ86SZGP',
    make: 'Honda',
    model: 'Jazz',
    year: 2018,
    seatNumber: 5
  },
  drivers: [
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
  ]
};
