import {BrowserRouter , Route , Routes} from 'react-router-dom'
import './App.css'
import Headers from "./components/Headers"
import About from './Pages/About'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'

function App() {


  return (
    <BrowserRouter>
      <Headers/>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>

      </Routes>

     
    </BrowserRouter>
  )
}

export default App
