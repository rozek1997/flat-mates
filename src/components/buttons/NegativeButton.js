import React from "react";
import {Button} from "semantic-ui-react";
import AcceptModal from "../modals/AcceptModal";

class NegativeButton extends React.Component {

    constructor(props) {
        super(props);

        this.negativeButtonRef = React.createRef();

    }

    onButtonClick = async () => {

        try {
            await this.negativeButtonRef.current.show();
            this.props.onClick(this.props.data.objectId);
        } catch (e) {

        }
    };

    render() {

        return (
            <div>
                <Button fluid icon='trash alternate' color='red' onClick={this.onButtonClick} content={this.props.content.toUpperCase()}/>
                <AcceptModal ref={this.negativeButtonRef}/>
            </div>
        );
    }

}

export default NegativeButton;