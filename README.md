# 📷 Fullstack Image Gallery – Client Side (React + Redux + TypeScript)

This is the client side of a fullstack assignment using React, Redux, and TypeScript.  
It fetches images from a custom Node.js server (based on the Pixabay API), categorized and paginated.

## 🚀 Features

- Category selection (e.g., nature, sports, cars, animals)
- Pagination (Next / Prev buttons)
- Displays 9 images per page
- Click on an image to view details (views, downloads, collections) in a modal

## 🧰 Tech Stack

- React + Vite
- Redux (classic)
- TypeScript
- Axios for HTTP requests

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/123zb123/Pixabay-Gallery.git
cd Pixabay-Gallery

# Install and run the backend
cd server
npm install
npm run dev
# The backend will run at http://localhost:3000

# In a new terminal, go to the client
cd ../client
npm install
npm run dev
# The frontend will run at http://localhost:5173
