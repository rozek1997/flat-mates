import React from "react";
import {Redirect} from "react-router-dom";
import api from "../../../api/api";
import FlatForm from "../forms/FlatForm";



class JoinFlat extends React.Component {

    state = {isRedirected: false};

    joinFlat = async (flatName, password) => {
        try {
            await api.joinFlat(flatName, password);
            this.setState({isRedirected: true});
        } catch (e) {
            console.log(e.response);
            return false;
        }
    };

    render() {
        if(this.state.isRedirected)
            return <Redirect to="/flat"/>;
        return (
                <FlatForm onSubmit={this.joinFlat}/>
        );
    }


}


export default JoinFlat;