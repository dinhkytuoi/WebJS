// middlewares/validate.js
module.exports = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.issues.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }));
      return res.status(400).json({ message: 'Validation failed', errors });
    }
  
    req.body = result.data; // Dữ liệu đã được xác thực
    next();
  };
  