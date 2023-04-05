const { body } = require('express-validator');

exports.validateProduct = [
  body('name', '產品名稱不能為空').notEmpty(),
  body('description', '產品描述不能為空').notEmpty(),
  body('price', '產品價格必須為數字').isNumeric(),
  body('category', '產品類別不能為空').notEmpty(),
];
