import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import SignIn from './page/signIn/SignIn.jsx'
import Header from './component/layout/header/Header.jsx'
// import Hero from './component/sections/hero/Hero.jsx'
// import Services from './component/sections/services/Services.jsx'
import Main from './page/mainPage/main.jsx'
import Info from './component/layout/info/Info.jsx'
import Footer from './component/layout/footer/Footer.jsx'
import Catalogue from './page/workCatalogue/Catalogue.jsx';
import CustomProject from './page/CustomProject/CustomProject.jsx'
const Layout = () => (
  <>
    <Header />
    <Outlet />
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
            <Info />
          </>
        )
      }, {
        path: "Catalogue",
        element: (
          <>
            <Catalogue />

            <Info />
          </>
        )
      }, {
        path: "CustomProject",
        element: (
          <>
            <CustomProject />

            <Info />
          </>
        )
      },
      // Other pages 
    ]
  },
  {
    // lone Route 
    path: "/signin",
    element: <SignIn />
  }
]);

function App() {
  // 3. Render the RouterProvider instead of the old list
  return <RouterProvider router={router} />;
}

export default App
