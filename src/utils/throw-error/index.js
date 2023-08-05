export function throwError(name, message, constructor, options) {
  const error = new Error();
  error.name = name.concat(' 🚨');
  error.message = message;

  Error.captureStackTrace(error, constructor);

  if (options) {
    for (const key in options) error[key] = options[key];
  }

  throw error;
}
