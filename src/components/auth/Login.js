import React from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {signIn, signOut} from "../../actions";
import api from "../../api/api";
import "./Login.css"


class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSignedIn: null,
            email: '',
            password: '',
            errorMessage: ''
        };
        this.errorMessageRef = React.createRef();
    }

    handleLogin = async () => {

        try {
            const response = await api.login(this.state.email, this.state.password);
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                this.props.signIn();
                this.props.history.push("/flat");

            }
        } catch (error) {

            this.errorMessageRef.current.hidden = false;
            this.setState({...this.state, errorMessage: `${error}`});
            this.props.signOut();
        }

    };


    render() {

        return (
            <Segment className="login">
                <Grid centered>
                    <Grid.Column>
                        <Header as="h2">
                            Login
                        </Header>
                        <Segment className="form">
                            <Form size="large">
                                <Form.Input
                                    fluid
                                    icon="user"
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
                                <Button color="blue" fluid size="large" onClick={this.handleLogin}>
                                    Login
                                </Button>
                            </Form>
                        </Segment>
                        <Message ref={this.errorMessageRef} negative={true} hidden={true}>
                            Email or password and incorrect
                        </Message>
                        <Message>
                            Not registered yet? <a href="/sign-up">Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default connect(null, {signIn, signOut})(Login);
