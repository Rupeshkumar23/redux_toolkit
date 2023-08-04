
import "./App.css";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Cart from "./components/Cart";

function App() {
  const router =createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart"element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
