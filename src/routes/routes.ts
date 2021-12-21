import Main from "../pages/Main";
import Login from "../pages/Login";

export const privateRoutes = [
  {path: '/main', element: Main},
]

export const publicRoutes = [
  {path: 'login', element: Login}
]