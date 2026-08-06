import ApiError from './ApiError.js';

export function notFound(req, res, next) {
  next(new ApiError(404, 'NOT_FOUND', `Ruta no encontrada: ${req.method} ${req.originalUrl}`));
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ error: { code: err.code, message: err.message } });
    return;
  }

  if (err.name === 'ValidationError') {
    res.status(400).json({ error: { code: 'BAD_REQUEST', message: err.message } });
    return;
  }

  if (err.name === 'CastError') {
    res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Recurso no encontrado' } });
    return;
  }

  if (err.code === 11000) {
    res.status(400).json({ error: { code: 'BAD_REQUEST', message: 'El recurso ya existe' } });
    return;
  }

  console.error(err);
  res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: 'Error interno del servidor' } });
}
