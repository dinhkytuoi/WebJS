// validators/schemas.js
const { z } = require('zod');

// 1. Đăng ký tài khoản
const registerSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6).max(16),
  phone_number: z.string().length(10),
  role: z.enum(['admin', 'user']).optional(),
});

// 2. Đăng nhập
const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

// 3. Thêm sản phẩm
const productSchema = z.object({
  p_name: z.string().max(80),
  p_cash: z.number().int().positive(),
  p_label: z.string().max(20),
  p_information: z.string().max(3500),
  p_download_link: z.string().url().optional(),
  p_images: z.string().optional(), // nếu là base64/image URL
  p_video_url: z.string().url().optional(),
  p_quantity: z.number().int().nonnegative().optional(),
  is_deleted: z.boolean().optional(),
});

// 4. Thêm vào giỏ hàng
const cartSchema = z.object({
  uid: z.number().int(),
  pid: z.number().int(),
  quantity: z.number().int().min(1).optional(),
});

// 5. Tạo đơn hàng
const checkoutSchema = z.object({
  uid: z.number().int(),
  address: z.string().max(1000),
  phone: z.number().int(),
});

module.exports = {
  registerSchema,
  loginSchema,
  productSchema,
  cartSchema,
  checkoutSchema,
};
