import React from "react";
import {Button, Modal, Icon, Header} from "semantic-ui-react";


class AcceptModal extends React.Component{



    constructor(props) {
        super(props);

        this.state = {show: false};
        this.acceptanceButton = React.createRef();
        this.denialButton = React.createRef();
        this.promiseMethods = {};

    }

    show = () =>{
        this.setState({show: true});
        return new Promise((resolve, reject)=>{
            this.promiseMethods = {resolve, reject};
        });
    };

    hide = () =>{
        this.setState({show: false});
    };

    handleDenial = () => {
        this.hide();
        this.promiseMethods.reject('denial');
    };

    handelAcceptance = () => {
        this.hide();
        this.promiseMethods.resolve('ok');
    };

    render() {

        return (
            <Modal closeIcon centered closeOnEscape open={this.state.show} onClose={this.handleDenial}>
                <Header icon='archive' content='Are you sure?' />
                <Modal.Content >

                </Modal.Content>
                <Modal.Actions>
                    <Button ref={this.denialButton} color='red' onClick={this.handleDenial}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button ref={this.acceptanceButton} color='green' onClick={this.handelAcceptance}>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }

}



export default AcceptModal;