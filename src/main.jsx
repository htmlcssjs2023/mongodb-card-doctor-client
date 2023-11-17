import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider } from "react-router-dom";
import './index.css'
import router from './routes/Route';
import AuthContextAPI from './context-api/AuthContextAPI';

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthContextAPI>
        <RouterProvider router={router} />
      </AuthContextAPI>
    </React.StrictMode>
  </div>
);
