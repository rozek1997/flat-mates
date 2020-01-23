import React from "react";
import PageLook from "../../PageLook";
import api from "../../../api/api";
import DetailList from "../../PageList";
import ListItem from "../../ListItem";
import DutyItem from "../duty/DutyItem";
import NegativeButton from "../../buttons/NegativeButton";
import {Image} from "semantic-ui-react";


class MyDuties extends React.Component{

    state = {duties: []};

    componentDidMount() {
        this.getMyDuties();

    }

    getMyDuties = async () =>{

        try {
            const response =  await api.getMyDuties();
            this.setState({duties: response.data})
        }
        catch (e) {

        }
    };

    finishDuty = (objectId)=>{

        try {
            api.finishMyDuty(objectId);
            const newDuties = this.state.duties.filter(dutyId => dutyId.objectId!==objectId);
            this.setState({duties: newDuties})
        }
        catch (e) {

        }
    };

    render() {
        return (
            <div>
                <PageLook name='my duties'>
                    <DetailList data={this.state.duties}>
                        <ListItem>
                            <Image src={require("../../images/task.svg")}/>
                            <DutyItem />
                            <NegativeButton onClick={this.finishDuty} content='Finish'/>
                        </ListItem>
                    </DetailList>
                </PageLook>
            </div>
        );
    }
}

export default MyDuties;