import { Outlet, Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/profilecontext/UserContext';
const ProtectedRoute = () => {
  const { IsSignedIn } = useUserContext()
    const result = IsSignedIn()
    console.log("JACOB", result)

    return (
        result ? <Outlet/> : <Navigate to="/signin" replace/>
    )
};

export default ProtectedRoute;


