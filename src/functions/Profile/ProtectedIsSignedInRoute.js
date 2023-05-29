import { Outlet, Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/profilecontext/UserContext';
const ProtectedIsSignedInRoute = () => {
  const { IsSignedIn } = useUserContext()
    const result = IsSignedIn()
    

    return (
        !result ? <Outlet/> : <Navigate to="/myprofile" replace/> 
    )
};

export default ProtectedIsSignedInRoute;