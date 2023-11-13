# ---------- Work flow: --------------
### Simple project setup
### Create project with react router
### To know details about react router please visit following link
- [React Router](https://reactrouter.com/en/main/start/tutorial)

### Configure react router 
### create routes folder / Route.jsx for separation of routes
```JavaScript
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<App></App>
        }
    ]
  },
]);

export default router;

```

### IMPORT ROUTER IN MAIN.JSX AS SAMPLE AS THIS LINE OF CODE import router from './routes/Route' in main.jsx file
```JavaScript
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
```

# SETUP TAILWIND CSS AND DAISY UI

### Install tailwindcss and daisy ui using following link

- [tailwindcss](https://tailwindcss.com/docs/guides/vite)
- [daisy ui](https://daisyui.com/docs/install/)

### Config tailwindcss and daisy ui
- Go to tailwind.config.js file
```JavaScript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // this is used for tailwind css
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // daisy ui
};
```

### Add the Tailwind directives to your CSS
- src/main.css  ============
```JavaScript
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### Create layouts  folder 
- src/ layouts / Main.jsx
```JavaScript
import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};
export default Main;
```