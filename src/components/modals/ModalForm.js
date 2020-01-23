import React from "react";
import {Header, Modal} from "semantic-ui-react";

class ModalForm extends React.Component{



    constructor(props) {
        super(props);

        this.state = {show: false, data: null};
        this.promiseMethods = {};

    }

    show = (data) =>{
        this.setState({show: true, data: data});
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

    handelAcceptance = (data) => {
        this.hide();
        this.promiseMethods.resolve(data);
    };


    renderForm(){
        return React.cloneElement(this.props.children, {onFormSubmit: this.handelAcceptance, data: this.state.data})
    }

    render() {
    return (
            <Modal closeIcon centered closeOnEscape open={this.state.show} onClose={this.handleDenial}>
                <Header icon='archive' content={this.props.header} handle />
                <Modal.Content >
                    {this.renderForm()};
                </Modal.Content>
            </Modal>
        );
    }

}



export default ModalForm;