# 🎬 Movie Streaming Website

A full-featured movie streaming web application built with **React.js**, **Firebase Authentication**, and the **TMDB API**.  
Users can sign up, log in securely, browse trending movies, and stream trailers.

---
## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS 
- **Authentication:** Firebase Authentication
- **API:** [TMDB (The Movie Database)](https://www.themoviedb.org/documentation/api)
- **State Management:** React Context / Redux
- **Hosting:** Vercel 

---

## ✨ Features

- 🔐 User Authentication (Sign Up / Login with Firebase)  
- 🎥 Browse Trending, Popular, and Upcoming Movies  
- 📺 Watch Trailers via YouTube/TMDB links  
- ❤️ Add Movies to Favorites/Watchlist (Firebase Firestore or Local Storage)  
- 🔎 Search for Movies by Title  
- 📱 Fully Responsive UI  

---

## ⚙️ Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/movie-streaming-app.git
cd movie-streaming-app
npm install

create a .env file in the root folder and add the following:
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id


Folder Structure
 project-root/
│-- movieapp/          # React frontend
│   │-- src/
│   │-- public/
│   └-- package.json
│
│-- backend/           # Node.js/Express backend
│   │-- routes/
│   │-- controllers/
│   │-- server.js
│   └-- package.json
│
│-- projectimage/      # Screenshots for README
│   ├── home.png
│   ├── login.png
│   └── movie-details.png
│
│-- .env               # Environment variables
│-- README.md          # Project documentation



Acknowledgements

TMDB API for movie data

Firebase for authentication & backend

React.js for frontend framework

