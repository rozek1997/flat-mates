import React from "react";
import api from "../../../api/api";
import PageLook from "../../PageLook";
import PaymentForm from "../forms/PaymentForm";
import DetailList from "../../PageList";
import ListItem from "../../ListItem";
import NegativeButton from "../../buttons/NegativeButton";
import UpdateButton from "../../buttons/UpdateButton";
import PaymentItem from "../payments/PaymentItem";


class Payments extends React.Component{



    constructor(props) {
        super(props);

        this.state = {payments: []};
    }

    componentDidMount() {
        this.getMyPayment()

    }

    getMyPayment = async () =>{

        try {
            const response =  await api.getPayments();
            this.setState({payments: response.data})
        }
        catch (e) {

        }
    };

    createPayment = async (data) =>{
        try {
            const {sum, description} = data;
            await api.addPayment(sum,  description);
            window.location.reload();
        }
        catch (e) {

        }
    };

    updatePayment = async (data)=>{

        try {

            const {objectId, sum, description} = data;
            await api.modifyPayment(objectId, sum,  description);
            window.location.reload();
        }
        catch (e) {

        }
    };


    deletePayment = async (id)=>{

        try {
            await api.deletePayment(id);
            const newPaymentsList = this.state.payments.filter(paymentId => paymentId.objectId!==id);
            this.setState({payments: newPaymentsList})
        }
        catch (e) {

        }
    };

    render() {
        return (
            <div>
                <PageLook name="payments">
                    <UpdateButton onClick={this.createPayment} fluid={false} icon="plus" color="green" content="create payment">
                        <PaymentForm/>
                    </UpdateButton>
                    <DetailList data={this.state.payments}>
                        <ListItem>
                            <img src={require("../../images/money.svg")} alt="money"/>
                            <PaymentItem />
                            <UpdateButton onClick={this.updatePayment} icon="upload">
                                <PaymentForm/>
                            </UpdateButton>
                            <NegativeButton onClick={this.deletePayment} content="delete"/>
                        </ListItem>
                    </DetailList>
                </PageLook>
            </div>
        );
    }
}

export default Payments;