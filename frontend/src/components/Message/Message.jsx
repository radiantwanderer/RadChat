import React, { useState } from "react";
import "./Message.scss";
import { useAuth0 } from "@auth0/auth0-react";

const Message = (props) => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    let temp = JSON.parse(props.message);

    return (
        isAuthenticated && (
            <div>
                {temp.body}
            </div>
        )
    )
};

export default Message;
