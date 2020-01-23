import React from "react";
import {Redirect} from 'react-router-dom'
import {
    Segment,
    Button,
    Divider,
    Form,
    Grid, Container
} from "semantic-ui-react";
import "./FlatButtons.css"


class FlatButtons extends React.Component {

    state = {toForm: false, link: ''};

    handleFlatJoin = () => {
        this.setState({toForm: true, link: '/join-flat'});
    };

    handleFlatCreation = () => {
        this.setState({toForm: true, link: '/create-flat'});
    };

    renderButtons() {

        if (this.state.toForm)
            return <Redirect to={this.state.link}/>;
        return (
            <Container className="flat-buttons-container">
            <Segment className="buttons">
                <Grid columns={2} className="" stackable>
                    <Grid.Column verticalAlign="middle" stretched>
                        <Form>
                            <Button content="Join flat" icon="signup" size="big" onClick={this.handleFlatJoin}
                                    color="blue"/>
                        </Form>
                    </Grid.Column>

                    <Grid.Column verticalAlign="middle" stretched>
                        <Button content="Create new flat" icon="home" size="big" onClick={this.handleFlatCreation}
                                color="brown"/>
                    </Grid.Column>
                </Grid>
                <Divider vertical>Or</Divider>
            </Segment>
            </Container>
        );
    }

    render() {

        return (
            this.renderButtons()
        );
    }
}

export default FlatButtons;