import React from "react";
import {Item, Segment, Image, Grid, Button, Divider, Container} from "semantic-ui-react";
import axios from "../../../api/axiosConfig";
import AcceptModal from "../../modals/AcceptModal";
import "./FlatView.css"


class FlatView extends React.Component {


    constructor(props) {
        super(props);

        this.popupRef = React.createRef();
    }

    handleButtonClicked= async () => {


        const popup = this.popupRef.current;

        try {
            await popup.show();
            await axios.delete('/flats');
            window.location.reload();
        }
        catch (e) {

        }

    };





    render() {
        return (
            <Container className="flat-container">
            <Segment className="buttons">
                <Grid columns={2} stackable className="grid">
                    <Grid.Column>
                        <Image src={require("../../images/house.svg")} rounded/>
                    </Grid.Column>
                    <Grid.Column>
                        <Item.Group divided>
                            <Item>
                                <Item.Content>
                                    <Item.Header>Flat name</Item.Header>
                                    <Item.Description>{this.props.flat.name}</Item.Description>
                                </Item.Content>
                            </Item>

                            <Item>
                                <Item.Content>
                                    <Item.Header>Flat address</Item.Header>
                                    <Item.Description>{this.props.flat.address}</Item.Description>
                                </Item.Content>
                            </Item>
                            <Item>
                                <Button  negative size="big" fluid onClick={this.handleButtonClicked}>Leave flat</Button>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                    <Divider />
                </Grid>
                <AcceptModal ref={this.popupRef}/>
            </Segment>
            </Container>

        );
    }
}


export default FlatView;