# 📝 MERN Blog App with Gemini AI

A feature-rich, full-stack blog platform built with the MERN stack (MongoDB, Express.js, React, Node.js). This application features a blazing-fast Vite-powered frontend, a robust backend with admin controls, AI-powered content generation using the Google Gemini API, and seamless image handling with ImageKit.

---

## 🌐 Live Demo

👉 [**Visit the Live Application**](https://blog-appclient.vercel.app)

---

## 🚀 Core Features

### 👤 User-Facing
- **Modern UI:** Clean, responsive, and intuitive user interface.
- **Browse Blogs:** Read all published blog posts with ease.
- **Detailed View:** Click on any blog to see its full content, images, and details.
- **Fast Performance:** Instant loading and navigation thanks to Vite and React.


### 🔐 Admin Panel
- **Secure Login:** Dedicated login for the administrator.
- **Blog Management (CRUD):** Create, Read, Update, and Delete blog posts from a powerful dashboard.
- **🤖 AI Content Generation:** Automatically generate blog content on any topic using the integrated **Google Gemini API**.
- **📸 Image Uploads:** Seamlessly upload and manage blog cover images using **ImageKit** for optimized delivery.


---

## 🛠️ Tech Stack

| Category      | Technology / Service                                 |
|---------------|------------------------------------------------------|
| **Frontend**  | `React.js`, `Vite`, `Context API`, `Tailwind CSS`    |
| **Backend**   | `Node.js`, `Express.js`                              |
| **Database**  | `MongoDB + Mongoose`                                 |
| **APIs**      | `Google Gemini API`, `ImageKit API`                  |
| **Middleware**| `Multer`, `JWT auth`                                 |
| **Deployment**| `Vercel` (for both Frontend and Backend services)    |

---


## 🧑‍💻 Getting Started Locally

Follow these instructions to get the project up and running on your local machine.

### 1. Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or a local MongoDB instance).

### 2. Clone the Repository

```bash
git clone [https://github.com/Amankumar-033/Blog-App.git]
cd MERN-BLOGAPP
```

### 3. Backend Setup

Now, let's set up the server.

```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install
```

Create a `.env` file in the `/server` directory and add the following environment variables.

```env
# /server/.env

# Your MongoDB connection string
MONGODB_URI=your_mongo_connection_string


# Google Gemini API Key
GEMINI_API_KEY=your_gemini_api_key

# ImageKit API Credentials
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=[https://ik.imagekit.io/your_endpoint/](https://ik.imagekit.io/your_endpoint/)
```

Once the `.env` file is configured, run the backend server:

```bash
npm run server
```
The server will start on `http://localhost:5000`.




### 4. Frontend Setup

Open a new terminal window and navigate to the client directory.

```bash
# Navigate back to the root and then into the client directory
cd ../client

# Install dependencies
npm install
```

Create a `.env` file in the `/client` directory and add the following:

```env
# /client/.env

# The URL of your running backend server
VITE_SERVER_URL=http://localhost:5000
```

Now, run the React development server:

```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

---





## 📁 Project Structure

Here is the file structure of the application:

```


.
├── client/
│   ├── .env                 
│   ├── node_modules/        
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── vercel.json
│   ├── vite.config.js
│   ├── public/
│   │   ├── favicon.svg
│   │   └── vite.svg
│   └── src/
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── assets/           
│       ├── components/
│       │   ├── BlogCard.jsx
│       │   ├── Bloglist.jsx
│       │   ├── Footer.jsx
│       │   ├── Header.jsx
│       │   ├── Loader.jsx
│       │   ├── Navbar.jsx
│       │   ├── Newsletter.jsx
│       │   └── admin/
│       │       ├── BlogTableItem.jsx
│       │       ├── CommentTableItem.jsx
│       │       ├── Login.jsx
│       │       └── Sidebar.jsx
│       ├── context/
│       │   └── AppContext.jsx
│       └── pages/
│           ├── Blog.jsx
│           ├── Home.jsx
│           └── admin/
│               ├── AddBlog.jsx
│               ├── Comment.jsx
│               ├── Dashboard.jsx
│               ├── Layout.jsx
│               └── ListBlog.jsx
├── server/
│   ├── .env                 
│   ├── node_modules/        
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   ├── vercel.json
│   ├── configs/
│   │   ├── db.js
│   │   ├── gemini.js
│   │   └── imageKit.js
│   ├── controllers/
│   │   ├── adminController.js
│   │   └── blogController.js
│   ├── middlewares/
│   │   ├── auth.js
│   │   └── multer.js
│   ├── models/
│   │   ├── Blog.js
│   │   └── Comment.js
│   └── routes/
│       ├── adminRoutes.js
│       └── blogRoutes.js
├── README.md


```

---

## 🌐 Deployment

This application is deployed on **Vercel**.
- The **React frontend** is served as a static site.
- The **Express.js backend** is deployed as Vercel Serverless Functions.

The `vercel.json` files in both the `client` and `server` directories contain the necessary configuration for Vercel's build and deployment process.

---



## 🙌 Contributing

Contributions are welcome! If you have suggestions for improvements or want to fix a bug, please feel free to:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourAmazingFeature`).
3. Make your changes and commit them (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/YourAmazingFeature`).
5. Open a Pull Request.

---




## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---



Made with ❤️ by **Aman Kumar**

[GitHub](https://github.com/Amankumar-033) | [LinkedIn](https://www.linkedin.com/in/aman-kumar-52492229a/)