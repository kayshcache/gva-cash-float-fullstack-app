import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from '../models/userModel';

const User = mongoose.model('User', UserSchema);

export const loginRequired = (req, res, next) => {
  if (req.user) next();
  console.log('WARNING: Unauthorized user attempted to access API');
  return res.status(401).json({msg: 'Unauthorized user'});
}

export const register = (req, res) => {
  const newUser = new User(req.body);
  newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
  newUser.save((err, user) => {
    if (err) return res.status(400).send({msg: err})
    user.hashPassword = '************';
    return res.json(user);
  });
}

export const login = (req, res) => {
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    if (err) throw err;
    if (!user) res.status(401).json({msg: 'No such user'});
    if (!user.comparePassword(req.body.password, user.hashPassword)) {
      res.status(401).json({msg: 'Bad password'});
    } else {
      return res.json({
	token: jwt.sign({email: user.email, username: user.username, _id: user.id}, process.env.JWT_KEY)
      });
    }
  });
}
