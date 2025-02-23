const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

// Попередні існуючі роути...

// Новий роут для пошуку продукту за id
router.get('/products/id/:id', (request, response) => {
  const { id } = request.params; // Отримуємо id з параметрів URL
  
  // Перетворюємо id на число, оскільки в масиві id є числом
  const productId = parseInt(id);
  
  // Знаходимо продукт за id
  const product = products.find(product => product.id === productId);
  
  // Перевіряємо, чи знайдено продукт
  if (product) {
    response.json(product); // Повертаємо знайдений продукт
  } else {
    // Якщо продукт не знайдений, повертаємо помилку
    response.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;