import React from "react";
import {Button, Form, Grid, Header, Segment} from "semantic-ui-react";


class DutyForm extends React.Component {


    state = {renewalTime: 1, description: '', loading: false};

    componentDidMount() {

        if(this.props.data) {
            const {renewalTime, description} = this.props.data;
            this.setState({renewalTime: renewalTime, description: description});
        }
    }


    onFormSubmit = (event) => {
        event.preventDefault();

        this.setState({loading: true});
        let returnData = {renewalTime: this.state.renewalTime, description: this.state.description};
        if(this.props.data)
            returnData = {...returnData, objectId: this.props.data.objectId};
        this.props.onFormSubmit(returnData);
        this.setState({loading: false});
    };

    render() {
        return (
            <Segment placeholder loading={this.state.loading} padded className="duty-form">
                <Grid centered columns={2}>
                    <Grid.Column>
                        <Header as="h2" textAlign="center">
                            Duty
                        </Header>
                        <Segment>
                            <Form size='large'>
                                <Form.Input
                                    fluid
                                    onChange={event => this.setState({renewalTime: event.target.value})}
                                    value = {this.state.renewalTime}
                                    label='Renewal time'
                                    iconPosition='left'
                                    icon='clock'
                                    type='number'
                                    min='1'
                                    >
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    onChange={event => this.setState({description: event.target.value})}
                                    value = {this.state.description}
                                    label='Description'
                                    iconPosition='left'
                                    icon="info"
                                    type='text'
                                    disabled={this.props.disabledDescription}>
                                </Form.Input>
                                <Button type='submit' onClick={this.onFormSubmit} content={'ok'.toUpperCase()}/>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default DutyForm