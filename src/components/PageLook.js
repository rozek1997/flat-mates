import React from "react";
import {Divider, Segment, Header, Container} from "semantic-ui-react";
import "./PageLook.css"


class PageLook extends React.Component {

    render() {
        const views = React.Children.toArray(this.props.children);

        return (
            <Container className="page-container">
                <Segment.Group>
                    <Header className="pagelook header">
                        {this.props.name.toUpperCase()}
                    </Header>
                    <Segment className="create-segment">
                        {views.length >= 2 ? views[0] : null}
                    </Segment>
                    <Divider hidden/>
                    <Segment.Group raised>
                        <Segment size='large' padded  inverted className="list" raised>
                            {views.length >= 2 ? views[1] : views[0]}
                        </Segment>
                    </Segment.Group>
                </Segment.Group>
            </Container>
        );
    }
}


export default PageLook;

