import { Outlet, Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/profilecontext/UserContext';
const FirstVisitRoute = () => {
  const { FirstTime } = useUserContext()
  const result = FirstTime()
  console.log("RESULT FIRST TIME", result)
  return (
    !result ? <Outlet /> : <Navigate to="/getstarted" replace />
  )
};

export default FirstVisitRoute;