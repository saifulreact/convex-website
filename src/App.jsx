import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import LayoutOne from "./layouts/LayoutOne"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"


function App() {
  const myroute=createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path="/" element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>

  <RouterProvider router={ myroute}/>
    </>
  )
}

export default App
