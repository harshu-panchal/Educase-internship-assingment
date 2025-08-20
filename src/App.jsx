import "./App.css";
import Account from "./component/Account";
import Create from "./component/Create";
import Landingpage from "./component/Landingpage";
import Login from "./component/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Landingpage />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Create />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/account",
      element: (
        <>
          <Account />
        </>
      ),
    },
  ]);
  return (
    <>
      <>
        <RouterProvider router={router} />
      </>
    </>
  );
}

export default App;
