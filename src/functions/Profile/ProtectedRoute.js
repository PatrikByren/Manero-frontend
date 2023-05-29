import { Outlet, Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/profilecontext/UserContext';
const ProtectedRoute = () => {
  const { IsSignedIn } = useUserContext()
    const result = IsSignedIn()
    

    return (
        result ? <Outlet/> : <Navigate to="/signin" replace/> 
    )
};

export default ProtectedRoute;


