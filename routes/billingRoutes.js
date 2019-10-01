const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecreteKey);
const requireLogin = require('../middlewares/requireLogin');
module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    try {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: 'Pay for your ride',
        source: req.body.id
      });

      req.user.credits += 5;
      const user = await req.user.save();
      res.send(user);
    } catch (error) {
      console.error(error);
    }
  });
};
