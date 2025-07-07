const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory storage (use database in production)
let products = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: '🎧',
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise cancellation',
    stock: 50,
    rating: 4.8,
    reviews: 234
  },
  {
    id: '2',
    name: 'Luxury Smart Watch',
    price: 599.99,
    image: '⌚',
    category: 'Electronics',
    description: 'Premium smartwatch with health tracking and GPS',
    stock: 25,
    rating: 4.9,
    reviews: 189
  },
  {
    id: '3',
    name: 'Designer Sunglasses',
    price: 199.99,
    image: '🕶️',
    category: 'Fashion',
    description: 'Stylish designer sunglasses with UV protection',
    stock: 75,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'Professional Camera',
    price: 1299.99,
    image: '📷',
    category: 'Electronics',
    description: 'High-resolution professional camera for photographers',
    stock: 15,
    rating: 4.9,
    reviews: 89
  },
  {
    id: '5',
    name: 'Luxury Backpack',
    price: 149.99,
    image: '🎒',
    category: 'Fashion',
    description: 'Premium leather backpack with multiple compartments',
    stock: 40,
    rating: 4.6,
    reviews: 278
  },
  {
    id: '6',
    name: 'Gaming Keyboard',
    price: 179.99,
    image: '⌨️',
    category: 'Electronics',
    description: 'Mechanical gaming keyboard with RGB lighting',
    stock: 60,
    rating: 4.8,
    reviews: 345
  }
];

let orders = [];
let carts = {}; // Store carts by session ID

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/product/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'product.html'));
});

app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cart.html'));
});

// API Routes
app.get('/api/products', (req, res) => {
  const { category, search, sortBy, limit } = req.query;
  let filteredProducts = [...products];

  // Filter by category
  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Search functionality
  if (search) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sort products
  if (sortBy) {
    switch (sortBy) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
  }

  // Limit results
  if (limit) {
    filteredProducts = filteredProducts.slice(0, parseInt(limit));
  }

  res.json({
    success: true,
    products: filteredProducts,
    total: filteredProducts.length
  });
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.json({ success: true, product });
});

app.post('/api/cart/add', (req, res) => {
  const { sessionId, productId, quantity = 1 } = req.body;
  
  if (!sessionId || !productId) {
    return res.status(400).json({ success: false, message: 'Session ID and Product ID required' });
  }

  const product = products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }

  if (product.stock < quantity) {
    return res.status(400).json({ success: false, message: 'Insufficient stock' });
  }

  if (!carts[sessionId]) {
    carts[sessionId] = [];
  }

  const existingItem = carts[sessionId].find(item => item.productId === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    carts[sessionId].push({
      id: uuidv4(),
      productId,
      quantity,
      addedAt: new Date()
    });
  }

  res.json({ 
    success: true, 
    message: 'Product added to cart',
    cartCount: carts[sessionId].reduce((sum, item) => sum + item.quantity, 0)
  });
});

app.get('/api/cart/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  const cart = carts[sessionId] || [];
  
  const cartWithProducts = cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    return {
      ...item,
      product,
      subtotal: product ? product.price * item.quantity : 0
    };
  });

  const total = cartWithProducts.reduce((sum, item) => sum + item.subtotal, 0);

  res.json({
    success: true,
    cart: cartWithProducts,
    total,
    itemCount: cart.reduce((sum, item) => sum + item.quantity, 0)
  });
});

app.put('/api/cart/update', (req, res) => {
  const { sessionId, itemId, quantity } = req.body;
  
  if (!carts[sessionId]) {
    return res.status(404).json({ success: false, message: 'Cart not found' });
  }

  const item = carts[sessionId].find(item => item.id === itemId);
  if (!item) {
    return res.status(404).json({ success: false, message: 'Item not found in cart' });
  }

  if (quantity <= 0) {
    carts[sessionId] = carts[sessionId].filter(item => item.id !== itemId);
  } else {
    item.quantity = quantity;
  }

  res.json({ 
    success: true, 
    message: 'Cart updated',
    cartCount: carts[sessionId].reduce((sum, item) => sum + item.quantity, 0)
  });
});

app.delete('/api/cart/remove', (req, res) => {
  const { sessionId, itemId } = req.body;
  
  if (!carts[sessionId]) {
    return res.status(404).json({ success: false, message: 'Cart not found' });
  }

  carts[sessionId] = carts[sessionId].filter(item => item.id !== itemId);

  res.json({ 
    success: true, 
    message: 'Item removed from cart',
    cartCount: carts[sessionId].reduce((sum, item) => sum + item.quantity, 0)
  });
});

app.post('/api/checkout', (req, res) => {
  const { sessionId, customerInfo } = req.body;
  
  if (!carts[sessionId] || carts[sessionId].length === 0) {
    return res.status(400).json({ success: false, message: 'Cart is empty' });
  }

  const cart = carts[sessionId];
  const orderItems = cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    return {
      productId: item.productId,
      name: product.name,
      price: product.price,
      quantity: item.quantity,
      subtotal: product.price * item.quantity
    };
  });

  const total = orderItems.reduce((sum, item) => sum + item.subtotal, 0);

  const order = {
    id: uuidv4(),
    sessionId,
    customerInfo,
    items: orderItems,
    total,
    status: 'pending',
    createdAt: new Date()
  };

  orders.push(order);

  // Update stock
  cart.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    if (product) {
      product.stock -= item.quantity;
    }
  });

  // Clear cart
  delete carts[sessionId];

  res.json({
    success: true,
    message: 'Order placed successfully',
    orderId: order.id,
    total
  });
});

app.get('/api/orders/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  const userOrders = orders.filter(order => order.sessionId === sessionId);
  
  res.json({
    success: true,
    orders: userOrders
  });
});

// Analytics endpoint
app.get('/api/analytics', (req, res) => {
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
  
  const productSales = {};
  orders.forEach(order => {
    order.items.forEach(item => {
      if (!productSales[item.productId]) {
        productSales[item.productId] = { quantity: 0, revenue: 0 };
      }
      productSales[item.productId].quantity += item.quantity;
      productSales[item.productId].revenue += item.subtotal;
    });
  });

  res.json({
    success: true,
    analytics: {
      totalOrders,
      totalRevenue,
      averageOrderValue,
      totalProducts: products.length,
      productSales
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 LUXE E-commerce Server running on port ${PORT}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
});