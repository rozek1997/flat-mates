import React from "react";
import api from "../../../api/api";
import PageLook from "../../PageLook";
import DetailList from "../../PageList";
import DutyForm from "../forms/DutyForm";
import ListItem from "../../ListItem";
import DutyItem from "../duty/DutyItem";
import UpdateButton from "../../buttons/UpdateButton";
import NegativeButton from "../../buttons/NegativeButton";
import {Image} from "semantic-ui-react";

class Duties extends React.Component {


    constructor(props) {
        super(props);

        this.state = {duties: []};
    }

    componentDidMount() {
        this.getDuties()

    }

    getDuties = async () => {

        try {
            const response = await api.getDuties();
            this.setState({duties: response.data})
        } catch (e) {

        }
    };

    createDuty = async (data) => {

        try {
            const {description, renewalTime} = data;
            await api.addDuty(description, renewalTime);
            window.location.reload();
        } catch (e) {

        }
    };

    updateDuty = async (data) => {

        try {
            const {objectId, renewalTime} = data;
            await api.updateDuty(objectId, renewalTime);
            window.location.reload();
        } catch (e) {

        }
    };


    deleteDuty = async (id) => {

        try {
            await api.deleteDuty(id);
            const newDuties = this.state.duties.filter(dutyId => dutyId.objectId !== id);
            this.setState({duties: newDuties})
        } catch (e) {

        }
    };

    render() {
        return (

            <div>
                <PageLook name='duties'>
                    <UpdateButton onClick={this.createDuty} fluid={false} icon='plus' color='green' content='create duty'>
                        <DutyForm disabledDescription={false}/>
                    </UpdateButton>
                    <DetailList data={this.state.duties}>
                        <ListItem>
                            <Image src={require("../../images/task.svg")} size="small"/>
                            <DutyItem />
                            <UpdateButton onClick={this.updateDuty} icon="upload">
                                    <DutyForm disabledDescription={true}/>
                            </UpdateButton>
                            <NegativeButton onClick={this.deleteDuty} content='delete'/>
                        </ListItem>
                    </DetailList>
                </PageLook>
            </div>
        );
    }
}

export default Duties;