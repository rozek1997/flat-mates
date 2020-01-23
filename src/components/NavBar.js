import React from "react";
import {Link} from 'react-router-dom';
import {Container, Menu, MenuItem, Header} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {signIn, signOut} from "../actions";
import "./NavBar.css"


class NavBar extends React.Component {

    handleSignOut = () => {
        localStorage.removeItem('token');
        this.props.signOut();

    };

    renderNavBar() {

        if (this.props.isSignedIn) {
            return (
                <div className="page-header">
                    <Menu pointing={true} size='large' stackable>
                        <Container>
                            <MenuItem > <img src={require("./images/house.svg")} className="image-content" alt="logo"/></MenuItem>
                            <MenuItem><Header content={'flatmates'.toUpperCase()}/></MenuItem>
                            <MenuItem ><Link to={'/flat'} className="nav-link">Flat</Link></MenuItem>
                            <MenuItem><Link to={'/duties'} className="nav-link">Duties</Link></MenuItem>
                            <MenuItem><Link to={'/my-duties'} className="nav-link">My duties</Link></MenuItem>
                            <MenuItem><Link to={'/payments'} className="nav-link">Payments</Link></MenuItem>
                            <MenuItem position="right" onClick={this.handleSignOut} className="menu-item"><Link to={'/sign-out'}
                                                                                          className="nav-link">Logout</Link></MenuItem>
                        </Container>
                    </Menu>
                </div>
            );
        } else {
            return (

                <div className="page-header">
                    <Menu pointing={true} size='large' stackable >
                        <Container>
                            <MenuItem><img src={require("./images/house.svg")} className="image-content" alt="logo"/></MenuItem>
                            <MenuItem> <Header content={'flatmates'.toUpperCase()}/></MenuItem>
                            <MenuItem  position="right"><Link to={'/sign-in'}
                                                             className="nav-link ui inverted">SignIn</Link></MenuItem>
                        </Container>
                    </Menu>

                </div>
            );
        }
    }

    render() {
        return this.renderNavBar();
    }

}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
};


export default connect(mapStateToProps, {signIn, signOut})(NavBar);
