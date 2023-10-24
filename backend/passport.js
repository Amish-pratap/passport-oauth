const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID =
  "547937747337-ns4m1sv6141f6qmkhuhiua2gk5c0164t.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);

      //   const user={
      //     username: profile.displayName,
      //     avatar: profile.photos[0],
      //   }                                      for mongo
      //   user.sav
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
