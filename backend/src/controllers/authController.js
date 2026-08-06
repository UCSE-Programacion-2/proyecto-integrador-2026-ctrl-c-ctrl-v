import jwt from 'jsonwebtoken';

import ApiError from '../middlewares/ApiError.js';
import User from '../models/User.js';

function generateToken(user) {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
}

export async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new ApiError(400, 'BAD_REQUEST', 'name, email y password son obligatorios');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ApiError(400, 'BAD_REQUEST', 'Ya existe un usuario con ese email');
    }

    const user = await User.create({ name, email, password });

    res.status(201).json({
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new ApiError(400, 'BAD_REQUEST', 'email y password son obligatorios');
    }

    const user = await User.findOne({ email });
    const isValid = user ? await user.comparePassword(password) : false;

    if (!isValid) {
      throw new ApiError(401, 'UNAUTHORIZED', 'Credenciales inválidas');
    }

    const token = generateToken(user);

    res.status(200).json({
      user: { id: user._id, name: user.name, role: user.role },
      token,
    });
  } catch (error) {
    next(error);
  }
}
