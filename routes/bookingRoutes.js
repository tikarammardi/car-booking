module.exports = app => {
  app.post('/api/booking', (req, res) => {
    console.log(req.body);
  });

  //app.get('/booking')
};
