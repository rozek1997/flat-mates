import React from "react";
import api from "../../../api/api";
import FlatButtons from "../flat/FlatButtons";
import FlatView from "../flat/FlatView";

class Flat extends React.Component {


    state = {flat: null};

    componentDidMount() {
        this.getFlat();
    }

    async getFlat() {
        let response = {};
        try {
            response = await api.getFlatInfo();
            this.setState({flat: response.data});
        } catch (e) {
            this.setState({flat: null})
        }

    }

    renderFlat() {
        if (this.state.flat !== null)
            return <FlatView flat={this.state.flat}/>;
        else
            return (<FlatButtons/>);

    }

    render() {
        return (this.renderFlat());
    }
}

export default Flat;