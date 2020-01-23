import React from "react";
import FlatForm from "../forms/FlatForm";
import {Form} from "semantic-ui-react";
import api from "../../../api/api";
import {Redirect} from "react-router-dom";



class CreateFlat extends React.Component{

    state = {address: '', isRedirected: false};

    createFlat = async (flatName, password) =>{
        try {
            await api.createFlat(flatName, password, this.state.address);
            this.setState({isRedirected: true});
        } catch (e) {
        }
    };

    render() {

        if(this.state.isRedirected)
                return (<Redirect to='/flat'/>);

        return (
            <FlatForm onSubmit={this.createFlat}>
                <Form.Input
                    fluid
                    onChange={event => this.setState({address: event.target.value})}
                    value={this.state.address}
                    label='Flat address'
                    iconPosition='left'
                    icon='address card'
                    type='text'/>
            </FlatForm>
        );
    }
}

export default CreateFlat;