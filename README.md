It’s a simple full-stack app that shows products with random badges, lets you sort by price, and has a detail page when you click a product.


What It Does

Backend: Grabs products from https://fakestoreapi.com/products, adds a random badge ("Best Seller", "Recommended", "Fast Delivery"), and serves them at http://localhost:5000/api/products.


Frontend: Shows products in a grid, with badges under titles, a dropdown to sort by price (low to high, high to low), and a detail page when you click a product. Looks good on phones, tablets, and desktops.
Tech: Node.js, Express, React, Tailwind CSS, Fetch API, React Router.


How to Run It

Backend:

Go to backend folder: cd backend
Install stuff: npm install
Start server: npm start
Check http://localhost:5000/api/products in browser (it will show products with badges).


Frontend:

Go to frontend folder: cd frontend
Install stuff: npm install react-router-dom
Start app: npm start (opens http://localhost:3000)



Features

Badges: Randomly added in backend (e.g., "Best Seller,fast delivery etc"). Shows under titles in frontend.
Sorting: Pick “Low to High” or “High to Low” from dropdown.
Responsive: Grid adjusts (1 column on phones, 2 on tablets, 3 on desktops).
