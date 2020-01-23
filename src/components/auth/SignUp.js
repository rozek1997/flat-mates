import React from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import api from "../../api/api";
import "./Login.css"


class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
            accountNumber: 1,
            errorMessage: '',
            isRedirected: false
        };
        this.errorMessageRef = React.createRef();
    }

    handleSignUp = async () => {

        const {name, surname, email, password, accountNumber} = this.state;
        try {
            await api.signup(name, surname, email, password, accountNumber);
            this.setState({isRedirected:true});
        } catch (error) {
            this.errorMessageRef.current.hidden = false;
            this.setState({...this.state, errorMessage: `${error}`});
        }

    };

    render() {

        if (this.state.isRedirected)
            return <Redirect to="/sign-in"/>;

        return (
            <Segment className="login">
                <Grid centered>
                    <Grid.Column>
                        <Header as="h2">
                            Sign Up
                        </Header>
                        <Segment className="form">
                            <Form size="large">
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Name"
                                    onChange={event => this.setState({name: event.target.value})}
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="surname"
                                    type="text"
                                    onChange={event => this.setState({surname: event.target.value})}
                                />
                                <Form.Input
                                    fluid
                                    icon="at"
                                    iconPosition="left"
                                    placeholder="Email address"
                                    onChange={event => this.setState({email: event.target.value})}
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    type="password"
                                    onChange={event => this.setState({password: event.target.value})}
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="account number"
                                    onChange={event => this.setState({accountNumber: event.target.value})}
                                />
                                <Button color="blue" fluid size="large" onClick={this.handleSignUp}>
                                    Sign Up
                                </Button>
                            </Form>
                        </Segment>
                        <Message ref={this.errorMessageRef} negative={true} hidden={true}>
                            Email or password and incorrect
                        </Message>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default SignUp