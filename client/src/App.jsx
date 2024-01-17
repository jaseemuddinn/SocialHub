import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Learn from './pages/Learn'
import Job from './pages/Work'
import Blog from './pages/Blog'
import Typeform from './pages/typeform'
import Signup from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/resetpassword' element={<ForgotPassword />} />
      <Route path='/learn' element={<Learn />} />
      <Route path='/work' element={<Job />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/info' element={<Typeform />} />
    </Routes>
    </BrowserRouter>
      
  )
}

export default App
