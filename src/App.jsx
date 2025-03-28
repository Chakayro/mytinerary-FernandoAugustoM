import { RouterProvider, createBrowserRouter } from "react-router-dom"
import StandardLayout from "./layouts/StandardLayout"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <StandardLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "cities", element: <Cities /> },
      
    ],
    
  },
  { path: "*", element: <NotFound /> }]
);

function App() {


  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
