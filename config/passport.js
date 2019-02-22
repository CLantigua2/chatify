const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt
const mongoose = require("mongoose")
const User = mongoose.model("users")

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.SECRETORKEY || "secret"

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log(jwt_payload)
      User.findById(jwt_payload.id)
        .then(user => {
          user ? done(null, user) : done(null, false)
        })
        .catch(err => console.error(err))
    })
  )
}
