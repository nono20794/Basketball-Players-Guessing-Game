import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Help from "./components/tools/Help";
import Contact from "./components/tools/Contact";
import About from "./components/tools/About";
import Stats from "./components/tools/Stats";

const routerElement = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="about" element={<About />} />
      <Route path="stats" element={<Stats />} />
      <Route path="help" element={<Help />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
export default function App() {
  return (
    <>
      <RouterProvider router={routerElement} />
    </>
  );
}
