import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Tv from "./routes/Tv";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/tv",
        element: <Tv />,
      },
      {
        path: "movies/:movieId",
        element: <Home />,
      },
    ],
  },
]);

export default router;
