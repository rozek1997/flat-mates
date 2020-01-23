import React from "react";
import {Button,  Form, Grid, Header, Segment} from "semantic-ui-react";


class PaymentForm extends React.Component {


    state = {sum: 0.0, description: '', loading: false};

    componentDidMount() {

        if(this.props.data) {
            const {sum, description} = this.props.data;
            this.setState({sum: sum, description: description});
        }
    }


    onFormSubmit = async (event) => {
        event.preventDefault();

        this.setState({loading: true});
        let returnData = {sum: this.state.sum, description: this.state.description};
        if(this.props.data)
            returnData = {...returnData, objectId: this.props.data.objectId};
        await this.props.onFormSubmit(returnData);
        this.setState({loading: false});
    };

    render() {
        return (
            <Segment placeholder loading={this.state.loading} padded>
                <Grid centered columns={2}>
                    <Grid.Column>
                        <Header as="h2" textAlign="center">
                           Payment
                        </Header>
                        <Segment>
                            <Form size='large'>
                                <Form.Input
                                    fluid
                                    onChange={event => this.setState({sum: event.target.value})}
                                    value={this.state.sum}
                                    label='Sum'
                                    iconPosition='left'
                                    icon='money'
                                    type='text'>
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    onChange={event => this.setState({description: event.target.value})}
                                    value={this.state.description}
                                    label='Description'
                                    iconPosition='left'
                                    icon="info"
                                    type='text'>
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

export default PaymentForm