import React from "react";
import {Redirect} from "react-router-dom";
import {Button, Container, Header, Icon} from "semantic-ui-react";
import "./App.css"

class App extends React.Component {

  state={redirect: false};

    render() {

      if(this.state.redirect)
        return <Redirect to="/sign-in"/>;
        return (
            <Container className="main-page">
              <Header as="h1" size="huge" icon>
                <Icon size="huge" name="home"/>Both grades: 4.5 and 4 are great but I prefer 4.5
              </Header><br/>
              <Button onClick={event => this.setState({redirect: true})} color="blue" content={"sign in".toUpperCase()} size="huge"/>
            </Container>
        );
    }
};

export default App;

