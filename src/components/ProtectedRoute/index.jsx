import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  let {user}=useSelector((state)=>state.user)

  if (user===null || user===undefined || user==="") {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;
