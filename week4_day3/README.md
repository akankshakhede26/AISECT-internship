# Week 4 - Day 3: Multi-page React App with Routing 🚀

This is my project for **Week 4 - Day 3** of the internship. It is built using **React** and **React Router** in a clean, simple **light theme**.

---

## 📋 What I Built

### Task 1 – Multi-page React App
Created 4 distinct pages connected using `<Routes>` and `<Route>`:
- **Home (`/`)**: Main landing page welcoming visitors and showing an overview.
- **About (`/about`)**: Simple page explaining React Router concepts and what was learned.
- **Contact (`/contact`)**: Form with Name, Email, and Message inputs with a success message on submit.
- **Dashboard (`/dashboard`)**: Summary view with a table of all registered routes and quick links.

### Task 2 – Navigation Bar
- Created a top navigation bar using `<NavLink>`.
- **Active Link Highlighting**: The currently selected page turns blue (`background-color: #007bff; color: white;`) using:
  ```jsx
  <NavLink
    to="/about"
    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
  >
    About
  </NavLink>
  ```
- **Responsive Design**: Includes a simple hamburger menu button (`☰`) for mobile view.

### Task 3 – Dynamic Route (`/post/:postId`)
- Set up a dynamic route:
  ```jsx
  <Route path="/post/:postId" element={<PostDetail />} />
  ```
- Used the `useParams()` hook in [PostDetail.js](src/pages/PostDetail.js) to display the post ID:
  ```jsx
  import { useParams } from "react-router-dom";

  function PostDetail() {
    const { postId } = useParams();
    return <h2>Showing Post #{postId}</h2>;
  }
  ```
- Added quick buttons to test different post IDs like Post #1, Post #2, Post #3.

### Bonus Add-on – 404 Not Found Page
- Added a wildcard route in [App.js](src/App.js):
  ```jsx
  <Route path="*" element={<NotFound />} />
  ```
- Displays `<h2>404 Page Not Found</h2>` whenever someone types a URL that doesn't exist.

---

## 📁 Folder Structure

```text
week4_day3/
├── public/
│   └── index.html            # HTML file
├── src/
│   ├── components/
│   │   ├── Navbar.js         # Navigation bar with NavLink & active styles
│   │   ├── Navbar.css        # Light theme navbar styles
│   │   └── Footer.js         # Simple page footer
│   ├── pages/
│   │   ├── Home.js           # Home page
│   │   ├── About.js          # About page
│   │   ├── Contact.js        # Contact page with simple form
│   │   ├── Dashboard.js      # Dashboard page with routes table
│   │   ├── PostDetail.js     # Dynamic route page using useParams()
│   │   ├── NotFound.js       # 404 Page Not Found component
│   │   └── pages.css         # Light theme styles for cards, forms, buttons
│   ├── App.js                # Router setup connecting all routes
│   ├── App.css               # Main layout styles
│   ├── index.js              # React DOM entry
│   └── index.css             # Light theme background and resets
├── package.json
└── README.md
```

---

## 🏃 How to Run the App

1. Open terminal inside the workspace:
   ```bash
   cd week4_day3
   ```
2. Start the React app:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000` in your web browser.
