import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import ScrollToHashElement from "./ScrolltoHash/ScrollToHash";
import Contact from "./components/Contact/Contact";
import Category from "./components/Categories/Category";

const Layout = () => {
  // const ref = useRef(null);

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <div className="app">
      <ScrollToHashElement />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: `/products/:id`,
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/category",
    element: <Category />,
  },

  {
    path: "/about",
    element: <Footer />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default App;
