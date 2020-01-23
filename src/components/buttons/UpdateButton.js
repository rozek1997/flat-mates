import React from "react";
import ModalForm from "../modals/ModalForm";
import {Button} from "semantic-ui-react";


class UpdateButton extends React.Component {

    constructor(props) {
        super(props);


        this.openModalRef = React.createRef();
    }


    onButtonClicked = async () =>{
        try {
            const response = await this.openModalRef.current.show(this.props.data);
            this.props.onClick(response);
        }
        catch (e) {

        }

    };

    render() {

        return (
            <div className="container">
                <Button fluid={this.props.fluid} icon={this.props.icon} color={this.props.color} onClick={this.onButtonClicked} content={this.props.content.toUpperCase()}/>
                <ModalForm ref={this.openModalRef}>
                    {this.props.children}
                </ModalForm>
            </div>
        );
    }
}


UpdateButton.defaultProps = {
    fluid: true,
    icon: 'trash',
    color: 'yellow',
    content: 'update'
};

// UpdateButton.propTypes = {
//     fluid:  React.PropTypes.bool,
//     icon: React.PropTypes.string,
//     color: React.PropTypes.string,
//     content: React.PropTypes.string,
//     onClick: React.PropTypes.func.isRequired
// };

export default UpdateButton;