import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import SignIn from './page/signIn/SignIn.jsx'
import Header from './component/layout/header/Header.jsx'
import Main from './page/mainPage/main.jsx'
import CustomProject from './page/CustomProject/CustomProject.jsx'
import Info from './component/layout/info/Info.jsx'
import Footer from './component/layout/footer/Footer.jsx'
import Catalog from './page/workCatalog/Catalog.jsx';
import Product from './page/Product/Product.jsx';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const Layout = () => (
  <>
    <ScrollToTop />
    <Header />
    <Outlet />
    <Info />
    <Footer />

  </>
);
const router = createBrowserRouter([
  {
    // Routes that use the Layout
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Main />
          </>
        )
      }, {
        path: "Catalog",
        element: (
          <>
            <Catalog />
          </>
        )
      }, {
        path: "CustomProject",
        element: (
          <>
            <CustomProject />
          </>
        )
      },
      // Other pages 
    ]
  },
  {
    path: "Catalog/:productId",
    element: (
      <>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Product />
      </>
    )
  },
],{
  basename: "/Omnix",
});

function App() {
  // 3. Render the RouterProvider instead of the old list
  return <RouterProvider router={router} />;
}

export default App
