import './App.css';
import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Template from './pages/template/template';
import Maintemplate from './pages/Maintemplate';

AOS.init();


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
          <Route path='/home' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
          <Route path='/profile' element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
          <Route path='/template' element={<ProtectedRoutes><Maintemplate/></ProtectedRoutes>}/>
          <Route path='/template/:id' element={<ProtectedRoutes><Template/></ProtectedRoutes>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

export function ProtectedRoutes(props) {
  if (localStorage.getItem('resume-user')) {
    return props.children
  }
  else {
    return <Navigate to='/login' />
  }
}
