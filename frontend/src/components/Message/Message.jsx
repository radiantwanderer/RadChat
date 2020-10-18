import React, { Component } from "react";
import "./Message.scss";
import { useAuth0 } from "@auth0/auth0-react";

/*class Message extends Component {

    constructor(props) {
        super(props);
        let temp = JSON.parse(this.props.message);
        this.state = {
            message: temp
        };
    }

    render() {

        return <div className="Message">{this.state.message.body}</div>;
    }
}*/

const Message = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthentiacted && (
            <div>
                {user.name}
            </div>
        )
    )
};

export default Message;
