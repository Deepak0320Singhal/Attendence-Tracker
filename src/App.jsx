import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Routes/Home"
import Signin from "./Routes/Signin"
import Signup from "./Routes/Signup"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>  
  )
}

export default App
