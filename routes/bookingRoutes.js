module.exports = app => {
  app.post('/booking', (req, res) => {
    console.log(req.body);
  });
};
