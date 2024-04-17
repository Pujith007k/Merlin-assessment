import {Navigate,  Outlet} from 'react-router-dom'


const ProtectedRoute = props => {
  const token = localStorage.getItem('jwtToken')
  if (token === undefined) {
    return <Navigate to="/login" />
  }
  return <Outlet/>
}

export default ProtectedRoute