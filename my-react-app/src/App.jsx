import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import SignIn from './page/signIn/SignIn.jsx'
import Header from './component/layout/header/Header.jsx'
import Main from './page/mainPage/main.jsx'
import Info from './component/layout/info/Info.jsx'
import Footer from './component/layout/footer/Footer.jsx'
import Catalogue from './page/workCatalogue/Catalogue.jsx';
import CustomProject from './page/CustomProject/CustomProject.jsx'

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
        path: "Catalogue",
        element: (
          <>
            <Catalogue />
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
    // lone Route 
    path: "/signin",
    element: (
      <>
        <Header />
        <SignIn />
      </>
    )
  }
]);

function App() {
  // 3. Render the RouterProvider instead of the old list
  return <RouterProvider router={router} />;
}

export default App
