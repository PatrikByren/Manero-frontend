import { useState } from "react";
import { useUserContext } from "../../context/profilecontext/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProfileFetch = () => {
    const { IsSignedIn } = useUserContext()
    const result = IsSignedIn()
    console.log("JACOB", result)

    return (
        result ? <Outlet/> : <Navigate to="/signin" replace/>
    )

}




