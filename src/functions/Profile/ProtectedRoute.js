import { Outlet, Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/profilecontext/UserContext';
const ProtectedRoute = ({from}) => {
  const { IsSignedIn } = useUserContext()
    const result = IsSignedIn()
    

    return (
        from ? result ? <Outlet/> : <Navigate to="/signin" replace/> : !result ? <Outlet/> : <Navigate to="/myprofile" replace/>
    )
};

export default ProtectedRoute;


