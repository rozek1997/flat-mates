import React from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {signIn, signOut} from "./actions";
import api from "./api/api";
import Login from "./components/auth/Login";
import App from "./components/bussiness_components/pages/App"
import Flat from "./components/bussiness_components/pages/Flat";
import NavBar from "./components/NavBar";
import Duties from "./components/bussiness_components/pages/Duties";
import MyDuties from "./components/bussiness_components/pages/MyDuties";
import CreateFlat from "./components/bussiness_components/flat/CreateFlat";
import JoinFlat from "./components/bussiness_components/flat/JoinFlat";
import Payments from "./components/bussiness_components/pages/Payments";
import SignUp from "./components/auth/SignUp";


class Routing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isSignedIn: false};
    }

    componentDidMount() {
        this.isLoggedIn();
    }

    isLoggedIn = async () => {
        try {

            await api.getCurrentFlatmate();
            this.props.dispatch(signIn());
            this.setState({isSignedIn: true})

        } catch (e) {
            this.props.dispatch(signOut());
        }
    };

    render() {

        return (
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/home" component={App}/>
                    <Route path="/sign-in" component={Login}/>
                    <Route path="/sign-out" component={App}/>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/user" component={Login}/>
                    <Route path="/flat" component={Flat}/>
                    <Route path="/join-flat" component={JoinFlat}/>
                    <Route path="/create-flat" component={CreateFlat}/>
                    <Route path="/duties" component={Duties}/>
                    <Route path="/my-duties" component={MyDuties}/>
                    <Route path="/payments" component={Payments}/>
                </Switch>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signIn,
    signOut,
    dispatch                // ← Add this
});

export default connect(null, mapDispatchToProps)(Routing);
