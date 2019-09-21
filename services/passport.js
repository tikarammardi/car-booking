const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');
passport.serializeUser((user, done) => {
  //1st arg user model from db
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id, displayName, emails } = profile;
        console.log(emails[0].value);
        const existingUser = await User.findOne({ googleId: id });

        if (existingUser) {
          //we already have a record with the given profile Id no need to do anything
          return done(null, existingUser);
        }
        //we dont have any record
        const user = await new User({
          googleId: id,
          name: displayName,
          email: emails[0].value
        }).save();
        done(null, user);
      } catch (error) {
        console.error(error);
      }
    }
  )
);
