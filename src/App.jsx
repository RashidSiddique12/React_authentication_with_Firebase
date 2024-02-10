import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './component/SignUp'
import Dashboard from "./component/DashBoard"
import LogIn from "./component/LogIn"
function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route exact path ="/" element={<Dashboard/>}/>
    <Route path="/signUp" element = {<SignUp/>}/>
    <Route path="/Login" element = {<LogIn/>}/>

  </Routes>
  </BrowserRouter>
  )
}

export default App
