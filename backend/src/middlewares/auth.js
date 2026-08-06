import jwt from 'jsonwebtoken';

import ApiError from './ApiError.js';

export function protect(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    next(new ApiError(401, 'UNAUTHORIZED', 'Token no provisto'));
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    next(new ApiError(401, 'UNAUTHORIZED', 'Token inválido o expirado'));
  }
}

export function adminOnly(req, res, next) {
  if (req.user?.role !== 'admin') {
    next(new ApiError(403, 'FORBIDDEN', 'Requiere rol de administrador'));
    return;
  }

  next();
}
