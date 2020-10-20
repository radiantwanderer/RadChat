import React, { useState }/*, { Component }*/ from "react";
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

const Message = (props) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    //const [ message, setMessage ] = useState("");

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    let temp = JSON.parse(props.message);
    //setMessage(temp);

    return (
        isAuthenticated && (
            <div>
                {temp.body}
            </div>
        )
    )
};

export default Message;
