const Product = require('./product.model');

exports.getAllProducts = async () => {
  return Product.find({});
};

exports.getProductById = async (id) => {
  return Product.findById(id);
};

exports.createProduct = async (productData) => {
  const product = new Product(productData);
  return product.save();
};

exports.updateProduct = async (id, productData) => {
  return Product.findByIdAndUpdate(id, productData, { new: true });
};

exports.deleteProduct = async (id) => {
  return Product.findByIdAndDelete(id);
};
