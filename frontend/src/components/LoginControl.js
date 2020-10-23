import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton"
import LoginButton from "./LoginButton"

const LoginControl = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div> Is loading </div>;
    }
    if (isAuthenticated) {
        return (
            <div>
                <LogoutButton />
            </div>
        );
    }
    else {
        return (
            <div>
                <LoginButton />
            </div>
        );
    }
}

export default LoginControl;
