import React from "react";
import {Form, Button, Checkbox, Grid, Header, Segment} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom';
import "./FlatForm.css"


class FlatForm extends React.Component {


    state = {name: '', password: '', termsAgree: false};

    onFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.termsAgree) {
            this.props.onSubmit(this.state.name, this.state.password);
        }
    };

    handleCheckboxClick = (event, {checked}) =>{
        this.setState({termsAgree: checked});
    };

    renderForm() {

        if (this.state.redirect)
             return (<Redirect to='/flat'/>);

        return (
            <Segment className="flat-login">
            <Grid columns={1} textAlign="center" relaxed="very">
                <Grid.Column>
                    <Header as="h2" textAlign="center">
                        Flat
                    </Header>
                    <Segment className="flat-form">
                        <Form size='large'>
                            <Form.Input
                                fluid
                                onChange={event => this.setState({name: event.target.value})}
                                value={this.state.name}
                                label='Flat name'
                                iconPosition='left'
                                icon='address card'
                                type='text'>
                            </Form.Input>
                            {this.props.children}
                            <Form.Input
                                fluid
                                onChange={event => this.setState({password: event.target.value})}
                                label='Password'
                                iconPosition='left'
                                icon="user secret"
                                type='password'>
                            </Form.Input>
                            <Form.Field>
                                <Checkbox label='I agree to the Terms and Conditions'
                                          onClick={this.handleCheckboxClick}
                                          checked={this.state.termsAgree}
                                />
                            </Form.Field>
                            <Button type='submit' onClick={this.onFormSubmit} color="blue">Submit</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
            </Segment>
        );
    }

    render() {
        return (this.renderForm());
    }
}


export default FlatForm;