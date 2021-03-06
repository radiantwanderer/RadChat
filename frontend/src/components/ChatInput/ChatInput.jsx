import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./ChatInput.scss";

const ChatInput = ({ send }) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
      return <div>Loading ...</div>;
    }
    return (
        isAuthenticated && (
            <div>
                <input onKeyDown={send} />
            </div>
        )
    )
}

export default ChatInput;
