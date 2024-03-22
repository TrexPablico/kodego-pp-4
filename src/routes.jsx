import Home from "./views/Home";
import Gallery from "./views/Gallery";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Gallery",
    path: "/gallery",
    element: <Gallery />,
  },
];

export default routes;
