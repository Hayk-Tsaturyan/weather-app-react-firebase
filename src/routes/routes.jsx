import Login from "../components/auth/login";
import PrivateRoute from "../components/auth/private_route";
import Register from "../components/auth/register";
import Home from "../components/home/index";

const routesArray = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
];

export default routesArray;
