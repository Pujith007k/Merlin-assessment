import { Routes, Route } from "react-router-dom";
import Login from './components/login'
import Dashboard from './components/dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css';

const App=()=>(
  <>
  <Routes>
    
      <Route element={<ProtectedRoute/>}>
        <Route path="/" element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login/>} />
  </Routes>
   </>
)

export default App;
