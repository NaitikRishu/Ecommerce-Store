// Product data for AmazCart SPA
// Each product: id, name, description, price, image, rating, category

const products = [
  // Health
  {
    id: 'health-1',
    name: 'Organic Protein Powder',
    description: 'Plant-based protein powder with 24g of protein per serving. Perfect for post-workout recovery.',
    price: '29.99',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-2',
    name: 'Yoga Mat',
    description: 'Eco-friendly non-slip yoga mat with carrying strap. Perfect for all types of yoga practice.',
    price: '34.99',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-3',
    name: 'Fitness Tracker',
    description: 'Smart fitness tracker with heart rate monitor, sleep tracking, and 7-day battery life.',
    price: '79.99',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-4',
    name: 'Blender Bottle',
    description: 'Leak-proof shaker bottle with stainless steel whisk ball for smooth protein shakes.',
    price: '12.99',
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5f10b8fa?w=400&auto=format&fit=crop',
    rating: '4.5',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-5',
    name: 'Resistance Bands Set',
    description: 'Set of 5 resistance bands with different tension levels for full-body workouts.',
    price: '24.99',
    image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-6',
    name: 'Adjustable Dumbbells',
    description: 'Pair of adjustable dumbbells, perfect for strength training at home.',
    price: '89.99',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-7',
    name: 'Foam Roller',
    description: 'High-density foam roller for muscle recovery and massage.',
    price: '19.99',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-8',
    name: 'Jump Rope',
    description: 'Adjustable speed jump rope for cardio workouts.',
    price: '14.99',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-9',
    name: 'Massage Gun',
    description: 'Deep tissue massage gun for muscle relaxation and recovery.',
    price: '129.99',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-10',
    name: 'Pull-Up Bar',
    description: 'Doorway pull-up bar for upper body strength exercises.',
    price: '39.99',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop',
    rating: '4.5',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-11',
    name: 'Digital Weighing Scale',
    description: 'Accurate digital scale for tracking your fitness progress.',
    price: '24.99',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&auto=format&fit=crop',
    rating: '4.4',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-12',
    name: 'Sports Water Bottle',
    description: 'Insulated water bottle to keep drinks cold during workouts.',
    price: '15.99',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Health',
    inStock: true
  },

// Fashion
  {
    id: 'fashion-1',
    name: 'Classic White Sneakers',
    description: 'Minimalist white leather sneakers with memory foam insole for all-day comfort.',
    price: '89.99',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-2',
    name: 'Slim Fit Jeans',
    description: 'Classic blue denim jeans with stretch fabric for maximum comfort and style.',
    price: '59.99',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-3',
    name: 'Leather Crossbody Bag',
    description: 'Genuine leather crossbody bag with multiple compartments and adjustable strap.',
    price: '129.99',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-4',
    name: 'Cashmere Scarf',
    description: 'Luxuriously soft cashmere scarf available in multiple colors. Perfect for any season.',
    price: '79.99',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-5',
    name: 'Aviator Sunglasses',
    description: 'Classic aviator sunglasses with UV400 protection and polarized lenses.',
    price: '149.99',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-6',
    name: 'Wool Fedora Hat',
    description: 'Stylish wool fedora hat for a classic look.',
    price: '49.99',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-7',
    name: 'Denim Jacket',
    description: 'Vintage wash denim jacket for all seasons.',
    price: '99.99',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-8',
    name: 'Leather Belt',
    description: 'Premium leather belt with silver buckle.',
    price: '34.99',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&auto=format&fit=crop',
    rating: '4.5',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-9',
    name: 'Summer Dress',
    description: 'Lightweight floral summer dress for casual outings.',
    price: '69.99',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-10',
    name: 'Wool Overcoat',
    description: 'Elegant wool overcoat for winter.',
    price: '199.99',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-11',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with breathable mesh.',
    price: '119.99',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-12',
    name: 'Graphic T-Shirt',
    description: '100% cotton graphic tee with modern print.',
    price: '29.99',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Fashion',
    inStock: true
  },

// Mobile
  {
    id: 'mobile-1',
    name: 'Smartphone X Pro',
    description: 'Latest flagship smartphone with 6.7" AMOLED display and 108MP camera.',
    price: '999.99',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-2',
    name: 'Wireless Earbuds Pro',
    description: 'True wireless earbuds with active noise cancellation and 24-hour battery life.',
    price: '199.99',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-3',
    name: 'Portable Power Bank',
    description: '20000mAh power bank with fast charging and dual USB ports.',
    price: '49.99',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-4',
    name: 'Smart Watch 5',
    description: 'Feature-rich smartwatch with health tracking and always-on display.',
    price: '299.99',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-5',
    name: 'Tablet Pro 12.9"',
    description: 'Professional tablet with M1 chip and Liquid Retina XDR display.',
    price: '1099.99',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-6',
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with deep bass and 12-hour battery.',
    price: '59.99',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-7',
    name: 'Phone Tripod Stand',
    description: 'Flexible tripod stand for smartphones and cameras.',
    price: '29.99',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-8',
    name: 'Car Charger',
    description: 'Fast-charging USB car charger for mobile devices.',
    price: '19.99',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-9',
    name: 'Magnetic Phone Mount',
    description: 'Dashboard magnetic phone mount for cars.',
    price: '14.99',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-10',
    name: 'Wireless Charging Pad',
    description: 'Qi-certified wireless charging pad for smartphones.',
    price: '34.99',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-11',
    name: 'Selfie Ring Light',
    description: 'Clip-on selfie ring light for perfect lighting in photos.',
    price: '24.99',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-12',
    name: 'SIM Card Adapter Kit',
    description: 'Universal SIM card adapter kit for all phone sizes.',
    price: '9.99',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&auto=format&fit=crop',
    rating: '4.5',
    category: 'Mobile',
    inStock: true
  },

// Luxury
  {
    id: 'luxury-1',
    name: 'Swiss Automatic Watch',
    description: 'Luxury Swiss-made automatic watch with sapphire crystal and genuine leather strap.',
    price: '2499.99',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-2',
    name: 'Designer Handbag',
    description: 'Iconic designer handbag crafted from premium leather with gold-tone hardware.',
    price: '3499.99',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop',
    rating: '5.0',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-3',
    name: 'Diamond Stud Earrings',
    description: '1 carat total weight diamond stud earrings in 14k white gold.',
    price: '1999.99',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&auto=format&fit=crop',
    rating: '5.0',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-4',
    name: 'Leather Wallet',
    description: 'Handcrafted full-grain leather wallet with RFID protection.',
    price: '299.99',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-5',
    name: 'Cashmere Coat',
    description: '100% pure cashmere overcoat with notched lapels and double-breasted design.',
    price: '1299.99',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-6',
    name: 'Gold Cufflinks',
    description: '18k gold cufflinks for formal occasions.',
    price: '799.99',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-7',
    name: 'Silk Tie',
    description: 'Premium silk tie in classic colors.',
    price: '149.99',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-8',
    name: 'Designer Sunglasses',
    description: 'Exclusive designer sunglasses with UV protection.',
    price: '399.99',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-9',
    name: 'Luxury Perfume',
    description: 'Signature scent luxury perfume.',
    price: '249.99',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-10',
    name: 'Velvet Blazer',
    description: 'Tailored velvet blazer for special occasions.',
    price: '499.99',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-11',
    name: 'Pearl Necklace',
    description: 'Elegant pearl necklace with 18k gold clasp.',
    price: '999.99',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-12',
    name: 'Designer Shoes',
    description: 'Handmade Italian designer shoes.',
    price: '899.99',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Luxury',
    inStock: true
  },
  // Health
  {
    id: 'health-1',
    name: 'Organic Protein Powder',
    description: 'Plant-based protein powder with 24g of protein per serving. Perfect for post-workout recovery.',
    price: '29.99',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-2',
    name: 'Yoga Mat',
    description: 'Eco-friendly non-slip yoga mat with carrying strap. Perfect for all types of yoga practice.',
    price: '34.99',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-3',
    name: 'Fitness Tracker',
    description: 'Smart fitness tracker with heart rate monitor, sleep tracking, and 7-day battery life.',
    price: '79.99',
    image: 'https://images.unsplash.com/photo-1552053831-71594a2760d2?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-4',
    name: 'Blender Bottle',
    description: 'Leak-proof shaker bottle with stainless steel whisk ball for smooth protein shakes.',
    price: '12.99',
    image: 'https://images.unsplash.com/photo-1602143407151-a4114b9e064a?w=400&auto=format&fit=crop',
    rating: '4.5',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-5',
    name: 'Resistance Bands Set',
    description: 'Set of 5 resistance bands with different tension levels for full-body workouts.',
    price: '24.99',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-6',
    name: 'Adjustable Dumbbells',
    description: 'Pair of adjustable dumbbells, perfect for strength training at home.',
    price: '89.99',
    image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-7',
    name: 'Foam Roller',
    description: 'High-density foam roller for muscle recovery and massage.',
    price: '19.99',
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5f10b8fa?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-8',
    name: 'Jump Rope',
    description: 'Adjustable speed jump rope for cardio workouts.',
    price: '14.99',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-9',
    name: 'Massage Gun',
    description: 'Deep tissue massage gun for muscle relaxation and recovery.',
    price: '129.99',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-10',
    name: 'Pull-Up Bar',
    description: 'Doorway pull-up bar for upper body strength exercises.',
    price: '39.99',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&auto=format&fit=crop',
    rating: '4.5',
    category: 'Health',
    inStock: true
  },
  // Health
  {
    id: 'health-1',
    name: 'Organic Protein Powder',
    description: 'Plant-based protein powder with 24g of protein per serving. Perfect for post-workout recovery.',
    price: '29.99',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-2',
    name: 'Yoga Mat',
    description: 'Eco-friendly non-slip yoga mat with carrying strap. Perfect for all types of yoga practice.',
    price: '34.99',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-3',
    name: 'Fitness Tracker',
    description: 'Smart fitness tracker with heart rate monitor, sleep tracking, and 7-day battery life.',
    price: '79.99',
    image: 'https://images.unsplash.com/photo-1552053831-71594a2760d2?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-4',
    name: 'Blender Bottle',
    description: 'Leak-proof shaker bottle with stainless steel whisk ball for smooth protein shakes.',
    price: '12.99',
    image: 'https://images.unsplash.com/photo-1602143407151-a4114b9e064a?w=400&auto=format&fit=crop',
    rating: '4.5',
    category: 'Health',
    inStock: true
  },
  {
    id: 'health-5',
    name: 'Resistance Bands Set',
    description: 'Set of 5 resistance bands with different tension levels for full-body workouts.',
    price: '24.99',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Health',
    inStock: true
  },
  
  // Fashion
  {
    id: 'fashion-1',
    name: 'Classic White Sneakers',
    description: 'Minimalist white leather sneakers with memory foam insole for all-day comfort.',
    price: '89.99',
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-2',
    name: 'Slim Fit Jeans',
    description: 'Classic blue denim jeans with stretch fabric for maximum comfort and style.',
    price: '59.99',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-3',
    name: 'Leather Crossbody Bag',
    description: 'Genuine leather crossbody bag with multiple compartments and adjustable strap.',
    price: '129.99',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-4',
    name: 'Cashmere Scarf',
    description: 'Luxuriously soft cashmere scarf available in multiple colors. Perfect for any season.',
    price: '79.99',
    image: 'https://images.unsplash.com/photo-1576561197723-9d1a2db9a9e5?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Fashion',
    inStock: true
  },
  {
    id: 'fashion-5',
    name: 'Aviator Sunglasses',
    description: 'Classic aviator sunglasses with UV400 protection and polarized lenses.',
    price: '149.99',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237ac008?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Fashion',
    inStock: true
  },
  
  // Mobile
  {
    id: 'mobile-1',
    name: 'Smartphone X Pro',
    description: 'Latest flagship smartphone with 6.7" AMOLED display and 108MP camera.',
    price: '999.99',
    image: 'https://images.unsplash.com/photo-1610945415295-d73bfb863d6c?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-2',
    name: 'Wireless Earbuds Pro',
    description: 'True wireless earbuds with active noise cancellation and 24-hour battery life.',
    price: '199.99',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-3',
    name: 'Portable Power Bank',
    description: '20000mAh power bank with fast charging and dual USB ports.',
    price: '49.99',
    image: 'https://images.unsplash.com/photo-1600321431293-5fdc4e3a4ad1?w=400&auto=format&fit=crop',
    rating: '4.6',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-4',
    name: 'Smart Watch 5',
    description: 'Feature-rich smartwatch with health tracking and always-on display.',
    price: '299.99',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop',
    rating: '4.7',
    category: 'Mobile',
    inStock: true
  },
  {
    id: 'mobile-5',
    name: 'Tablet Pro 12.9"',
    description: 'Professional tablet with M1 chip and Liquid Retina XDR display.',
    price: '1099.99',
    image: 'https://images.unsplash.com/photo-1626941940799-20c74b0ae46a?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Mobile',
    inStock: true
  },
  
  // Luxury
  {
    id: 'luxury-1',
    name: 'Swiss Automatic Watch',
    description: 'Luxury Swiss-made automatic watch with sapphire crystal and genuine leather strap.',
    price: '2499.99',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-2',
    name: 'Designer Handbag',
    description: 'Iconic designer handbag crafted from premium leather with gold-tone hardware.',
    price: '3499.99',
    image: 'https://images.unsplash.com/photo-1586380951230-47c228e0fe91?w=400&auto=format&fit=crop',
    rating: '5.0',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-3',
    name: 'Diamond Stud Earrings',
    description: '1 carat total weight diamond stud earrings in 14k white gold.',
    price: '1999.99',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&auto=format&fit=crop',
    rating: '5.0',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-4',
    name: 'Leather Wallet',
    description: 'Handcrafted full-grain leather wallet with RFID protection.',
    price: '299.99',
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a6a549?w=400&auto=format&fit=crop',
    rating: '4.8',
    category: 'Luxury',
    inStock: true
  },
  {
    id: 'luxury-5',
    name: 'Cashmere Coat',
    description: '100% pure cashmere overcoat with notched lapels and double-breasted design.',
    price: '1299.99',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e5?w=400&auto=format&fit=crop',
    rating: '4.9',
    category: 'Luxury',
    inStock: true
  }
];

// Export for use in SPA
window.products = products; 