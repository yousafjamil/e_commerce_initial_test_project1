require('dotenv').config(); 
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // frontend to connect

const badges = ['Best Seller', 'Recommended', 'Fast Delivery']; // for badges

//for  pick random badge
function randomBadge() {
  return badges[Math.floor(Math.random() * badges.length)];
}

app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;
    
    ///////////for to add badge to each /////////////////
    const productsWithBadges = products.map(product => {
      return { ...product, badge: randomBadge() };
    });
    
    res.json(productsWithBadges);
    console.log('Sent products to frontend');
  } catch (error) {
    console.error('Oops, error fetching:', error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Backend Server runing  on http://localhost:${port}`);
});